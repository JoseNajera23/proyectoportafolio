function validar(){
    var value = document.getElementsById('userone').value;
    var uservalue =document.getElementById('usertwo').value;

    if(value == uservalue){
        document.getElementById('resultado').innerHTML = 
    } else {
        alert('verifica tu informacion')

        swal("existe un error en los datos", "porfavor verifiquelo")
    }
}