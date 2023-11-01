'use client';

import PrimaryButton from '@/components/ui/primary-button';
import { SingleImageDropzone } from '@/components/upload/single-image';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';

export default function SingleImageDropzoneUsage() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
        }}
      />
      <button
        onClick={async () => {
          console.log(typeof file);
          console.log(file);
          if (file) {
            const res = await edgestore.publicImages.upload({
              file,
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res);
          }
        }}
      >
        Upload
      </button>
      <PrimaryButton onClick={() => console.log('test')}>test</PrimaryButton>
    </div>
  );
}
