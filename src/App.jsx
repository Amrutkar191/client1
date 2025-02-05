import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LoginPage from "./components/Login";
import DashboardContent from "./components/DashboardContent";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Control_header from "./components/Control_header";
import C_Consumos from "./components/C_Consumos";
import C_Etiquetas from "./components/C_Etiquetas";
import Orden from "./components/Orden";
import Scrap from "./components/Scrap";
import Averias from "./components/Averias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/dashboard/*"
          element={
            <div className="flex h-screen bg-gray-200 overflow-auto">
              <div className="w-[0vw] lg:w-[15.5vw]">
                <Sidebar />
              </div>
              <div className="w-[100vw] lg:w-[84.5vw] flex flex-col overflow-x-hidden overflow-y-scroll">
                <Header />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<DashboardContent />} />
                    <Route
                      path="control/*"
                      element={
                        <>
                          <Control_header />
                          <Routes>
                            <Route path="/orden" element={<Orden />} />
                            <Route path="/Scrap" element={<Scrap />} />
                            <Route path="/Averias" element={<Averias />} />
                            <Route path="/consumos" element={<C_Consumos />} />
                            <Route path="/etiquetas" element={<C_Etiquetas />} />
                          </Routes>
                        </>
                      }
                    />
                  </Routes>
                </div>
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
