# EliteTech 🚀

## Descripción

EliteTech es una landing page moderna construida con las últimas tecnologías web. Utiliza una arquitectura cliente-servidor con React en el frontend y Node.js/Express en el backend.

## 🛠️ Tecnologías Utilizadas

### Frontend
- React 18
- Vite
- TypeScript
- Lucide React (para iconos)
- React DOM

### Backend
- Node.js
- Express.js
- MongoDB con Mongoose
- CORS
- dotenv (para variables de entorno)

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- MongoDB instalado y ejecutándose localmente (o una URI de MongoDB en Railway o MongoDB Atlas)

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com:JeinderAbanero/elite_tech.git
   cd elitetech
   ```

2. **Instalar todas las dependencias**
   ```bash
   npm run install:all
   ```

3. **Configurar las variables de entorno**
   - Crea un archivo `.env` en la carpeta backend
   ```env
   MONGODB_URI=tu_uri_de_mongodb
   PORT=5000
   ```
   - Crea un archivo `.env` en la carpeta frontend
   ```env
   VITE_API_URL=http://localhost:5000
   ```

## 🖥️ Uso

### Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Este comando iniciará tanto el servidor frontend (Vite) como el backend (Node.js) concurrentemente.

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Producción

1. **Construir el frontend**
   ```bash
   npm run frontend:build
   ```

2. **Iniciar el servidor de producción**
   ```bash
   npm run backend:start
   ```

## 🗂️ Estructura del Proyecto

```
elitetech/
├── frontend/          # Aplicación React + Vite
│   └── src/          # Código fuente del frontend
├── backend/          # Servidor Node.js + Express
│   ├── models/      # Modelos de Mongoose
│   ├── routes/      # Rutas de la API
│   └── server.js    # Punto de entrada del servidor
└── package.json     # Dependencias y scripts principales
```

## 🔀 Flujo de Trabajo Git Recomendado

1. Crear una nueva rama para cada feature
   ```bash
   git checkout -b feature/nombre-feature
   ```

2. Realizar commits con mensajes descriptivos
   ```bash
   git commit -m "feat: añade funcionalidad de login"
   ```

3. Hacer push y crear un Pull Request
   ```bash
   git push origin feature/nombre-feature
   ```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el entorno de desarrollo completo
- `npm run frontend:dev` - Inicia solo el frontend en modo desarrollo
- `npm run backend:dev` - Inicia solo el backend en modo desarrollo
- `npm run frontend:build` - Construye el frontend para producción
- `npm run backend:start` - Inicia el servidor de backend en producción
- `npm run install:all` - Instala todas las dependencias (root, frontend y backend)



## 👥 Autor

- **Jeinder Abanero** - *Trabajo Inicial* - [@JeinderAbanero](https://github.com/JeinderAbanero/)

## 📞 Soporte

Si tienes alguna pregunta o problema:

1. Revisa la [documentación](link-a-docs)
2. Abre un [issue](https://github.com/JeinderAbanero/elite_tech/issues)
3. Contacta al autor

## 🙏 Agradecimientos

- Documentación de las librerías utilizadas
- Inspiración

---
⌨️ con ❤️ por [Jeinder Abbanero](https://github.com/JeinderAbanero/)
