# Reglas del Proyecto — Sistema de Gestión de Pedidos

## Reglas de Control de Versiones y Deploy

- **NUNCA** ejecutar `git push` ni ningún comando que publique código a GitHub o cualquier repositorio remoto, a menos que el usuario lo solicite explícitamente con las palabras "publica a GitHub", "sube a GitHub", "haz push" o similar.
- **NUNCA** hacer deploy a Vercel, Firebase Hosting ni ningún servicio cloud sin autorización explícita del usuario.
- **SIEMPRE** trabajar en modo local (`npm run dev`) para todas las verificaciones de cambios.
- **SIEMPRE** después de realizar cambios de código significativos, levantar el servidor de desarrollo local con `npm run dev` para verificar que el proyecto compila correctamente.
- Está permitido `git init`, `git add`, y `git commit` para mantener historial local limpio, pero **JAMÁS** `git push` sin autorización.

## Reglas de Estructura del Proyecto

- El proyecto vive en `d:\Documentos\web`.
- Mantener estructura ordenada para publicación futura en GitHub.
- Usar `.gitignore` adecuado desde el inicio (node_modules, .env.local, .next, etc.).
- Las variables de entorno sensibles (claves Firebase) van SIEMPRE en `.env.local` y NUNCA se commitean.
