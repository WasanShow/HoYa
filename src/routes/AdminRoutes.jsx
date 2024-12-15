import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import User from "../pages/user/User";
import NotFound from "../pages/NotFound";
import CompanyInfoRoutes from "../pages/company/CompanyInfoRoutes";
import MoldRoutes from "../pages/mold/MoldRoutes";
import AutoStorageRoutes from "../pages/autostorage/AutoStorageRoutes";
import DashboardRoutes from "../pages/dashboard/DashboardRoutes";
import LocationRoutes from "../pages/location/LocationRoutes";
import ProductPlanRoutes from "../pages/productplan/ProductPlanRoutes";
import MobileShelfRoutes from "../pages/mobileshelf/MobileShelfRoutes";
import MoldManageRoutes from "../pages/moldmanage/MoldManageRoutes";
import RelocateRoutes from "../pages/relocate/RelocateRoutes";
import ReportRoutes from "../pages/report/ReportRoutes";

// const AdminRoutes = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (!user || user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <AdminLayout>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/company-info/*" element={<CompanyInfoRoutes />} />
//         <Route path="/mold/*" element={<MoldRoutes />} />
//         <Route path="/warehouse-detail" element={<WarehouseDetail />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/cycle-count" element={<CycleCount />} />
//         <Route path="/location" element={<Location />} />
//         <Route path="/product-plan" element={<ProductPlan />} />
//         <Route path="/refill" element={<Refill />} />
//         <Route path="/*" element={<NotFound />} />
//         <Route path="/auto-storage/" element={<AutoStorageRoutes />} />
//       </Routes>
//     </AdminLayout>
//   );
// };

// export default AdminRoutes;

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return children;
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<ProtectedRoute><DashboardRoutes /></ProtectedRoute>} />
        <Route path="/company-info/*" element={<ProtectedRoute><CompanyInfoRoutes /></ProtectedRoute>} />
        <Route path="/mold-master/*" element={<ProtectedRoute><MoldRoutes /></ProtectedRoute>} />
        <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>} />
        <Route path="/auto-storage/*" element={<ProtectedRoute><AutoStorageRoutes /></ProtectedRoute>} />
        <Route path="/location/*" element={<ProtectedRoute><LocationRoutes /></ProtectedRoute>} />
        <Route path="/product-plan/*" element={<ProtectedRoute><ProductPlanRoutes /></ProtectedRoute>} />
        <Route path="/mobile-shelf/*" element={<ProtectedRoute><MobileShelfRoutes /></ProtectedRoute>} />
        <Route path="/management/*" element={<ProtectedRoute><MoldManageRoutes /></ProtectedRoute>} />
        <Route path="/relocate/*" element={<ProtectedRoute><RelocateRoutes /></ProtectedRoute>} />
        <Route path="/report/*" element={<ProtectedRoute><ReportRoutes /></ProtectedRoute>} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;


