# Snoware · especificación

Estado: borrador. Documentación solamente; implementación aún no iniciada por esta entrega.

## Objetivo
Presentar Snoware como consultoría de software con soluciones a la medida. Mostrar tanto capacidades técnicas como aplicaciones concretas en la operación de un negocio, sin aparentar un catálogo limitado de productos cerrados.

## Alcance actual
- Página Inicio bilingüe ES/EN, fiel a las referencias aprobadas.
- Desarrollo organizado en las cuatro fases de PLAN.md; PROGRESS.md registra únicamente avances comprobados.
- Orden de trabajo documental: hero, presentación de Snoware, Nuestros servicios, Nuestra metodología, Soluciones con impacto, CTA, footer. Las 12 referencias finales están identificadas en DESIGN.md.
- 8 servicios, 12 soluciones, metodología de 3 pasos.
- Navegación y componentes preparados para crecer sin diseñar ahora páginas pendientes.

## Fuera de alcance actual
Páginas individuales de servicios, Nosotros y Contacto; agente IA para atención a interesados; envío de mensajes desde Contacto; infraestructura y despliegue AWS. Son requisitos futuros expresos, no funcionalidades descartadas ni terminadas.

## Interacciones previstas
- Servicios: carrusel con 3 tarjetas visibles en escritorio e indicación clara de más contenido. Se solicitaron vistas 1–3, 4–6 y 6–8. Las tres vistas aprobadas representan grupos 1–3, 4–6 y 6–8; no inferir autoplay. Resolver la semántica de los indicadores y adaptación móvil sin alterar la composición aprobada.
- Metodología: selección de paso que cambia el contenido visible, sin repetir innecesariamente el título del paso en el panel.
- Soluciones: 12 entradas abren un panel/modal con título, descripción específica, figura abstracta pequeña, cierre y enlace «Contáctanos».
- CTA compartido por las páginas futuras, excepto Contacto, porque dirige a esa página.
- Idioma: selector que conserva el contexto de navegación y presenta contenido equivalente. Estructura de rutas, idioma inicial y persistencia pendientes de elección técnica.
- Las rutas todavía no existentes deben tener una solución acordada para la primera publicación. No publicar botones que aparentan funcionar y no tienen destino.

## Requisitos transversales
Responsive obligatorio en toda la página de Inicio, no solo en el carrusel: navegación, hero, textos, imágenes, presentación, servicios, metodología, soluciones y modales, CTA y footer. Adaptar a celulares, tablets y computadoras durante cada fase, preservando jerarquía, espacios y calidad, sin desbordamiento horizontal.

Texto real, navegación por teclado, foco visible, controles etiquetados y contraste legible. Modales con foco contenido, Escape y restauración del foco. Imágenes adaptativas y optimizadas; dimensiones reservadas para evitar saltos. Respetar preferencia de movimiento reducido.

## Tecnología
Stack, gestor de paquetes y estructura definitivos pendientes de verificar en el nuevo proyecto. No asumir que usar las skills de MBS impone su arquitectura. AWS es el destino futuro; decidir servicio de hosting según arquitectura y necesidades reales de IA y contacto, sin aprovisionar ahora.

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
