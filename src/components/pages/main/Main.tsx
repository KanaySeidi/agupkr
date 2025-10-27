import Announcement from "@/components/organisms/announcement/Announcement";
import MainSlider from "@/components/organisms/mainSlider/MainSlider";

const Main = () => {
  return (
    <>
      <div className="w-screen mt-5">
        <div className="w-11/12 mx-auto flex">
          <MainSlider />
          <Announcement />
        </div>
      </div>
    </>
  );
};

export default Main;
