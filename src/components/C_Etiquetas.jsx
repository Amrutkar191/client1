/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
function C_Etiquetas() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const handleStartOrder = () => {
      alert(`Iniciar Orden for ${selectedMachine} and ${selectedOrder}`);
  };
const machines = ["Impresora1", "Impresora2", "Impresora3", "Impresora4", "Impresora5", "Impresora6"];
const orders = ["Etiqueta1", "Etiqueta2", "Etiqueta3", "Etiqueta4", "Etiqueta5", "Etiqueta6"];
  return (
    <div className="flex flex-col mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[10px]">
      <div className='flex items-center flex-wrap gap-4 mb-3 w-[100vw] lg:w-[83vw]  p-3 rounded'>
    <div className="flex flex-col gap-1 w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Impresora</label>
        <select
            value={selectedMachine}
            onChange={(e) => setSelectedMachine(e.target.value)}
            className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] "
        >
            <option value="" disabled>
                Impresora
            </option>
            {machines.map((machine, index) => (
                <option key={index} value={machine}>
                    {machine}
                </option>
            ))}
        </select>
    </div>
    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Etiqueta</label>
        <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] "
        >
            <option value="" disabled>
                Etiqueta
            </option>
            {orders.map((order, index) => (
                <option key={index} value={order}>
                    {order}
                </option>
            ))}
        </select>
    </div>
    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Cantidad</label>
        <input type="text" name="Cantidad" id="" placeholder='Cantidad'className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium focus:border-gray-600 outline-none text-gray-700 border border-gray-300 rounded-[4px] " />
    </div>
    </div>
    <div className="ml-[12px]">
        <button
            className="w-[20vw] lg:w-[15vw] h-[43px] bg-blue-500 text-white text-[10px] md:text-[12px] lg:text-[17px] font-medium focus:border-gray-600 rounded"
            onClick={handleStartOrder}
        >
           Imprimir etiquetas
        </button>
    </div>
    </div>
  )
}
export default C_Etiquetas
