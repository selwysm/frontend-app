// src/components/ResponsiveLayout.tsx
import React from 'react';
import './ResponsiveLayout.css'; // Importamos los estilos personalizados

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>Aplicación de Gestión de Gastos</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <p>© 2024 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default ResponsiveLayout;
