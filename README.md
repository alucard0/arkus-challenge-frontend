# Arkus Challenge

## Características
El proyecto tiene las siguientes características:
Para desarrollo utiliza
- [Node.js](https://nodejs.org/en/)
- [React](https://github.com/facebook/react)
- [Redux](https://redux.js.org/introduction/installation)
- [MUI](https://mui.com/)
- [Docker](https://docs.docker.com/desktop/windows/install/)

El proyecto tiene las siguientes dependencias de desarrollo para garantizar el
estandar en el código.

- [eslint](https://github.com/eslint/eslint)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [prettier](https://prettier.io/docs/en/configuration.html)
- [stylelint](https://stylelint.io/)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)

Los estilos serán organizados de manera general con la siguiente estructura:
- Box (position, display, width, margin, padding)
- Text
- Background
- Border
- Media queries

[Referencia](https://medium.com/@mciastek/s-css-best-practices-that-you-have-not-yet-known-ba2f6329b5dd)

Para el caso de la estructura de folder del proyecto de react esta puede ser una
buena [referencia](https://www.instagram.com/p/CKLjgarAEh2/)

## Guía de Instalación
Realiza los pasos indicados en el archivo [INSTALLATION](INSTALLATION.md)
## Ejecución
Windows

```shell
docker-compose up
```

Ahora se puede visitar el proyecto en <http://localhost:4000>

## Dentener el proyecto
```shell
docker-compose down -v  
```
## Deploy

Ejecutar el comando para hacer el build de la app

```shell
npm install
```
