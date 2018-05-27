<?php
class QuizType {
	public $quizTypeId;
	public $name;
	public $extraData;

	function __construct($quizTypeId, $name, $extraData) {
		$this->quizTypeId = $quizTypeId;
		$this->name = $name;
		$this->extraData = $extraData;
	}
	
	public function toString() {
		$returnString = "quizTypeId: " . $this->quizTypeId . ", ";
		$returnString .= "name: " . $this->name . ", ";
		$returnString .= "extraData: " . $this->extraData;
		return $returnString;
	}

	public function toJSON() {
		return json_encode(get_object_vars($this));
	}
}
?>