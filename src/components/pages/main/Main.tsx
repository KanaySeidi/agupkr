import AboutAGU from "@/components/organisms/aboutAGU/AboutAGU";
import Announcement from "@/components/organisms/announcement/Announcement";
import Education from "@/components/organisms/education/Education";
import MainSlider from "@/components/organisms/mainSlider/MainSlider";
import ValuesSlider from "@/components/organisms/valuesSlider/ValuesSlider";

const Main = () => {
  return (
    <div className="w-screen mt-5">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4">
        <MainSlider />
        <Announcement />
      </div>
      <AboutAGU />
      <Education />
      <ValuesSlider />
    </div>
  );
};

export default Main;
