<?php
class Number {
    public $numberDate; 
	public $number;
	
	function __construct($numberDate, $number) {
		$this->numberDate = $numberDate; 
		$this->number = $number;
	}
	
	public function toString() {
		$returnString = "numberDate: " . $this->numberDate . ", ";
		$returnString .= "number: " . $this->number . ", ";
		return $returnString;
	}
}
?>
