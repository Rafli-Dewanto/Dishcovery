import SectionHeading from '../ui/section-heading';
import UseCaseCard from './usecase-card';

const UseCase = () => {
  return (
    <section
      id="usecase"
      className="container mt-20 grid grid-cols-1 text-center"
    >
      <SectionHeading>Use Cases</SectionHeading>
      <article>
        <UseCaseCard />
      </article>
    </section>
  );
};

export default UseCase;
