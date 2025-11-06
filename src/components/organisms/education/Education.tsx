import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";

const Education = () => {
  return (
    <>
      <div className="w-screen">
        <div className="w-11/12 mx-auto my-20 flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <Line title={"Образование в университете"} />
          </div>
          <div className="w-full flex gap-10">
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Докторантура</p>
              <p>
                Докторантура Трёхлетняя программа для проведения оригинального
                научного исследования и получения степени доктора наук.
              </p>
              <button className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2">
                <p>Подобнее</p>
                <ArrowToTop width={30} height={30} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Докторантура</p>
              <p>
                Докторантура Трёхлетняя программа для проведения оригинального
                научного исследования и получения степени доктора наук.
              </p>
              <button className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2">
                <p>Подобнее</p>
                <ArrowToTop width={30} height={30} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Докторантура</p>
              <p>
                Докторантура Трёхлетняя программа для проведения оригинального
                научного исследования и получения степени доктора наук.
              </p>
              <button className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2">
                <p>Подобнее</p>
                <ArrowToTop width={30} height={30} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Докторантура</p>
              <p>
                Докторантура Трёхлетняя программа для проведения оригинального
                научного исследования и получения степени доктора наук.
              </p>
              <button className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2">
                <p>Подобнее</p>
                <ArrowToTop width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
