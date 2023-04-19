<?php

include_once 'Conexion.php';

class UsuariosDB 
{
    public function insertaUsuario($usuario) 
    {
        $conexion = Conexion::getInstancia();
        $dbh = $conexion->getDbh();
        try 
        {
            $consulta = 'INSERT INTO usuarios (correo, password) VALUES (?,?)';
            $stmt = $dbh->prepare($consulta);
            $stmt->bindParam(1, $usuario['username']);
            $stmt->bindParam(2, $usuario['password']);
            $stmt->execute();
            $dbh = null; // cierra la conexion
        } catch (PDOException $e) 
        {
            echo $e->getMessage();
        }
    }
}