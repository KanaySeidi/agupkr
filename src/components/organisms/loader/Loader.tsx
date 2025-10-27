import logo from "@/assets/icon/Vector.svg";

const Loader = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-11/12 mx-auto h-full flex justify-center items-center">
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="w-44 h-44 border-8 border-gray-300 border-t-blue-400 rounded-full animate-spin" />
            <img
              src={logo}
              alt="logo"
              className="absolute w-32 h-32 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
