# Snoware · instrucciones del proyecto

Las 12 referencias aprobadas por Javier guían el diseño. Consultar PROGRESS.md para conocer el estado de cada fase.

## Alcance y autoridad
- Primera entrega: Inicio en español e inglés. El 19 de noviembre de 2026 Javier aprobó e indicó implementar el menú desplegable de Servicios y la página individual del servicio 01 (Mejora y modernización de sistemas). El servicio 02 ya tiene hero, franja introductoria y alcance de cuatro áreas aprobados e implementados. Los servicios 03–08 cuentan con hero aprobado, franja introductoria bilingüe y cierre compartido; 03 y 04 tienen alcance de cuatro áreas y 06 tiene Snowys y alcance de cinco áreas. Las secciones interiores de 05, 07 y 08, así como Nosotros, Experiencia y Contacto, quedan pendientes.
- Respetar los diseños y contenidos aprobados. Una propuesta, una variante generada o un archivo llamado «aprobado» no equivalen por sí solos a aprobación del usuario.
- La instrucción más reciente de Javier prevalece. No eliminar opciones, inventar textos, cambiar ilustraciones, colores, distribución o navegación para resolver una duda.
- No confundir los 8 servicios con las 12 soluciones de negocio. No reducir ninguno de los dos conjuntos.
- Consultar SPEC.md para alcance, CONTENT.md para copy, DESIGN.md para fidelidad visual, PLAN.md para las cuatro fases de Inicio y PROGRESS.md para estado real.

## Stack y organización del código
- React, Vite y Tailwind CSS son obligatorios para todo el proyecto, incluidas las siguientes fases y páginas. Usar npm y versionar el archivo de bloqueo.
- Organizar navegación, hero y futuras secciones como componentes React pequeños, con responsabilidades claras. Mantener la composición de cada página separada de los componentes compartidos.
- Mantener los textos ES/EN y los datos reutilizables fuera de los componentes. Derivar la interfaz de props y estado de React, y reservar los efectos para sincronizar con APIs externas.
- Usar utilidades de Tailwind para la composición y tokens compartidos para tipografía y color. Conservar CSS específico para la dirección visual o las interacciones cuando sea más legible. Evitar estilos y lógica duplicados.

## Trabajo eficiente
- Las cuatro fases de PLAN.md documentan Inicio; para el servicio 01 seguir la ampliación aprobada del plan. No ejecutar toda la página de una vez ni añadir microfases innecesarias. Dentro de cada fase, trabajar de forma directa e inspeccionar solo archivos relevantes. Al cerrar, actualizar PROGRESS.md y esperar la revisión de Javier antes de avanzar.
- Optimizar tokens: no releer el repositorio completo, no repetir explicaciones, no ejecutar la misma batería de pruebas después de cambios que no la afectan.
- Elegir validaciones proporcionales al cambio. Repetir una prueba solo si cambió lo que verifica o si falló.
- Conservar control visual suficiente: revisar composición, espacios, alineaciones, tipografía, imágenes y responsive frente a referencias. La eficiencia no justifica bajar calidad ni omitir seguridad o funcionalidad necesaria.
- Usar las skills pertinentes ya instaladas; no reinstalarlas ni ejecutar todas por rutina. La instalación actual la realiza Javier y aún no se ha verificado en el proyecto.
- Informar con brevedad qué cambió, qué se comprobó y qué queda pendiente. No afirmar que algo está implementado, aprobado o probado sin evidencia.

## Reglas de diseño y contenido
- Geist real en toda la interfaz; no fuentes parecidas ni texto incrustado en imágenes para simularla.
- Mantener espacios y proporciones aprobados. No rediseñar por gusto del implementador.
- Referencias completas sirven para comparar; no convertirlas en una única imagen de la página.
- Inglés natural y profesional, adaptado al significado del español. Las propuestas EN de CONTENT.md requieren revisión; no están aprobadas.
- No inventar clientes, métricas, testimonios, capacidades, correos, enlaces sociales ni garantías.
- Menú exacto: Inicio, Servicios, Nosotros, Experiencia y Contacto. Servicios abre el desplegable de ocho opciones. Enlazar los ocho servicios y mantener los destinos aún no construidos claramente no disponibles; no inventar páginas o enlaces vacíos.

## Seguridad y entregas futuras
- No incluir secretos en cliente ni en Git. IA, mensajería y credenciales se resuelven mediante servicios seguros cuando se apruebe su implementación.
- AWS es destino previsto, no infraestructura autorizada. No crear recursos, costes ni despliegues en esta etapa.
- No activar formularios, comunicaciones o IA ficticiamente funcionales.

## Fuente visual vigente
Las 12 imágenes en `img/references/` son el conjunto aprobado por Javier («todo eso es lo aprobado», más CTA enviado a continuación). Prevalecen sobre variantes anteriores. Conservar Geist real aunque alguna imagen generada tenga pequeñas imperfecciones tipográficas. Los datos de ejemplo siguen siendo provisionales: aprobación visual no convierte un correo ficticio en dirección operativa.

## Estructura proporcionada por Javier
Los recursos están bajo `img/`, con rutas exactas en DESIGN.md. No reorganizar carpetas ni inventar nombres. Su presencia se ha observado en capturas, no mediante lectura directa del proyecto. Validar solo los archivos pertinentes cuando se trabaje en él. `.agents` y `skills-lock.json` no prueban por sí solos que todas las skills estén instaladas correctamente.

## Responsive de todo Inicio
Toda la página debe adaptarse a celulares, tablets y computadoras: navegación, hero, textos, imágenes, presentación, servicios, metodología, soluciones y sus modales, CTA y footer. Implementarlo durante cada fase, no únicamente en el carrusel ni al final. Conservar jerarquía, espaciado y calidad visual sin desbordamiento horizontal.
