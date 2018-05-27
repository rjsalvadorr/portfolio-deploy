var itemsObj;

//JS arrays for the graph
var arrayLabel;
var arrayData;

//misc variables
var outputString = "";
var debugMode = "hotdogs";
var lineChartData;
var labelSkip = 5;
var windowHeight = $( window ).height();

//Chart global var settings
Chart.defaults.global.scaleBeginAtZero = false;

$("#graphCanvas").attr("height", windowHeight / 0.75);

function getNumbers() {
	var jqxhr = $.ajax({
		url: "http://www.rj-salvador.com/numgraph/php/get_numbers_v2.php",
		dataType: "json"
	}).done(function(responseJson) {
		itemsObj = responseJson;
		drawGraph();
		$("#errorDiv").hide();
	}).fail(function(xhr, status, error) {
		var errorMessage = eval(xhr.responseText);
		alert( "error! " + errorMessage + ", " + error);
		$("#errorDiv").html(errorMessage);
		$("#errorDiv").show();
	}).always(function() {
		//nothing here, for now...
	});
}

function drawGraph() {
	arrayLabel = new Array(itemsObj.objects.length);
	arrayData = new Array(itemsObj.objects.length);
	for(var i = 0; i < itemsObj.objects.length; i++) {
		outputString += "Date: " + itemsObj.objects[i].date + ", Number: " + itemsObj.objects[i].number + "<br/>";
		if(i % labelSkip == 0) {
			arrayLabel[i] = itemsObj.objects[i].date;
		} else {
			arrayLabel[i] = "";
		}
		arrayData[i] = itemsObj.objects[i].number;
	}
	if(debugMode === "true") {
		$("#debugDiv").show();
		$("#debugData").html(outputString);
	}
	
	lineChartData = {
		labels : arrayLabel,
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(0,180,0,1)",
				pointColor : "rgba(0,100,0,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arrayData
			}
		]
	}
	
	var ctx = document.getElementById("graphCanvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true,
		pointDot : false,
		pointHitDetectionRadius : 0,
		bezierCurve : false,
		// scaleOverride: true,
		// scaleStartValue: scaleStartVal,
		// scaleStepWidth: 100,
		// scaleSteps: 15
	});
}

$( document ).ready( function() {
	$("#debugDiv").hide();
	$("#errorDiv").hide();
	getNumbers();
});
