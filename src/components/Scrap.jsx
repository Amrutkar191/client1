import React from "react";

const Scrap = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-start justify-center">
      <form className="bg-gray-200  px-10 py-4 rounded-lg  w-full ">
        <div className="grid grid-cols-3 gap-4">
          {/* Máquina */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Máquina
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Máquina</option>
              <option>Máquina 1</option>
              <option>Máquina 2</option>
            </select>
          </div>

          {/* Orden */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Orden
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Orden</option>
              <option>Orden 1</option>
              <option>Orden 2</option>
            </select>
          </div>

          {/* Producto */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Producto
            </label>
            <input
              type="text"
              placeholder="Producto"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>

          {/* Descripción */}
          <div className="col-span-3">
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Descripción
            </label>
            <input
              type="text"
              placeholder="Descripción"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>

          {/* Unidad */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Unidad
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Unidad</option>
              <option>Unidad 1</option>
              <option>Unidad 2</option>
            </select>
          </div>

          {/* Tipo de defecto */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Tipo de defecto
            </label>
            <select
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            >
              <option>Tipo de defecto</option>
              <option>Defecto 1</option>
              <option>Defecto 2</option>
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label className="block text-[11px] font-bold text-gray-900 mb-1">
              Cantidad
            </label>
            <input
              type="number"
              placeholder="Cantidad"
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-left">
          <button
            type="submit"
            className="w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded"
          >
            Introducir Scrap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Scrap;