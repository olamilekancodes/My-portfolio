"use client";

import { useRouter } from "next/navigation";

import ProjectListings from "../projects/list";
import { PageNavigationButton } from "../shared/Button";
import EnhancedHomepageSectionTitle from "../shared/EnhancedHomepageSectionTitle";
import Banner from "../about-me/components/banner";
import MyStory from "../about-me/components/myStory";

const HomepageSections = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 my-0 md:my-20">
      <EnhancedHomepageSectionTitle title="Projects">
        <div className="sm:-mt-10 md:mt-0">
          <div className="h-[55rem] md:h-[60rem] relative overflow-hidden">
            <ProjectListings />
            <div className="absolute bottom-0 w-full h-[10rem] z-20 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="flex justify-center my-8">
            <PageNavigationButton
              title="See More"
              action={() => router.push("/projects")}
            />
          </div>
        </div>
      </EnhancedHomepageSectionTitle>

      <EnhancedHomepageSectionTitle title="My Profile">
        <div className="mt-10">
          <div className="h-[18rem] md:h-[25rem] flex md:gap-10 gap-5 relative overflow-y-hidden w-full overflow-hidden">
            <div className="flex w-20 h-full bg-[#6e06f2] " />
            <div>
              <MyStory />
            </div>
            <div className="absolute bottom-0 w-full h-[10rem] z-20 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="flex justify-center my-8">
            <PageNavigationButton
              title="View Profile"
              action={() => router.push("/about-me")}
            />
          </div>
        </div>
      </EnhancedHomepageSectionTitle>
    </div>
  );
};

export default HomepageSections;
