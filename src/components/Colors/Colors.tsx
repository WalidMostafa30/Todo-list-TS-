import { useState } from "react";

interface ColorsProps {
  theColors: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Colors: React.FC<ColorsProps> = ({ theColors, index, setIndex }) => {
  const [showColors, setShowColors] = useState(false);

  const openColors = () => {
    setShowColors((prev) => !prev);
  };

  const selectColor = (color: number) => {
    setIndex(color);
  };

  return (
    <div className="relative" onClick={openColors}>
      <div
        className="w-[40px] h-full rounded-md cursor-pointer text-center content-center text-white text-2xl font-bold"
        style={{ backgroundColor: theColors[index] }}
      >
        C
      </div>

      {showColors && (
        <div className="absolute top-[55px] right-0 w-52 h-fit flex flex-wrap justify-around gap-2 z-10 shadow-xl bg-white p-2 rounded-md border-solid border-2 border-slate-600">
          {theColors.map((col, index) => (
            <div
              key={index}
              className="colors w-[50px] h-[50px] rounded-md cursor-pointer"
              style={{ backgroundColor: col }}
              onClick={() => selectColor(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;
