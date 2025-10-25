#!/bin/bash

# Script para desplegar manualmente a GitHub Pages
# Ejecutar: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Iniciando despliegue a GitHub Pages..."

# Build del proyecto
echo "📦 Construyendo proyecto..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "dist" ]; then
    echo "❌ Error: El build falló. No se encontró la carpeta dist/"
    exit 1
fi

echo "✅ Build completado exitosamente"

# Crear rama gh-pages si no existe
echo "🌿 Preparando rama gh-pages..."
git checkout --orphan gh-pages
git reset --hard
git clean -fd

# Copiar archivos del build
echo "📁 Copiando archivos del build..."
cp -r dist/* .

# Agregar archivos al git
git add .
git commit -m "Deploy to GitHub Pages - $(date)"

# Push a la rama gh-pages
echo "⬆️ Subiendo a GitHub Pages..."
git push origin gh-pages --force

# Volver a la rama main
git checkout main

echo "🎉 ¡Despliegue completado!"
echo "🌐 Tu sitio estará disponible en: https://tu-usuario.github.io/landing-service/"
