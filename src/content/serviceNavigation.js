// Only published page implementations have destinations; never create dead links.
export const serviceRoutes = ['/servicios/modernizacion-de-sistemas', '/servicios/digitalizacion-y-automatizacion-de-procesos', '/servicios/integracion-de-sistemas', '/servicios/desarrollo-de-software-a-la-medida', '/servicios/soluciones-en-la-nube', '/servicios/inteligencia-artificial-aplicada', '/servicios/seguridad-de-la-informacion-y-control-de-accesos', '/servicios/mantenimiento-y-soporte'];
export function localizedUrl(path, language) {
  return language === 'en' ? `${path}?lang=en` : path;
}
