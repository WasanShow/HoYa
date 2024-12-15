import React from "react";
import { Coins, Star, FolderKanban, SlidersVertical } from "lucide-react";

export const menuMold = (navigate) => [
  {
    key: "1",
    icon: <Star size={16} />,
    label: "Mold Master",
    onClick: () => navigate("/mold-master"),
  },
];

export const pathToKeyMold = {
  "/mold-master": "1",
};
