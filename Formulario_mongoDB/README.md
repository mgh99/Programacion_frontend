# Formulario
* Stack: React, mongoDb, Typescript, axios, express, css y @emotion/styled
* Formulario que guarda los datos en la base de datos de MongoDb, muestra los resultados en una lista y puedes eliminarlos
-----------------------------------------------------------------
### Funcionalidades
* get "/people" -> muestra todos los usuarios en una lista de MongoDb
* post "/register" -> puedes añadir nuevos usuarios a la base de datos
* post "/free" -> puedes eliminar un usuario de la base de datos

## 🚩 Para empezar
Estas instrucciones te permitirán obtener una copia del proyecto en su maquina local para empezar a utilizarlo.
### Instalación 
Instalación de dependencias tanto en BackEnd como en FrontEnd
```
npm install
```

Compilación en su equipo local
* Abrimos una terminal para cada carpeta (BackEnd y FrontEnd) y compilamos primero el Backend y después el FrontEnd, mediante el siguiente comando:
```
npm start
```

## 🖇 Dependencias
En el archivo de `package.json´

Estas son las dependencias de nuestro proyecto para el Backend

```json
"dependencies": {
        "@types/axios": "^0.14.0",
        "@types/express": "^4.17.13",
        "@types/node": "^17.0.21",
        "axios": "^0.26.1",
        "cors": "^2.8.5",
        "express": "^4.17.3",
        "mongodb": "^4.4.1",
        "mongoose": "^6.2.7",
        "morgan": "^1.10.0",
        "nodemon": "^2.0.15",
        "ts-node": "^10.7.0",
        "typescript": "^4.6.2"
    },
```

Y para el frontEnd

```json 
 "dependencies": {
    "@emotion/react": "^11.8.2",
    "@emotion/styled": "^11.8.1",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.4.1",
    "@types/node": "^16.11.26",
    "@types/react": "^17.0.40",
    "@types/react-dom": "^17.0.13",
    "axios": "^0.26.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "typescript": "^4.6.2",
    "web-vitals": "^2.1.4"
  },
```

## Visualización

<div align = "center"><img src="https://github.com/mgh99/Programacion_frontend/blob/main/Formulario_mongoDB/img/captura%20form.jpeg" alt="App Screenshot" style="zoom: 70%" /></div>

## ✨ Participantes

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align = "center">
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/santiago-molpeceres-d%C3%ADaz-ab9087211/"><img src="https://avatars.githubusercontent.com/u/54994511?v=4" width="100px;" alt=""/><br /><sub><b>Santiago Molpeceres</b></sub></a><br /><a href="https://github.com/smolpeceresd/Programacion_Internet" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/mar%C3%ADa-gonz%C3%A1lez-herrero-56bb21177/"><img src="https://avatars.githubusercontent.com/u/43043718?v=4" width="100px;" alt=""/><br /><sub><b>María González</b></sub></a><br /><a href="https://github.com/mgh99/Programacion_sistemas_Internet" title="Code">💻</a></td>
  </tr>
</table>
</div>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
