import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DashboardContent() {
  const [isdbo, setdbo] = useState(false);
  const [alerts, setAlerts] = useState([
    { timestamp: '2024-10-30 06:21:45', tipo: 'Tipo1', descripcion: 'Descripción de alerta 1' },
    { timestamp: '2024-10-30 06:48:35', tipo: 'Tipo2', descripcion: 'Descripción de alerta 2' },
    { timestamp: '2024-10-30 07:11:06', tipo: 'Tipo3', descripcion: 'Descripción de alerta 3' },
    { timestamp: '2024-10-30 07:15:25', tipo: 'Tipo4', descripcion: 'Descripción de alerta 4' },
    { timestamp: '2024-10-30 07:18:36', tipo: 'Tipo5', descripcion: 'Descripción de alerta 5' },
    { timestamp: '2024-10-30 07:21:49', tipo: 'Tipo6', descripcion: 'Descripción de alerta 6' },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  useEffect(() => {
    toast.success("Welcome to the Dashboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  }, []);

  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'ascending'
        ? 'descending'
        : 'ascending';

    const sortedAlerts = [...alerts].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setAlerts(sortedAlerts);
    setSortConfig({ key, direction });
  };

  const getArrowClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending"
        ? "rotate-180 transform origin-center transition-transform duration-200"
        : "transform origin-center transition-transform duration-200";
    }
    return "transform origin-center";
  };
  

  return (
    <div className="ml-[5px] sm:ml-[10px] lg:ml-[20px] flex flex-col w-[99vw] lg:w-[84vw] bg-gray-200 ">
      <div className="flex gap-[12px] items-center mt-4 mb-6">
        <h2 className="text-lg md:text-2xl font-bold text-black">Dashboard</h2>
        <span className="material-symbols-outlined text-gray-400 bg-gray-200 p-2 rounded-full cursor-pointer text-base md:text-xl">
          edit
        </span>
      </div>

      <div className="bg-white rounded-lg shadow p-4  md:p-3 w-[97.8vw] lg:w-[82.5vw] overflow-x-auto">
        <div className="flex gap-[12px] items-center pb-4 border-b">
          <p className="text-sm md:text-lg font-bold text-black">dbo.Alertas</p>
          <span
            className={`material-symbols-outlined text-lg md:text-xl cursor-pointer ${isdbo ? 'rotate-180' : ''} transition-transform`}
            onClick={() => setdbo(!isdbo)}
          >
            keyboard_arrow_down
          </span>
        </div>

        {!isdbo && (
          <table className="table-auto w-full mt-4 text-left border-collapse">
            <thead className="bg-blue-580 text-white  ">
              <tr>
                <th
                  className="p-2 md:p-3 text-[12px] sm:text-sm md:text-base font-semibold cursor-pointer rounded-tl-lg"
                  onClick={() => sortData('timestamp')}
                >
                  Timestamp
                  <div className={`inline-block ml-1   ${getArrowClass('timestamp')}`}>
                    <span className="material-symbols-outlined relative top-1 text-base sm:text-lg md:text-xl">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 md:p-3 text-[12px] sm:text-sm md:text-base font-semibold cursor-pointer"
                  onClick={() => sortData('tipo')}
                >
                  Tipo
                  <div className={`inline-block ml-1  ${getArrowClass('tipo')}`}>
                    <span className="material-symbols-outlined relative top-1 text-base sm:text-lg md:text-xl">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th
                  className="p-2 md:p-3 text-[12px] sm:text-sm md:text-base font-semibold cursor-pointer rounded-tr-lg"
                  onClick={() => sortData('descripcion')}
                >
                  Descripción
                  <div className={`inline-block ml-1  ${getArrowClass('descripcion')}`}>
                    <span className="material-symbols-outlined relative top-1 text-base sm:text-lg md:text-xl ">
                      unfold_more
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="p-2 md:p-3 text-[11px] sm:text-sm md:text-base">{alert.timestamp}</td>
                  <td className="p-2 md:p-3 text-[11px] sm:text-sm md:text-base">{alert.tipo}</td>
                  <td className="p-2 md:p-3 text-[11px] sm:text-sm md:text-base">{alert.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
