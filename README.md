# FrontAngularG

Este proyecto es una aplicación web desarrollada con Angular, que utiliza un enfoque de componentes standalone. La aplicación se conecta a una API para mostrar una lista de productos y organiza los elementos para su visualización.

---

## Características

- **Consumo de API**: Realiza peticiones HTTP para obtener datos desde `https://dummyjson.com/products`.
- **Standalone Components**: Diseño moderno utilizando componentes sin necesidad de módulos.
- **Responsividad**: Se adapta a diferentes tamaños de pantalla.
- **Diseño flexible**: Uso de CSS Flexbox para organizar elementos en filas de 4 por fila.

---

## Tecnologías utilizadas

- Angular 16
- TypeScript
- CSS (Flexbox)
- HTML5
- RxJS (para la manipulación de datos asincrónicos)

---

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/Sgarcia8/FrontAngular.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd FrontAngularG
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   ng serve
   ```
5. Abre tu navegador en `http://localhost:4200`.

---

## Uso

1. Al iniciar la aplicación, se realiza una solicitud a la API para obtener una lista de productos.
2. Los productos se organizan en filas de 4 elementos por fila.
3. El diseño es completamente responsivo y se adapta a diferentes tamaños de pantalla:
   - **Pantallas grandes**: 4 productos por fila.
   - **Pantallas medianas**: 2 productos por fila.
   - **Pantallas pequeñas**: 1 producto por fila.

---

## API utilizada

- **Endpoint**: `https://dummyjson.com/products?&select=title,price,thumbnail,description,category,discountPercentage,stock`
