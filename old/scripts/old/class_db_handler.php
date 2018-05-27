<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once 'class_number.php';

class DatabaseHandler {
	private $hostName = "retrogradejusticiar.db";
	private $dbUserId = "testuser";
	private $dbPassword = "testuser";
	private $databaseName = "foolishness";
	private $randomFactor = 1;
	private $mysqli;
	
	public function __construct() {
		$this->randomFactor = mt_rand(532, 1719);
		if($this->connectMysql() == 1) {
			printf("Can't connect to server! Error code %s\n", mysqli_connect_error($this->mysqli));
			exit;
		}
	}
	
	private function connectMysql() {
		if(!$this->mysqli) {
			$this->mysqli = new mysqli($this->hostName, $this->dbUserId, $this->dbPassword, $this->databaseName);
			if(mysqli_connect_errno()) {
				return 1;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	}
	private function closeMysql() {
		$this->mysqli->close();
	}
	
	
	public function insertNumbers($numberArray) {
		if($this->connectMysql() == 0) {
			foreach ($numberArray as $numberObj) {
				insertNumber($numberObj->numberDate, $numberObj->number);
			}
			$this->closeMysql();
			return 0;
		} else {
			return 1;
		}
	}
	
	private function insertNumber($date, $number) {
		$date = $this->mysqli->escape_string($date);
		$number = $this->mysqli->escape_string($number);
		$stmt = $this->mysqli->prepare("INSERT INTO NUMERALS(DATE, NUMBER) VALUES(?, ?)");
		$stmt->bind_param('sd', $date, $number);
		$stmt->execute();
	}
	
	// returns JSON objects!
	public function getNumbers() {
		if($this->connectMysql() == 0) {
			$this->mysqli->query("SET NAMES 'utf8'");
			$jsonObject = array();
			if($result = $this->mysqli->query("select * from NUMERALS")) {
				while($row = $result->fetch_assoc()) {
					$jsonObject[] = array(
						'date'=>$row['DATE'],
						'number'=>round(($row['NUMBER'] * $this->randomFactor)),
					);
				}
				$result->close();
			}
			$this->closeMysql();
			return $jsonObject;
		} else {
			return 1;
		}
	}
	public function getNumbersFromDate($date) {
		return 1;
	}
	public function getNumbersFromDateRange($startDate, $endDate) {
		return 1;
	}
	
	
	
}

?>

