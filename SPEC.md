# Snoware · especificación

Estado de implementación y validaciones en PROGRESS.md.

## Objetivo
Presentar Snoware como consultoría de software con soluciones a la medida. Mostrar tanto capacidades técnicas como aplicaciones concretas en la operación de un negocio, sin aparentar un catálogo limitado de productos cerrados.

## Alcance actual
- Página Inicio bilingüe ES/EN, fiel a las referencias aprobadas.
- Desarrollo organizado en las cuatro fases de PLAN.md; PROGRESS.md registra únicamente avances comprobados.
- Orden de trabajo documental: hero, presentación de Snoware, Nuestros servicios, Nuestra metodología, Soluciones con impacto, CTA, footer. Las 12 referencias finales están identificadas en DESIGN.md.
- 8 servicios, 12 soluciones, metodología de 3 pasos.
- Menú compartido de Servicios con ocho opciones, y página bilingüe del servicio 01 en `/servicios/modernizacion-de-sistemas`. El servicio 02 tiene hero, franja y alcance bilingües en `/servicios/digitalizacion-y-automatizacion-de-procesos`. Los servicios 03–08 tienen rutas con su hero aprobado, franja introductoria bilingüe y CTA/footer compartidos. El servicio 03 añade «Alcance de la integración de sistemas» con cuatro opciones, 01 activa al cargar. El servicio 04 añade «Alcance del desarrollo a la medida» con cuatro opciones y 01 activa al cargar. El servicio 05 añade «Alcance de las soluciones en la nube» con cuatro opciones y 01 activa al cargar. El servicio 06 incluye la sección de Snowys y su alcance de cinco opciones. El servicio 07 incluye cinco alcances de seguridad y el 08 incluye tres de mantenimiento y soporte. En ambos, 01 queda activa al cargar. El resto de destinos no disponibles no simulan enlaces.

## Fuera de alcance actual
Secciones adicionales de Nosotros y páginas de Experiencia y Contacto; agente IA para atención a interesados; envío de mensajes desde Contacto; infraestructura y despliegue AWS. Son requisitos futuros expresos, no funcionalidades descartadas ni terminadas.

## Interacciones previstas
- Servicios: carrusel con 3 tarjetas visibles en escritorio e indicación clara de más contenido. Se solicitaron vistas 1–3, 4–6 y 6–8. Las tres vistas aprobadas representan grupos 1–3, 4–6 y 6–8; no inferir autoplay. Resolver la semántica de los indicadores y adaptación móvil sin alterar la composición aprobada.
- Metodología: selección de paso que cambia el contenido visible, sin repetir innecesariamente el título del paso en el panel.
- Soluciones: 12 entradas abren un panel/modal con título, descripción específica, figura abstracta pequeña, cierre y enlace «Contáctanos».
- Página del servicio 01: hero con título, franja de introducción, tarjeta interactiva «Alcance de la modernización» con seis estados, CTA y footer reutilizados. Seleccionar un alcance cambia imagen y texto sin navegar. No agregar tarjetas, ejemplos, un FAQ ni gráficos exploratorios no aprobados.
- CTA compartido por Inicio y los ocho servicios, y por las páginas futuras excepto Contacto, porque dirige a esa página.
- Idioma: selector que conserva el contexto de navegación y presenta contenido equivalente. Español por defecto; `?lang=en` conserva inglés en Inicio y servicio 01. Las demás rutas se definen cuando se aprueben.
- Las rutas todavía no existentes deben tener una solución acordada para la primera publicación. No publicar botones que aparentan funcionar y no tienen destino.

## Requisitos transversales
Responsive obligatorio en toda la página de Inicio, no solo en el carrusel: navegación, hero, textos, imágenes, presentación, servicios, metodología, soluciones y modales, CTA y footer. Adaptar a celulares, tablets y computadoras durante cada fase, preservando jerarquía, espacios y calidad, sin desbordamiento horizontal.

Texto real, navegación por teclado, foco visible, controles etiquetados y contraste legible. Modales con foco contenido, Escape y restauración del foco. Imágenes adaptativas y optimizadas; dimensiones reservadas para evitar saltos. Respetar preferencia de movimiento reducido.

## Tecnología
- React, Vite y Tailwind CSS son el stack obligatorio de todo Snoware. Vite integra los plugins oficiales de React y Tailwind CSS. npm gestiona las dependencias con archivo de bloqueo.
- `src/` contiene la entrada y composición de la aplicación. `src/components/` contiene componentes reutilizables como la navegación, el selector de idioma y el hero. `src/content/` contiene los textos traducidos y puede alojar datos compartidos.
- Las páginas se compondrán a partir de componentes de interfaz. Mantener archivos enfocados, evitar duplicaciones y usar Tailwind con tokens compartidos y CSS específico para los detalles visuales.
- AWS es el destino futuro. El servicio de hosting se decidirá según la arquitectura y las necesidades de IA y contacto.

## Criterios de aceptación de Inicio
1. Coincide con referencias finales en composición, color, espacios, Geist e identidad.
2. Contiene los 8 servicios verificados y las 12 soluciones completas, sin sustituciones.
3. ES respeta copy aprobado y EN ha sido revisado por calidad y equivalencia.
4. Todo Inicio se adapta a celular, tablet y escritorio sin desbordamientos; carrusel, pasos, modales y navegación funcionan con teclado y controles táctiles.
5. Destinos de navegación, CTA y enlaces reales están resueltos antes de publicar.
6. Se realiza una revisión visual representativa por tamaño y se prueban las interacciones modificadas; no baterías repetitivas sin motivo.
7. No se afirma que IA, contacto, páginas futuras o AWS están listos si no se han implementado y comprobado.

## Ubicación de recursos
Usar las rutas reales bajo `img/` documentadas en DESIGN.md. Hay evidencia visual de su presencia en el explorador del proyecto; calidad y contenido individual pendientes de validar. Este documento no autoriza moverlas ni crear una nueva estructura de aplicación.

## Nosotros · alcance aprobado
Ruta `/nosotros` bilingüe con hero, franja de propósito, espacio reservado para video, presentación editorial, cifras y footer existente. Sin CTA; navegación activa y localizada.
