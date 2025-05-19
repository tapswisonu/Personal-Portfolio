import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className=" text-white flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        My name is Tapswi Yadav, and I am a dedicated Front-End Developer with
        over one year of practical experience in developing responsive and
        user-centric web interfaces utilizing HTML, CSS, JavaScript, and React.
        <br />I am currently seeking an opportunity to contribute my skills and
        advance my career as a Front-End Developer within a progressive
        organization such as yours. I am highly motivated to embrace new
        challenges and to continuously pursue personal and professional growth.I
        am enthusiastic about the possibility of joining your team and
        contributing value through my dedication and creativity.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
