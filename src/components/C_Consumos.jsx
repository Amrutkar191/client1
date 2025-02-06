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
    <div className="flex flex-col mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[10px]">
      <div className='flex items-center flex-wrap gap-4 mb-3 w-[100vw] lg:w-[83vw]  p-3 rounded'>
    <div className="flex flex-col gap-1 w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Máquina</label>
        <select
            value={selectedMachine}
            onChange={(e) => setSelectedMachine(e.target.value)}
              className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] "
        >
            <option value="" disabled>
                Máquina
            </option>
            {machines.map((machine, index) => (
                <option key={index} value={machine}>
                    {machine}
                </option>
            ))}
        </select>
    </div>
    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Orden</label>
        <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
              className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] "
        >
            <option value="" disabled>
                Orden
            </option>
            {orders.map((order, index) => (
                <option key={index} value={order}>
                    {order}
                </option>
            ))}
        </select>
    </div>

    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Unidad</label>
        <input type="text" name="Unidad" id="" placeholder='Unidad'  className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] " />
    </div>
    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Referencia</label>
        <input type="text" name="Referencia" id="" placeholder='Referencia'  className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] " />
    </div>
    <div className="flex flex-col w-[26vw]">
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Cantidad</label>
        <input type="text" name="Cantidad" id="" placeholder='Cantidad'  className="w-full h-[40px] pl-2 bg-white text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium outline:none focus:border-gray-600 text-gray-400 border border-gray-300 rounded-[4px] " />
    </div>
    </div>
    <div className="ml-[12px]">
        <button
            className="w-[20vw] lg:w-[15vw] h-[43px] bg-blue-570 text-white text-[10px] md:text-[12px] lg:text-[17px] font-medium focus:border-gray-600 rounded"
            onClick={handleStartOrder}
        >
           Introducir Consumo
        </button>
    </div>
    </div>
  )
}

export default C_Consumos
