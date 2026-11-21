// Illustrative scenarios for the design prototype, not verified client projects or outcomes.
// Replace with approved, documented cases before publishing as client experience.
export const experienceCases = [
  {
    id: '01',
    es: { title: 'Seguimiento de pedidos', problem: 'Los pedidos se coordinan por mensajes y llamadas, sin una vista clara de entregas pendientes.', solution: 'Un panel con estados, responsables y alertas por demora permitiría seguir cada pedido desde su registro hasta la entrega.' },
    en: { title: 'Order tracking', problem: 'Orders are coordinated through messages and calls, with no clear view of pending deliveries.', solution: 'A dashboard with statuses, assigned owners and delay alerts would track each order from entry to delivery.' },
  },
  {
    id: '02',
    es: { title: 'Gestión documental', problem: 'Contratos y expedientes están repartidos entre correos y carpetas, con versiones difíciles de identificar.', solution: 'Un repositorio con versiones, permisos y búsqueda por expediente permitiría consultar documentos vigentes y conservar su historial.' },
    en: { title: 'Document management', problem: 'Contracts and records are scattered across emails and folders, making current versions hard to identify.', solution: 'A repository with version control, permissions and record-based search would make current documents and their history accessible.' },
  },
  {
    id: '03',
    es: { title: 'Integración de sistemas', problem: 'Ventas registra clientes en el CRM y administración vuelve a capturar sus datos en el ERP.', solution: 'Una conexión entre ambas plataformas, con reglas de sincronización y revisión de duplicados, permitiría compartir los registros.' },
    en: { title: 'System integration', problem: 'Sales enters customers in the CRM, then administration enters the same details again in the ERP.', solution: 'A connection between both platforms, with synchronization rules and duplicate checks, would allow them to share customer records.' },
  },
  {
    id: '04',
    es: { title: 'Control de inventario', problem: 'Las existencias de distintas sucursales se actualizan en hojas separadas y no reflejan los traspasos.', solution: 'Un sistema de movimientos por ubicación permitiría registrar entradas, salidas y traspasos, con alertas de reposición.' },
    en: { title: 'Inventory control', problem: 'Stock levels for different branches are maintained in separate spreadsheets that do not reflect transfers.', solution: 'A location-based inventory system would record receipts, issues and transfers, with alerts when stock needs replenishing.' },
  },
  {
    id: '05',
    es: { title: 'Automatización de cobranza', problem: 'El seguimiento de facturas vencidas depende de revisar saldos y enviar recordatorios manualmente.', solution: 'Un flujo vinculado a los saldos registrados permitiría programar avisos, asignar seguimientos y detener recordatorios al confirmar el pago.' },
    en: { title: 'Collections automation', problem: 'Following up on overdue invoices requires manually checking balances and sending reminders.', solution: 'A workflow linked to recorded balances would schedule reminders, assign follow-ups and stop notices once payment is confirmed.' },
  },
  {
    id: '06',
    es: { title: 'Análisis operativo', problem: 'Los responsables reciben reportes con cortes distintos y no pueden comparar cargas de trabajo.', solution: 'Un tablero con definiciones comunes y fecha de actualización permitiría comparar volúmenes, tiempos y pendientes por equipo.' },
    en: { title: 'Operational analysis', problem: 'Managers receive reports covering different periods, making workloads difficult to compare.', solution: 'A dashboard with consistent definitions and refresh timestamps would compare volumes, turnaround times and backlogs across teams.' },
  },
  {
    id: '07',
    es: { title: 'Rendimiento en horas pico', problem: 'El sistema responde lentamente cuando varias sucursales registran operaciones al mismo tiempo.', solution: 'Una revisión de consultas, procesos y capacidad permitiría priorizar optimizaciones y validarlas con pruebas de carga.' },
    en: { title: 'Peak-time performance', problem: 'The system slows down when several branches submit transactions at the same time.', solution: 'A review of queries, processing and capacity would identify priority improvements for validation through load testing.' },
  },
  {
    id: '08',
    es: { title: 'Renovación de sistemas legados', problem: 'Una aplicación esencial depende de componentes obsoletos que dificultan incorporar nuevas funciones.', solution: 'Una renovación por módulos permitiría sustituir componentes, comprobar compatibilidad y planear cada transición con una opción de reversión.' },
    en: { title: 'Legacy system renewal', problem: 'An essential application relies on outdated components that make new features difficult to introduce.', solution: 'A module-by-module upgrade would replace components, verify compatibility and give each transition a rollback option.' },
  },
  {
    id: '09',
    es: { title: 'Simplificación de pantallas', problem: 'Registrar una operación exige recorrer varias pantallas y volver a capturar la misma información.', solution: 'Un rediseño del flujo permitiría agrupar campos relacionados, reutilizar datos y validar la captura dentro del sistema existente.' },
    en: { title: 'Simpler application workflows', problem: 'Recording a transaction requires moving through multiple screens and entering the same information again.', solution: 'A redesigned workflow would group related fields, reuse existing data and validate entries within the current application.' },
  },
  {
    id: '10',
    es: { title: 'Evolución del sistema comercial', problem: 'El sistema actual no contempla nuevas listas de precios ni condiciones comerciales por cliente.', solution: 'Una ampliación permitiría configurar reglas de precios y autorizaciones, conservando el historial de operaciones existentes.' },
    en: { title: 'Sales system enhancements', problem: 'The current system cannot accommodate new price lists or customer-specific commercial terms.', solution: 'An extension would add configurable pricing and approval rules while preserving existing transaction history.' },
  },
  {
    id: '11',
    es: { title: 'Autorización de compras', problem: 'Las solicitudes de compra quedan detenidas en correos sin saber quién debe autorizarlas.', solution: 'Un flujo por monto y área permitiría asignar aprobadores, notificar pendientes y conservar la justificación de cada decisión.' },
    en: { title: 'Purchase approvals', problem: 'Purchase requests stall in email threads with no clear indication of who needs to approve them.', solution: 'A workflow based on amount and department would assign approvers, flag pending requests and retain the reason for each decision.' },
  },
  {
    id: '12',
    es: { title: 'Generación de propuestas', problem: 'Cada propuesta se arma copiando datos y condiciones en documentos que terminan con formatos distintos.', solution: 'Plantillas conectadas al catálogo permitirían generar propuestas con precios autorizados y enviarlas a revisión antes de compartirlas.' },
    en: { title: 'Proposal generation', problem: 'Proposals are assembled by copying details and terms into documents with inconsistent formats.', solution: 'Templates connected to the product catalog would generate proposals with approved pricing and route them for review before sharing.' },
  },
  {
    id: '13',
    es: { title: 'Alta de proveedores', problem: 'Compras recibe expedientes incompletos y debe solicitar por separado cada documento faltante.', solution: 'Un formulario con requisitos, validaciones y avisos permitiría completar el expediente y enviarlo al responsable de su aprobación.' },
    en: { title: 'Supplier onboarding', problem: 'Procurement receives incomplete applications and has to request each missing document separately.', solution: 'A form with required documents, validation and reminders would assemble the supplier record and route it for approval.' },
  },
  {
    id: '14',
    es: { title: 'Conciliación de pagos', problem: 'Los pagos del proveedor de cobro no están relacionados con las órdenes del sistema de ventas.', solution: 'Una integración con referencias y validación de estados permitiría asociar pagos a órdenes y separar diferencias para revisión.' },
    en: { title: 'Payment reconciliation', problem: 'Payments recorded by the payment provider are not linked to orders in the sales system.', solution: 'An integration using payment references and status checks would match payments to orders and flag discrepancies for review.' },
  },
  {
    id: '15',
    es: { title: 'Conexión con paqueterías', problem: 'El equipo captura direcciones en cada portal de envío y consulta las entregas una por una.', solution: 'Una integración logística permitiría solicitar guías desde el sistema y recibir actualizaciones del transportista con control de errores.' },
    en: { title: 'Carrier integration', problem: 'Staff enter addresses into each shipping portal and check delivery progress one shipment at a time.', solution: 'A logistics integration would request shipping labels from the business system and receive carrier updates, with error handling.' },
  },
  {
    id: '16',
    es: { title: 'Datos entre sistemas legados', problem: 'Una plataforma antigua intercambia archivos con otros sistemas, pero las diferencias se detectan hasta el cierre.', solution: 'Un intercambio controlado permitiría validar archivos, registrar errores y conciliar los datos antes de incorporarlos al sistema destino.' },
    en: { title: 'Legacy data exchange', problem: 'An older platform exchanges files with other systems, but discrepancies only surface at period-end.', solution: 'A controlled exchange would validate files, log errors and reconcile data before loading it into the destination system.' },
  },
  {
    id: '17',
    es: { title: 'Gestión empresarial a la medida', problem: 'Compras, producción y ventas operan por separado y no comparten las reglas particulares del negocio.', solution: 'Un sistema integral permitiría conectar módulos, permisos y trazabilidad alrededor de los procesos específicos de cada área.' },
    en: { title: 'Tailored business management', problem: 'Procurement, production and sales work separately, without a shared system for the business’s specific rules.', solution: 'A complete business system would connect modules, permissions and traceability around each department’s processes.' },
  },
  {
    id: '18',
    es: { title: 'Operación móvil en campo', problem: 'Los técnicos anotan visitas en papel y entregan evidencias al regresar a la oficina.', solution: 'Una aplicación móvil permitiría consultar órdenes, registrar actividades y adjuntar evidencias, con sincronización al recuperar conexión.' },
    en: { title: 'Mobile field operations', problem: 'Technicians record visits on paper and submit supporting evidence when they return to the office.', solution: 'A mobile app would provide work orders, activity records and evidence uploads, with synchronization when connectivity returns.' },
  },
  {
    id: '19',
    es: { title: 'Portal de distribuidores', problem: 'Los distribuidores dependen de un asesor para consultar condiciones, solicitar pedidos y revisar su avance.', solution: 'Un portal autenticado permitiría consultar catálogos y condiciones por cuenta, enviar pedidos y dar seguimiento a su atención.' },
    en: { title: 'Distributor portal', problem: 'Distributors rely on a sales representative to check terms, place orders and request status updates.', solution: 'An authenticated portal would provide account-specific catalogs and terms, order submission and progress tracking.' },
  },
  {
    id: '20',
    es: { title: 'Migración a la nube', problem: 'Una aplicación depende de un servidor local cuya capacidad limita el crecimiento de la operación.', solution: 'Una migración planificada permitiría evaluar dependencias, probar la aplicación en la nube y ejecutar el traslado con respaldo y reversión.' },
    en: { title: 'Cloud migration', problem: 'An application relies on an on-premises server whose capacity limits business growth.', solution: 'A planned migration would assess dependencies, test the application in the cloud and include backup and rollback procedures.' },
  },
  {
    id: '21',
    es: { title: 'Capacidad para alta demanda', problem: 'La infraestructura mantiene capacidad fija aunque el tráfico cambia durante campañas y temporadas.', solution: 'Un entorno con escalamiento y monitoreo permitiría ajustar recursos según demanda, con límites de consumo y pruebas de capacidad.' },
    en: { title: 'Capacity for demand spikes', problem: 'Infrastructure capacity stays fixed even as traffic changes during campaigns and seasonal peaks.', solution: 'An environment with scaling and monitoring would adjust resources to demand, supported by spending limits and capacity tests.' },
  },
  {
    id: '22',
    es: { title: 'Control del gasto en nube', problem: 'El costo de la nube crece sin identificar qué entornos consumen recursos o cuáles siguen sin uso.', solution: 'Una revisión de consumo permitiría asignar costos por entorno, ajustar capacidades y programar el apagado de recursos no productivos.' },
    en: { title: 'Cloud cost management', problem: 'Cloud spending grows without a clear view of which environments use resources or which remain idle.', solution: 'A usage review would allocate costs by environment, right-size capacity and schedule shutdowns for non-production resources.' },
  },
  {
    id: '23',
    es: { title: 'Recuperación ante fallas', problem: 'Existen respaldos, pero no se ha comprobado cómo restaurar las aplicaciones cuando ocurre una falla.', solution: 'Un plan de recuperación permitiría definir prioridades, automatizar respaldos y ensayar restauraciones con tiempos y responsables establecidos.' },
    en: { title: 'Disaster recovery', problem: 'Backups exist, but there is no tested procedure for restoring applications after a failure.', solution: 'A recovery plan would set priorities, automate backups and rehearse restoration with defined timelines and responsibilities.' },
  },
  {
    id: '24',
    es: { title: 'Asistente de atención', problem: 'Las consultas recurrentes sobre productos y condiciones ocupan al equipo que atiende solicitudes especializadas.', solution: 'Un asistente con información aprobada podría responder consultas frecuentes y transferir al equipo los casos fuera de su alcance.' },
    en: { title: 'Customer support assistant', problem: 'Recurring product and policy questions occupy the team responsible for more specialized requests.', solution: 'An assistant using approved information could answer common questions and hand off requests beyond its scope to the team.' },
  },
  {
    id: '25',
    es: { title: 'Consulta de conocimiento interno', problem: 'El personal debe buscar en varios manuales para resolver dudas sobre procedimientos vigentes.', solution: 'Un asistente interno podría localizar respuestas en documentos autorizados, citar su fuente y respetar los permisos de consulta.' },
    en: { title: 'Internal knowledge assistant', problem: 'Employees have to search several manuals to answer questions about current procedures.', solution: 'An internal assistant could retrieve answers from approved documents, cite its sources and respect access permissions.' },
  },
  {
    id: '26',
    es: { title: 'Lectura de documentos', problem: 'El equipo captura manualmente datos de documentos con formatos distintos y después verifica cada registro.', solution: 'Un proceso con IA podría extraer campos, aplicar validaciones y enviar a revisión humana los datos ambiguos antes de registrarlos.' },
    en: { title: 'Document data extraction', problem: 'Staff manually enter data from documents in different formats, then check each record.', solution: 'An AI-assisted process could extract fields, apply validation rules and route ambiguous data for human review before saving it.' },
  },
  {
    id: '27',
    es: { title: 'Clasificación de solicitudes', problem: 'Las solicitudes llegan como texto libre y una persona debe identificar su tema y asignar el área responsable.', solution: 'Un clasificador podría proponer categoría y destino, con reglas de asignación y revisión humana cuando exista incertidumbre.' },
    en: { title: 'Request classification', problem: 'Requests arrive as free text, requiring someone to identify the subject and assign the responsible team.', solution: 'A classifier could suggest a category and destination, with routing rules and human review for uncertain cases.' },
  },
  {
    id: '28',
    es: { title: 'Detección de variaciones', problem: 'Los cambios inusuales en el consumo de insumos pasan desapercibidos entre los registros diarios.', solution: 'Un modelo evaluado con datos históricos podría señalar desviaciones para revisión, ajustando los umbrales al comportamiento de la operación.' },
    en: { title: 'Anomaly detection', problem: 'Unusual changes in material consumption go unnoticed among daily records.', solution: 'A model evaluated against historical data could flag deviations for review, with thresholds tuned to operational patterns.' },
  },
  {
    id: '29',
    es: { title: 'Accesos por responsabilidad', problem: 'Los usuarios comparten permisos amplios que no corresponden a las actividades de su puesto.', solution: 'Un esquema de roles permitiría limitar accesos, reforzar la autenticación y revisar permisos cuando cambien las responsabilidades.' },
    en: { title: 'Role-based access', problem: 'Users have broad permissions that do not match their job responsibilities.', solution: 'A role-based model would restrict access, strengthen authentication and trigger permission reviews when responsibilities change.' },
  },
  {
    id: '30',
    es: { title: 'Protección de expedientes', problem: 'Los expedientes confidenciales se comparten mediante enlaces sin controles claros de consulta o descarga.', solution: 'Una revisión de clasificación y permisos permitiría restringir el intercambio, proteger el almacenamiento y registrar accesos a la información.' },
    en: { title: 'Confidential record protection', problem: 'Confidential records are shared through links without clear controls over viewing or downloading.', solution: 'A classification and permissions review would restrict sharing, protect storage and log access to the information.' },
  },
  {
    id: '31',
    es: { title: 'Fortalecimiento de aplicaciones', problem: 'La aplicación conserva configuraciones de prueba y componentes pendientes de actualización.', solution: 'Una revisión de seguridad permitiría priorizar correcciones, retirar configuraciones innecesarias y verificar los controles antes de liberar cambios.' },
    en: { title: 'Application hardening', problem: 'The application still uses test configurations and components awaiting security updates.', solution: 'A security review would prioritize fixes, remove unnecessary configurations and verify controls before releasing changes.' },
  },
  {
    id: '32',
    es: { title: 'Alertas de seguridad', problem: 'Los registros de acceso están dispersos y no hay un procedimiento claro para investigar actividad sospechosa.', solution: 'La centralización de eventos permitiría configurar alertas y definir responsables para investigar, contener y documentar posibles incidentes.' },
    en: { title: 'Security alerts', problem: 'Access logs are scattered, with no clear procedure for investigating suspicious activity.', solution: 'Centralized events would support alerts and defined responsibilities for investigating, containing and documenting potential incidents.' },
  },
  {
    id: '33',
    es: { title: 'Atención de incidencias', problem: 'Las fallas se reportan por distintos canales sin un registro común de prioridad y seguimiento.', solution: 'Un esquema de soporte permitiría centralizar reportes, clasificar su impacto y documentar diagnóstico, atención y cierre.' },
    en: { title: 'Incident support', problem: 'Failures are reported through different channels without a shared record of priority or progress.', solution: 'A support process would centralize reports, classify business impact and document diagnosis, resolution and closure.' },
  },
  {
    id: '34',
    es: { title: 'Monitoreo preventivo', problem: 'El equipo detecta errores recurrentes solo cuando un usuario informa que la aplicación dejó de responder.', solution: 'El monitoreo de disponibilidad y errores permitiría emitir alertas, consultar tendencias y programar revisiones antes de nuevos incidentes.' },
    en: { title: 'Preventive monitoring', problem: 'Recurring errors are only noticed when a user reports that the application has stopped responding.', solution: 'Availability and error monitoring would provide alerts, reveal trends and support scheduled reviews ahead of further incidents.' },
  },
  {
    id: '35',
    es: { title: 'Compatibilidad de aplicaciones', problem: 'Una actualización del navegador altera formularios y funciones que el equipo utiliza diariamente.', solution: 'Un ciclo de mantenimiento permitiría reproducir fallas, ajustar compatibilidad y verificar los flujos afectados antes de publicar la corrección.' },
    en: { title: 'Application compatibility', problem: 'A browser update disrupts forms and features the team relies on every day.', solution: 'A maintenance cycle would reproduce issues, update compatibility and verify affected workflows before releasing the fix.' },
  },
  {
    id: '36',
    es: { title: 'Mantenimiento de dependencias', problem: 'Las actualizaciones se posponen porque no existe un inventario de componentes ni pruebas de compatibilidad.', solution: 'Un calendario de mantenimiento permitiría revisar versiones, evaluar cambios y actualizar dependencias con pruebas y un plan de reversión.' },
    en: { title: 'Dependency maintenance', problem: 'Updates are postponed because there is no component inventory or compatibility testing process.', solution: 'A maintenance schedule would review versions, assess changes and update dependencies with testing and a rollback plan.' },
  },
];
