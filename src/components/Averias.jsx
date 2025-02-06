import React, { useState, useEffect } from "react";

const Averias = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchMachine, setSearchMachine] = useState("");
  const [searchOrder, setSearchOrder] = useState("");
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "edit", "agrupar", "dividir"
  const [selectedRow, setSelectedRow] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 entries per page

  useEffect(() => {
    fetch("/averias_data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle search input changes
  const handleSearchMachine = (e) => {
    setSearchMachine(e.target.value.toLowerCase());
    filterData(e.target.value.toLowerCase(), searchOrder, searchStartDate, searchEndDate);
  };

  const handleSearchOrder = (e) => {
    setSearchOrder(e.target.value.toLowerCase());
    filterData(searchMachine, e.target.value.toLowerCase(), searchStartDate, searchEndDate);
  };

  const handleSearchStartDate = (e) => {
    setSearchStartDate(e.target.value);
    filterData(searchMachine, searchOrder, e.target.value, searchEndDate);
  };

  const handleSearchEndDate = (e) => {
    setSearchEndDate(e.target.value);
    filterData(searchMachine, searchOrder, searchStartDate, e.target.value);
  };

  // Filtering function
  const filterData = (machine, order, startDate, endDate) => {
    const filtered = data.filter((row) => {
      const rowStartDate = new Date(row.inicio);
      const rowEndDate = new Date(row.fin);

      return (
        row.maquina.toLowerCase().includes(machine) &&
        row.orden.toLowerCase().includes(order) &&
        (startDate === "" || rowStartDate >= new Date(startDate)) &&
        (endDate === "" || rowEndDate <= new Date(endDate))
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

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

// Calculate the current entries to display based on pagination
const currentEntries = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const totalPages = Math.ceil(filteredData.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
    // Fetch the correct slice of filtered data for the current page
    setFilteredData(data.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage));
  }
};

  return (
    <div className="bg-gray-200 min-h-screen px-4 sm:px-4">
      {/* Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Máquina</label>
          <input
            type="text"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            placeholder="Filtro Máquina"
            value={searchMachine}
            onChange={handleSearchMachine}
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Orden</label>
          <input
            type="text"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            placeholder="Filtro Orden"
            value={searchOrder}
            onChange={handleSearchOrder}
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Inicio</label>
          <input
            type="date"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            value={searchStartDate}
            onChange={handleSearchStartDate}
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Fin</label>
          <input
            type="date"
            className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-100 rounded"
            value={searchEndDate}
            onChange={handleSearchEndDate}
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
            className="bg-green-500 h-[30px] text-xs text-white px-4 py-1 rounded-lg hover:bg-green-600"
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
                {["orden", "maquina", "motivo", "inicio", "fin", "duracion", "comentarios"].map((header, index) => (
                  <th
                    key={header}
                    className="text-white font-semibold text-[12px] px-4 py-2 text-left cursor-pointer"
                    onClick={() => handleSort(header)}
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      <span className="material-symbols-outlined">unfold_more</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs">
              {filteredData.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-4 py-2 border-b-[1px]">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleSelectRow(index)}
                    />
                  </td>
                  <td className="px-4 py-2 border-b-[1px]">{row.orden}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.maquina}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.motivo}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.inicio}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.fin}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.duracion}</td>
                  <td className="px-4 py-2 border-b-[1px]">{row.comentarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

          {/* Pagination */}
          <div className="pt-4 pb-1 border-b flex justify-between">
          <p className="text-left text-gray-400 text-[10px]">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} Entries
          </p>
          <div className="flex gap-[2px]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`text-[10px] text-gray-400  px-2 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "hover:bg-blue-570"}`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`text-[10px] text-gray-400  px-2 py-2 rounded ${currentPage === index + 1 ? "bg-blue-570 text-white" : "hover:bg-gray-300"}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`text-[10px] text-gray-400  px-2 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "hover:bg-blue-570"}`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
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
