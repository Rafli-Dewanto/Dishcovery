async function submitData(formData: FormData) {
  'use server';
  const data = formData.get('title')?.valueOf();
}

const TestingPage = () => {
  return (
    <main>
      <form action={submitData}>
        <input type="text" name="tile" />
        <input type="submit" value="submit" />
      </form>
    </main>
  );
};

export default TestingPage;
