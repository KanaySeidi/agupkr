import type { LineProps } from "@/types";

const Line = ({ title }: LineProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-1 bg-sinii"></div>
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  );
};

export default Line;
