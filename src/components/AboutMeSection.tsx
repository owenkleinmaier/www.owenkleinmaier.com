import React from "react";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="h-fill flex justify-center items-center dark:bg-gray-800 text-black dark:text-white w-full pt-20"
    >
      <div className="w-full max-w-7xl p-10 bg-gray-50 dark:bg-gray-700 text-center rounded-3xl shadow-2xl dark:shadow-2xl">
        <h2 className="text-5xl font-bold mb-8">about me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi! I'm Owen, a Junior at Indiana University Bloomington studying
          Computer Science (concentrated in artificial intelligence) with a
          minor in data science and web development. I'm passionate about
          software engineering, web development, graphic design, artificial
          intelligence, and machine learning. I have experience with many
          front-end and back-end technologies, and I'm always looking to learn
          more!
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I currently serve on the core team of Google Developer Student Clubs
          @ IU as event coordinator. From planning and leading technical
          workshops to organizing meetings, I love to help others learn and
          grow in the tech field. Last year, we planned and orchestrated the
          largest student-led Hackathon in the history of Indiana University,
          collaborating with 5+ student organizations and 3+ companies with
          over 100 students and 25 teams competing.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Although I'm a computer science student, I also have a passion for
          lots of other things! I love to cook, play guitar, go on hikes, and
          play soccer. I'm a huge fan of the Chicago Bears and Manchester
          United. I love all types of music, and I am always looking to
          discover new artists and genres. I am even in the process of gaining
          a Certificate of Rock Music History through Indiana University's
          Jacobs School of Music. Lastly, I love to travel and explore new
          places, and I hope to visit every continent in my lifetime.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Ever since a young age I have been fascinated with technology and how
          it works. I love to create and build things, and I'm always looking
          for new projects to work on. I also believe my creativity combined
          with my critical thinking and problem solving will make me an
          excellent full stack developer and employee.{" "}
          <strong>
            I'm currently seeking internships for Summer 2025, so feel free to
            reach out!
          </strong>
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
