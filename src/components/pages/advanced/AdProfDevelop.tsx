import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import AdProfDevelopStepper from "@/components/organisms/AdProfDevelopStepper/AdProfDevelopStepper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const AdProfDevelop = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Line title={t("sidebar.advanced.profDevelop")} />

        <div className="flex flex-col gap-5 mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md bg-[#F7F9FF] px-4 cursor-pointer"
          >
            <AccordionItem value="1">
              <AccordionTrigger className="text-lg text-sinii">
                <p className="text-2xl">
                  {t("auto.components.pages.advanced.AdProfDevelop.1")}</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <ul className="flexl flex-col px-5">
                  <li className="text-sinii list-disc mb-4">
                    <a
                      target="_blank"
                      href="http://www.apap.kg/uploads/pdf/%D0%93%D0%9C%D0%A1/%D0%9F%D0%9A%D0%9F/%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/%D0%9A%D0%90%D0%A2%D0%90%D0%9B%D0%9E%D0%93%20%D0%92%D0%9A%D0%90%D0%A3_%D0%9E%D0%92.pdf"
                    >
                      {t("auto.components.pages.advanced.AdProfDevelop.2")}</a>
                  </li>
                  <li className="text-sinii list-disc mb-4">
                    <a
                      target="_blank"
                      href="http://www.apap.kg/uploads/pdf/%D0%93%D0%9C%D0%A1/%D0%9F%D0%9A%D0%9F/%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%B4%D0%BB%D1%8F%20%D0%B0%D0%BA%D0%B8%D0%BC%D0%B8%D0%B0%D1%82%D0%BE%D0%B2.pdf"
                    >
                      {t("auto.components.pages.advanced.AdProfDevelop.3")}</a>
                  </li>
                  <li className="text-sinii list-disc mb-4">
                    <a
                      target="_blank"
                      href="http://www.apap.kg/uploads/pdf/%D0%93%D0%9C%D0%A1/%D0%9F%D0%9A%D0%9F/%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D1%8D%D1%80%D0%B8%D0%B9%20%D0%9E%D0%92.pdf"
                    >
                      {t("auto.components.pages.advanced.AdProfDevelop.4")}</a>
                  </li>
                  <li className="text-sinii list-disc mb-4">
                    <a
                      target="_blank"
                      href="http://www.apap.kg/uploads/pdf/%D0%93%D0%9C%D0%A1/%D0%9F%D0%9A%D0%9F/%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/_%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%B4%D0%BB%D1%8F%20%D0%B0%D0%B9%D1%8B%D0%BB%20%D0%BE%D0%BA%D0%BC%D0%BE%D1%82%D1%83%20%2B.pdf"
                    >
                      {t("auto.components.pages.advanced.AdProfDevelop.5")}</a>
                  </li>
                  <li className="text-sinii list-disc mb-4">
                    <a
                      target="_blank"
                      href="http://www.apap.kg/uploads/pdf/%D0%93%D0%9C%D0%A1/%D0%9F%D0%9A%D0%9F/%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B2%D0%B0%D0%BB%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8/_%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D0%B8%D1%8E%D0%BD%D1%8C.pdf"
                    >
                      {t("auto.components.pages.advanced.AdProfDevelop.6")}</a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md bg-[#F7F9FF] px-4 cursor-pointer"
          >
            <AccordionItem value="1">
              <AccordionTrigger className="text-lg text-sinii">
                <div className="flex gap-4 items-center cursor-pointer">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScrIxef_4m_v77Sjcl_xCpKQqt7SGiJMs_E-EqTeOlElR5oqg/viewform?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-2xl">{t("auto.components.pages.advanced.AdProfDevelop.7")}</p>
                  </a>

                  <ArrowToTop width={25} height={25} />
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md bg-[#F7F9FF] px-4 "
          >
            <AccordionItem value="1">
              <AccordionTrigger className="text-lg text-sinii">
                <p className="text-2xl">
                  {t("auto.components.pages.advanced.AdProfDevelop.8")}</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <AdProfDevelopStepper />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-md bg-[#F7F9FF] px-4 cursor-pointer"
          >
            <AccordionItem value="1">
              <AccordionTrigger className="text-lg text-sinii">
                <div className="flex gap-4 items-center cursor-pointer">
                  <a
                    href="http://www.apap.kg/uploads/SPPK/%D0%9F%D0%BB%D0%B0%D0%BD-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D0%A7%D1%83%D0%B9%2C%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA_2025%20%D0%B3%D0%BE%D0%B4.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-2xl">
                      {t("auto.components.pages.advanced.AdProfDevelop.9")}</p>
                  </a>

                  <ArrowToTop width={25} height={25} />
                </div>
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AdProfDevelop;
