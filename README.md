## Rama de productos 

### Testeo

Para facilitar el testeo de cada una de las peticiones de la rama de productos, agregamos la siguiente informacion:

### Modelo: 

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
### Rutas ( servidor local ) :
<li>http://localhost:4000/burgersandbeer/productos
<li>http://localhost:4000/burgersandbeer/productos/:id

## Rama de pedidos 

### Testeo

Para facilitar el testeo de cada una de las peticiones de la rama de pedidos, agregamos la siguiente informacion:

### Modelo: 

 ```json
{
    "usuario":"Nombre de usuario",
    "fecha":"dd/mm/aa",
    "productosdelmenu":["producto_1","producto_2"],
    "estado":"true"
}
``` 
### Rutas ( servidor local ) :
<li>http://localhost:4000/burgersandbeer/pedidos
<li>http://localhost:4000/burgersandbeer/pedidos/:id


## Login y registro 

### Testeo

Para facilitar el testeo de cada una de las peticiones de login y registro, agregamos la siguiente informacion:

### Registro: 
 Ruta( servidor local )
 <li>http://localhost:4000/burgersandbeer/usuario/nuevo

 ```json
{
    "nombre":"Nombre de usuario",
    "email":"ejemplo@ejemplo.com",
    "password":"ejemplo"
}
``` 

### Login:
  Ruta( servidor local )
  <li>http://localhost:4000/burgersandbeer/usuario

 ```json
{
    "email":"ejemplo@ejemplo.com",
    "password":"ejemplo"
}
``` 





