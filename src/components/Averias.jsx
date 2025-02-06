import React, { useState } from "react";

const Averias = () => {
  const [data, setData] = useState([
    { maquina: "Máquina1", orden: "OPG001", motivo: "AJUSTE", inicio: "2024-10-30 16:26:04", fin: "2024-10-30 16:26:04", duracion: "14.67", comentarios: "" },
    { maquina: "Máquina3", orden: "OPG002", motivo: "AVERÍA", inicio: "2024-10-14 12:35:00", fin: "2024-10-14 12:45:00", duracion: "15", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },

  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "edit", "agrupar", "dividir"
  const [selectedRow, setSelectedRow] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const openModal = (type, row) => {
    setSelectedRow(row);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
    setModalType(null);
  };

  const handleSave = () => {
    // Logic for saving the updated data
    closeModal();
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]); // Deselect all if all are selected
    } else {
      setSelectedRows(data.map((row, index) => index)); // Select all rows
    }
  };

  const toggleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((id) => id !== index)); // Deselect row
    } else {
      setSelectedRows([...selectedRows, index]); // Select row
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen px-4 sm:px-4">
      {/* Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-900 mb-1">Máquina</label>
          <select className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded">
            <option>Filtro Máquina</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-900 mb-1">Orden</label>
          <select className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded">
            <option>Filtro Orden</option>
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-900 mb-1">Fecha Inicio</label>
          <input
            type="date"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-900 mb-1">Fecha Fin</label>
          <input
            type="date"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
          />
        </div>
      </div>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">

        {/* Action Buttons */}
        <div className=" flex flex-wrap items-center gap-4 mb-4 ">
          <button
            className="bg-blue-570 h-[30px] text-xs text-white px-4 py-2 rounded-lg hover:bg-blue-590"
            onClick={() => openModal("edit", data[0])} // Opens edit modal for the first row as an example
          >
            Editar
          </button>
          <button
            className="bg-green-500  h-[30px]  text-xs text-white px-4 py-1 rounded-lg hover:bg-green-600"
            onClick={() => openModal("agrupar", data[0])}
          >
            Agrupar
          </button>
          <button
            className="bg-yellow-500 h-[30px] text-xs text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
            onClick={() => openModal("dividir", data[0])}
          >
            Dividir
          </button>
          <button
            className="bg-gray-400 h-[30px] text-xs text-white  px-4 py-1 rounded-lg hover:bg-gray-500"
          >
            Mostrar averías sin motivo
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded border border-gray-100">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-470">
                <th className="text-blue-470 font-normal text-lg px-4 py-2 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                {["Máquina", "Orden", "Motivo Parada", "Fecha Inicio", "Fecha Fin", "Duración", "Comentarios"].map(
                  (header, index) => (
                    <th
                      key={index}
                      className="text-white font-semibold text-[12px] px-4 py-2 text-left"
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
              {data.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-4 py-2 border-b-[1px]">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleSelectRow(index)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.orden}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.maquina}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.motivo}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.inicio}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.fin}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.duracion}</td>
                  <td className="px-4 py-2 border-b-[1px] ">{row.comentarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pt-4 pb-1 border-b flex justify-between">
          <p className="text-left text-gray-400 text-[10px]">Showing 1 to 10 of 50 Entries</p>
          <div className="flex gap-[2px]">
            {["prev", "1", "2", "3", "next"].map((label, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`text-[10px] text-gray-400  px-2 py-2 rounded ${tabValue === index ? "bg-blue-570 text-white" : "text-gray-400"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Modals */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-md sm:w-[500px]">
              <div className="flex justify-between items-center bg-gray-100 rounded-t-lgv">
                <h3 className="text-[18px] p-[10px] font-bold">
                  {modalType === "edit" ? "Editar Pop-up Window" : modalType === "agrupar" ? "Agrupar Pop-up Window" : "Dividir Pop-up Window"}
                </h3>
                <button
                  className="text-gray-500 hover:text-gray-700 px-[10px]"
                  onClick={closeModal}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                <div>
                  <label className="block text-[11px] font-bold text-black mb-1">Máquina</label>
                  <select
                    className="w-full h-[36px] pl-[8px] pr-[8px] bg-gray-100 text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                    value={selectedRow?.maquina}
                  >
                    <option value={selectedRow?.maquina}>Filtro Máquina</option>
                    <option value={selectedRow?.maquina}>{selectedRow?.maquina}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-black mb-1">Orden</label>
                  <select
                    className="w-full h-[36px] pl-[8px] pr-[8px] bg-gray-100 text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                    value={selectedRow?.orden}
                  >
                    <option value={selectedRow?.orden}>Filtro Orden</option>
                    <option value={selectedRow?.orden}>{selectedRow?.orden}</option>
                  </select>
                </div>

                {modalType === "edit" && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-black mb-1">Tipo de Avería</label>
                      <select
                        className="w-full h-[36px] pl-[8px] pr-[8px] bg-gray-100 text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                        value={selectedRow?.motivo}
                      >
                        <option value={selectedRow?.motivo}>Tipo de Avería</option>
                        <option value={selectedRow?.motivo}>{selectedRow?.motivo}</option>
                      </select>
                    </div>
                  </>
                )}

                {(modalType === "agrupar" || modalType === "dividir") && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-black mb-1">Fecha Inicio</label>
                      <input
                        type="date"
                        className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-black mb-1">Fecha Fin</label>
                      <input
                        type="date"
                        className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-black mb-1">Tipo de Avería</label>
                      <select
                        className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                        value={selectedRow?.motivo}
                      >


                        <option value={selectedRow?.motivo}>seleccione nuevo tipo de averia</option>
                        <option value={selectedRow?.motivo}>{selectedRow?.motivo}</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div className="px-4">
                <label className="block text-[11px] font-bold text-black mb-1">Comentarios</label>
                <textarea
                  className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
                  placeholder="Type here..."
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-start gap-4 p-4">
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  className="bg-blue-570 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Averias;
