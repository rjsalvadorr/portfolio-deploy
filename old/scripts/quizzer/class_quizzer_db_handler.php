<?php
require_once 'class_quiz.php';
require_once 'class_quiz_type.php';
require_once 'class_quiz_item.php';

class QuizzerDatabaseHandler {
	private $hostName = "127.0.0.1";
	private $dbUserId = "testuser";
	private $dbPassword = "testuser";
	private $databaseName = "tinkering";
	private $mysqli;

	/////////////////////////////////////////////////////////////////
    ////////// UTILITY FUNCTIONS ////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    // Returns true if query succeeds, returns false if query fails.
    private function doQuery($queryString) {
        $queryResult = $this->mysqli->query($queryString);
        if (!$queryResult) {
            return false;
        } else {
            return true;
        }
    }
	
	public function __construct() {
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

	public function getQuiz($quizId) {
		if($this->connectMysql() == 0) {
			
			$quizItemArray = array();
            $quizId = $this->mysqli->real_escape_string($quizId);
            $strSql = "SELECT * FROM quiz WHERE quiz_id = $quizId LIMIT 1";
            $quizItemsSql = "SELECT * FROM quiz_item WHERE quiz_id = $quizId";

            $result = $this->mysqli->query($strSql);
            while ($row = $result->fetch_assoc()) {
				$quizObject = new Quiz($row['quiz_id'], $row['quiz_type_id'], null, $row['name'], $row['description'], $row['extra_data']);

				$quizItemResult = $this->mysqli->query($quizItemsSql);
	            while ($quizItemRow = $quizItemResult->fetch_assoc()) {
	            	$quizItem = new QuizItem($quizItemRow['quiz_item_id'], $quizItemRow['quiz_id'], $quizItemRow['question'], $quizItemRow['answer']);
	            	array_push($quizItemArray, $quizItem);
	            }
	            $quizObject->quizItems = $quizItemArray;
            }

            $this->closeMysql();
            return $quizObject;
        } else {
            return -1;
        }
	}

	public function getAllQuizzes() {
		if($this->connectMysql() == 0) {
			$quizArray = array();
            $strSql = "SELECT * FROM quiz where active != 0";

            $result = $this->mysqli->query($strSql);
            while ($row = $result->fetch_assoc()) {
            	$quizId = $row['quiz_id'];
				$quizObject = new Quiz($quizId, $row['quiz_type_id'], null, $row['name'], $row['description'], $row['extra_data']);

				$quizItemsSql = "SELECT * FROM quiz_item WHERE quiz_id = $quizId";
				$quizItemResult = $this->mysqli->query($quizItemsSql);
				$quizItemArray = array();
	            while ($quizItemRow = $quizItemResult->fetch_assoc()) {
	            	$quizItem = new QuizItem($quizItemRow['quiz_item_id'], $quizItemRow['quiz_id'], $quizItemRow['question'], $quizItemRow['answer']);
	            	array_push($quizItemArray, $quizItem);
	            }
	            $quizObject->quizItems = $quizItemArray;
	            array_push($quizArray, $quizObject);
            }

            $this->closeMysql();
            return $quizArray;
        } else {
            return -1;
        }
	}

	public function getTestQuiz() {
		$quizItems = array();
		for ($i = 0; $i <= 10; $i++) {
		    $randomString = substr(str_shuffle(MD5(microtime())), 0, 10);
		    $question = new QuizItem($i, 1, $randomString, $randomString);
		    array_push($quizItems, $question);
		}
		$quiz = new Quiz(1, 1, $quizItems, "Terrible Test Quiz", "Just a bunch of JSON, hastily scratched together...", null);

		return $quiz;
	}

	/*
	public function getUserId($username) {
        if ($this->mysqli) {
            $username = $this->mysqli->real_escape_string($username);
            $password = $this->mysqli->real_escape_string($password);
            $strSql = "SELECT * FROM SALON_CLIENTS WHERE username = '$username' LIMIT 1;";
            $result = $this->mysqli->query($strSql);
            while ($row = $result->fetch_assoc()) {
                return $row['CLIENTS_ID'];
            }
            return 0;
        } else {
            return -1;
        }
    }*/
	
	/*
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
	} */
}

?>

