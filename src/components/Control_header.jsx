import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Control_header() {
  const firstLinkRef = useRef(null);
  const [value, setValue] = useState("Orden"); 

  useEffect(() => {
    if (firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, []);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ml-[20px] flex justify-between w-[96vw] lg:w-[81.6vw]">
      <div className="flex gap-[3px] sm:gap-[6px] md:gap-[9px] lg:gap-[12px] items-center mt-4 mb-6">
        <h2 className="text-[13px] sm:text-[17px] md:text-[20px] lg:text-2xl font-bold text-black">{`Control > ${value}`}</h2>
        <span className="material-symbols-outlined text-gray-400 pt-[10px] bg-gray-200 p-2 rounded-full cursor-pointer text-base md:text-xl">
          edit
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center mt-4 mb-6">
        <Link
          ref={firstLinkRef} 
          className="text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-580 text-gray-500 font-medium  focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/orden"
          onClick={() => handleValueChange("Orden")}
        >
          Orden
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-580 text-gray-500 font-medium focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/scrap"
          onClick={() => handleValueChange("Scrap")}
        >
          Scrap
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-580 text-gray-500 font-medium focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/averias"
          onClick={() => handleValueChange("Averias")}
        >
          Averias
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-580 text-gray-500 font-medium focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/consumos"
          onClick={() => handleValueChange("Consumos")}
        >
          Consumos
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-580 text-gray-500 font-medium focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/etiquetas"
          onClick={() => handleValueChange("Etiquetas")}
        >
          Etiquetas
        </Link>
      </div>
    </div>
  );
}

export default Control_header;
