<?php
define("HOST", "retrogradejusticiar.db");
define("DB_USER", "testuser");
define("DB_PASSWORD", "testuser");
define("DB_NAME", "testdatabase");
$mysqli = new mysqli(HOST, DB_USER, DB_PASSWORD, DB_NAME);
if(mysqli_connect_errno()) {
	printf("Can't connect to server! Error code %s\n", mysqli_connect_error($mysqli));
	exit;
}
$mysqli->query("SET NAMES 'utf8'");
$json = array();
if($result = $mysqli->query("select * from NUMBERS")) {
	while($row = $result->fetch_assoc()) {
		$json[] = array(
			'date'=>$row['DATE'],
			'number'=>$row['NUMBER'],
		);
	}
}
$result->close();

header("Content-Type: text/json");
echo json_encode(array('objects'=>$json));

$mysqli->close();

?>