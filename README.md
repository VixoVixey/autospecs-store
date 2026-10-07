# AutoSpecs Store - E-commerce con Consumo de API en React

> Módulo 2: Desarrollo de Interfaces Dinámicas con React — Evaluación 2

## Descripción del Proyecto
Aplicación interactiva de comercio electrónico construida en React con Vite. Implementa consumo asíncrono de datos desde una API externa (DummyJSON), renderizado de catálogo dinámico, barra de búsqueda en tiempo real, interfaz responsiva y gestión robusta de estados de carga y error.

## Componentes Creados
1. **Header:** Encabezado con isotipo y título de la tienda.
2. **SearchBar:** Input controlado que filtra productos en tiempo real por coincidencia de texto.
3. **ProductCard:** Tarjeta individual que consume datos de producto vía props (título, precio, miniatura, categoría y puntuación).
4. **ProductList:** Contenedor responsivo en grid que itera colecciones con `.map()` usando claves únicas (`key`).
5. **Loader:** Indicador visual animado (spinner) mostrado durante la obtención asíncrona de datos.
6. **ErrorMessage:** Contenedor de visualización de errores de red o API con botón de reintento.
7. **Footer:** Pie de página con información institucional y derechos.

## Tecnologías Utilizadas
- **React 18 / 19** (con hooks `useState` y `useEffect`)
- **Vite**
- **JavaScript ES6+**
- **Fetch API**
- **CSS3 Grid y Flexbox**

## Consumo de API y Manejo de Estados
- **Endpoint:** `https://dummyjson.com/products`
- **Estados gestionados:**
  - `loading`: Controla la visualización del componente `Loader` antes de recibir la respuesta.
  - `error`: Captura fallos de conectividad o respuestas HTTP no exitosas desplegando `ErrorMessage`.
  - `products`: Almacena el array de productos obtenido desde la API.
  - `searchTerm`: Estado del input controlado para el filtrado en vivo.

## Capturas de Pantalla

### Vista General
![Vista General](public/screenshots/screenshot-general.PNG)

### Búsqueda en Tiempo Real
![Búsqueda Interactiva](public/screenshots/screenshot-search.PNG)

## Instrucciones para Ejecutar Localmente

1. Clonar el repositorio:
```bash
git clone [https://github.com/VixoVixey/autospecs-store.git](https://github.com/VixoVixey/autospecs-store.git)
cd autospecs-store
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor local:
```bash
npm run dev
```