# 📦 Proyecto de Ecommerce

Este es un proyecto desarrollado con **React**, **Vite** y **Firebase**, que permite listar productos, ver sus detalles, agregar items al carrito y finalizar la compra.  
Incluye diseño con **MUI Joy UI**, navegación con **React Router**, y manejo global del carrito mediante **Context API**.

---

![imageApp](/public/captura-readme.png)

## 🚀 Tecnologías utilizadas

- **React 19**
- **Vite**
- **Firebase Firestore**
- **React Router Dom**
- **Context API**
- **MUI Joy UI**
- **Bootstrap / React-Bootstrap**

---

## ⚙️ Instalación

1. Clonar el repositorio:
2. Entrar en la carpeta del proyecto: cd reac-coder
3. Instalar las dependencias: npm install
4. Iniciar el proyecto en modo desarrollo: npm run dev


## 📁 Estructura del proyecto

src/
 ├── components/      # Componentes reutilizables
 ├── context/         # Context API del carrito
 ├── pages/           # Páginas con rutas
 ├── service/         # Configuración de Firebase
 ├── App.jsx
 └── main.jsx

## 🔥 Firebase

El proyecto utiliza Firebase Firestore para:

1. obtener productos del catálogo
2. guardar órdenes en el checkout

## Debes configurar tus credenciales en:

- **src/service/firebase.js**

## 🛒 Funcionalidades

✔ Listado de productos
✔ Vista de detalle
✔ Carrito funcional (agregar, eliminar, vaciar)
✔ Cálculo automático del total
✔ Checkout con Firestore
✔ Componentes estilizados con Joy UI
✔ Navegación con React Router