[ROL]

Desarrollador senior front-end 


[CONTEXTO]

Wanderlust Labs es una startup de travel-tech que está construyendo una plataforma para descubrir y guardar experiencias únicas alrededor del mundo: desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático. Su diseñadora de producto ya ha preparado referencias visuales, y el equipo de ingeniería necesita un desarrollador frontend que dé vida al MVP del explorador.

Tu misión es construir el explorador de experiencias: una aplicación multipágina con React y Next.js donde los usuarios puedan explorar, buscar y filtrar experiencias sin recargar la página. Antes de escribir un solo componente, busca 2 o 3 interfaces reales que admires y que encajen con la estética esperada: una UI de descubrimiento limpia con tarjetas, una barra de búsqueda y un sistema de filtros. Úsalas como referencia de diseño y documéntalas en tu README bajo una sección "Design References".

Tu dataset será un array de 100 experiencias generadas con IA. La PM quiere que la búsqueda y los filtros vivan en la URL para que los usuarios puedan compartir enlaces como /experiences?search=vela&category=adventure&destination=Croatia y aterrizar directamente en una vista prefiltrada.

Tu PM, Lea Moreau, te envió la siguiente spec por Slack:
Páginas requeridas

    - / — Home: sección hero con un botón que navega a /experiences
    /experiences — Explorador: listado completo de tarjetas con barra de búsqueda y al menos dos filtros (categoría y destino). La búsqueda y los filtros activos deben reflejarse en la URL como query parameters y deben prerrellenar los inputs al cargar la página
    - /experiences/[id] — Detalle: información completa de una experiencia, obtenida del dataset local por su ID
    - /favorites — Favoritos: lista de experiencias que el usuario ha marcado como favoritas (guardadas en estado de componente por ahora)
    - /profile — Perfil: página estática con un perfil de usuario simulado y un resumen con el número de favoritos guardados

Comportamiento de la búsqueda

La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. Usa una regex case-insensitive para esto: algo como /term/i. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.
Dataset

Usa un asistente de código con IA para generar un array de 100 objetos de experiencia. Cada objeto debe tener como mínimo: id, title, description, category (una de: Adventure, Culture, Food, Wellness, Nature), destination (ciudad + país), price, rating e imageUrl (cualquier placeholder). Guárdalo como un fichero TypeScript local.
Favoritos

Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favoritos del usuario. Los favoritos se guardan en un useState de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.

[RESULTADO]
# Que debes hacer

## setup y dataset
- Crear un array de 100 experiencias y guardalo como src/data/experiences.tes
- Definir una interface experience en TYpeScript con la forma de los datos y usala en todo el proyecto
- Adicionar un seccion ## Desing References en tu README.md con enlaces o capturas de 2-3 Uls reales qeu hayan inspirado tu diseño.

## Páginas y enrutamientos
- crear la Home (/) con una sección  hero y un botón que nabe a /expeciences
- Crear el Explorador (/experiences) con las 100 tarjetas de experiencias en una cuadrícula. 
- Crear la página de Detalle (/experiences/[id]) que lee el ID desde la URL y muestra el contenido completo de esa experiencia
- Crear la pagina de Favoritos (/favorites) que muestra solo las experiencias marcadas como favoritas
- crear la pagina de Perfil (/profile) con un perfil del usuario simulado y el contador de favoritos guardados

## Busqueda y filtros
- Agregar una barra de busqueda en el Explorador que filtre experiencias port titulo
- Usar un reges case-insensitive para comparar el termino con el titulo de cada experiencia (ej, new RegExp(ter, 'i').test(experience.title))
- Agregar un filtro de categoria (dropdown o grupo de botones) con las cinco categorias disponibles.
- Agregar un filtro de destino (dropdown o busqueda) que filter por ciudad o pais de destino
- Los filtros activos y el termino de busqueda deben almacenanarse como un query paremeters en la URL usando useSearchParams y usePathname de Next.js
- Al cargar la pagina con query params existentes en la URL, los inputs de busqueda y filtros deben prerrellenarse con esos valores

## Favoritos
- Agregar un icono de corazon (toggle) a cada tarjeta de experiencia
- Guarda la lista de IDs favoritos en un useState a nivel compartido y pasala hacia abajo como props
- El icono de corazon debe reflejar visualmente si la experiencia esta en favoritos o no

## Componentes y hooks
- Crea como minimo los componentes: ExperienceCard, SearchBar, FilterBar, Navbar
- Usa useEffect en al menos un componente ( ej. para sincronizar los resultados filtrados cuando cambien los query params, o para actualizar el titulo del documento en la pagina de detalle)
- Crea al menos un hook (ej. useExperiences o useFIlters) que encapsule la logica del filtrado.

## UI y calidad

- La app debe ser responsiva (movil y escritorio)
- El explorador debe mostrar un mensaje 'No se encontraron resultados' cuando los filtros no devuelvan ningun resultado.
- La Navbar debe estar presente en todas las paginas y mostrar estilos de enlace activo usando usePathname

** IMPORTANTE: No usar ninguna libreria externa de gestion de estado (Redux, Zustand, etc.). Todo el estado debe vivir en el useState nativo de React y pasarse mediante props o custom hooks.




[DISENO] 