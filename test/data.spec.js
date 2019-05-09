describe('nombre del filtro', () => {
 //declaro un arreglo el cual voy a utilizar para realizar mis test
 const ourData = [
   {
     "name": "Bulbasaur",
     "type": "Grass"
   },
   {
     "name": "Ivysaur",
     "type": "Poison"
   },
   {
     "name": "Venusaur",
     "type": "Grass"
   }
 ]
 //hago mi test bàsico de que deberia ser una funciòn
 it('deberia ser una function', () => {
   assert.equal(typeof nombre del filtro, 'function');
 });

 //Hago mi test sobre mi funcion filtrar, utilizo mi arreglo que declarè màs arriba
 it('debería retornar el objeto Bulbasaur al filtrar por type grass', () => {
   //acà le digo que funciòn quiero testear, le paso mi funciòn entera con sus parametros y luego que espero como resultado
   assert.deepEqual(window.nombre del filtro(nombrede la data, 'Grass'), [{"name": "Bulbasaur",
   "type": "Grass"}])
 });

 it('debería retornar el objeto Ivysaur al filtrar por type poison', () => {
   assert.deepEqual(window.nombre del filtro(nombre de la data, 'Poison'), [{"name": "Ivysaur",
   "type": "Poison"}])
 });

})
