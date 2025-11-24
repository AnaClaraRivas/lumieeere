// src/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { pegarSessao } from "./auth";

export default function ProtectedRoute({ children }) {
  const usuario = pegarSessao();
  if (!usuario) return <Navigate to="/login" replace />;
  return children;
}
