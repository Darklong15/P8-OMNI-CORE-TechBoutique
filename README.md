# Práctica 8 - OMNI CORE: TechBoutique

**OMNI CORE** es una aplicación web de catálogo premium diseñada para una *Tech Boutique*, desarrollada bajo el ecosistema **React 19 + Vite**. Este proyecto documenta no solo el desarrollo frontend, sino también la implementación de flujos **DevOps**, optimización de recursos en la nube mediante **Cloudinary** y la resolución de conflictos técnicos avanzados para asegurar un despliegue exitoso en **Vercel**.

---

## ✅ Lista de Requisitos Cumplidos (Checklist)
- [x] **Modalidad:** Individual.
- [x] **Origen:** Selección de un negocio real desde Google Maps.
- [x] **IA Generativa:** Uso de ChatGPT para ingeniería de prompts y Replit Agent para la estructura base.
- [x] **Modificación de Assets:** Sustitución de imágenes por defecto por hardware real y optimización de logotipos.
- [x] **Funcionalidad:** Implementación de un formulario de contacto funcional con diseño corporativo.
- [x] **Identidad Institucional:** Footer personalizado con datos del alumno, profesor y logo de CUCEI.
- [x] **Control de Versiones:** Repositorio público en GitHub con historial de cambios significativo.
- [x] **Despliegue:** Proyecto activo y funcional en Vercel mediante integración CI/CD.

---

## 👤 Datos del Alumno
* **Estudiante:** Eriberto Orozco Rosas
* **Profesor:** Zeus Emmanuel Gutierrez Cobian
* **Materia:** Desarrollo Web
* **Calendario:** 2026A
* **Institución:** Universidad de Guadalajara – CUCEI

---

## 🔗 Enlaces del Proyecto
* **Repositorio GitHub:** https://github.com/Darklong15/P8-OMNI-CORE-TechBoutique
* **Despliegue en Vivo (Vercel):** https://p8-omni-core-tech-boutique-mockup-sandbox-olw3-n05henuur.vercel.app

---

## 🛠 Tecnologías e Integraciones
* **React 19 + Vite:** Entorno de desarrollo de ultra-alto rendimiento.
* **Tailwind CSS:** Diseño responsivo basado en utilidades y estética *dark-mode* moderna.
* **Cloudinary (CDN):** Gestión de assets de hardware y logotipos institucionales. Se utiliza para optimizar el **Largest Contentful Paint (LCP)** mediante la entrega de imágenes en formato `.webp`.
* **Replit Agent (AI):** Uso de inteligencia artificial para la generación de la arquitectura inicial y lógica de componentes.
* **Vercel:** Pipeline de despliegue continuo (CD) vinculado a la rama principal de GitHub.

---

## 💻 Guía de Comandos Git Utilizados
Se utilizó la terminal (Shell) de Replit para gestionar el control de versiones con los siguientes comandos:

* **Preparar archivos:** `git add .`
* **Confirmar cambios:** `git commit -m "mensaje descriptivo"`
* **Subir a la nube:** `git push` (Dispara automáticamente el build en Vercel).
* **Verificar estado:** `git status`

---

## 📜 Historial de Commits (Control de Versiones)
El repositorio refleja la evolución técnica del proyecto a través de los siguientes hitos:

1. `Enlarge the CUCEI logo and update the browser tab icon`: Ajustes finales de identidad visual y branding.
2. `Update product images in the catalog`: Sustitución de assets genéricos por fotos reales de hardware (AORUS, TRX40) mediante Cloudinary.
3. `Delete vercel.json`: Eliminación de archivos de configuración redundantes de Replit que generaban conflictos de ruteo.
4. `fix: bypass typecheck para vercel`: Desactivación de pruebas estrictas en el build para asegurar la disponibilidad del sitio.
5. `Update contact form to a premium corporate design`: Mejora de la UI/UX del componente de contacto con tipografía premium.
6. `Initial commit`: Punto de partida generado mediante Replit Agent.

---

## 🛠 Bitácora de Resolución de Errores (DevOps)
El despliegue enfrentó retos críticos derivados de la estructura de **Monorepo** y las restricciones del servidor de producción:

* **Error de Variables Requeridas:** La configuración original exigía un puerto activo para el build. Se solucionó sobrescribiendo el comando de construcción en Vercel: `PORT=5173 BASE_PATH=/ vite build`.
* **Estructura de Carpetas:** Vercel no detectaba el `index.html` debido a la jerarquía de Replit. Se ajustó el **Root Directory** a `artifacts/omni-core`.
* **Directorio de Salida:** Los archivos compilados se generaban en una ruta no estándar (`dist/public`). Se configuró manualmente el **Output Directory** en el panel de Vercel para apuntar a dicha carpeta.
* **Error 404 (Conflicto de vercel.json):** Se identificó un archivo generado por la IA que intentaba desplegar un backend. Su eliminación permitió que el frontend tomara el control total de las rutas bajo una arquitectura SPA.

---

## 📝 Conclusiones
Esta práctica permitió dominar el flujo completo de una aplicación profesional. El uso de la IA de Replit fue una herramienta de aceleración estratégica, pero la resolución de problemas manual (Troubleshooting) fue lo que realmente permitió llevar el proyecto a producción con éxito. La integración de servicios Cloud (Cloudinary y Vercel) subraya la importancia de la optimización de recursos y la automatización en el desarrollo web moderno.
