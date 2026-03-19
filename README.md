# Nova Studio Landing

Landing page premium inspirada en patrones de diseño tipo Apple, creada para presentar un proyecto con enfoque profesional en UI, UX y calidad tecnica.

## Stack

- HTML5 semantico
- CSS3 (variables, responsive layout, dark mode)
- JavaScript vanilla (microinteracciones y validacion de formulario)

## Caracteristicas principales

- Hero con narrativa de producto y efectos visuales suaves
- Seccion de concepto visual con imagenes locales
- Bloque de impacto con metricas de presentacion
- Tarjetas de producto con jerarquia clara
- Formulario accesible con validacion por campo, estados de error y confirmacion
- Barra de progreso de scroll y animaciones por interseccion
- Modo oscuro automatico con `prefers-color-scheme`

## Estructura

- `index.html`: contenido y estructura semantica
- `styles.css`: sistema visual, componentes y media queries
- `script.js`: interacciones, parallax, progreso y validaciones
- `assets/`: imagenes SVG locales del concepto

## Ejecutar en local

1. Abre el proyecto en Cursor o VS Code.
2. Ejecuta `F5` con la configuracion de Brave o abre `index.html` en el navegador.

## Criterios de calidad aplicados

- Copy orientado a propuesta de valor
- Accesibilidad base (`aria-live`, labels, estados invalidos)
- Responsivo para mobile/tablet/desktop
- Dependencia cero de frameworks

## Mejoras futuras sugeridas

- Integrar backend real para envio del formulario
- Añadir tests de UI con Playwright
- Optimizar imagenes a WebP/AVIF para mejorar Lighthouse
