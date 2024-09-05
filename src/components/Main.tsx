const Main: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center space-y-4 mt-10">
      <h1 className="text-4xl font-bold">
        hi, my name is <span className="text-blue-500">owen.</span>
      </h1>
      <p className="text-xl">
        i am a{" "}
        <a className="text-blue-400 underline" href="#skills">
          computer science student.
        </a>
      </p>
      <div className="flex space-x-4">
        <a href="/resume" className="btn">
          my resume
        </a>
        <a href="https://linkedin.com" className="btn">
          LinkedIn
        </a>
        <a href="https://github.com" className="btn">
          GitHub
        </a>
        <a href="mailto:email@example.com" className="btn">
          Gmail
        </a>
      </div>
    </section>
  );
};

export default Main;
