# Proyecto final - backend
<p align="center"> <img src="./logoLed.png" alt="logo-burgerhouse" height="200" width="200"/> </p>

## 🧪 Testeo

Para facilitar el envio de datos a la API se adjuntan modelos para productos, pedidos, login y registro

## 📗 Bibliotecas Externas

 - dotenv
 - cors 
 - express validator
 - mongoose
 - morgan
 - json web token
 - babel
 - bcrypts

## 🍔 Rama de productos 

- Modelo: 

 ```json
{
  "nombre": "nombre del producto",
  "estado": false,
  "precio": 100,
  "detalle": "detalle del producto",
  "categoria": "categoria del producto",
  "imagen": "url de la imagen"
}
``` 
- Rutas ( servidor local ) :
```
http://localhost:4000/burgersandbeer/productos
http://localhost:4000/burgersandbeer/productos/:id
```

## ▶️ Rama de pedidos 

- Modelo: 

 ```json
{
    "usuario":"Nombre de usuario",
    "fecha":"dd/mm/aa",
    "productosdelmenu":["producto_1","producto_2"],
    "estado":"true"
}
``` 
- Rutas ( servidor local ) :
```
http://localhost:4000/burgersandbeer/pedidos
http://localhost:4000/burgersandbeer/pedidos/:id
```

## 🙍 Login y registro 

 - Modelo Registro: 
 ```json
{
    "nombre":"Nombre de usuario",
    "email":"ejemplo@ejemplo.com",
    "password":"ejemplo"
}
``` 
  - Ruta
  ```
 http://localhost:4000/burgersandbeer/usuario/nuevo
  ```
 
  - Modelo Login:

 ```json
{
    "email":"ejemplo@ejemplo.com",
    "password":"ejemplo"
}
``` 
- Ruta 
```
http://localhost:4000/burgersandbeer/usuario
```





