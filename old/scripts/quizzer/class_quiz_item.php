<?php
class QuizItem {
	public $quizItemId;
    public $quizId;
	public $question;
	public $answers;

	function __construct($quizItemId, $quizId, $question, $answers) {
		$this->quizItemId = $quizItemId;
		$this->quizId = $quizId;
		$this->question = $question;
		$this->answers = $answers;
	}
	
	public function toString() {
		$returnString = "quizItemId: " . $this->quizItemId . ", ";
		$returnString .= "quizId: " . $this->quizId . ", ";
		$returnString .= "question: " . $this->question . ", ";
		$returnString .= "answers: " . $this->answers;
		return $returnString;
	}

	public function toJSON() {
		return json_encode($this->getProperties());
	}

	public function getUsefulProperties() {
		$props = array();
		$props['question'] = $this->question;
		$props['answers'] = $this->answers;
		return $props;
	}
}
?>