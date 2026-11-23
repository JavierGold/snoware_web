# Snoware · progreso

Actualización del 18 de noviembre de 2026. Fase 4 implementada. Inicio completo queda listo para revisión de Javier.

## Fase 1 · Base, navegación y hero

- Base con React, Vite y Tailwind CSS. La navegación, el selector de idioma y el hero son componentes separados. Los textos ES/EN están en `src/content/translations.js` y Geist Variable se sirve localmente en WOFF2.
- Hero de Inicio con titular HTML y fondo WebP optimizado a partir de la montaña suministrada. La marca blanca y el favicon derivan del PNG original.
- Navegación horizontal en escritorio y tablet, menú desplegable en celular y selector ES/EN. Español es el idioma inicial. El inglés se conserva en la URL con `?lang=en`. Servicios, Nosotros y Contacto figuran como opciones deshabilitadas mientras se definen sus destinos.
- Transiciones del menú y del selector, con foco visible y respeto por la preferencia de movimiento reducido.
- Verificado con `npm run build` y Chromium mediante Playwright. Se revisaron el hero y la navegación en 1672 × 941 y 390 × 844, y se comprobó el ajuste en tablet a 820 × 1180. Se comprobó el cambio ES → EN → ES, la apertura del menú, el cierre con Escape, la restauración del foco y el movimiento reducido. Capturas comparadas con la referencia aprobada y guardadas en `output/playwright/` como `fase-1-react-escritorio.png` y `fase-1-react-movil.png`.
## Fase 2 · Sobre Snoware y Nuestros servicios

- Presentación con la montaña pastel de `img/montanas/montana_01.png` y las ocho tarjetas con las ilustraciones correspondientes de `img/snoware-servicios/`. Se usan derivados WebP de los originales.
- Carrusel con tres tarjetas en escritorio, dos en tablet y una en celular. Las flechas recorren las vistas aprobadas 1–3, 4–6 y 6–8 en escritorio. Los indicadores permiten elegir el inicio de la vista. El contador y una parte de la siguiente imagen señalan que hay más servicios. El desplazamiento respeta la preferencia de movimiento reducido.
- Textos ES/EN centralizados, con posición del carrusel preservada al cambiar de idioma. Los enlaces de presentación y tarjetas figuran deshabilitados hasta que tengan un destino.
- Compilación de producción verificada con `npm run build`. En Chromium se revisaron las vistas de 1672 × 941, 820 × 1180 y 390 × 844, el avance con flechas y teclado, la selección por indicadores, el cambio ES → EN → ES y el movimiento reducido. Capturas en `output/playwright/fase-2-*.png`.
## Fase 3 · Nuestra metodología y Soluciones con impacto

- Metodología oscura con la montaña técnica de `img/montanas/montana_02.png` y tres pasos seleccionables. El panel muestra la descripción y la lista del paso seleccionado.
- Doce soluciones con título y descripción ES/EN, cada una con su figura original optimizada. La lista presenta dos columnas en escritorio y una en celular.
- Ventanas con fondo desenfocado, Escape, foco inicial en el cierre y regreso al control que abrió la ventana. «Contáctanos» figura deshabilitado hasta que exista su destino.
- Compilación de producción verificada con `npm run build`. Chromium confirmó los tres pasos por teclado, los doce diálogos con sus figuras, cierre y restauración de foco, inglés y la preferencia de movimiento reducido. Se revisaron escritorio (1672 × 941) y celular (390 × 844) y se comprobó la ausencia de desbordamiento horizontal en tablet (820 × 1180). Capturas en `output/playwright/fase-3-*.png`.
## Fase 4 · CTA, pie de página y revisión final

- CTA bilingüe con la franja azulada, el botón morado y Snowy asomado. Se reutiliza la imagen aprobada con un recorte WebP. El componente admite un destino de contacto cuando se defina. En Inicio el control figura deshabilitado.
- Pie marino con marca, lema, navegación, teléfono confirmado (477 181 5000) y cinco iconos de redes. Inicio conserva el idioma activo y el teléfono usa un enlace de llamada. Los destinos de las páginas y redes siguen pendientes. Se omiten el correo de ejemplo y el aviso de privacidad provisional.
- Compilación de producción verificada con `npm run build`. Se revisó Inicio completo en Chromium a 1672 × 941, 820 × 1180 y 390 × 844. También se comprobó la ausencia de desbordamiento horizontal a 320 px.
- Comprobados el menú móvil, el carrusel, el selector de metodología, la apertura y cierre de un diálogo con Escape y restauración de foco, el cambio a inglés, el enlace Inicio del pie y el destino telefónico. Capturas en `output/playwright/fase-4-*.png`.
- Inicio queda para revisión. Antes de publicar, confirmar destinos de navegación, CTA y redes, correo operativo, texto y destino de privacidad, y traducciones EN. AWS queda para una etapa posterior.

## Revisión visual de Inicio

- Se ajustaron alineación del menú y ancho del titular, posición del enlace de presentación, altura de las tarjetas y vista parcial del carrusel, proporciones de metodología, espaciado de soluciones, composición del diálogo y encuadre de Snowy.
- El selector ES/EN queda debajo del menú en escritorio. El carrusel conserva seis indicadores seleccionables en escritorio, uno por cada posición válida con tres tarjetas visibles.
- Se incorporaron entradas al hacer scroll. Chromium confirmó que la entrada se ejecuta una vez y que se desactiva con movimiento reducido. La compilación pasó y se comprobó el ancho en escritorio, tablet y móvil. Capturas en `output/playwright/revision-*.png`.
- Los destinos pendientes, el correo y la información legal conservan el estado registrado en la fase 4.

## Ejecución local

Con Node.js 20.19+ de la rama 20 o 22.12+, ejecutar `npm ci` y `npm run dev` desde la raíz. Abrir la URL que imprime Vite. Para previsualizar la compilación de producción, ejecutar `npm run build` y luego `npm run preview`.

## Confirmado por conversación y referencias
- Doce referencias aprobadas: hero, Sobre Snoware, tres vistas de servicios, tres estados de metodología oscura, lista de soluciones, primer modal, CTA y footer.
- Hero: «Soluciones Digitales que impulsan tu crecimiento». Lema del footer: «Soluciones Digitales con impacto».
- Ocho servicios y sus descripciones, doce soluciones, textos de Sobre, metodología y CTA registrados en CONTENT.md.
- Primera etapa: solo Inicio. Páginas de servicios, Nosotros y Contacto se incorporarán después y no tienen diseño aprobado.
- Geist real, ES/EN, fidelidad visual y espacios aprobados. La traducción del hero está implementada y pendiente de revisión editorial por Javier.

## Inventario de recursos documentado antes de la fase 1
- Raíz visible: `Snoware_web`.
- Referencias en `img/references/`.
- Fondos: `img/montanas/montana_01.png`, `montana_02.png`, `montana_hero.png`.
- Ocho archivos `img/snoware-servicios/servicio-01.png` a `servicio-08.png`.
- Doce archivos individuales en `img/snoware-12-figuras-abstractas/`, enumerados exactamente en DESIGN.md.
- `img/snowy/snowy_cta.png` y `img/logo_snoware.png`.
- Cinco MD, carpeta `.agents` y `skills-lock.json` visibles. Eso no verifica instalación, contenido ni funcionamiento de todas las skills.

Se verificaron el logo, el fondo y la referencia del hero, así como la montaña pastel y las ocho ilustraciones de servicios. También se verificaron la montaña técnica y las doce figuras abstractas. También se comprobaron visualmente Snowy y las referencias del CTA y el pie de página.

## Pendientes de fases posteriores
1. Comparar los activos de las siguientes fases con sus referencias.
2. Revisar la traducción inglesa de Inicio con Javier y confirmar los destinos de las páginas futuras.
3. Confirmar correo operativo y URLs sociales. El footer de referencia muestra un correo de ejemplo.

## Futuro
Páginas de servicios, Nosotros y Contacto; agente IA para interesados; envío de mensajes; despliegue AWS. No afirmar que están implementados.

## Ajuste solicitado · Motion y navegación por scroll (18 de noviembre de 2026)
- Instalada `motion` y actualizado el lockfile. Sustituido el reveal CSS que partía de opacidad 0.88 por un componente React compartido: entrada desde opacidad 0, desplazamiento de 18 px y escala 0.992, durante 850 ms con desaceleración suave, una vez por bloque. No hay pulsación constante ni cambios de composición.
- Aplicado a presentación, encabezado/carrusel de servicios, metodología, título/texto/lista de soluciones, CTA y footer. Se mantienen contenido, imágenes, Geist, colores y espaciados.
- Las soluciones conservan el diálogo nativo, foco y bloqueo del fondo. Motion anima entrada (480 ms) y cierre (180 ms), incluidos Escape y botón de cierre, sin desmontar el diálogo antes de concluir.
- Movimiento reducido muestra contenido sin desplazamientos y abre/cierra el diálogo sin animación. El foco por teclado nunca queda oculto por un reveal.
- Metodología vuelve al paso 01 únicamente cuando toda la sección, incluida su imagen, deja de intersectar el viewport; no se restablece mientras siga parcialmente visible.
- Verificación: build de Vite y revisión de diferencias. Validación de navegador pendiente de completar en este entorno; no publicado ni desplegado.
- Ajuste adicional solicitado: frase completa del hero en una línea en escritorio con tamaño fluido; menú y ES/EN alineados en la misma fila. En móvil se conserva el título adaptable y el menú compacto.
- Límite de verificación visual: Playwright CLI no pudo iniciar por una ruta de caché ausente; el intento alternativo de instalar Chromium en `/tmp` falló porque la descarga llegó truncada. No se afirma una revisión de navegador realizada.

## Ajuste solicitado · Carrusel de servicios (18 de noviembre de 2026)
- Flechas avanzan o retroceden exactamente un servicio por clic; conserva 3 visibles en escritorio, 2 en tablet y 1 en móvil.
- Retirado contador visible de rango. El anuncio de rango se conserva solo para lectores de pantalla.
- Indicadores de posición se rellenan acumulativamente y se vacían al retroceder; todos están llenos en la última posición. Se conserva un único indicador actual accesible y botones con etiquetas ES/EN.
- Comprobados límites, avance/retroceso, acceso a los 8 servicios y progreso para 1/2/3 tarjetas mediante prueba de la lógica real extraída del componente. Build y diff --check correctos. No se completó validación visual en navegador (limitación de Chromium ya registrada).

## Ajuste solicitado · Tipografía (18 de noviembre de 2026)
- Se conserva Geist Variable en toda la interfaz. Titulares principales en peso 300; títulos de presentación, tarjetas y modal en 500. No cambian textos, colores, imágenes, tamaños, navegación ni composición.
- Unificados peso, tracking e interlineado mediante tokens. El espaciado entre letras no supera −1 px; interlineado 1.05 en grandes titulares, 1.2 en títulos secundarios y 1.12 en hero móvil/CTA para lectura.
- Se mantiene hero en una línea a partir de 761 px, saltos adaptables en móvil y controles del header sin cambios. La animación de entrada del hero se documenta abajo.
- Comprobados build de producción, recursos WOFF2 de Geist, reglas CSS resultantes y git diff --check. No hay scripts de lint ni tests en package.json.
- Revisión visual y de fuente efectivamente renderizada pendiente: Chromium disponible no inicia porque el entorno bloquea socket() (Operation not permitted), incluso en el intento autorizado fuera del sandbox. No se afirma validación visual en escritorio/móvil ni en el ordenador de Javier.


## Ajuste solicitado · Entrada del hero según video (18 de noviembre de 2026)
- Revisada la referencia de video: texto inicialmente ampliado y desenfocado que reduce escala y se enfoca. Aplicada esa entrada al titular completo, sin escritura letra a letra ni desvanecimiento de opacidad.
- El span interior pasa de escala 1.45 y blur 8 px a escala 1 y blur 0 durante 900 ms. El h1 conserva su posición y tamaño final aprobados; el hero recorta la expansión para no crear scroll horizontal.
- Se ejecuta al montar la página, no al volver por scroll. Movimiento reducido no aplica animación; texto visible por defecto y sin temporizadores ni estados que puedan dejarlo oculto.
- Build y diff --check correctos después de este cambio. Verificación visual del efecto implementado pendiente por la limitación de Chromium descrita arriba; no confundir revisión del video de referencia con validación del sitio.

## Refinamiento solicitado · Ritmo y escala del hero (18 de noviembre de 2026)
- Tras probar la entrada, Javier pidió más tiempo y un titular mayor. Se conserva el zoom/enfoque observado en el video, pero se amplía de 900 a 2000 ms y se suaviza la desaceleración para que no llegue casi al estado final al principio.
- Escritorio pasa de 3.5vw (máximo 6rem) a 4.25vw (máximo 7rem), conservando un renglón. Móvil pasa de 8.7vw (máximo 3.75rem) a 9.8vw (máximo 4.25rem), con saltos naturales.
- Sin cambios en Geist, contenido, colores, resto de secciones o reduced motion.
- Build y diff --check correctos. Estimación de anchos ES/EN con métricas del WOFF2 latino de Geist instalado a peso 300: caben en el ancho disponible a 761, 820, 1024, 1280, 1440, 1920, 2560 y 3840 px. Esta estimación no sustituye la revisión visual del texto renderizado en navegador.
- Validación visual en PC/móvil sigue pendiente por el bloqueo de Chromium registrado arriba; no se repitieron intentos de navegador ni pruebas ajenas al cambio.


## Corrección de referencia · Zoom del segundo 9 (18 de noviembre de 2026)
- Revisada la transición 8.85–9.92 s a 15 cuadros/s: el texto entra muy ampliado, fuera de ambos bordes, y se contrae/enfoca rápidamente; no es un zoom moderado sostenido.
- Sustituye el ajuste anterior de 2 s: escala inicial 3× y blur 16 px, hasta tamaño final 1× y blur 0, en 700 ms con cubic-bezier(.16, 1, .3, 1). Sin cambios de opacidad.
- Se mantienen exactamente tamaños finales PC/móvil, Geist, posiciones y contenido. El recorte corresponde solo a la expansión inicial; el estado final recupera todo el titular. Sin cambios en soporte reduced motion ni repetición al scroll.
- Build, git diff --check y comparación estática con commit anterior correctos: solo cambia la amplitud y tiempo del efecto, además de documentación. Revisión visual de referencia realizada; revisión visual del sitio implementado sigue bloqueada por Chromium. No se afirma equivalencia exacta renderizada.

- Petición adicional: retirado Reveal únicamente del footer y sustituido por div con las mismas clases. CTA y demás animaciones intactos. Build final y diff --check correctos tras este ajuste.

## Ajuste solicitado · Swipe de servicios (18 de noviembre de 2026)
- Añadido gesto táctil horizontal para avanzar/retroceder un servicio; conserva flechas, indicadores, anuncios y controles de teclado.
- Umbral de 48 px y predominio horizontal; cancela al detectar scroll vertical, pointercancel o un segundo puntero. touch-action permite pan vertical y pinch zoom sin preventDefault durante el gesto.
- Evita activar accidentalmente un enlace tras deslizar; no suprime activación por teclado. Límites de primera/última posición se mantienen.
- Build y diff --check correctos. Prueba de lógica con umbral, dirección, diagonales y límites para 1/2/3 servicios visibles. Prueba táctil real pendiente por limitación de navegador.

## Ajuste solicitado · Hero cinematográfico y cuadro de mensaje (18 de noviembre de 2026)
- Incorporadas las tres frases solicitadas con la entrada/salida de zoom-enfoque basada en el video; lectura entre frases y paso terminal al cuadro. Conservados tamaños finales del hero y Geist.
- Cámara continua sutil sobre la imagen existente y capa ligera de niebla; sin video, librerías nuevas ni filtros de fondo animados. Se pausa fuera del viewport, al ocultar pestaña y mediante botón. Movimiento reducido presenta directamente el estado final estático.
- El título sube y aparece el cuadro inspirado en la referencia, con correo en vez de micrófono. Copy ES exacto aprobado y adaptación EN; tres sugerencias rellenan texto editable.
- Botón Enviar habilitado al escribir texto no vacío. Por no existir backend aprobado, muestra un aviso accesible de envío no conectado y conserva el mensaje. No se envía, guarda, redirige ni simula respuesta.
- Verificación: build de Vite y diff --check; pruebas de función real de secuencia (orden y estado terminal), copy exacto ES, contenido ES/EN, tres sugerencias y foco, condición de botón, ausencia de red/almacenamiento y limpieza de temporizadores/listener. Sin cambios en footer, carrusel ni otras secciones.
- Limitación: revisión visual, comportamiento real de foco/teclado y medición de rendimiento en PC/móvil pendientes porque Chromium sigue bloqueado. Las pruebas estáticas no prueban la apariencia ni el gesto real. No hay scripts lint/tests configurados ni despliegue AWS.

## Copy aprobado · Tercer titular del hero (18 de noviembre de 2026)
- Sustituido por el texto exacto aprobado: «Cuéntanos qué desafío enfrenta tu negocio». Inglés natural: «Tell us about your business challenge».
- No se cambian tamaños, secuencia, tiempos, cuadro de mensaje ni otras secciones.
- Build y diff --check correctos. Estimación con Geist peso 300: ambos titulares caben en una línea a 761, 820, 1024, 1280, 1440, 1920, 2560 y 3840 px. En móvil se conserva el salto de línea y se comprueba que la palabra más ancha cabe desde 320 px.
- Comprobación por métricas del recurso Geist.ttf, no por navegador: revisión visual de desktop/móvil sigue pendiente por limitación del entorno.

## Ajuste solicitado · Retirar controles visibles del hero (18 de noviembre de 2026)
- Ocultos visualmente «Escribir mensaje» y «Pausar animación» en la vista normal. Se muestran solo al recibir foco con teclado, preservando una forma accesible de pausar el movimiento continuo y saltar al mensaje.
- No cambia JSX, secuencia, tiempos, título, campo, CTA, cámara/niebla ni otras secciones. Reduced motion y pausa fuera de viewport/pestaña intactos.
- Build y diff --check correctos. Comprobación estática de selector :not(:focus-within) y preservación del componente. Validación visual/teclado real pendiente por limitación de navegador.

- Ajuste adicional solicitado: lectura entre cambios de 2800 a 2400 ms por título, conservando entrada 700 ms y salida 350 ms. El cuadro aparece aproximadamente a los 10 s en vez de 11.2 s si no se pausa, 1.2 s antes; movimiento reducido lo muestra directamente.

## Refinamiento solicitado · Espera del hero
- Reducida ligeramente la pausa por título de 2400 a 2200 ms. Entrada y salida intactas; cuadro aproximadamente a los 9.4 s en lugar de 10 s, si no se pausa.
- Sin cambios de diseño, contenido, controles ni reduced motion. Build y diff --check correctos; comprobación del único valor modificado en el componente. No se repitió validación visual bloqueada.

## Ajuste solicitado · Movimiento perceptible de montaña
- Diagnóstico de código: animación activa incluso tras aparecer el cuadro. Solo se pausa por reduced motion, pausa manual, sección fuera de vista o pestaña oculta. No se ha confirmado cuál condición aplica en el navegador del usuario.
- El recorrido anterior (1.06–1.12 en 28 s) podía parecer estático. Se amplía moderadamente a 1.05–1.17 con desplazamiento lateral ±1.1% en 18 s por recorrido, alterno y ease-in-out para evitar saltos.
- Se conserva reduced motion, pausa de visibilidad, niebla y todos los demás comportamientos. Zoom inicial suficiente para cubrir bordes durante el desplazamiento.
- Build y diff --check correctos; comprobadas reglas CSS, duración y condiciones de pausa. No se afirma solución visual verificada sin prueba en navegador.

## Ajuste solicitado · Retirar etiqueta visible del cuadro
- Oculta visualmente únicamente «Cuéntanos qué necesitas mejorar.» sobre el textarea. Se conserva como label asociado para lectores de pantalla; regla visual excluye sr-only para no reintroducir márgenes.
- Sin cambios de textos, título del hero, ejemplo, sugerencias, pie, botón ni comportamiento.
- Build y diff --check correctos; verificada asociación label/htmlFor con id del textarea. Revisión visual real pendiente por limitación del entorno.

- Aprobación adicional: tercer titular grande ahora «Transforma tu operación» / «Transform your operations». No se modifican ejemplo ni texto inferior. Ambos textos son más cortos que los anteriores y conservan tamaños y responsive.

## Ajuste solicitado · Acercamiento de montaña con reinicio
- Cambiado el vaivén por zoom progresivo 1.03–1.54; al alcanzar el acercamiento se cruza con una segunda capa que comienza abierta. Ciclo de 28 s por capa y desfase de medio ciclo: nuevo recorrido cada 14 s.
- El salto de escala ocurre exclusivamente con la capa transparente; las capas se cruzan durante 2.8 s. Se reutiliza el mismo recurso, animando solo transform/opacity, sin video ni red adicional.
- Movimiento reducido muestra una única capa estática; pausas por visibilidad/manual intactas. Títulos, textos y cuadro no cambian.
- Build, diff --check y comprobaciones de keyframes/desfase correctos. No se afirma verificación visual del fundido ni medición de rendimiento real por limitación del navegador.

## Ajuste solicitado · Cursiva y contraste del cuadro
- Texto inferior sin cambios de contenido, ahora azul oscuro #0E0A42 y cursiva. Placeholder sin cambios de contenido, en cursiva y ligeramente menor (0.875rem); texto escrito permanece normal a 1rem.
- Sin cambios de JSX, secuencia, accesibilidad, comportamiento de envío ni demás secciones.
- Build y diff --check correctos; reglas específicas inspeccionadas y contenido comparado sin cambios. Revisión visual real pendiente por limitación de navegador.

## Ajuste solicitado · Suavizar modales de soluciones
- Entrada del panel ampliada a 700 ms con desplazamiento discreto/escala leve; salida 500 ms con desaceleración suave en vez de 180 ms acelerada.
- El backdrop ahora tiene entrada 600 ms y salida 450 ms; antes aparecía/desaparecía de golpe. Si se pulsa Escape durante la entrada, captura opacidad actual del fondo y detiene animación previa del panel.
- El diálogo nativo solo se cierra después de terminar salida; conserva Escape, botón X, bloqueo del fondo y devolución del foco. Ignora cierres duplicados/aperturas mientras sigue abierto. Reduced motion cierra directamente sin transición.
- Build y diff --check correctos; prueba de lógica real de requestClose con cierre normal/repetido, movimiento reducido e interrupción de entrada. Revisión visual/teclado real pendiente por limitación del navegador; no se afirma animación visualmente validada.

- Petición adicional: pausa entre titulares del hero de 2200 a 2000 ms; cuadro a unos 8.8 s en vez de 9.4 s si no se pausa. No cambia entrada/salida ni demás elementos.

## Ajuste solicitado · Segundo titular más breve y tercero por letras
- Pausa del segundo titular reducida de 2000 a 1400 ms. Primero/tercero conservan 2000 ms; no se alteran copy ni tamaños.
- Solo el tercero entra por letras de izquierda a derecha, con escala 3 a 1 y desenfoque 14 a 0; 700 ms por letra y 360 ms de escalonamiento total. La fase de entrada espera 1060 ms antes de comenzar la pausa.
- Letras agrupadas por palabra para mantener envoltura móvil; h1 mantiene nombre accesible completo. Respeta pausa y reduced motion; no se repite al scroll.
- Build y diff --check correctos; prueba de tiempos y orden/escalonamiento ES/EN, límite de última letra y guardas de accesibilidad. Validación visual real pendiente por bloqueo de Chromium del entorno; no se afirma reproducción exacta ni rendimiento medido.

## Corrección solicitada · Entrada por palabras, no letras
- Revisado video de referencia 14-11-53 entre 9.8 y 12.55 s; Javier aclara que la unidad de animación debe ser cada palabra completa.
- Sustituido el efecto por letras por palabras, de izquierda a derecha: escala y enfoque intactos, duración 1000 ms por palabra y separación de 450 ms entre las tres palabras. Entrada completa 1900 ms; pausa del tercero comienza después.
- Se mantiene la pausa del segundo en 1400 ms, resto de tiempos y contenidos sin cambios. Reduced motion y pausa por visibilidad/manual permanecen; agrupación por palabras conserva adaptación móvil.
- Build, diff --check y pruebas de tiempos y escalonamiento ES/EN correctos. Video inspeccionado; validación visual del sitio pendiente por bloqueo de Chromium.

## Ajuste solicitado · Figura del modal sin aparición brusca
- Causa identificada: las URLs están importadas, pero la imagen solo se monta al pulsar y antes no se esperaba su descarga/decodificación.
- Precarga exclusivamente por intención (puntero/foco en una solución), sin descargar las 12 en el inicio. Se decodifica también el elemento real antes de mostrarlo.
- Espera máxima de 250 ms para coordinar imagen y apertura del modal; en conexión lenta el contenido abre igualmente y la figura entra con fundido de 500 ms al quedar lista. Dimensiones, diseños y textos intactos.
- Fallos de imagen no bloquean el diálogo ni muestran icono roto. Solicitudes antiguas se invalidan al cerrar/desmontar o seleccionar otra opción; reduced motion evita fundido.
- Build y diff --check correctos; pruebas de lógica real con caché/carga rápida, carga lenta, error, cierre antes de terminar y selección repetida. Revisión visual y red real pendiente por bloqueo de Chromium.

## Ajuste solicitado · Cuadro inmediatamente después del titular
- Reducida pausa del tercer titular de 2000 a 100 ms y retirado delay adicional de 200 ms del cuadro. El cuadro comienza a aparecer 100 ms después de completar la última palabra, manteniendo su entrada suave de 650 ms.
- Animación por palabras, otros titulares, contenido y controles intactos. Reduced motion continúa mostrando el cuadro directamente.
- Build, diff --check y prueba de tiempos correctos. Revisión visual real pendiente por bloqueo de Chromium.

## Ajuste solicitado · Evitar cruce de título/cuadro y mover niebla
- Eliminada competencia entre layout transform del título y entrada independiente del cuadro. Ahora el cuadro expande altura en flujo (700 ms), elevando físicamente el título mientras aparece, con margen real entre ambos.
- Retirado desplazamiento heredado de 3.5svh del h1 de escritorio que tampoco participaba del flujo. El título inicial queda centrado; tamaño y ubicación final aprobados se conservan. Padding del conjunto se anima en paralelo.
- Niebla antes: gradientes con opacidad .16 y desplazamiento apenas ±2% en 36 s. Ahora dos capas tenues con recorridos opuestos ±10%/±8%, ciclos 16/23 s y variación leve de opacidad, independientes del zoom. Solo transform/opacity, sin imágenes ni video adicionales.
- Respeta reduced motion y pausas; copy, secuencia por palabras y espera de 100 ms intactos.
- Build, diff --check y comprobaciones estáticas de flujo/ausencia de transform independiente, capas y guardas correctos. No se afirma prueba visual en dispositivos ni rendimiento medido: Chromium sigue bloqueado en este entorno.

## Ajuste solicitado · Experiencia en header
- Añadida Experiencia/Experience entre Nosotros y Contacto, dentro del menú compartido de escritorio/móvil.
- Sigue el patrón de páginas pendientes: texto no interactivo con aria-disabled, sin enlace roto ni página/contenido inventado. Footer sin cambios.
- Build, diff --check y comprobaciones de traducciones/orden/estado pendiente correctos. Validación visual de anchos reales pendiente por bloqueo de Chromium.

## Menú de Servicios y página del servicio 01 · 19 de noviembre de 2026

- Javier aprobó el menú en tonos azules y solicitó integrarlo, implementar la página 01 conforme a las referencias adjuntas y reutilizar el CTA y el footer.
- El header conserva su composición. El menú despliega los ocho servicios en ES/EN; 01 enlaza a `/servicios/modernizacion-de-sistemas` desde el desplegable y desde su tarjeta de Inicio. 02–08 se muestran como pendientes, sin URLs ficticias.
- La página incluye el hero pastel, la franja de introducción y los seis estados de Alcance con su imagen y texto. Conserva Geist y comparte CTA y pie de página. El destino de Contacto sigue pendiente.
- Verificado: `npm run build`, `git diff --check` y pruebas DOM de la ruta directa, seis estados e imágenes, navegación por teclado, ES/EN con la misma ruta, ocho opciones del menú, Escape, cierre exterior y estructura móvil del menú. El navegador de este entorno no permitió la revisión visual en píxeles; no se afirma que se haya hecho.
- Sin despliegue. Al publicar en un servidor estático, la ruta directa debe resolver a `index.html` mediante la regla de fallback de la SPA.

## Movimiento y unión de secciones · servicio 01
- Añadida entrada suave al desplegable, respiración única al hero, Reveal de Inicio para introducción/alcance y transición corta entre seis paneles. Precarga por puntero/foco sin bloquear lectura.
- Según aclaración final, se descarta el puente de degradado: una barra decorativa periwinkle centrada bajo el título y pequeños espacios de fondo azul gris alrededor de la introducción. Sin controles extra ni acumulación de padding inferior.
- CTA/footer, textos, idiomas e ilustraciones sin cambios. Reduced motion elimina movimiento; estados hidden, foco, teclado y cierre del menú se conservan.
- Comprobación: build, diff --check y pruebas DOM del bundle de producción (ruta, seis imágenes/paneles, teclado, ES/EN, menú y CTA/footer compartidos). Pruebas DOM de menú repetido/Escape/exterior/móvil también correctas. Chromium no permite sockets del navegador en este entorno: no se declara revisión visual real ni timing medido en dispositivos.

## Servicio 02 · hero
- Implementado el hero aprobado en `/servicios/digitalizacion-y-automatizacion-de-procesos`, ES/EN, con H1 real y fondo limpio WebP 1774×887. Menú y tarjeta 02 de Inicio enlazan a la ruta; 03–08 siguen pendientes.
- Hero compartido con 01 conserva sus clases, geometría y movimiento; 02 únicamente cambia fondo y línea según su referencia. CTA/footer existentes reutilizados. Sin introducción, alcance ni contenidos inventados.
- Build, diff --check y pruebas DOM de ruta 02/ES/EN/menú/cierre, más regresión de ruta 01 y sus seis estados. Sin validación visual real de navegador por restricción de Chromium del entorno. No desplegado.

## Servicio 02 · franja de introducción
- Integrado el arte limpio exacto aprobado y copy ES/EN separado del componente. Reutiliza layout, Geist 500, Reveal y espacio superior de 01; hueco inferior equivalente antes del CTA sin sección vacía. Hero y copy de Inicio intactos; alcance pendiente.
- Alineados CONTENT/SPEC/PLAN: 02 ya tiene destino con hero y franja; 03–08 siguen pendientes.
- Build, diff --check y DOM ES/EN verificados; sin revisión visual real de navegador por la restricción conocida de Chromium. Sin despliegue.

## Servicio 02 · alcance de cuatro áreas
- Añadido alcance aprobado entre franja y CTA: cuatro figuras optimizadas WebP y copy ES/EN, 01 activa, sin instrucciones.
- Extraída lógica existente a ServiceScope compartido, manteniendo teclado, foco, hidden, precarga por intención y transiciones/reduced motion. Servicio 01 conserva seis estados y sus imágenes.
- Altura mínima desktop compartida y proporción de arte 880:390 solo para 02; móvil natural. Retirado padding provisional previo a CTA para no duplicar espacio del alcance.
- Build, diff --check y DOM de ambas rutas/ES/EN/paneles/teclado verificados. Sin revisión visual real de navegador por restricción del entorno. Sin despliegue.

## Servicios 03–08 · heroes aprobados
- Habilitadas las seis rutas individuales y sus enlaces del menú/carrusel con títulos ES/EN existentes, fondos aportados optimizados y ServiceHero compartido. Sin nuevas secciones interiores, sin alterar 01/02. CTA/footer reutilizados.
- Build, diff --check y DOM de las seis rutas/idiomas/títulos/enlaces activos/cierre verificados; comprobados assets de producción. Chromium continúa restringido: sin afirmar revisión visual de navegador. Sin despliegue.

## Servicios 03–08 · franjas decorativas
Añadidas seis franjas sin texto después del hero, antes del cierre compartido. Geometría de la franja 02, Reveal y movimiento reducido; sin contenido ni placeholders. 01/02 sin modificaciones.

## Servicios 03–08 · copy de franjas
Incorporados los seis párrafos ES aprobados y sus versiones EN. Texto real accesible con tipografía compartida Geist 500, dentro del Reveal existente. Fondos, CSS, navegación y páginas 01/02 intactos.

## Servicio 03 · alcance de integración de sistemas
- Implementado después de la franja, con las cuatro ilustraciones aprobadas optimizadas en WebP y la opción 01 activa al cargar. Reutiliza altura, proporción de imagen, movimiento y comportamiento adaptable de la tarjeta de alcance.
- Build, diff-check y DOM verificados para los cuatro paneles, teclado y cambio ES/EN. No se realizó comprobación visual en Chromium ni despliegue.

## Servicio 04 · alcance del desarrollo a la medida
- Sección bilingüe después de la franja, cuatro ilustraciones aprobadas de malla hexagonal optimizadas en WebP y 01 activa por defecto.
- Build, diff-check y pruebas DOM de paneles, teclado, ubicación y cambio de idioma correctos. Sin despliegue.

## Servicio 05 · alcance de las soluciones en la nube
- Añadido alcance bilingüe después de la franja, con cuatro composiciones aprobadas en WebP y 01 activa al cargar.
- Build, diff-check y DOM verificados: cuatro paneles e imágenes, teclado, cambio ES/EN y CTA/footer sin cambios. Sin despliegue.

## Servicios 07 y 08 · alcances de seguridad y de mantenimiento
- Añadidas las dos secciones bilingües después de sus franjas, con cinco ilustraciones aprobadas para 07 y tres para 08 optimizadas en WebP. En ambas, 01 queda activa al cargar.
- Build, diff-check y DOM verificados: paneles e imágenes, teclado y cambio ES/EN sin perder la selección. Sin despliegue.

## Nosotros · hero aprobado · 19 noviembre 2026
Implementada ruta ES/EN `/nosotros`, arte sin texto (21 KB), navegación header/footer, título y barra reales. Build y DOM de ruta/idioma/menú verificados; QA visual Chromium no disponible. Sin despliegue.

## Nosotros · franja de propósito
Implementada bajo el hero, con arte WebP separado y copy ES/EN. Hero corregido de 2400×1200 (75 KB) preservado sin cambios.

## Nosotros · espacio para video
Reservado un bloque a ancho completo después de la franja, en 16:9 con un máximo de 520 px de alto en escritorio, con los mismos espacios entre secciones. Video y portada definitivos pendientes; no hay controles ni carga de video provisional.

## Nosotros · presentación y cifras
Agregado el bloque editorial ES/EN después del espacio de video, con los valores aprobados 10+, 150+ y 2,000+. Sin cambios al hero, franja de propósito ni espacio de video.

Ajustado el conteo a 650 ms; el signo + aparece al finalizar.

## Experiencia · hero
Hero bilingüe en `/experiencia` con enlace activo en el menú y arte completo atenuado; sin contenido de casos ni despliegue. El armado visual de tarjetas y sus fichas queda pendiente.

## Experiencia · galería
Añadida la galería bilingüe de seis páginas con seis ilustraciones distintas por página. Cada ficha indica que se trata de un ejemplo hipotético y muestra su ilustración, problema y solución sin afirmar resultados ni clientes reales.

Experiencia: tarjetas y flechas mantienen su posición al paginar. En escritorio la cuadrícula se adapta a la altura disponible; hay transiciones breves y un cierre accesible del modal sin forzar desplazamiento. Se retiró la etiqueta visible de las fichas.

Experiencia: los 36 planteamientos se actualizaron en español e inglés, con industria concreta en cada ficha. Problemas y soluciones se presentan sin marcas ni afirmaciones de entrega por Snoware.

Experiencia: la galería solo muestra las flechas de paginación; la página actual sigue anunciándose a lectores de pantalla.

## Contacto
Ruta bilingüe con formulario responsive y validación local. El menú, el footer y los enlaces de contacto existentes ahora llevan a esta página. El envío sigue pendiente de un servicio y destinatario autorizados; no se transmiten ni guardan datos.

Contacto: el fondo acanalado se sustituyó por un recurso más nítido y claro, sin ampliación adicional. La sección ocupa al menos la primera pantalla; se ajustaron el espaciado y la jerarquía del texto sin cambiar los campos ni su comportamiento.

Contacto: el titular, el texto y el formulario tienen una entrada suave y breve, sin mover el resto de la página. Se respeta el movimiento reducido y el foco queda visible y fijo. El botón de envío se compactó, conservando el área táctil y el comportamiento.
