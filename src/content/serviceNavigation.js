// Only published page implementations have destinations; never create dead links.
export const serviceRoutes = ['/servicios/modernizacion-de-sistemas', '/servicios/digitalizacion-y-automatizacion-de-procesos', null, null, null, null, null, null];
export function localizedUrl(path, language) {
  return language === 'en' ? `${path}?lang=en` : path;
}
