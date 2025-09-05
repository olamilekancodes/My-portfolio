import { PageTitle } from "../shared/PageTitle";
import ProjectListings from "./list";

const Projects = () => {
  return (
    <div className="py-10 mt-0 xl:mt-10">
      <PageTitle
        title={
          <>
            My <span className="text-[#6e06f2]">Recent</span> Projects
          </>
        }
        paragraph="Here are some of my recent projects; focusing on clean design, responsiveness, interactive user experience with smooth animations and reusable components to deliver modern experiences."
      />

      <ProjectListings />
    </div>
  );
};

export default Projects;
