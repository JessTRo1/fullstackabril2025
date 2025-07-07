# 📝 Blog App - Full Stack MERN con Next.js

Este es un proyecto completo de blog con autenticación, creación y edición de publicaciones, subida de imágenes en Base64, y control de permisos por rol (usuario normal y administrador).

---

## 🚀 Descripción del proyecto

Esta aplicación permite:

- Registrarse e iniciar sesión
- Crear, editar y eliminar publicaciones (con imagen y contenido)
- Visualizar posts públicos
- Gestión de permisos:
  - Los **usuarios normales** pueden crear y editar **sus propios posts**
  - Los **administradores** pueden editar o eliminar **todos los posts**

---

## 🛠️ Tecnologías utilizadas

### Frontend
- [Next.js 14](https://nextjs.org/)
- React
- SCSS con metodología BEM
- Context API para autenticación
- Fetch API para comunicación con el backend

### Backend
- API Routes de Next.js (dentro del mismo proyecto)
- MongoDB Atlas (Base de datos en la nube)
- Mongoose
- JWT para autenticación
- bcryptjs para hashear contraseñas

---

## 🧑‍💻 Instrucciones de instalación y ejecución

### Clonar el repositorio

```bash
git clone https://github.com/JesSToRo1/fullstackabril2025/dia38.git

vercel link: https://fullstackabril2025.vercel.app/