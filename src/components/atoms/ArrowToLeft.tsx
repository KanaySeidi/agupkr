type ArrowToLeftProps = {
  width: number;
  height: number;
  color: string;
};

const ArrowToLeft = ({ width, height, color }: ArrowToLeftProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chevrons-right-icon lucide-chevrons-right hover:text-hover-sinii"
      >
        <path d="m6 17 5-5-5-5" />
        <path d="m13 17 5-5-5-5" />
      </svg>
    </div>
  );
};

export default ArrowToLeft;
