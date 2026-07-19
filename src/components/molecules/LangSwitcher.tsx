import { useTranslation } from "react-i18next";
import { languages } from "@/utils/language";
import { Select } from "@headlessui/react";
import type { ChangeEvent } from "react";

const LanguageSwitcher = ({ variant = "default" }: { variant?: "default" | "light" }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? "ru";
  const isLight = variant === "light";

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (!selectedLanguage || selectedLanguage === currentLanguage) return;

    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  return (
    <div className={`text-base md:text-md lg:text-lg focus:outline-none outline-none ${isLight ? "text-white" : "text-sinii"}`}>
      <Select
        name="status"
        id="language-select"
        className={`focus:outline-none text-xs md:text-xs lg:text-base bg-transparent ${isLight ? "text-white" : ""}`}
        aria-label={t("common.language")}
        value={currentLanguage}
        onChange={changeLanguage}
      >
        {languages.map(({ title, key }) => (
          <option
            key={key}
            className="text-sinii focus:outline-none outline-none"
            value={key}
          >
            {title.toUpperCase()}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
