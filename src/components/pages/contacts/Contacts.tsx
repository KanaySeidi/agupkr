import { useEffect } from "react";
import rektor from "@/assets/img/rektor.png";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useContactsStore } from "@/store/contacts.store";
import Loader from "@/components/organisms/loader/Loader";

const Contacts = () => {
  const { t } = useTranslation();
  const { items, status, fetchList } = useContactsStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (status === 'loading') return <Loader />;

  const contact = items[0];

  return (
    <>
      <div className="py-6 sm:py-10">
        <Line title={t("header.navs.nav7")} />
      </div>

      <div className="flex flex-col gap-6 sm:gap-10">
        <div className="bg-white rounded-md shadow-lg">
          <div className="flex flex-col gap-4 rounded-md p-4 sm:p-5">
            <h1 className="text-xl sm:text-2xl">
              {contact?.title ?? t("auto.components.pages.contacts.Contacts.1")}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src={contact?.photo_url || rektor}
                alt={contact?.title ?? t("auto.components.pages.contacts.Contacts.2")}
                className="rounded-md w-full sm:w-auto sm:h-48 object-cover"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl leading-tight">
                  {contact?.description ?? (
                    <>
                      {t("auto.components.pages.contacts.Contacts.3")}<br />
                      {t("auto.components.pages.contacts.Contacts.4")}
                    </>
                  )}
                </h2>
                <div className="rounded-md bg-[#F7F9FF] flex flex-col gap-3 p-4 sm:p-5">
                  <p className="font-bold">{t("auto.components.pages.contacts.Contacts.5")}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.6")}</p>
                      <p>{contact?.phone || "+996 312 62-21-60"}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.7")}</p>
                      <p>{contact?.phone || "+996 312 62-21-52"}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.8")}</p>
                      <p>{contact?.email || t("auto.components.pages.contacts.Contacts.9")}</p>
                    </div>
                  </div>
                  {contact?.address && (
                    <div>
                      <p className="text-gray-500 text-sm">{contact.address}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {contact?.departments && contact.departments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[0, 1].map((col) => (
              <div key={col} className="rounded-md py-6 sm:py-10 px-4 sm:px-5 shadow-md bg-white">
                <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-5">
                  {t("contacts.reception_and_departments")}
                </h2>
                <div className="flex flex-col gap-4 sm:gap-5">
                  {contact.departments.map((dept, i) => (
                    <div key={dept.id}>
                      {i > 0 && <div className="w-full h-px bg-gray-100 mb-4" />}
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-medium text-sinii text-sm sm:text-base">
                          {dept.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">{dept.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {[0, 1].map((col) => (
              <div key={col} className="rounded-md py-6 sm:py-10 px-4 sm:px-5 shadow-md bg-white">
                <h2 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-5">
                  {t("contacts.reception_and_departments")}
                </h2>
                <div className="flex flex-col gap-4 sm:gap-5">
                  {(["study_reception", "director_coordinator", "press_secretary", "hr_department", "youth_protocol_department"] as const).map((key, i) => (
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
        )}

        {contact?.map_embed && (
          <div
            className="w-full rounded-md overflow-hidden shadow-md"
            dangerouslySetInnerHTML={{ __html: contact.map_embed }}
          />
        )}
      </div>
    </>
  );
};

export default Contacts;
