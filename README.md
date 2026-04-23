Práctica 8 - OMNI CORE: TechBoutique
OMNI CORE es una aplicación web de catálogo premium diseñada para una Tech Boutique, desarrollada bajo el ecosistema React 19 + Vite. Este proyecto documenta no solo el desarrollo frontend, sino también la implementación de flujos DevOps, optimización de recursos en la nube mediante Cloudinary y la resolución de conflictos técnicos avanzados para asegurar un despliegue exitoso.

✅ Lista de Requisitos Cumplidos (Checklist)
[x] Modalidad: Individual.

[x] Origen: Selección de un negocio real desde Google Maps.

[x] IA Generativa: Uso de ChatGPT para ingeniería de prompts y Replit Agent para la estructura base.

[x] Modificación de Assets: Sustitución de imágenes por defecto y optimización de logotipos.

[x] Funcionalidad: Implementación de un formulario de contacto funcional con diseño corporativo.

[x] Identidad Institucional: Footer personalizado con datos del alumno, profesor y logo de CUCEI.

[x] Control de Versiones: Repositorio público en GitHub con historial de cambios significativo.

[x] Despliegue: Proyecto activo y funcional en Vercel mediante integración CI/CD.

👤 Datos del Alumno

Estudiante: Eriberto Orozco Rosas 


Profesor: Zeus Emmanuel Gutierrez Cobian 


Materia: Desarrollo Web 


Calendario: 2026A 


Institución: CUCEI – Universidad de Guadalajara 

🔗 Enlaces del Proyecto
Repositorio GitHub: https://github.com/Darklong15/P8-OMNI-CORE-TechBoutique

Despliegue en Vivo (Vercel): https://p8-omni-core-tech-boutique-mockup-sandbox-olw3-n05henuur.vercel.app

🛠 Tecnologías e Integraciones
React 19 + Vite: Entorno de desarrollo de alto rendimiento.

Tailwind CSS: Framework para diseño responsivo y estética moderna.

Cloudinary (CDN): Gestión de assets de hardware y logotipos institucionales para optimizar el tiempo de carga (LCP).

Replit Agent (AI): Uso de inteligencia artificial para la generación de la arquitectura inicial.

Vercel: Pipeline de despliegue continuo integrado con GitHub.

💻 Guía de Comandos Git Utilizados
Se utilizaron los siguientes comandos en la terminal (Shell) para sincronizar el progreso con el repositorio remoto:

Preparar archivos: git add . (Agrega todos los cambios al área de preparación).

Confirmar cambios: git commit -m "mensaje descriptivo" (Crea un punto de restauración con una nota).

Subir a la nube: git push (Envía los cambios a GitHub y dispara el despliegue automático en Vercel).

Verificar estado: git status (Para revisar qué archivos faltaban por subir).

📜 Historial de Commits (Control de Versiones)
Se mantuvo un registro detallado de cambios para documentar la evolución del proyecto y la resolución de errores:

Enlarge the CUCEI logo and update the browser tab icon: Ajustes finales de identidad visual.

Update product images in the catalog to display actual motherboard photos: Sustitución de assets genéricos por fotos reales de hardware.

Delete vercel.json: Eliminación de configuración redundante de Replit que bloqueaba el ruteo.

fix: bypass typecheck para vercel: Desactivación de pruebas estrictas para permitir la compilación exitosa.

Update contact form to a premium corporate design with new typography and styles: Mejora de la UI/UX del componente de contacto.

Initial commit: Punto de partida generado mediante Replit Agent.

🛠 Bitácora de Resolución de Errores (DevOps)
El despliegue en Vercel enfrentó obstáculos técnicos que requirieron intervención manual en la configuración de la infraestructura:

Error de Variables Requeridas: La configuración de Vite exigía un puerto activo para el build. Se solucionó forzando el comando de construcción: PORT=5173 BASE_PATH=/ vite build.

Estructura Monorepo: Vercel no detectaba el código fuente debido a la jerarquía de carpetas de Replit. Se ajustó el Root Directory a artifacts/omni-core.

Ruta de Salida Incorrecta: Los archivos compilados no eran visibles para el servidor. Se configuró el Output Directory a dist/public.

Error 404 (Conflicto de vercel.json): Replit generó un archivo de configuración automático para backend que rompía el ruteo de la SPA. Se eliminó el archivo para permitir el funcionamiento correcto del frontend.

📝 Conclusiones
Esta práctica permitió dominar el flujo completo de una aplicación profesional. Desde el uso de Cloudinary para optimizar el rendimiento de las imágenes, hasta la capacidad de diagnosticar y "parchear" errores de compilación en servidores remotos. El uso de la IA de Replit fue una herramienta de aceleración estratégica, pero la resolución de problemas manual fue lo que permitió llevar el proyecto a producción con éxito.
