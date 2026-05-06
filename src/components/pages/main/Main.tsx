import AboutAGU from "@/components/organisms/aboutAGU/AboutAGU";
import Announcement from "@/components/organisms/announcement/Announcement";
import Education from "@/components/organisms/education/Education";
import MainSlider from "@/components/organisms/mainSlider/MainSlider";
import NewsMain from "../news/NewsMain";

const Main = () => {
  return (
    <div className="w-screen mt-5">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4">
        <MainSlider />
        <Announcement />
      </div>
      <NewsMain />
      <Education />
      <AboutAGU />
    </div>
  );
};

export default Main;
