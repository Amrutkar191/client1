/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
function C_Consumos() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const handleStartOrder = () => {
      alert(`Iniciar Orden for ${selectedMachine} and ${selectedOrder}`);
  };
const machines = ["Máquina1", "Máquina2", "Máquina3", "Máquina4", "Máquina5", "Máquina6"];
const orders = ["0F0001", "0F0002", "0F0003", "0F0004", "0F0005", "0F0006"];
  return (
    <div className="grid grid-cols-1  mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[5px] lg:ml-[10px]">
    {/* Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-3 rounded">
      {/* Impresora */}
      <div className="flex flex-col gap-1 w-full">
      <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[-1px]">
          Máquina1
        </label>
        <select
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-mediumoutline-none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px]"
        >
          <option value="" disabled>Máquina1</option>
          {machines.map((machine, index) => (
            <option key={index} value={machine}>{machine}</option>
          ))}
        </select>
      </div>
  
      {/* Etiqueta */}
      <div className="flex flex-col w-full">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
          Orden
        </label>
        <select
          value={selectedOrder}
          onChange={(e) => setSelectedOrder(e.target.value)}
          className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-mediumoutline-none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px]"
        >
          <option value="" disabled>Orden</option>
          {orders.map((order, index) => (
            <option key={index} value={order}>{order}</option>
          ))}
        </select>
      </div>
  
      {/* Cantidad */}
      <div className="flex flex-col w-full">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
          Unidad
        </label>
        <input
          type="text"
          name="Unidad"
          placeholder="Unidad"
          className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-mediumfocus:border-gray-600 outline-none text-gray-700 border border-gray-300 rounded-[4px]"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
          Referencia
        </label>
        <input
          type="text"
          name="Referencia"
          placeholder="Referencia"
          className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-mediumfocus:border-gray-600 outline-none text-gray-700 border border-gray-300 rounded-[4px]"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">
          Cantidad
        </label>
        <input
          type="text"
          name="Cantidad"
          placeholder="Cantidad"
          className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-mediumfocus:border-gray-600 outline-none text-gray-700 border border-gray-300 rounded-[4px]"
        />
      </div>
    </div>
  
    {/* Button Section */}
    <div className="flex justify-center sm:justify-start lg:justify-start w-full mt-4">
      <button
             className="md:w-[15vw] w-[95vw] sm:w-[22vw] lg:w-[15vw]  h-[36px] bg-blue-570 text-white text-[10px] md:text-[12px] lg:text-[15px] font-medium hover:bg-blue-590 rounded"
        onClick={handleStartOrder}
      >
        Imprimir etiquetas
      </button>
    </div>
  </div>
  

  )
}

export default C_Consumos
