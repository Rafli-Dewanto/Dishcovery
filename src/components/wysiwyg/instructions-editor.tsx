'use client';

import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ToolBar from './tool-bar';
import BaseHeading from '@tiptap/extension-heading'
import { mergeAttributes } from '@tiptap/core'

type InstructionsEditorProps = {
  onChange: (richText: string) => void;
};

type Levels = 1 | 2 | 3

const classes: Record<Levels, string> = {
  1: 'text-4xl font-bold',
  2: 'text-2xl font-bold',
  3: 'text-lg font-bold',
}

/**
 * Custom extension for heading elements
 */
export const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0]

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ]
  },
})


const InstructionsEditor: React.FC<InstructionsEditorProps> = ({
  onChange,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        orderedList: {
          keepMarks: true,
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          }
        },
        bulletList: {
          keepMarks: true,
          itemTypeName: 'listItem',
          HTMLAttributes: {
            class: 'list-disc pl-4',
          }
        },
      }),
      Highlight,
      Typography,
      Heading,
    ],
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[150px] px-3 border-input w-full focus:outline-pueblo-400 py-2',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className='flex flex-col justify-stretch min-h-[250px]'>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
};

export default InstructionsEditor;
