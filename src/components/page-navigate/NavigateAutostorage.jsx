import React from "react";
import { Factory, Warehouse } from "lucide-react";

export const menuAutoStorage = (navigate) => [
  {
    key: "1",
    icon: <Factory size={16} />,
    label: "Monitor",
    onClick: () => navigate("/auto-storage"),
  },
  {
    key: "2",
    icon: <Warehouse size={16} />,
    label: "Inbound",
    onClick: () => navigate("/auto-storage/inbound"),
  },
  {
    key: "3",
    icon: <Warehouse size={16} />,
    label: "Outbound",
    onClick: () => navigate("/auto-storage/outbound"),
  },
  {
    key: "4",
    icon: <Factory size={16} />,
    label: "Cycle Count",
    onClick: () => navigate("/auto-storage/cycle-count"),
  },
  {
    key: "5",
    icon: <Factory size={16} />,
    label: "Adjust Stock",
    onClick: () => navigate("/auto-storage/adjust-stock"),
  },
  {
    key: "6",
    icon: <Factory size={16} />,
    label: "Refill",
    onClick: () => navigate("/auto-storage/refill"),
  },
];

export const pathToKeyAutostorage = {
  "/auto-storage": "1",
  "/auto-storage/inbound": "2",
  "/auto-storage/outbound": "3",
  "/auto-storage/cycle-count": "4",
  "/auto-storage/adjust-stock": "5",
  "/auto-storage/refill": "6",
};
