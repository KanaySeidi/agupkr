import rektor from "@/assets/img/rektor.png";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="py-10">
        <Line title={t("header.navs.nav7")} />
      </div>
      <div className="flex flex-col gap-10">
        <div className=" bg-white rounded-md shadow-lg">
          <div className="flex flex-col gap-2 rounded-md p-5">
            <h1 className="text-2xl">Ректор АГУПКР</h1>
            <div className="flex gap-5">
              <img src={rektor} alt="" className="rounded-md" />
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl">
                  Калчакеева <br /> Айгюль Муратовна
                </h2>
                <div>
                  <div className="rounded-md bg-[#F7F9FF] flex flex-col gap-5 p-5">
                    <p className="font-bold">Ректорат</p>
                    <div className="flex flex-col gap-2">
                      <p>Телефон:</p>
                      <p>+996 312 62-21-60</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Факс:</p>
                      <p>+996 312 62-21-52</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p>Адрес:</p>
                      <p>
                        720040, Кыргызская Республика, г. Бишкек, ул.
                        Панфилова,237
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="rounded-md py-10 px-5 shadow-md bg-white w-full">
            <h2 className="text-2xl font-semibold mb-5 ">
              {t("contacts.reception_and_departments")}
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sinii text-lg">
                  {t("contacts.study_reception")}
                </h3>
                <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                <div>
                  <p>+996 312 62-21-60</p>
                  <p>+996 312 62-21-18</p>
                </div>
                <p className="text-gray-500">{t("contacts.email")}</p>
                <p>asdsdra23333@gmail.com</p>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.director_coordinator")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.press_secretary")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.hr_department")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.youth_protocol_department")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md py-10 px-5 shadow-md bg-white w-full">
            <h2 className="text-2xl font-semibold mb-5 ">
              {t("contacts.reception_and_departments")}
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sinii text-lg">
                  {t("contacts.study_reception")}
                </h3>
                <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                <div>
                  <p>+996 312 62-21-60</p>
                  <p>+996 312 62-21-18</p>
                </div>
                <p className="text-gray-500">{t("contacts.email")}</p>
                <p>asdsdra23333@gmail.com</p>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.director_coordinator")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.press_secretary")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.hr_department")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-100"></div>

              <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-sinii text-lg">
                    {t("contacts.youth_protocol_department")}
                  </h3>
                  <p className="text-sm text-gray-500">{t("contacts.phone")}</p>
                  <div>
                    <p>+996 312 62-21-60</p>
                    <p>+996 312 62-21-18</p>
                  </div>
                  <p className="text-gray-500">{t("contacts.email")}</p>
                  <p>asdsdra23333@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 px-5 bg-white rounded-md flex flex-col shadow-md">
          <h1 className="text-2xl font-semibold mb-5">Кафедры</h1>
          <div className="flex justify-between">
            <div className="space-y-3">
              <p className="text-sinii font-semibold">
                Государственное и муниципальное управление и право
              </p>
              <div className="space-y-2">
                <p>{t("contacts.phone")}</p>
                <p>+996 312 62-17-13</p>
                <p>+996 312 66-62-65</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sinii font-semibold">
                Государственная и финансовая
              </p>
              <div className="space-y-2">
                <p>{t("contacts.phone")}</p>
                <p>+996 312 62-17-13</p>
                <p>+996 312 66-62-65</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sinii font-semibold">Экономика и менеджмент</p>
              <div className="space-y-2">
                <p>{t("contacts.phone")}</p>
                <p>+996 312 62-17-13</p>
                <p>+996 312 66-62-65</p>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-100 my-10"></div>
          <div className="flex gap-50">
            <div className="space-y-3">
              <p className="text-sinii font-semibold">Социология</p>
              <div className="space-y-2">
                <p>{t("contacts.phone")}</p>
                <p>+996 312 62-17-13</p>
                <p>+996 312 66-62-65</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sinii font-semibold">
                Институт магистратуры и развития
              </p>
              <div className="space-y-2">
                <p>{t("contacts.phone")}</p>
                <p>+996 312 62-17-13</p>
                <p>+996 312 66-62-65</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
