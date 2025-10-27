type ArrowProps = {
  width?: number;
  height?: number;
};

const ArrowToTop = ({ width: width, height: height }: ArrowProps) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </div>
  );
};

export default ArrowToTop;
