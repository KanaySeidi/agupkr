import { useEffect } from "react";
import LogoLp from "@/components/organisms/logoloop/LogoLp";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const About = () => {
  const { t } = useTranslation();
  const { about, status, fetchAbout } = usePagesStore();

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  const isLoading = (status.about === 'idle' || status.about === 'loading') && !about;
  if (isLoading) return null;

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center gap-6 sm:gap-10">
        {about?.main_photo_url && (
          <img src={about.main_photo_url} alt="" className="w-full object-cover rounded-lg" />
        )}
        {about?.title && (
          <h1 className="text-xl sm:text-2xl lg:text-4xl w-full lg:w-2/3 leading-snug">
            {about.title}
          </h1>
        )}
        {about?.description && (
          <p
            className="text-sm sm:text-base lg:text-lg"
            dangerouslySetInnerHTML={{ __html: about.description }}
          />
        )}
        {about?.additional_description && (
          <p
            className="text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: about.additional_description }}
          />
        )}
        {(about?.block1_title || about?.block1_description || about?.block2_title || about?.block2_description) && (
          <div className="w-full flex flex-col sm:flex-row gap-4 text-white">
            <p className="bg-sinii px-5 sm:px-10 md:px-16 py-6 sm:py-10 rounded-lg flex-1 text-sm sm:text-base">
              {about?.block1_title && <strong>{about.block1_title}</strong>}
              {about?.block1_description && (
                <span dangerouslySetInnerHTML={{ __html: about.block1_description }} />
              )}
            </p>
            <p className="bg-sinii px-5 sm:px-10 md:px-16 py-6 sm:py-10 rounded-lg flex-1 text-sm sm:text-base">
              {about?.block2_title && <strong>{about.block2_title}</strong>}
              {about?.block2_description && (
                <span dangerouslySetInnerHTML={{ __html: about.block2_description }} />
              )}
            </p>
          </div>
        )}
        {(about?.mission_title || about?.mission_description) && (
          <div className="w-full shadow-lg rounded-md">
            <div className="w-11/12 mx-auto py-8 sm:py-10 flex flex-col gap-5 sm:gap-10">
              {about?.mission_title && (
                <h2 className="text-xl sm:text-2xl md:text-3xl">{about.mission_title}</h2>
              )}
              {about?.mission_description && (
                <div
                  className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: about.mission_description }}
                />
              )}
            </div>
          </div>
        )}
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">{t("aboutAgu.partners")}</p>
          <LogoLp />
        </div>
      </div>
    </div>
  );
};

export default About;
