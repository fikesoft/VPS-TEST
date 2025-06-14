import classNames from "classnames";
import mePhoto from "../../assets/img/me.png";
import style from "./home.module.scss";
import ShinyText from "../../blocks/TextAnimations/ShinyText/ShinyText";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTrpc,
  SiJavascript,
} from "react-icons/si";
import SkillBtn from "../../components/skillBtn/SkillBtn";

const Home = () => {
  const skills = [
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiReact />, label: "ReactJS" },
    { icon: <SiRedux />, label: "Redux" },
    { icon: <IoLogoNodejs />, label: "NodeJS" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <SiTrpc />, label: "tRPC" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
  ];
  return (
    <section
      className={classNames(
        style.wrapperHome,
        "d-flex flex-column flex-lg-row justify-content-lg-between align-items-center px-3"
      )}
    >
      <div className="d-flex flex-column justify-content-center text-center text-lg-start align-items-lg-start align-items-center gap-2">
        <ShinyText
          text="Sorin dev"
          disabled={false}
          speed={2}
          className={classNames(style.customH1, "h1 fs-48")}
        />
        <h2 className="h2">Full Stack Engineer</h2>
        <p className="paragraph" style={{ maxWidth: "345px" }}>
          A frontend engineer approaching full-stack, working in the industry
          for 2 years now. I build meaningful business solutions for small and
          medium-sized businesses.
        </p>
        <div
          className="d-flex flex-wrap gap-1 justify-content-lg-start justify-content-center"
          style={{ maxWidth: "525px" }}
        >
          {skills.map((skill, index) => (
            <SkillBtn key={index} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </div>
      <img
        src={mePhoto}
        alt="Portrait of Sorin"
        className={classNames(style.homeImg, "img-fluid")}
      />
    </section>
  );
};

export default Home;
