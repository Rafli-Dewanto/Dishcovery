import React from 'react'
import type { Editor } from "@tiptap/react"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3
} from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

type ToolBarProps = {
    editor: Editor | null;
}

const ToolBar: React.FC<ToolBarProps> = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <div
            className='
        border border-input 
        bg-transparent rounded-lg 
        my-1 px-2 py-1 space-x-3
        max-w-[80%]
        '>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            >
                <Heading1 className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            >
                <Heading2 className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('heading')}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            >
                <Heading3 className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('bold')}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('italic')}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            >
                <Italic className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('strike')}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            >
                <Strikethrough className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('listItem')}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            >
                <List className='h-4 w-4' />
            </Toggle>
            <Toggle
                size={'sm'}
                pressed={editor.isActive('orderedList')}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <ListOrdered className='h-4 w-4' />
            </Toggle>
        </div>
    )
}

export default ToolBar