import { useTranslation } from "react-i18next";
import { languages } from "@/components/atoms/language";
import { Select } from "@headlessui/react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "ru";

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage);
    } else {
      console.error("Ошибка: язык не определён");
    }
  };

  return (
    <div className="text-[#1877F2] text-base md:text-md lg:text-lg focus:outline-none outline-none">
      <Select
        name="status"
        id="language-select"
        className="focus:outline-none text-xs md:text-xs lg:text-base"
        aria-label="Project status"
        value={currentLanguage}
        onChange={changeLanguage}
      >
        {languages.map(({ title, key }) => (
          <option
            key={key}
            className="[#1877F2] focus:outline-none outline-none"
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
