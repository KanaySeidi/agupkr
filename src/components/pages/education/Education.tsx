import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.education.index")} />
        <main className="w-full p-4 sm:p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-700">
              {t("auto.components.pages.education.Education.1")}</h1>
            <p className="mt-5 text-lg text-sinii ">
              {t("auto.components.pages.education.Education.2")}</p>
          </header>

          <section className="mb-8 bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg sm:text-2xl font-semibold text-slate-900 mb-4">
              {t("auto.components.pages.education.Education.3")}</h2>
            <ul className="space-y-3 list-inside">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  {t("auto.components.pages.education.Education.4")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>{t("auto.components.pages.education.Education.5")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  {t("auto.components.pages.education.Education.6")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  {t("auto.components.pages.education.Education.7")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  {t("auto.components.pages.education.Education.8")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>{t("auto.components.pages.education.Education.9")}</span>
              </li>
            </ul>
          </section>

          <section className="mb-8 grid gap-6 md:grid-cols-2">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t("auto.components.pages.education.Education.10")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    {t("auto.components.pages.education.Education.11")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.12")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.13")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.14")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.15")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.16")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.17")}</span>
                </li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t("auto.components.pages.education.Education.18")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    {t("auto.components.pages.education.Education.19")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    {t("auto.components.pages.education.Education.20")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    {t("auto.components.pages.education.Education.21")}</span>
                </li>
              </ul>
            </article>
          </section>

          <section className="mb-8">
            <h2 className="text-lg sm:text-2xl font-semibold text-slate-900 mb-5">
              {t("auto.components.pages.education.Education.22")}</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  {t("auto.components.pages.education.Education.23")}</h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t("auto.components.pages.education.Education.24")}{" "}
                  <span className="font-medium">{t("auto.components.pages.education.Education.25")}</span>
                </p>
                <p className="font-semibold mb-2">{t("auto.components.pages.education.Education.26")}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>
                    {t("auto.components.pages.education.Education.27")}</li>
                  <li>{t("auto.components.pages.education.Education.28")}</li>
                  <li>{t("auto.components.pages.education.Education.29")}</li>
                  <li>{t("auto.components.pages.education.Education.30")}</li>
                  <li>{t("auto.components.pages.education.Education.31")}</li>
                  <li>{t("auto.components.pages.education.Education.32")}</li>
                  <li>
                    {t("auto.components.pages.education.Education.33")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  {t("auto.components.pages.education.Education.34")}</h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t("auto.components.pages.education.Education.35")}{" "}
                  <span className="font-medium">{t("auto.components.pages.education.Education.36")}</span>
                </p>
                <p className="font-semibold mb-2">{t("auto.components.pages.education.Education.37")}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>{t("auto.components.pages.education.Education.38")}</li>
                  <li>{t("auto.components.pages.education.Education.39")}</li>
                  <li>{t("auto.components.pages.education.Education.40")}</li>
                  <li>{t("auto.components.pages.education.Education.41")}</li>
                  <li>{t("auto.components.pages.education.Education.42")}</li>
                  <li>{t("auto.components.pages.education.Education.43")}</li>
                  <li>{t("auto.components.pages.education.Education.44")}</li>
                  <li>{t("auto.components.pages.education.Education.45")}</li>
                  <li>{t("auto.components.pages.education.Education.46")}</li>
                  <li>{t("auto.components.pages.education.Education.47")}</li>
                  <li>{t("auto.components.pages.education.Education.48")}</li>
                  <li>{t("auto.components.pages.education.Education.49")}</li>
                  <li>{t("auto.components.pages.education.Education.50")}</li>
                  <li>
                    {t("auto.components.pages.education.Education.51")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  {t("auto.components.pages.education.Education.52")}</h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t("auto.components.pages.education.Education.53")}{" "}
                  <span className="font-medium">{t("auto.components.pages.education.Education.54")}</span>
                </p>
                <p className="font-semibold mb-2">{t("auto.components.pages.education.Education.55")}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>{t("auto.components.pages.education.Education.56")}</li>
                  <li>{t("auto.components.pages.education.Education.57")}</li>
                  <li>{t("auto.components.pages.education.Education.58")}</li>
                  <li>{t("auto.components.pages.education.Education.59")}</li>
                  <li>{t("auto.components.pages.education.Education.60")}</li>
                  <li>{t("auto.components.pages.education.Education.61")}</li>
                  <li>{t("auto.components.pages.education.Education.62")}</li>
                  <li>{t("auto.components.pages.education.Education.63")}</li>
                  <li>
                    {t("auto.components.pages.education.Education.64")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  {t("auto.components.pages.education.Education.65")}</h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t("auto.components.pages.education.Education.66")}{" "}
                  <span className="font-medium">{t("auto.components.pages.education.Education.67")}</span>
                </p>
                <p className="font-semibold mb-2">{t("auto.components.pages.education.Education.68")}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>{t("auto.components.pages.education.Education.69")}</li>
                  <li>{t("auto.components.pages.education.Education.70")}</li>
                  <li>{t("auto.components.pages.education.Education.71")}</li>
                  <li>{t("auto.components.pages.education.Education.72")}</li>
                  <li>{t("auto.components.pages.education.Education.73")}</li>
                  <li>{t("auto.components.pages.education.Education.74")}</li>
                  <li>{t("auto.components.pages.education.Education.75")}</li>
                  <li>{t("auto.components.pages.education.Education.76")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5 md:col-span-2">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  {t("auto.components.pages.education.Education.77")}</h4>
                <p className="text-sm text-slate-600 mb-3">
                  {t("auto.components.pages.education.Education.78")}<span className="font-medium">{t("auto.components.pages.education.Education.79")}</span>
                </p>
                <p className="font-semibold mb-2">{t("auto.components.pages.education.Education.80")}</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>{t("auto.components.pages.education.Education.81")}</li>
                  <li>{t("auto.components.pages.education.Education.82")}</li>
                  <li>{t("auto.components.pages.education.Education.83")}</li>
                  <li>{t("auto.components.pages.education.Education.84")}</li>
                  <li>{t("auto.components.pages.education.Education.85")}</li>
                  <li>{t("auto.components.pages.education.Education.86")}</li>
                  <li>{t("auto.components.pages.education.Education.87")}</li>
                  <li>
                    {t("auto.components.pages.education.Education.88")}</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg sm:text-2xl font-semibold text-slate-900 mb-4">
              {t("auto.components.pages.education.Education.89")}</h2>

            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  {t("auto.components.pages.education.Education.90")}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.91")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.92")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.93")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.94")}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 md:mt-0 md:w-64 shrink-0">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  {t("auto.components.pages.education.Education.95")}</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      className="text-sky-600 hover:underline"
                      href="http://avn.apap.kg/"
                      target="_blank"
                      rel="noopener"
                    >
                      avn.apap.kg
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-600 hover:underline"
                      href="http://lms.inai.kg/Account/Login?ReturnUrl=%2F"
                      target="_blank"
                      rel="noopener"
                    >
                      lms.inai.kg
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                {t("auto.components.pages.education.Education.96")}</h3>
              <ul className="grid gap-2 md:grid-cols-2 list-inside">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.97")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.98")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.99")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.100")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.101")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>{t("auto.components.pages.education.Education.102")}</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 font-semibold text-slate-900">
              {t("auto.components.pages.education.Education.103")}</p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Education;
