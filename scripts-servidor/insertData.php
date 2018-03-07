<?php
include_once('dbConnection.php');

$connection -> query("INSERT INTO registro VALUES ('hola', '2000-04-04', 'hola', 0)");

/*$url = $_POST['url'];
$fecha = $_POST['fecha'];
$datos = json_decode($_POST['datos'], true);

//	Insertar cada id (de cada elemento HTML) con su nº de clicks
foreach($datos as $id => $clicks){
  $insert = "INSERT INTO registro VALUES (
            '$url', '$fecha', '$id', '$clicks')";

  $connection->query($insert);
}*/

$connection->close();
?>
