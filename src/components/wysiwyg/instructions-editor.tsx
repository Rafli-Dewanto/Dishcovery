'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type InstructionsEditorProps = {
  instructions: string;
  setInstructions: React.Dispatch<React.SetStateAction<string>>;
};

const InstructionsEditor: React.FC<InstructionsEditorProps> = ({
  instructions,
  setInstructions,
}) => {
  const editor = useEditor({
    content: instructions,
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'rounded-md border min-h-[150px] border-input w-[25%]',
      },
    },
    onUpdate({ editor }) {
      setInstructions(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default InstructionsEditor;
