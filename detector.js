function detectAttack() {

    var email = "matt.timmermans@student.fontys.nl";

    var majorAttack;
    var attack;

    // Count all the inputfields with class SQLCHECK
    var count = document.querySelectorAll('.detection');
    // Fill variable with values of all inputfields via a loop
    for (var i = 0, len = count.length; i < len; i++) {
        var gegeven = count[i].value;
        // Check for SQL injection
        if (gegeven.indexOf("'") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Error Based SQL Injection (')";

            sendMail(majorAttack, attack, email);

        } else if (gegeven.indexOf("&&") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Encoded Boolean Based SQL Injection (&&)";

            sendMail(majorAttack, attack, email);

        } else if (gegeven.indexOf("||") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Encoded Boolean Based SQL Injection (||)";

            sendMail(majorAttack, attack, email);

        } else if (gegeven.indexOf("<script") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Malicious script ( <script )";

            sendMail(majorAttack, attack, email);

        } else if (gegeven.indexOf("<img") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Malicious image ( <img )";

            sendMail(majorAttack, attack, email);

        } else if (gegeven.indexOf("<") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Cross-Site Scripting - others (used '<' )";

            sendMail(majorAttack, attack, email);

        } else{
            // Nothing (deleted)
        }
    }
}

var userip;
function sendMail(majorAttack, attack, email) {
// Fill variables with information about the user
    var url = window.location.href;
    var date = new Date();
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Check if browser is Opera
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome"
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox"
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // Trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // Set up the data for an email alert
    var data = 'email=' + email + '&browserName=' + browserName + '&fullVersion=' + fullVersion + '&majorVersion=' +
        majorVersion + '&userip=' + userip + '&url=' + url + '&date=' + date + '&attack=' + attack + '&majorAttack=' + majorAttack;

    // Send data to PhP file so the mail can be send
    $.ajax({
        type: "POST",
        // The mail will be send by using this file
        url: 'mail.php',
        data: data
    })

}
