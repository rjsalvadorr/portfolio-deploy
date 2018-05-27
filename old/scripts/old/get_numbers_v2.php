<?php
require_once 'class_db_handler.php';
$dbHandler = new DatabaseHandler();
$json = $dbHandler->getNumbers();

header("Content-Type: text/json");
echo json_encode(array('objects'=>$json));
?>