# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📚 Gestor de Lecturas Pendientes

Aplicación web desarrollada en **React + Vite** para gestionar lecturas pendientes, como libros, novelas o mangas. Permite añadir, filtrar, marcar como completadas y visualizar el detalle de cada lectura. Además, incorpora un sistema de **tema claro/oscuro** con persistencia en localStorage.

---

##  Tecnologías utilizadas

- React
- Vite
- React Router DOM
- React Context API
- useRef, useState, useEffect
- localStorage
- FontAwesome (iconos)
- CSS modular con modo oscuro

---

##  Estructura 

```bash
src/
├── components/
│   ├── NavBar.jsx            # Menú de navegación
│   └── ReadingForm.jsx       # Formulario para nueva lectura
├── context/
│   ├── ReadingContext.jsx    # Estado global de lecturas
│   └── ThemeContext.jsx      # Control del tema claro/oscuro
├── pages/
│   ├── Home.jsx              # Página principal (listado)
│   ├── NewReading.jsx        # Página de formulario
│   └── ReadingPage.jsx       # Página de detalle por ID
├── styles/
│   └── index.css             # Estilos globales y modo oscuro
├── App.jsx                   # Rutas principales
└── main.jsx                  # Entrada de la app
