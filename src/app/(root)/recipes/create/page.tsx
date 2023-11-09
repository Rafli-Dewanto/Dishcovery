'use client';

import { recipeSchema, type Recipe } from '@/lib/types/recipe';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SingleImageDropzone } from '@/components/upload/single-image';
import { Textarea } from '@/components/ui/textarea';
import { InstructionsEditor } from '@/components/wysiwyg';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEdgeStore } from '@/lib/edgestore';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { getErrorMessage } from '@/utils';

const CreateRecipePage = () => {
  const { data: session } = useSession();
  const { edgestore } = useEdgeStore();

  const form = useForm<Recipe>({
    resolver: zodResolver(recipeSchema),
    mode: 'onChange',
  });

  const [alertMessage, setAlertMessage] = useState('');

  if (!session) {
    redirect('/auth/signin?callbackUrl=/recipes/create');
  }

  async function onSubmit(formData: Recipe) {
    if (formData.image) {
      try {
        const imageResponse = await edgestore.publicImages.upload({
          file: formData.image,
        });
        const res = await fetch('/api/recipes', {
          method: 'POST',
          body: JSON.stringify({
            ...formData,
            image: imageResponse.url,
            author: session?.user.email,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + session?.user.token,
          },
        });
        const data = await res.json();
        setAlertMessage(data.message);
        toast.success(alertMessage);
        form.reset();
      } catch (error) {
        const message = getErrorMessage(error);
        setAlertMessage(message);
        toast.error(alertMessage);
      }
    }
  }

  return (
    <section className="container relative min-h-screen max-w-3xl my-10">
      <h1 className='text-2xl font-bold text-start mb-10'>Share your recipe!</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input className={`focus-visible:outline-pueblo-400 ${true ? "" : ""}`} placeholder="Recipe title" {...field} />
                </FormControl>
                <FormDescription>Your Recipe Title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="calories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Calories</FormLabel>
                <FormControl>
                  <Input className='focus-visible:outline-pueblo-400' type="number" placeholder="calories" {...field} />
                </FormControl>
                <FormDescription>
                  How much calories your recipe contains
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea className='focus-visible:outline-pueblo-400' placeholder="description" {...field} />
                </FormControl>
                <FormDescription>
                  Short description about your recipe
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <InstructionsEditor onChange={field.onChange} />
                </FormControl>
                <FormDescription>Explain how to make it!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* // TODO add input for instructions and ingredient */}
          <FormField
            control={form.control}
            name="cuisine_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cuisine type</FormLabel>
                <FormControl>
                  <Input placeholder="cuisine type" {...field} />
                </FormControl>
                <FormDescription>
                  What type of cuisine this recipe is? (e.g chinese, mexican
                  etc)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your recipe image</FormLabel>
                <FormControl>
                  <SingleImageDropzone
                    value={field.value}
                    onChange={field.onChange}
                    width={200}
                    height={200}
                  />
                </FormControl>
                <FormDescription>Recipe Image</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="
          bg-pueblo-500
          hover:bg-pueblo-600
          transition-all
          hover:scale-105
          active:scale-100"
            type="submit"
          >
            {form.formState.isSubmitting ? 'loading' : 'Submit'}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateRecipePage;
