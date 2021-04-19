# ClashRoyale :crown:
Replica del sitio web https://supercell.com/en/games/clashroyale/ realizado en React.

## Requisitos :pencil:

- NodeJs @any

## Dependencias :jigsaw:

| Tecnología  | Detalle                                                      |
| ----------- | ------------------------------------------------------------ |
| React       | El diseño modular (de componentes) de este framework facilita la reutilización de código, tal cual en este proyecto en el que varios elementos se repiten. |
| Webpack     | Cuando un sitio web tiene demasiadas dependencias o funcionalidades en JS, puede limitar el ancho de banda de red del cliente por la descarga de los scripts. Este proyecto utiliza varias dependencias, por lo tanto webpack crea un bundle con los scripts para evitar este problema mencionado. |
| Babel       | Los navegadores junto con javascript son tecnologías que crecen y cambian constantemente. Para garantizar la durabilidad de este proyecto, se utiliza babel que transpira el código para que este disponible en cualquier dispositivo. |
| Sass        | La página replicada tiene una línea gráfica bastante estricta, lo que implica que las reglas de diseño son varias y repetitivas. Se utilizó Sass en este proyecto para facilitarnos mantener la línea gráfica en css con las funcionalidades extendidas de Sass, como el uso de variables. |
| Loaders     | Cuando webpack hace el bundle de nuestros proyectos evidentemente los directorios de los archivos cambian. Por lo tanto, se utilizan los loaders para poder incluir a todos los archivos en el bundle, y que puedan ser encontrados por otros scripts. |
| Animate.css | Para la implementación de animaciones que contiene la página. |

## Instalación :arrow_double_down:

Abrir una terminal en la raíz del proyecto y ejecutar el siguiente comando:

```bash
npm install
```

## Uso 🔨

Para desarrollo se debe de abrir una terminal en la raíz del proyecto y ejecutar el siguiente comando:

```bash
npm start
```

Si se desea compilar el proyecto para producción, ejecutar:

```bash
npm run build
```

De esta forma se creará una carpeta “dist” en la raíz del proyecto, con los archivos de bundle generados por webpack.

Se deberá de abrir en el navegador el archivo index.html generado en dist.

## Ejemplo :book:

http://stw-uvg.site:3186

## Autor

- **Walter Saldaña #19897:** sal19897@uvg.edu.gt

