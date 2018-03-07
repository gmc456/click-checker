<?php
include_once('dbConnection.php');

$url = $_POST['url'];
$fecha = $_POST['fecha'];
$datos = json_decode($_POST['datos'], true);

//	Insertar cada id (de cada elemento HTML) con su nº de clicks
foreach($datos as $id => $clicks){
  $insert = "INSERT INTO registro VALUES (
            '$url', '$fecha', '$id', '$clicks')";

  $connection->query($insert);
}

$connection->close();
?>
