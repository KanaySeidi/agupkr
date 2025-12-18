type ArrowProps = {
  width?: number;
  height?: number;
  color?: string;
};

const ArrowToTop = ({
  width: width,
  height: height,
  color: color,
}: ArrowProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  );
};

export default ArrowToTop;
