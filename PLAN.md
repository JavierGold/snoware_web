# Plan de desarrollo · Snoware

Estado de Inicio: las cuatro fases están implementadas en la copia local. La revisión visual y las animaciones al desplazarse quedan listas para revisión de Javier. Consultar PROGRESS.md para las verificaciones y los destinos pendientes. La publicación y el trabajo posterior requieren indicación de Javier.

## Alcance
Desarrollar únicamente la página de Inicio en español e inglés. Las páginas de servicios, Nosotros y Contacto, el agente de IA, el envío de mensajes y el despliegue en AWS quedan para después.

## Criterios para todas las fases
- Consultar AGENTS.md, SPEC.md, CONTENT.md, DESIGN.md y PROGRESS.md y las referencias correspondientes antes de trabajar.
- Respetar diseños aprobados, composición, colores, imágenes, espacios y tipografía Geist. No sustituir contenido ni rediseñar por cuenta propia.
- Implementar todo Inicio adaptable a celulares, tablets y computadoras desde cada fase: navegación, hero, textos, imágenes, presentación, servicios, metodología, soluciones y modales, CTA y footer. No limitar responsive al carrusel ni posponerlo al cierre. Evitar desbordamientos y conservar espacios, jerarquía y calidad visual.
- Preparar español e inglés; el inglés debe sonar natural y profesional. Señalar cualquier texto pendiente de aprobación.
- Usar solo las skills pertinentes. Trabajar directamente, sin fases adicionales ni pruebas repetitivas innecesarias. Verificar lo modificado y revisar visualmente los tamaños pertinentes.
- Al cerrar cada fase, actualizar PROGRESS.md, explicar cómo ejecutarla y detenerse para revisión de Javier antes de avanzar.
- No inventar datos, destinos ni funcionalidades. No publicar ni desplegar.

## Fase 1 · Base, navegación y hero
Preparar la base necesaria del proyecto y construir la navegación y el hero de Inicio conforme a las referencias aprobadas, con selección de idioma y adaptación responsive. Verificar compilación y revisar escritorio y móvil. Detenerse para revisión.

## Fase 2 · Sobre Snoware y Nuestros servicios
Implementar ambas secciones conforme a sus diseños aprobados. Conservar los ocho servicios, sus ilustraciones y el carrusel con indicación de más contenido. Verificar las interacciones y adaptación en los tamaños pertinentes. Detenerse para revisión.

## Fase 3 · Nuestra metodología y Soluciones con impacto
Implementar la metodología con sus tres pasos seleccionables y la sección de doce soluciones con sus ventanas, descripción y botón de contacto. Respetar referencias, fondo desenfocado y figuras. Comprobar interacciones, navegación por teclado y adaptación responsive. Detenerse para revisión.

## Fase 4 · CTA, footer y revisión final
Implementar el CTA y el footer según los diseños aprobados. El CTA dirige a Contacto; no crear ni simular una página de Contacto terminada. Revisar el conjunto de Inicio en escritorio, tablet y celular, corregir diferencias observadas y verificar compilación y principales interacciones una vez estable. Registrar pendientes y solicitar aprobación; no publicar.

## Posterior a Inicio
Diseñar y desarrollar las páginas individuales de servicios, Nosotros y Contacto; definir e implementar la atención con agente IA, el envío de mensajes y la infraestructura y despliegue en AWS cuando se indiquen. No se consideran implementados ni diseñados actualmente.

## Actualización posterior del plan
Estas cuatro fases cubren únicamente Inicio. Ampliar PLAN.md para páginas individuales de servicios, Nosotros y Contacto solo cuando sus diseños estén aprobados y Javier indique continuar. No inventar ahora sus diseños, contenido ni fases detalladas. IA, envío de mensajes y AWS se planificarán cuando se definan y autoricen sus requisitos. Registrar en PROGRESS.md la aprobación y el alcance que habilitan cada ampliación.

## Movimiento e interacciones
Incorporar animaciones elegantes y suaves al hacer scroll y al seleccionar o interactuar con elementos. Deben acompañar la jerarquía y el diseño aprobado, sin alterar distribución, espacios ni identidad; evitar efectos exagerados, desplazamientos innecesarios y bloqueos de interacción. Respetar `prefers-reduced-motion`, mantener navegación por teclado y foco visible, y no depender de animaciones para mostrar información esencial. Verificar las interacciones afectadas y su alternativa de movimiento reducido, sin repetir pruebas que no corresponden al cambio.
