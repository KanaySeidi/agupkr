import { useTranslation } from "react-i18next";

const VALUES_KEYS = [
  "valuesSlider.academicFreedom",
  "valuesSlider.academicIntegrity",
  "valuesSlider.innovation",
  "valuesSlider.scientificForesight",
  "valuesSlider.responsibility",
  "valuesSlider.openness",
  "valuesSlider.professionalism",
  "valuesSlider.serviceToSociety",
];

const ValuesSlider = () => {
  const { t } = useTranslation();
  const items = VALUES_KEYS.map((k) => t(k));
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        className="flex gap-5 w-max"
        style={{ animation: "values-scroll 22s linear infinite" }}
      >
        {doubled.map((text, i) => (
          <div
            key={i}
            className="bg-sinii text-[#D9B96B] rounded-3xl px-8 py-8 text-base font-medium leading-snug shrink-0 w-64 flex items-center justify-center"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesSlider;
