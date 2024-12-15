import Report from "./Report";
import { Route, Routes } from "react-router-dom";

const ReportRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Report />} />
      </Routes>
    </>
  );
};

export default ReportRoutes;
