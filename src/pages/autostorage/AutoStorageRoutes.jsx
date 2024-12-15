import Monitor from "./Monitor";
import Inbound from "./Inbound";
import Outbound from "./Outbound";
import CycleCount from "./CycleCount";
import AdjustStock from "./AdjustStock";
import Refill from "./Refill";
import { Route, Routes } from "react-router-dom";

const AutoStorageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Monitor />} />
      <Route path="/inbound" element={<Inbound />} />
      <Route path="/outbound" element={<Outbound />} />
      <Route path="/cycle-count" element={<CycleCount />} />
      <Route path="/adjust-stock" element={<AdjustStock />} />
      <Route path="/refill" element={<Refill />} />
    </Routes>
  );
};

export default AutoStorageRoutes;
