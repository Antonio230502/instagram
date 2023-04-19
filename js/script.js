let imagenTelefono = document.getElementById("fotoTelefono");
let contador = 2;
let botonLogin = 

window.setInterval(function(){
	imagenTelefono.src = 'img/foto' + contador + '.png';
	contador++;
	if(contador > 4)
		contador = 1;
}, 5000);

function habilitarBotonLogin()
{
    n = document.getElementById('tblCoordenadas').getElementsByTagName('tr').length - 1;

    if (n >= 2)
    {    
        if(verificarPuntoABuscar())
            document.getElementById("btnInterpolar").disabled = false;
        else
            document.getElementById("btnInterpolar").disabled  = true;
    }

    if (n >= 1)
    {
        document.getElementById("btnModificar").disabled = false;
        document.getElementById("btnBorrar").disabled = false;
    }
    else
    {
        document.getElementById("btnModificar").disabled = true;
        document.getElementById("btnBorrar").disabled = true;
    }
}


