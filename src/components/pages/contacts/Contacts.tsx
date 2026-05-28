import { useEffect } from "react";
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

  if (status === 'idle' || status === 'loading') return <Loader />;

  return (
    <>
      <div className="py-6 sm:py-10">
        <Line title={t("header.navs.nav7")} />
      </div>

      <div className="flex flex-col gap-10">
        {items.map((contact, idx) => (
          <div key={contact.id} className="flex flex-col gap-6 sm:gap-8">
            {idx > 0 && <hr className="border-slate-200" />}

            <div className="bg-white rounded-md shadow-lg">
              <div className="flex flex-col gap-4 rounded-md p-4 sm:p-5">
                {contact.title && (
                  <h1 className="text-xl sm:text-2xl">{contact.title}</h1>
                )}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  {contact.photo_url && (
                    <img
                      src={contact.photo_url}
                      alt={contact.title}
                      className="rounded-md w-full sm:w-auto sm:h-48 object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-4">
                    {contact.description && (
                      <h2
                        className="text-xl sm:text-2xl md:text-3xl leading-tight"
                        dangerouslySetInnerHTML={{ __html: contact.description }}
                      />
                    )}
                    {(contact.phone || contact.email || contact.address) && (
                      <div className="rounded-md bg-[#F7F9FF] flex flex-col gap-3 p-4 sm:p-5">
                        <p className="font-bold">{t("auto.components.pages.contacts.Contacts.5")}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          {contact.phone && (
                            <div>
                              <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.6")}</p>
                              <p>{contact.phone}</p>
                            </div>
                          )}
                          {contact.email && (
                            <div>
                              <p className="text-gray-500">{t("auto.components.pages.contacts.Contacts.8")}</p>
                              <p>{contact.email}</p>
                            </div>
                          )}
                          {contact.address && (
                            <div>
                              <p className="text-gray-500 text-sm">{contact.address}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {contact.departments && contact.departments.length > 0 && (
              <div className="rounded-md py-6 sm:py-8 px-4 sm:px-6 shadow-md bg-white">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  {t("contacts.reception_and_departments")}
                </h2>
                <div className="flex flex-col gap-4">
                  {contact.departments.map((dept, i) => (
                    <div key={dept.id}>
                      {i > 0 && <div className="w-full h-px bg-gray-100 mb-4" />}
                      <div className="flex flex-col gap-1">
                        <h3 className="font-medium text-sinii text-sm sm:text-base">
                          {dept.title}
                        </h3>
                        {dept.description && (
                          <p className="text-xs sm:text-sm text-slate-600">{dept.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {contact.map_embed && (
              <div
                className="w-full rounded-md overflow-hidden shadow-md"
                dangerouslySetInnerHTML={{ __html: contact.map_embed }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
