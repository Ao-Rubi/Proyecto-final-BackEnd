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
<li>http://localhost:4000/burgers&beer/productos
<li>http://localhost:4000/burgers&beer/productos/:id

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
<li>http://localhost:4000/burgers&beer/pedidos
<li>http://localhost:4000/burgers&beer/pedidos/:id





