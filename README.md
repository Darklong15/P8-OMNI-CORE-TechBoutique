# Práctica 8 - OMNI CORE: TechBoutique

Aplicación web de catálogo premium desarrollada con React + Vite. Este proyecto documenta no solo el desarrollo frontend, sino también la resolución de conflictos técnicos avanzados (DevOps) y la integración de servicios en la nube para optimización de recursos.

## Datos del Alumno
- **Estudiante:** Eriberto Orozco Rosas
- **Profesor:** Zeus Emmanuel Gutierrez Cobian
- **Materia:** Desarrollo Web
- **Calendario:** 2026A
- **Institución:** CUCEI – Universidad de Guadalajara

## Objetivo
Desarrollar una interfaz moderna para una Tech Boutique, implementando optimización de imágenes mediante Cloudinary y dominando el flujo de CI/CD entre GitHub y Vercel, superando las barreras de configuración de entornos Monorepo.

---

## 🔗 Enlaces del Proyecto
- **Repositorio GitHub:** [https://github.com/Darklong15/P8-OMNI-CORE-TechBoutique](https://github.com/Darklong15/P8-OMNI-CORE-TechBoutique)
- **Despliegue en Vivo (Vercel):** [https://p8-omni-core-tech-boutique-mockup-sandbox-olw3-n05henuur.vercel.app](https://p8-omni-core-tech-boutique-mockup-sandbox-olw3-n05henuur.vercel.app)

---

## 🛠 Tecnologías e Integraciones
- **React 19 + Vite:** Entorno de alto rendimiento.
- **Tailwind CSS:** Diseño responsivo y estético.
- **Cloudinary (CDN):** Gestión de assets de hardware y logos institucionales para optimizar el tiempo de carga (LCP).
- **Replit Agent (AI):** Uso de inteligencia artificial para la generación de estructuras base.
- **Vercel:** Pipeline de despliegue continuo.

---

## 💻 Guía de Comandos Git Utilizados
Durante el desarrollo, se utilizaron los siguientes comandos en la terminal (Shell) para sincronizar el progreso con el repositorio remoto:

1. **Preparar archivos:** `git add .` (Agrega todos los cambios al área de preparación).
2. **Confirmar cambios:** `git commit -m "mensaje descriptivo"` (Crea un punto de restauración con una nota).
3. **Subir a la nube:** `git push` (Envía los cambios a GitHub y dispara el despliegue en Vercel).
4. **Verificar estado:** `git status` (Para revisar qué archivos faltaban por subir).

---

## 📜 Historial de Commits (Control de Versiones)
Se mantuvo un registro de cambios significativo para solucionar errores de entorno:
- `fix: bypass typecheck para vercel`: Eliminación de pruebas estrictas que bloqueaban el build.
- `fix: inyectar variables PORT y BASE_PATH`: Solución para los requisitos del script de Replit en Vercel.
- `feat: actualizado logo cucei y fotos de hardware`: Integración de URLs de Cloudinary.
- `fix: eliminar vercel.json de replit`: Solución definitiva al error 404 en el despliegue.
- `docs: reporte detallado de errores y soluciones`: Finalización de la documentación.

---

## 🛠 Bitácora de Resolución de Errores (DevOps)

El despliegue en Vercel enfrentó 4 grandes obstáculos técnicos:

1. **Error de Variables Requeridas:** La configuración de Vite exigía un puerto activo. Se solucionó forzando el comando de construcción: `PORT=5173 BASE_PATH=/ vite build`.
2. **Estructura Monorepo:** Vercel se perdía entre las carpetas de "artefactos". Se ajustó el **Root Directory** a `artifacts/omni-core`.
3. **Ruta de Salida Incorrecta:** Los archivos compilados se guardaban en una subcarpeta profunda. Se configuró el **Output Directory** a `dist/public`.
4. **Error 404 (Sabotaje de vercel.json):** Replit generó un archivo de configuración para backend que rompía el ruteo del frontend. Se eliminó el archivo para permitir el funcionamiento de la SPA.

---

## Conclusiones
Esta práctica permitió dominar el flujo completo de una aplicación profesional. Desde el uso de **Cloudinary** para no saturar el servidor con imágenes pesadas, hasta la capacidad de diagnosticar y "parchear" errores de compilación en servidores remotos. El uso de la IA de Replit fue una herramienta de aceleración, pero la resolución de problemas manual fue lo que permitió llevar el proyecto a producción con éxito.
