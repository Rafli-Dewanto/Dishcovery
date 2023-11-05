import Profile from '@/components/team/profile';
import { teams } from '@/lib/data';

export default function TeamPage() {
  return (
    <section className="body-font scroll-mt-28 text-gray-600">
      <div className="container mx-auto mt-4 px-5 pb-24 pt-[1.25rem]">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-2 text-2xl font-bold text-gray-900 sm:text-4xl">
            Our Team
          </h1>
        </div>
        {/* Team Section Container */}
        <div className="-m-2 flex flex-wrap">
          {teams.map((team, index) => (
            <Profile
              key={index}
              name={team.name}
              npm={team.npm}
              src={team.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
