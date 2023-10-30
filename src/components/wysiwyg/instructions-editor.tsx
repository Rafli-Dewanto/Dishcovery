'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type InstructionsEditorProps = {
  onChange: (richText: string) => void;
};

const InstructionsEditor: React.FC<InstructionsEditorProps> = ({
  onChange,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
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

export default InstructionsEditor;
