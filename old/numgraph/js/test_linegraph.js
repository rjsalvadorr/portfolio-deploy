var jsonString = '[	"item01" : {		"currentBalance": 500.50,		"date": "2014/11/01"	},	"item02" : {{		"currentBalance": 500.00,		"date": "2014/11/02"	},	"item03" : {{		"currentBalance": 450.00,		"date": "2014/11/03"	},	"item04" : {{		"currentBalance": 400.00,		"date": "2014/11/04"	},]';
var json = JSON.parse(jsonString);
var lineChartData = {
	labels : [json[0].date, json[1].date, json[2].date, json[3].date],
	datasets: [
		{
			label: "My First dataset",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "rgba(220,220,220,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [json[0].currentBalance, json[1].currentBalance, json[2].currentBalance, json[3].currentBalance]
		}
	]
}

window.onload = function(){
	var ctx = document.getElementById("graphCanvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}