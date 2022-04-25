# Parrot Challenge

## Características
El proyecto tiene las siguientes características:
Para desarrollo utiliza
- [Node.js](https://nodejs.org/en/)
- [React](https://github.com/facebook/react)
- [Redux](https://redux.js.org/introduction/installation)
- [MUI](https://mui.com/)

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

```shell
make start
```

En el caso de Windows

```shell
npm start
```

Ahora se puede visitar el proyecto en <http://localhost:3000> o bien <http://0.0.0.0:3000>

## Deploy

Ejecutar el comando para hacer el build de la app

```shell
make build
```
En mi caso lo subí a firebase, para subirlo ejecutar el siguiente comando

```shell
firebase deploy
```

Se puede visitar en [Live](https://parrot-344618.web.app/)
## Notas

Me hizo falta implementar:
  - El manejo de errores
  - Test
  - Reflejar las actualizaciones en tiempo real si el cambio viene de back si es que no lo ha mandado el front
