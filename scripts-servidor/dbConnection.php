<?php
$host = "localhost";
$user = "root";
$password = "root";
$database = "clickchecker";

// Create connection
$connection = new mysqli($host, $user, $password, $database);

// Check connection
if($connection->connect_errno){
  echo "Fallo al conectar a MySQL: (" . $connection -> connect_errno . ")" .
  $connection->connect_error . "<br/>";
}

echo "Conectado " . $connection->host_info . "<br/>";
?>
