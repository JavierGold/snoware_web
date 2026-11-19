// Only published page implementations have destinations; never create dead links.
export const serviceRoutes = ['/servicios/modernizacion-de-sistemas', null, null, null, null, null, null, null];
export function localizedUrl(path, language) {
  return language === 'en' ? `${path}?lang=en` : path;
}
