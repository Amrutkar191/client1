 import { Link, useLocation } from "react-router-dom";
 import { useState } from "react";
 import logo from '../assets/companyLogo.jpg'

 export default function Sidebar() {
   const location = useLocation();
   const [isProduccionOpen, setProduccionOpen] = useState(false);
   const [isCalidadOpen, setCalidadOpen] = useState(false);
   const [isMantenimientoOpen, setMantenimientoOpen] = useState(false);
   const [isSlideOpen, setSlideOpen] = useState(false);

   const handleSlide = () => setSlideOpen((prev) => !prev);
   const toggleProduccion = () => setProduccionOpen(!isProduccionOpen);
   const toggleCalidad = () => setCalidadOpen(!isCalidadOpen);
   const toggleMantenimiento = () => setMantenimientoOpen(!isMantenimientoOpen);

   return (
     <>
       <button
         className={`lg:hidden fixed top-4 left-4 z-50 text-gray-700 bg-white p-2 rounded-md shadow-md ${isSlideOpen ? `hidden`:`block`}`}
         onClick={handleSlide}
       >
         ☰
       </button>

       <aside
         className={`lg:min-w-[200px] lg:w-[15.5vw] overflow-y-auto bg-white text-blue-500 h-full shadow-lg fixed left-0 top-0 scrollbar-hide transition-transform duration-500 ${
           isSlideOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
         }`}
       >
         <div className="flex items-center justify-between px-4 h-[73px] border-b border-gray-200 bg-white">
           <img
             src={logo}
             className="h-[60px] w-[90px] md:h-[70px] md:w-[100px] object-contain"
             alt="Logo"
           />
           <span
             className=" material-symbols-outlined lg:hidden text-gray-500 cursor-pointer text-[26px] md:text-[22px]"
             onClick={handleSlide}
           >
             {isSlideOpen ? `close` : ""}
           </span>

 
         </div>

         <div className="uppercase font-bold flex items-center font-sans h-[64px] pt-[2px] w-[12.5vw] border-b-[0.9px] border-gray-200 ml-[1.7vw] text-[11.5px]">
<Link to="/Dashboard">Dashboard</Link>
</div> 
         <nav className="mt-5">
           <ul>
             <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
               <p>PRODUCCIÓN</p>
               <span
                 className={`material-symbols-outlined text-blue-580 cursor-pointer transition-transform ${
                   isProduccionOpen ? "rotate-180" : ""
                 }`}
                 onClick={toggleProduccion}
               >
                 keyboard_arrow_up
               </span>
             </li>
             {isProduccionOpen && (
               <div className="pl-4">
                 {[
                   { to: "/Dashboard/monitorizacion", icon: "browse_activity", text: "Monitorización" },
                   { to: "/Dashboard/historico", icon: "history", text: "Histórico" },
                   { to: "/Dashboard/control/orden", icon: "settings", text: "Control" },
                   { to: "/Dashboard/planificar", icon: "date_range", text: "Planificar" },
                   { to: "/Dashboard/automatizar", icon: "autostop", text: "Automatizar" },
                 ].map(({ to, icon, text }) => (
                   <li
                     key={to}
                     className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                       location.pathname === to ? "text-black" : "text-gray-450"
                     }`}
                   >
                     <span className={`material-symbols-outlined text-lg ${
                       location.pathname === to ? "text-blue-500" : "text-gray-450"
                     }`}>{icon}</span>
                     <Link to={to}>{text}</Link>
                   </li>
                 ))}
               </div>
             )}
             <li className="mt-5 w-full border-b border-gray-300"></li>

             {/* Calidad Section */}
             <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
               <p>CALIDAD</p>
               <span
                 className={`material-symbols-outlined text-blue-580 cursor-pointer transition-transform ${
                   isCalidadOpen ? "rotate-180" : ""
                 }`}
                 onClick={toggleCalidad}
               >
                 keyboard_arrow_up
               </span>
             </li>
             {isCalidadOpen && (
               <div className="pl-4">
                 {[
                   { to: "/Dashboard/calidad/submenu1", icon: "widgets", text: "Submenu1" },
                   { to: "/Dashboard/calidad/submenu2", icon: "widgets", text: "Submenu2" },
                 ].map(({ to, icon, text }) => (
                   <li
                     key={to}
                     className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                       location.pathname === to ? "text-black" : "text-gray-450"
                     }`}
                   >
                     <span className={`material-symbols-outlined text-lg ${
                       location.pathname === to ? "text-blue-500" : "text-gray-450"
                     }`}>{icon}</span>
                     <Link to={to}>{text}</Link>
                   </li>
                 ))}
               </div>
             )}
             <li className="mt-5 w-full border-b border-gray-300"></li>

             {/* Mantenimiento Section */}
             <li className="uppercase font-extrabold text-gray-700 flex justify-between items-center px-4 text-[12px]">
               <p>MANTENIMIENTO</p>
               <span
                 className={`material-symbols-outlined text-blue-580 cursor-pointer transition-transform ${
                   isMantenimientoOpen ? "rotate-180" : ""
                 }`}
                 onClick={toggleMantenimiento}
               >
                 keyboard_arrow_up
               </span>
             </li>
             {isMantenimientoOpen && (
               <div className="pl-4">
                 {[
                   { to: "/Dashboard/mantenimiento/submenu1", icon: "widgets", text: "Submenu1" },
                   { to: "/Dashboard/mantenimiento/submenu2", icon: "widgets", text: "Submenu2" },
                 ].map(({ to, icon, text }) => (
                   <li
                     key={to}
                     className={`mt-5 flex items-center gap-4 text-sm font-medium cursor-pointer ${
                       location.pathname === to ? "text-black" : "text-gray-450"
                     }`}
                   >
                     <span className={`material-symbols-outlined text-lg ${
                       location.pathname === to ? "text-blue-500" : "text-gray-450"
                     }`}>{icon}</span>
                     <Link to={to}>{text}</Link>
                   </li>
                 ))}
               </div>
             )}
             <li className="mt-5 w-full border-b border-gray-300"></li>
           </ul>
         </nav>
       </aside>
     </>
   );
 }
