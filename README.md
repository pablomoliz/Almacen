# 📦 App de Gestión de Inventario para un Amacén

## 📌 Descripción
Esta es una aplicación móvil desarrollada con **React Native y Expo** que permite a un grupo de amigos gestionar las compras y el inventario de un cortijo compartido. 

## 🎯 Objetivo
Facilitar el control de los productos disponibles en el cortijo, clasificándolos en perecederos y no perecederos, permitiendo modificar cantidades y agregar imágenes a los productos.

## ✨ Características
- 📋 **Inventario de productos** con imagen y cantidad.
- ➕➖ **Botones para aumentar o disminuir cantidades** fácilmente.
- 🖼 **Añadir imágenes a los productos**.
- 📝 **Editar o eliminar productos existentes**.
- 🛍 **Clasificación de productos** en perecederos y no perecederos.
- 💾 **Almacenamiento local con AsyncStorage** (posible integración futura con Firebase).

## 🛠 Tecnologías Utilizadas
- **React Native** con **Expo** para desarrollo multiplataforma.
- **AsyncStorage** para almacenamiento local de datos.
- **NativeWind** para estilos con Tailwind en React Native.

## 📂 Estructura del Proyecto
```
mi-app/
│── src/
│   ├── components/   # Componentes reutilizables
│   ├── screens/      # Pantallas principales
│   ├── assets/       # Imágenes y recursos
│   ├── App.js        # Archivo principal de la app
│── package.json      # Dependencias del proyecto
│── README.md         # Documentación del proyecto
```

## 🚀 Instalación y Ejecución
### 🔹 Prerrequisitos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

### 🔹 Clonar el repositorio
```sh
git clone https://github.com/tu-usuario/mi-app.git
cd mi-app
```

### 🔹 Instalar dependencias
```sh
npm install
```

### 🔹 Ejecutar la aplicación
```sh
npx expo start
```

📱 **Para probar en un móvil**:
- Instalar la app **Expo Go** en Android o iOS.
- Escanear el código QR que aparece en la terminal.

## 📅 Plan de Desarrollo
### 🟢 **Fase 1: Configuración inicial**
- [x] Crear el proyecto en React Native con Expo.
- [x] Configurar el entorno de desarrollo.

### 🟡 **Fase 2: Desarrollo del Inventario**
- [ ] Pantalla principal con lista de productos.
- [ ] Botones `+` y `-` para modificar cantidades.
- [ ] Diferenciar entre productos perecederos y no perecederos.

### 🟠 **Fase 3: Gestión de productos**
- [ ] Agregar y editar productos (nombre, imagen, tipo, cantidad).
- [ ] Guardar datos en AsyncStorage o Firebase.

### 🔵 **Fase 4: Mejoras y optimización**
- [ ] Mejorar la interfaz visual.
- [ ] Optimizar el rendimiento.

## 📌 Próximas Mejoras
- 🔔 Notificaciones cuando un producto esté por agotarse.
- 📊 Historial de compras.
- ☁️ Sincronización en la nube para compartir datos entre amigos.
s
## 👨‍💻 Autor
**Paolo y Pablo** 
