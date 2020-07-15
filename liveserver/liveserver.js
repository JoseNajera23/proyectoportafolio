const express = requiere ("express");
const app = express ();

// usando express
app.get('/', fuction(req, res){

res.send("el servicio funciona");
});

//Routing Basico
app.get('/soy', function(req,es){
res.send("bienvenido a soy josenajera");

});

//presentar archivo
app.get('/contacto',function(req,res){
     res.sendFile(__dirname+ '/contacto.html');

});


app.listen(2500,fuction(){
    console.long ("el servicio esta corriendo en el punto 2500");

});

