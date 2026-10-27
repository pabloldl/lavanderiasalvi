# Lavandería Salvi — El ciclo perfecto

Web local estática realizada con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. No necesita instalaciones, compilación ni servicios externos. No se ha desplegado.

## Contenido y verificación

Investigación realizada el 27 de octubre de 2026. Nombre, dirección y teléfono aportados en el encargo y contrastados con [la ficha pública de Lavandería Salvi](https://elfinanciero.es/lavanderiasalvi/).

La ficha clasifica el negocio como lavandería automática y publica un horario de 08:00 a 22:00 todos los días. No se ha localizado una fuente oficial o independiente que permita confirmar la vigencia de esos datos. Por prudencia, la web solo presenta la actividad general de lavandería y remite las consultas específicas al teléfono.

No se han podido verificar servicios concretos, modalidad atendida o autoservicio, equipamiento, precios, medios de pago, perfiles sociales oficiales, WhatsApp, correo electrónico ni fotografías autorizadas del establecimiento. No se presentan como disponibles ni se añaden al JSON-LD. No se incluyen testimonios ni historia inventada.

Dirección: Calle Cádiz, 8, 11670 El Bosque, Cádiz. Teléfono: 662 595 332. Google Maps utiliza una búsqueda por dirección sin coordenadas inventadas.

## Imágenes y licencias

Ambas fotografías son ilustrativas: no muestran Lavandería Salvi, sus instalaciones, sus procesos ni servicios propios. Se indica en los pies, textos alternativos y créditos.

| Archivo | Autor y fuente | Licencia | Archivo local |
| --- | --- | --- | --- |
| `img/textiles.jpg` | [Roman Odintsov / Pexels, 7691101](https://www.pexels.com/photo/white-towels-on-white-table-7691101/) | [Pexels](https://www.pexels.com/license/) | JPEG real, 1400 × 2100, 208368 bytes |
| `img/tejido.jpg` | [Davis Vidal / Pexels, 8465939](https://www.pexels.com/photo/folded-delicate-fabric-8465939/) | [Pexels](https://www.pexels.com/license/) | JPEG real, 1200 × 798, 131954 bytes |

Descargadas desde `images.pexels.com` con reducción de dimensiones y compresión (`auto=compress&cs=tinysrgb&q=85`). Decodificadas con System.Drawing y comprobadas en Chrome. No se reutilizan fotografías de los cinco proyectos abiertos en el IDE.

Tipografía: Manrope, distribución de [Google Fonts](https://github.com/google/fonts/tree/main/ofl/manrope). Archivo variable local y licencia SIL OFL incluida en `css/fonts/OFL.txt`. Los detalles técnicos usan una pila monoespaciada del sistema. Favicon y símbolo circular dibujados como SVG originales.

## Diseño y uso

Portada circular con nombre y fotografía separados; navegación visible en todos los tamaños, sin menú dependiente de JavaScript. Presentación tipográfica, línea de consulta de lavandería, preguntas desplegables nativas, señalética de dirección y contacto sobre fondo claro. No hay catálogo ficticio ni carrusel.

Los desplegables, enlaces y portada funcionan sin JavaScript. El botón de copiar aparece solo con JavaScript. Usa Clipboard API en contextos seguros; si se deniega o no está disponible, muestra un campo seleccionado para copia manual y un aviso accesible. No se interpreta un fallo de permisos como una copia realizada.

Animaciones puntuales de trazado y geometría, sin ocultar contenido. Se desactivan con `prefers-reduced-motion`. Incluye salto al contenido, foco visible, estructura semántica, `lang=es`, textos alternativos y avisos `aria-live`.

SEO: title, description, Open Graph y LocalBusiness con dirección y teléfono. Al asignar un dominio definitivo, convertir `og:image` a URL absoluta y añadir canonical y `og:url`. No se inventa ahora un dominio de publicación.

## Comprobaciones

- Sintaxis JavaScript comprobada con `node --check`.
- Chrome: tamaños 375, 768, 1440 y 1920 px, carga de imágenes, destinos de anclas y SALVI completo sin intersección con la fotografía.
- Desplegables ejecutados y alternativa manual de copia probada. La escritura real en el portapapeles no se verificó porque el navegador de prueba denegó el acceso.
- Página comprobada con JavaScript desactivado.
- Revisión visual de las capturas de escritorio y móvil; comparación de estructura y código con los cinco proyectos indicados en el IDE. No se realizó una comparación visual de esos otros proyectos.
- Los enlaces `tel:` y Google Maps tienen destinos reales; no se realizó ninguna llamada ni se verificó una ruta de navegación externa.

Solo se ha creado `lavanderia-salvi/`, sin modificar otros proyectos, añadir configuraciones de alojamiento ni desplegar.
