# Snoware · sistema visual y recursos

Estado: borrador documental. Referencias visuales finales identificadas y empaquetadas aparte. Las 12 imágenes fueron enviadas por Javier como aprobadas.

## Dirección
Consultoría high-tech profesional, inspirada en Infosys pero con identidad propia. Conservar las composiciones aprobadas, sin introducir plantillas genéricas, diagramas de presentación o cambios decorativos no pedidos.

## Tipografía y color
- Geist Variable real en toda la web, controles, textos y tarjetas, cargada localmente mediante `@fontsource-variable/geist`. No sustituir el cuerpo por Inter.
- Ajuste tipográfico solicitado: titulares principales (hero, Servicios, Metodología, Soluciones y CTA) en peso 300; títulos de presentación, tarjetas y modal en peso 500. Tracking proporcional limitado a −1 px; interlineado compacto en titulares grandes y 1.2 en títulos de lectura. Conservar tamaños fluidos, espacios y composición aprobados, hero de una línea en escritorio y saltos naturales en móvil.
- #E9EEF7: fondo claro verificado en la última sección Soluciones.
- #0E0A42: azul marino de texto/fondo, verificado en Soluciones y referencias de footer.
- #EEF5FE: fondo del último ejemplo modal.
- #6B48CF: morado de la variante actual de botón CTA; contrastar con referencia final antes de fijar token definitivo.
- No deducir que todas las secciones comparten un único fondo. Metodología: variante oscura aprobada, con acento coral y montaña neón inferior.
- No extraer colores de memoria cuando haya una referencia original disponible.

## Componentes
- Logo: copo de nieve junto a Snoware, próximo al texto y de altura equivalente. El vector exacto debe corresponder al hero aprobado; no sustituirlo por un icono genérico.
- Servicios: 3 visibles, abundante aire, palabra «servicios» acentuada en otro color; 8 ilustraciones aprobadas distintas. No reemplazar 4–8 por un único estilo repetido.
- Metodología: título «Nuestra metodología», pasos seleccionables y panel limpio. Evitar títulos duplicados y párrafos enormes. Conservar la montaña técnica inferior de las tres referencias oscuras aprobadas.
- Soluciones: dos columnas simétricas y centradas, 6 entradas cada una en escritorio. Mantener 12. La adaptación móvil debe priorizar lectura, no encoger un screenshot.
- Modal: título y descripción útil, X superior, «Contáctanos», figura abstracta pequeña abajo a la derecha. Fondo de página desenfocado y oscurecido. No añadir un primer renglón que repita el título.
- CTA: franja compacta azulada; Snowy asomado con cabeza/patas, sin convertirlo en protagonista de toda la sección. Frase única y botón morado de una palabra. Snowy se reserva a CTA y servicio IA. La tarjeta IA de Inicio conserva la espiral de partículas que muestra la referencia; no sustituirla por Snowy.
- Footer: compacto, marino, logo/lema, menú exacto, teléfono y correo con iconos. Redes en una sola fila: Facebook, Instagram, TikTok, LinkedIn y YouTube.

## Referencias aprobadas · conjunto vigente
Javier confirmó «todo eso es lo aprobado» y añadió el CTA. Copias organizadas sin modificar los píxeles, para colocarse en `img/references/`:

| Archivo organizado | Contenido aprobado |
|---|---|
| 01-hero.png | Montaña nevada, marca y titular de crecimiento. |
| 02-sobre-snoware.png | Montañas pastel y tarjeta de presentación. |
| 03-servicios-01-a-03.png | Modernización, digitalización e integración. |
| 03-servicios-04-a-06.png | Software a medida, nube e IA. |
| 03-servicios-06-a-08.png | IA repetida, seguridad y mantenimiento. |
| 04-metodologia-01.png | Paso Escuchamos y analizamos, fondo negro. |
| 04-metodologia-02.png | Paso Definimos la solución. |
| 04-metodologia-03.png | Paso Implementamos y acompañamos. |
| 05-soluciones-lista.png | Lista simétrica de 12 soluciones e introducción. |
| 05-soluciones-modal-01.png | Primer modal con figura pequeña y página desenfocada. |
| 06-cta.png | Texto final, botón morado y Snowy asomado. |
| 07-footer.png | Footer marino, menú, contacto e iconos. |

No revivir la metodología clara ni diagramas anteriores. La aprobación del conjunto resuelve las variantes visuales; no constituye implementación ni aprobación de nuevas páginas. La referencia de Sobre incluye el comienzo de Servicios para mostrar transición; no duplicar ese título en el montaje.

## Rutas reales del proyecto observadas en capturas
Las rutas siguientes son relativas a la raíz `Snoware_web`. Se observaron en el explorador del proyecto, no se han abierto ni auditado sus bytes desde aquí. Conservar nombres exactos. No moverlas a `public/assets` ni a `docs/references` por iniciativa propia.

### Referencias aprobadas
```text
img/references/01-hero.png
img/references/02-sobre-snoware.png
img/references/03-servicios-01-a-03.png
img/references/03-servicios-04-a-06.png
img/references/03-servicios-06-a-08.png
img/references/04-metodologia-01.png
img/references/04-metodologia-02.png
img/references/04-metodologia-03.png
img/references/05-soluciones-lista.png
img/references/05-soluciones-modal-01.png
img/references/06-cta.png
img/references/07-footer.png
```

### Marca, fondos y personaje
```text
img/logo_snoware.png
img/montanas/montana_01.png
img/montanas/montana_02.png
img/montanas/montana_hero.png
img/snowy/snowy_cta.png
```
`montana_hero.png` es el candidato nominal para el hero, sujeto a revisión visual. La correspondencia de `montana_01.png` y `montana_02.png` con Sobre Snoware/metodología no está verificada: abrir y comparar, no asignarla por numeración.
El logo suministrado es PNG, no SVG. Primero revisar fidelidad, resolución y transparencia del PNG; no exigir una regeneración ni afirmar que ya existe vector. Solo preparar otra versión si su calidad no basta para el uso real, conservando exactamente la marca aprobada.
La presencia de `snowy_cta.png` no prueba por sí sola transparencia, recorte o calidad; verificar que preserva la pose aprobada.

### Ocho ilustraciones de servicios
```text
img/snoware-servicios/servicio-01.png
img/snoware-servicios/servicio-02.png
img/snoware-servicios/servicio-03.png
img/snoware-servicios/servicio-04.png
img/snoware-servicios/servicio-05.png
img/snoware-servicios/servicio-06.png
img/snoware-servicios/servicio-07.png
img/snoware-servicios/servicio-08.png
```
Verificar que la numeración corresponda a los ocho servicios en CONTENT.md y a su figura aprobada. No deducir aprobación de un arte individual únicamente por su nombre.

### Doce figuras abstractas
```text
img/snoware-12-figuras-abstractas/01-lazo-fluido.png
img/snoware-12-figuras-abstractas/02-onda-doble.png
img/snoware-12-figuras-abstractas/03-espiral-abierta.png
img/snoware-12-figuras-abstractas/04-arcos-entrelazados.png
img/snoware-12-figuras-abstractas/05-abanico-curvo.png
img/snoware-12-figuras-abstractas/06-infinito.png
img/snoware-12-figuras-abstractas/07-nudo-abierto.png
img/snoware-12-figuras-abstractas/08-orbita-inclinada.png
img/snoware-12-figuras-abstractas/09-pliegue-suave.png
img/snoware-12-figuras-abstractas/10-arco-retorcido.png
img/snoware-12-figuras-abstractas/11-remolino.png
img/snoware-12-figuras-abstractas/12-cintas-paralelas.png
```
Las doce figuras aparecen como archivos separados. Esto no implica doce modales implementados ni verificación de cada figura; solo existe referencia visual completa aprobada del primer modal. Confirmar asignación y conservar escala pequeña, texto protagonista y fondo desenfocado.

## Preparación para producción
- Reutilizar los archivos suministrados. No regenerar por rutina.
- Abrir únicamente los activos necesarios para verificar correspondencia, tamaño, transparencia y ausencia de textos incrustados.
- Tipografía Geist real independiente de las imágenes. La presencia de fuentes en el proyecto aún debe verificarse.
- Textos, botones, navegación, modales y tarjetas se implementarán como interfaz real, no como capturas completas.
- Preparar recortes responsivos y formatos optimizados si hace falta, sin reemplazar ni alterar los originales aprobados. Las rutas de origen anteriores siguen siendo la referencia documental.

## Movimiento e interacciones
Incorporar animaciones elegantes y suaves al hacer scroll y al seleccionar o interactuar con elementos. Deben acompañar la jerarquía y el diseño aprobado, sin alterar distribución, espacios ni identidad; evitar efectos exagerados, desplazamientos innecesarios y bloqueos de interacción. Respetar `prefers-reduced-motion`, mantener navegación por teclado y foco visible, y no depender de animaciones para mostrar información esencial. Verificar las interacciones afectadas y su alternativa de movimiento reducido, sin repetir pruebas que no corresponden al cambio.


## Entrada del hero · referencia de video
Titular completo con zoom de mayor a menor y enfoque (sin fade de opacidad ni escritura), una sola entrada al cargar. Animar el span interior, no la posición aprobada del h1. Mantener el texto visible sin animación cuando se solicita movimiento reducido; no reiniciar al hacer scroll.


### Refinamiento del hero tras revisión
Entrada fiel a la transición del segundo 9 del video: escala inicial 3×, desenfoque 16 px y contracción centrada hasta escala 1 y blur 0 en 700 ms, con desaceleración marcada (cubic-bezier(.16, 1, .3, 1)). El comienzo desborda visualmente ambos bordes y queda contenido por el hero; no aumenta el ancho desplazable de la página. Titular escritorio: clamp(1.9rem, 4.25vw, 7rem), siempre en un renglón; móvil: clamp(2rem, 9.8vw, 4.25rem), con varias líneas. No modificar los demás titulares.

Footer: visible normalmente al llegar por scroll, sin Reveal ni animación de aparición. CTA conserva su animación independiente.

Servicios: swipe táctil horizontal avanza/retrocede un servicio. Conservar flechas, indicadores, scroll vertical y gesto de zoom.

## Hero · secuencia y conversación (18 de noviembre de 2026)
- Fondo existente con acercamiento continuo marcado (escala 1.03–1.54), dos capas desfasadas medio ciclo de 28 s y fundido de reinicio. La escala vuelve al inicio solo con la capa transparente; no retrocede la cámara y niebla tenue por gradientes (36 s). Sin video nuevo ni filtros animados sobre el fondo.
- Tres frases: titular actual; «Lleva un mejor control de tu negocio»; «Transforma tu operación». Conservar el tamaño final de Geist aprobado. Entrada zoom/enfoque 700 ms, lectura 2000 ms y salida 350 ms; no repetir la secuencia al hacer scroll.
- Al finalizar, el titular se desplaza arriba y aparece cuadro con icono de correo, no micrófono. Texto exacto: «Cuéntanos qué necesitas mejorar. Ejemplo: Quiero tener un mejor control de mi flujo de efectivo y cobranza». Pie exacto: «Cuéntanos tu necesidad y encontremos la mejor solución.»
- Tres botones de ejemplo rellenan un mensaje editable: flujo de efectivo/cobranza, información centralizada y tareas repetitivas.
- Enviar se activa con texto no vacío. Mientras no exista backend aprobado, informa al pulsar que el envío aún no está conectado; conserva el texto y nunca muestra éxito ni lo transmite.
- Accesibilidad: pausar animación, omitir secuencia para escribir, movimiento reducido sin animación y con cuadro disponible directamente, label real, estado anunciado y controles de teclado. Al salir del viewport u ocultar pestaña se pausa el movimiento.

### Controles del hero · ajuste visual
«Escribir mensaje» y «Pausar animación» no aparecen en la vista normal. Se conservan exclusivamente como accesos de teclado/lector de pantalla y aparecen al recibir foco para evitar controles enfocados invisibles. No cambiar secuencia ni tiempos; respetar movimiento reducido y pausa fuera de vista.

### Cuadro del hero · tratamiento tipográfico
Conservar contenido. Pie en azul oscuro #0E0A42 y cursiva; ejemplo del placeholder en 0.875rem y cursiva. El mensaje introducido conserva tamaño 1rem y estilo normal.

### Modal de soluciones · transición
Entrada del panel 700 ms y fondo 600 ms; salida del panel 500 ms y fondo 450 ms. Mantener el diálogo nativo abierto hasta terminar la salida, incluso con Escape. Reduced motion elimina transiciones. Si se interrumpe la entrada, partir de opacidad actual para evitar destellos.

### Tercer titular · letras enfocadas
Solo «Transforma tu operación» / «Transform your operations»: letras de izquierda a derecha entran ampliadas y desenfocadas, se reducen y enfocan en su posición. Stagger total 360 ms, animación por letra 700 ms; sin mecanografiado ni cambio de tamaño final. Conservar palabras completas al envolver en móvil y texto accesible sin fragmentar. Segundo titular permanece 1400 ms (antes 2000); primero y tercero mantienen 2000 ms. Reduced motion elimina el efecto.
