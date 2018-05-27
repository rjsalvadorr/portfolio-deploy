var FAIL = "unavailable";
var AWESOME = 200;
var COEFFICIENT_EM = 0.0625;
var COLOR_OK = "#00B000";
var COLOR_ERROR = "#CC0000";

function showServerStatus(status, pCount, pNames) {
    var displayStatus = 0;
    var displayNames = 0;
    var displayCount = 0;
    
    if(status == AWESOME) {
        displayStatus = "ONLINE";
        $("#server-status").css("color" , COLOR_OK);
    } else {
        displayStatus = "OFFLINE";
        $("#server-status").css("color" , COLOR_ERROR);
    }
    
    if(pCount > 0 ) {
        displayNames = pNames;
        displayCount = pCount;
        $("#player-count").css("color" , COLOR_OK);
        $("#player-names").css("color" , COLOR_OK);
    } else {
        displayCount = "Zero";
        displayNames = "Nobody";
        $("#player-count").css("color" , COLOR_ERROR);
        $("#player-names").css("color" , COLOR_ERROR);
    }
    
    $("#server-status").html(displayStatus);
    $("#player-count").html(displayCount);
    $("#player-names").html(displayNames);
}

$(document).ready(function() {
    var serverResult = {
        status: "null",
        playerCount: "null",
        playerNames: "null"
    }
    //calling rest API
    var jqxhr = $.getJSON("scripts/get_server_status.php")
    .done(function(data) {
        serverResult.status = data.status;
        serverResult.playerCount = data.playercount;
        serverResult.playerNames = data.players;
    })
    .fail(function(data, textStatus) {
        serverResult.status = FAIL;
        serverResult.playerCount = FAIL;
        serverResult.playerNames = FAIL;
    })
    .always(function() {
        showServerStatus(serverResult.status, serverResult.playerCount, serverResult.playerNames);
    });
});