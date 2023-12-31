import Image from 'next/image';

type ProfileProps = {
  src: string;
  name: string;
  npm: string;
};

export default async function Profile({ src, name, npm }: ProfileProps) {
  return (
    <div className="w-full p-2 md:w-1/2 lg:w-1/3">
      <div className="flex h-full items-center rounded-lg border border-gray-200 p-4">
        <Image
          quality={95}
          width={180}
          height={180}
          alt="team"
          className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
          src={src}
        />
        <div className="flex-grow">
          <h2 className="title-font font-medium text-gray-900">{name}</h2>
          <p className="text-gray-500">{npm}</p>
        </div>
      </div>
    </div>
  );
}
