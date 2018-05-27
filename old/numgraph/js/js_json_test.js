var myJSONObject = {"bindings": [
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
        {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
        {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
    ]
};

//obj representing JSON from the server
var itemsObj = {"items": [
        {"date": "2014/02/13", "balance": 500.00},
        {"date": "2014/02/14", "balance": 550.00},
        {"date": "2014/02/15", "balance": 600.00},
		{"date": "2014/02/16", "balance": 650.00},
        {"date": "2014/02/17", "balance": 700.00},
        {"date": "2014/02/18", "balance": 650.00},
		{"date": "2014/02/19", "balance": 600.00},
        {"date": "2014/02/20", "balance": 550.00},
        {"date": "2014/02/21", "balance": 600.00},
		{"date": "2014/02/22", "balance": 650.00},
        {"date": "2014/02/23", "balance": 700.00},
        {"date": "2014/02/24", "balance": 650.00},
		{"date": "2014/02/13", "balance": 600.00},
        {"date": "2014/02/14", "balance": 550.00},
        {"date": "2014/02/15", "balance": 600.00},
		{"date": "2014/02/16", "balance": 650.00},
        {"date": "2014/02/17", "balance": 700.00},
        {"date": "2014/02/18", "balance": 650.00},
		{"date": "2014/02/19", "balance": 600.00},
        {"date": "2014/02/20", "balance": 550.00},
        {"date": "2014/02/21", "balance": 600.00},
		{"date": "2014/02/22", "balance": 650.00},
        {"date": "2014/02/23", "balance": 700.00},
        {"date": "2014/02/24", "balance": 650.00},
    ]
};

//JS arrays for the graph
var arrayLabel = new Array(itemsObj.items.length);
var arrayData = new Array(itemsObj.items.length);

var testString = "this is a test string";
var outputString = "";

var lineChartData = {
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

$( document ).ready( function() {
	for(var i = 0; i < itemsObj.items.length; i++) {
		outputString += itemsObj.items[i].balance + "<br/>";
		arrayLabel[i] = itemsObj.items[i].date;
		arrayData[i] = itemsObj.items[i].balance;
	}
	$("#jsonOutput").html(outputString);
	
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
});
