# Frontend App

Este es el frontend para la aplicación de gestión de gastos. Desarrollado en React y Next.js, permite a los usuarios gestionar sus gastos mediante funcionalidades de creación, edición, eliminación y visualización, con una interfaz moderna y responsiva.

## Tecnologías Utilizadas

- React: Librería para construir interfaces de usuario.
- Next.js: Framework de React para aplicaciones optimizadas, con soporte para SSR.
- Bootstrap: Framework CSS para una interfaz moderna y responsiva.
- Axios: Librería para hacer solicitudes HTTP.
- React Icons: Paquete de iconos personalizados.
- TypeScript: Superset de JavaScript que añade tipado estático.

## Requisitos Previos

- Node.js: Requiere Node.js v18 o superior.
- npm o yarn: Gestor de paquetes.
- Un archivo `.env.local` configurado con tus variables de entorno


## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/selwysm/frontend-app.git
   cd frontend-app

2. Instalacion de dependencias:
    ```bash
   npm install
   
## Configuración
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

NEXT_PUBLIC_API_BASE_URL=https://backend-api-o7nd.onrender.com/api/  ( o tu url de tu api de backend)



## Scripts Disponibles
En el archivo package.json se incluyen los siguientes scripts:
- npm run start:  Inicia el servidor en modo de producción.
- npm run dev: Ejecuta el proyecto en modo de desarrollo 
- npm run build: Genera una versión optimizada para producción
- npm run lint : Ejecuta el linter para verificar errores de código.


## Uso
Ejecución en Modo de Desarrollo
```bash
npm run dev

