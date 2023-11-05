'use client';

import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type IngredientsEditorProps = {
  onChange: (richText: string) => void;
};

const IngredientsEditor: React.FC<IngredientsEditorProps> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure(), Highlight, Typography],
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[150px] px-3 border-input w-[80%] max-w-full focus:outline-slate-950 py-2',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default IngredientsEditor;
