import React from "react";
import { RotateCcw, Star, FolderKanban, SlidersVertical } from "lucide-react";

export const menuReport = (navigate) => [
  {
    key: "1",
    icon: <RotateCcw size={16} />,
    label: "Report",
    onClick: () => navigate("/report"),
  },
];

export const pathToKeyReport = {
  "/rreport": "1",
};
