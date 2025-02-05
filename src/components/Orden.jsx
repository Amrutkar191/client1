import React, { useState } from "react";

const machines = ["Máquina1", "Máquina2", "Máquina3", "Máquina4", "Máquina5", "Máquina6"];
const orders = ["0F0001", "0F0002", "0F0003", "0F0004", "0F0005", "0F0006"];

const tableData = [
  { machine: "Máquina1", order: "0F0001", product: "PR0001", status: "Producción", toFabricate: "10,000", fabricated: "7,564", bgClass: "bg-green-100" },
  { machine: "Máquina2", order: "0F0002", product: "PR0002", status: "Microparo", toFabricate: "13,000", fabricated: "10,364", bgClass: "bg-orange-100" },
  { machine: "Máquina3", order: "0F0003", product: "PR0003", status: "Microparo", toFabricate: "10,000", fabricated: "5,000", bgClass: "bg-white-100" },
  { machine: "Máquina4", order: "0F0004", product: "PR0004", status: "Paro", toFabricate: "5,000", fabricated: "2,365", bgClass: "bg-red-100" },
  { machine: "Máquina5", order: "0F0005", product: "PR0005", status: "Preparación", toFabricate: "3,500", fabricated: "0", bgClass: "bg-blue-100" },
  { machine: "Máquina6", order: "0F0006", product: "PR0006", status: "Limpieza", toFabricate: "8,000", fabricated: "7,956", bgClass: "bg-yellow-50" },
];

export default function Orden() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [finalizedRows, setFinalizedRows] = useState([]); // Track which rows are finalized

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const handleStartOrder = () => {
    alert(`Iniciar Orden for ${selectedMachine} and ${selectedOrder}`);
  };

  const handleFinalize = (index) => {
    // Add the finalized row index to state to hide its content
    setFinalizedRows((prev) => [...prev, index]);
  };

  return (
    <div className="p-4 px-8 md-[-100px] bg-gray-200 min-h-screen">
      {/* Top Form */}
      <div className="flex items-center gap-4 mb-6 bg-gray-200 rounded">
        {/* Machine Dropdown */}
        <div className="flex flex-col w-1/3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Máquina</label>
          <select
            value={selectedMachine}
            onChange={(e) => setSelectedMachine(e.target.value)}
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
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

        {/* Order Dropdown */}
        <div className="flex flex-col w-1/3">
          <label className="block text-sm font-medium text-gray-900 mb-1">Orden</label>
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
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

        {/* Button */}
        <div className="flex flex-col">
          <label className="invisible mb-1">Button</label>
          <button
            className="w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded"
            onClick={handleStartOrder}
          >
            Iniciar Orden
          </button>
        </div>
      </div>

      {/* Timeline Tabs */}
      <div className="bg-white p-4 rounded border-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="flex gap-1">
            {["Day", "Week", "Month"].map((label, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`text-[9px] font-normal px-2 py-2 rounded ${tabValue === index ? "bg-blue-470 text-white" : "text-gray-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded border border-gray-100">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-470">
                {["Máquina", "Orden", "Producto", "Estado", "Cant. Fabricar", "Cant. Fabricada", "Finalizar"].map(
                  (header, index) => (
                    <th
                      key={index}
                      className="text-white font-medium text-sm px-4 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        {header}
                        <span class="material-symbols-outlined">
                          unfold_more
                        </span>
                      </div>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="text-xs">
              {tableData.map((row, index) => (
                <tr key={index} className={`${row.bgClass}`}>
                  {/* Check if the row is finalized */}
                  {finalizedRows.includes(index) ? (
                    // If finalized, only show the machine column with the same background color
                    <>
                      <td className="px-4 py-2">{row.machine}</td>
                      <td className="px-4 py-2">{ }</td>
                      <td className="px-4 py-2">{ }</td>
                      <td className="px-4 py-2">{ }</td>
                      <td className="px-4 py-2">{ }</td>
                      <td className="px-4 py-2">{ }</td>
                      <td className="px-4 py-2">{ }</td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2">{row.machine}</td>
                      <td className="px-4 py-2">{row.order}</td>
                      <td className="px-4 py-2">{row.product}</td>
                      <td className="px-4 py-2">{row.status}</td>
                      <td className="px-4 py-2">{row.toFabricate}</td>
                      <td className="px-4 py-2">{row.fabricated}</td>
                      <td className="px-4 py-2 text-left">
                        <button
                          className="bg-red-700 text-gray-100 text-[11px] py-1 px-4 rounded"
                          onClick={() => handleFinalize(index)} // Finalize button click
                        >
                          Finalizar
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
