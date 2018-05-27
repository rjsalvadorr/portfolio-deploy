function showRadioText(indicatorText, mainText, buttonText) {
	$('#indicatorText').html(indicatorText);
	$('#radioText').html(mainText);
	$('#buttonText').html(buttonText);
}

function getRadioText() {
	var serverResult = {
		indicatorText: "",
		mainText: "",
		buttonText: ""
	}
    var jqxhr = $.getJSON("http://www.rj-salvador.com/scripts/get_radio_text.php")
    .done(function(data) {
        serverResult.indicatorText = data.indicatorText;
        serverResult.mainText = data.mainText;
        serverResult.buttonText = data.buttonText;
    })
    .fail(function(data, textStatus) {
        serverResult.indicatorText = "";
        serverResult.mainText = "";
        serverResult.buttonText = "";
    })
    .always(function() {
        showRadioText(serverResult.indicatorText, serverResult.mainText, serverResult.buttonText);
    });
}

$(document).ready(function() {
	getRadioText();
});