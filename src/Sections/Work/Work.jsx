import constant from "../../constant.json"
import './Work.css';
import Heading from '../../Components/Heading/Heading';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import quiz from './quiz.png';
const Work = () => {
    return (
        <section id="work">
            <Heading index="03" heading="Some Things I've Built"  />
            <div className="work_container">
                {constant.projects.map((project, idx) => (
                   
                        <div className="work_project">
                            <div className="work_left">
                                <a href={project.link} target="_blank">
                                <img src={quiz} alt="" className="work_img" />
                                    {/* <img src={project.image} alt="" className="work_img" /> */}
                                </a>
                            </div>
                            <div className="work_right">
                                <a href={project.link} target="_blank" className="work_heading">
                                    {project.title}
                                </a>
                                <p className="work_desc">{project.desc}</p>
                                <div className="work_skill_container">
                                    {
                                        project.skills.map((skill) => (
                                            <p>{skill}</p>

                                        ))}
                                </div>
                                <div>
                                    <a href={project["github"]} target="_blank" className="work_link">
                                    <GitHubIcon />
                                    </a>
                                    <a href={project.link} target="_blank" className="work_link">
                                        <OpenInNewIcon />
                                        </a>
                            </div>
                        </div>
</div>

                    ))}
            </div>
        </section>
    );
};
export default Work;