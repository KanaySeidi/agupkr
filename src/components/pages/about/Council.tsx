import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useStaffStore } from "@/store/staff.store";
import Loader from "@/components/organisms/loader/Loader";

const Council = () => {
  const { t } = useTranslation();
  const { council, status, fetchCouncil } = useStaffStore();

  useEffect(() => {
    fetchCouncil();
  }, [fetchCouncil]);

  if (status === 'loading') return <Loader />;

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.council")} />

        {council.length > 0 ? (
          council.map((item) => (
            <div key={item.id} className="mt-6">
              <h2 className="text-lg font-semibold text-sinii mb-2">{item.title}</h2>
              <p className="text-sm text-slate-700 mb-4 whitespace-pre-line">{item.composition}</p>
              {item.files.length > 0 && (
                <ul className="flex flex-col gap-2 text-sinii">
                  {item.files.map((file) => (
                    <li key={file.id}>
                      <a
                        href={file.file_url || file.file}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <ul className="flex flex-col gap-2 mt-10 text-sinii">
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9A%D0%A0%D0%9F%D0%9C%D0%91%D0%90%D0%BD%D1%8B%D0%BD%20%D0%9E%D0%9A%20%D0%B6%D0%BE%D0%B1%D0%BE%D1%81%D1%83.pdf"
              >
                {t("auto.components.pages.about.Council.1")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%A0%D0%B5%D0%B3%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%90%D0%93%D0%A3%D0%9F%D0%9A%D0%A0.pdf"
              >
                {t("auto.components.pages.about.Council.2")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%202018-2019%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.3")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%202019-2020%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.4")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%202020-2021%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.5")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%202020-2021%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.6")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%90%D0%93%D0%A3%D0%9F%D0%9A%D0%A0%20%D0%BD%D0%B0%202021-2022%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.7")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%9F%D0%BB%D0%B0%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%90%D0%93%D0%A3%D0%9F%D0%9A%D0%A0%20%D0%BD%D0%B0%202023-2024%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.8")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A1%D0%BE%D1%81%D1%82%D0%B0%D0%B2%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%90%D0%93%D0%A3%D0%9F%D0%9A%D0%A0%20%D0%BD%D0%B0%202020-2021%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.9")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%A1%D0%BE%D1%81%D1%82%D0%B0%D0%B2%20%D0%A3%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%20%D0%BD%D0%B0%202021-2022%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4.pdf"
              >
                {t("auto.components.pages.about.Council.10")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="http://www.apap.kg/uploads/pdf/%D0%A3%D1%87%D1%91%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82/%D0%A1%D0%BE%D1%81%D1%82%D0%B0%D0%B2%20%D1%83%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0%202023-2024%20(1).pdf"
              >
                {t("auto.components.pages.about.Council.11")}
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Council;
