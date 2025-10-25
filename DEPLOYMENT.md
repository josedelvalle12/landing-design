# 🚀 Instrucciones de Despliegue a GitHub Pages

## ✅ Problema Solucionado

El problema de la "página en blanco" se ha solucionado con:

1. **Configuración condicional del base path** en `vite.config.js`
2. **Script de redirección SPA** en `index.html`
3. **Archivo 404.html** para GitHub Pages

## 📋 Pasos para Desplegar

### 1. Subir el código a GitHub

```bash
# Agregar todos los archivos
git add .

# Commit con mensaje descriptivo
git commit -m "Ready for GitHub Pages deployment"

# Push a la rama main
git push origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll hacia abajo hasta **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 3. Verificar el Despliegue

- El workflow se ejecutará automáticamente
- Ve a la pestaña **Actions** para ver el progreso
- Una vez completado, tu sitio estará en:
  `https://tu-usuario.github.io/landing-service/`

## 🔧 Archivos Importantes

- **`vite.config.js`** - Configuración condicional del base path
- **`index.html`** - Script de redirección SPA
- **`public/404.html`** - Redirección para GitHub Pages
- **`.github/workflows/deploy.yml`** - Workflow de despliegue automático

## 🐛 Si Aún Sale Blanco

1. **Verifica la consola del navegador** para errores
2. **Espera unos minutos** - GitHub Pages puede tardar en actualizar
3. **Limpia la caché** del navegador (Ctrl+F5)
4. **Verifica que el workflow** se ejecutó correctamente en Actions

## 📱 URLs de Prueba

- **Página principal:** `https://tu-usuario.github.io/landing-service/`
- **Sección Portfolio:** `https://tu-usuario.github.io/landing-service/#portfolio`
- **Sección Contacto:** `https://tu-usuario.github.io/landing-service/#contact`

## 🎯 Próximos Pasos

Una vez que funcione:
1. **Actualiza las URLs** en los meta tags del `index.html`
2. **Configura un dominio personalizado** si lo deseas
3. **Optimiza las imágenes** para mejor rendimiento
4. **Configura Google Analytics** si es necesario

---

**¡Tu landing page está lista para GitHub Pages!** 🎉
