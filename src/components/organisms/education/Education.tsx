import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
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
              <button
                onClick={() => navigate("/education/doctor")}
                className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2"
              >
                <p>Подобнее</p>
                <ArrowToTop width={25} height={25} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Аспирантура</p>
              <p>
                Аспирантура Трёхлетняя программа с теорией и научными
                исследованиями. Подготавливает специалистов для науки и высшего
                образования.
              </p>
              <button
                onClick={() => navigate("/education/aspirant")}
                className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2"
              >
                <p>Подобнее</p>
                <ArrowToTop width={25} height={25} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Магистратура</p>
              <p>
                Магистратура Двухлетняя программа углубленной подготовки.
                Развивает научные компетенции и позволяет провести собственное
                исследование.
              </p>
              <button
                onClick={() => navigate("/education/magistr")}
                className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2"
              >
                <p>Подобнее</p>
                <ArrowToTop width={25} height={25} />
              </button>
            </div>
            <div className="w-1/4 h-56 flex flex-col justify-around">
              <p className="text-xl">Бакалавриат</p>
              <p>
                Бакалавриат Четырёхлетняя программа высшего образования. Даёт
                фундаментальные знания и практические навыки для карьеры или
                продолжения обучения.
              </p>
              <button
                onClick={() => navigate("/education/bakalavr")}
                className="border border-gray-400 w-full flex justify-center items-center rounded-md py-2"
              >
                <p>Подобнее</p>
                <ArrowToTop width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
