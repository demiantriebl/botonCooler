# Boton Cooler.. 
## Una prueba de que los botones pueden ser cool



> Este es un paquete de pruebas, especialmente para medir la insidencia de los preprocesadores css y la funcionalidad del paquete. no es para uso real.


## Instalación

se instala como todo paquete


```bash
npm install botoncooler
```



## Propiedades

### Uso Basico
se puede dejar el boton por defecto que va a tener un String con el valor "Boton nuevo" o se puede mandar un Objeto React por Children.

### Extension de diseño

este boton esta puesto de tres diseños distintos, para hacerlo se pasa la propierdad por el prop variante, solo tiene 3 opciones: colorido (por defecto), negro o borde
```html
<Botoncooler variante="negro">mi texto <Botoncooler/>
```