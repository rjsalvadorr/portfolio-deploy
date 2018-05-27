<?php
class Quiz {
    public $quizId;
	public $quizTypeId;
	public $quizItems;
	public $name;
	public $description;
	public $extraData;

	function __construct($quizId, $quizTypeId, $quizItems, $name, $description, $extraData) {
		$this->quizId = $quizId;
		$this->quizTypeId = $quizTypeId;
		$this->quizItems = $quizItems;
		$this->name = $name;
		$this->description = $description;
		$this->extraData = $extraData;
	}
	
	public function toString() {
		$returnString = "quizId: " . $this->quizId . ", ";
		$returnString .= "quizTypeId: " . $this->quizTypeId . ", ";
		$returnString .= "quizItems: " . $this->quizItems . ", ";
		$returnString .= "name: " . $this->name . ", ";
		$returnString .= "description: " . $this->description . ", ";
		$returnString .= "extraData: " . $this->extraData;
		return $returnString;
	}
}
?>
