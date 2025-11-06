import AboutAGU from "@/components/organisms/aboutAGU/AboutAGU";
import Announcement from "@/components/organisms/announcement/Announcement";
import Education from "@/components/organisms/education/Education";
import MainSlider from "@/components/organisms/mainSlider/MainSlider";
import QuickLinks from "@/components/organisms/quickLinks/QuickLinks";

const Main = () => {
  return (
    <>
      <div className="w-screen mt-5">
        <div className="w-11/12 mx-auto flex">
          <MainSlider />
          <Announcement />
        </div>
        <Education />
        <AboutAGU />
        <QuickLinks />
      </div>
    </>
  );
};

export default Main;
