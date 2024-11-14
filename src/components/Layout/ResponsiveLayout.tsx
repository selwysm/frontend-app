import React from "react";
import "./ResponsiveLayout.css";
import { ResponsiveLayoutProps } from "@/utils/interfaces";

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h2>Aplicación de Gestión de Gastos</h2>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        <p>© 2024 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
