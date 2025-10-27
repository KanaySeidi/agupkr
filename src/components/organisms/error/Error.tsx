import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import home from "@/assets/icon/home.svg";

function Error() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <main className="grid h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-8xl font-semibold text-[#1877F2]">404</p>

          <p className="mt-6 text-4xl font-medium text-pretty text-gray-400 ">
            {t("errorPageTitle")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate("/")}
              className="rounded-md bg-[#1877F2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#93b9ea] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex justify-around items-center gap-2"
            >
              <p className="text-lg">{t("errorBtn")}</p>
              <img src={home} alt="home icon" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Error;
