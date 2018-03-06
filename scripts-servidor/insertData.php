<?php
include_once('db-constants.php');

// Create connection
$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if($mysqli->connect_errno){
  echo "Fallo al conectar a MySQL: (" . $mysqli -> connect_errno . ")" .
  $mysqli->connect_error . "<br/>";
}
echo "Conectado " . $mysqli->host_info . "<br/>";
?>
