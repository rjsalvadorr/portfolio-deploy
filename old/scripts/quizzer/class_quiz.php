<?php
class Quiz {
    public $id;
	public $type;
	public $quizItems;
	public $name;
	public $description;
	public $options;
	public $extraData;

	function __construct($id, $type, $quizItems, $name, $description, $extraData) {
		$this->id = $id;
		$this->type = $type;
		$this->quizItems = $quizItems;
		$this->name = $name;
		$this->description = $description;
		$this->extraData = is_null($extraData) ? "" : $extraData;
		$this->options = "";
		//$this->options = is_null($extraData) ? "" : "";
	}
	
	public function toString() {
		$returnString = "id: " . $this->id . ", ";
		$returnString .= "type: " . $this->type . ", ";
		$returnString .= "quizItems: " . $this->quizItems . ", ";
		$returnString .= "name: " . $this->name . ", ";
		$returnString .= "description: " . $this->description . ", ";
		$returnString .= "extraData: " . $this->extraData . ", ";
		$returnString .= "options: " . $this->options;
		return $returnString;
	}

	public function toJSON() {
		$props = get_object_vars($this);
		foreach ($props['quizItems'] as &$quizItem) {
		   $quizItem = $quizItem->getUsefulProperties();
		}
		return json_encode($props);
	}
}
?>
