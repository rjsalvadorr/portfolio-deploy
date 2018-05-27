<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require '../Slim/slim.php';
require_once 'class_quizzer_db_handler.php';

\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->get('/get_test_quiz', function() {
	$dbHandler = new QuizzerDatabaseHandler();
	$testQuiz = $dbHandler->getTestQuiz();
	echo $testQuiz->toJSON();
});

$app->get('/hello/:name', function($name) {
	echo "Hello, $name";
});

$app->get('/get_quiz/:quizId', function($quizId) {
	$dbHandler = new QuizzerDatabaseHandler();
	$quiz = $dbHandler->getQuiz($quizId);
	echo $quiz->toJSON();
});

$app->get('/get_all_quizzes', function() {
	$dbHandler = new QuizzerDatabaseHandler();
	$quizzes = $dbHandler->getAllQuizzes();
	$giantJsonString = "[";
	foreach ($quizzes as &$quiz) {
	   $giantJsonString .= $quiz->toJSON();
	   $giantJsonString .= ", ";
	}
	$giantJsonString = substr($giantJsonString, 0, -2) . "]";
	echo $giantJsonString;
});

$app->run();

?>