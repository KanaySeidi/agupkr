import rektor from "@/assets/img/rektor.png";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const contactDepts = [
  "study_reception",
  "director_coordinator",
  "press_secretary",
  "hr_department",
  "youth_protocol_department",
] as const;

const kafedryKeys = [
  "auto2.components.pages.contacts.Contacts.1",
  "auto2.components.pages.contacts.Contacts.2",
  "auto2.components.pages.contacts.Contacts.3",
  "auto2.components.pages.contacts.Contacts.4",
  "auto2.components.pages.contacts.Contacts.5",
] as const;

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="py-6 sm:py-10">
        <Line title={t("header.navs.nav7")} />
      </div>

      <div className="flex flex-col gap-6 sm:gap-10">
        {}
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex flex-col gap-4 rounded-md p-4 sm:p-5">
            <h1 className="text-xl sm:text-2xl">{t("auto.components.pages.contacts.Contacts.1")}</h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src={rektor}
                alt={t("auto.components.pages.contacts.Contacts.2")}
                className="rounded-md w-full sm:w-auto sm:h-48 object-cover"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl leading-tight">
                  {t("auto.components.pages.contacts.Contacts.3")}<br /> {t("auto.components.pages.contacts.Contacts.4")}</h2>
                <div className="rounded-md bg-[#F7F9FF] flex flex-col gap-3 p-4 sm:p-5">
                  <p className="font-bold">{t("auto.components.pages.contacts.Contacts.5")}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.6")}</p>
                      <p>+996 312 62-21-60</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.7")}</p>
                      <p>+996 312 62-21-52</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.8")}</p>
                      <p>{t("auto.components.pages.contacts.Contacts.9")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {[0, 1].map((col) => (
            <div key={col} className="rounded-md py-6 sm:py-10 px-4 sm:px-5 shadow-md bg-white">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-5">
                {t("contacts.reception_and_departments")}
              </h2>
              <div className="flex flex-col gap-4 sm:gap-5">
                {contactDepts.map((key, i) => (
                  <div key={key}>
                    {i > 0 && <div className="w-full h-px bg-gray-100 mb-4" />}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-medium text-sinii text-sm sm:text-base">
                        {t(`contacts.${key}`)}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">{t("contacts.phone")}</p>
                      <p className="text-sm">+996 312 62-21-60</p>
                      <p className="text-xs sm:text-sm text-gray-500">{t("contacts.email")}</p>
                      <p className="text-sm">info@apap.kg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="py-6 sm:py-10 px-4 sm:px-5 bg-white rounded-md flex flex-col shadow-md">
          <h1 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-5">{t("auto.components.pages.contacts.Contacts.10")}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {kafedryKeys.map((key) => (
              <div key={key} className="space-y-2">
                <p className="text-sinii font-semibold text-sm sm:text-base">{t(key)}</p>
                <p className="text-xs sm:text-sm text-gray-500">{t("contacts.phone")}</p>
                <p className="text-sm">+996 312 62-17-13</p>
                <p className="text-sm">+996 312 66-62-65</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
