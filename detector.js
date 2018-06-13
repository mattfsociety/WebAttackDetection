window.onload = function urlDetect(){


    // --- !! IMPORTANT !! --- \\

    // Change the hashtag to your email
    // When there is an attack, the alert will be send to this email
    var email = "matt.timmermans@student.fontys.nl";



    var majorAttack;
    var attack;
    var inputType;
    var link = window.location.href;

    // Check for a web attack in the URL
    if (link.indexOf("'") >= 0) {

        majorAttack = "SQL Injection";
        attack = "Error Based SQL Injection (')";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    } else if (link.indexOf("&&") >= 0) {

        majorAttack = "SQL Injection";
        attack = "Encoded Boolean Based SQL Injection (&&)";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    } else if (link.indexOf("||") >= 0) {

        majorAttack = "SQL Injection";
        attack = "Encoded Boolean Based SQL Injection (||)";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    } else if (link.indexOf("<script") >= 0) {

        majorAttack = "XSS Attack";
        attack = "Malicious script ( <script )";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    } else if (link.indexOf("<img") >= 0) {

        majorAttack = "XSS Attack";
        attack = "Malicious image ( <img )";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    } else if (link.indexOf("<") >= 0) {

        majorAttack = "XSS Attack";
        attack = "Cross-Site Scripting - others (used '<' )";
        inputType = "URL";

        sendMail(majorAttack, attack, email, inputType);

    }
};

function fieldsDetect() {



    // --- !! IMPORTANT !! --- \\

    // Change the hashtag to your email
    // When there is an attack, the alert will be send to this email
    var email = "matt.timmermans@student.fontys.nl";



    var majorAttack;
    var attack;
    var inputType;

    // Count all the inputfields with class detection
    var count = document.querySelectorAll('.detection');

    // Fill variable with values of all inputfields via a loop
    for (var i = 0, len = count.length; i < len; i++) {
        var gegeven = count[i].value;

        // Check for a web attack
        if (gegeven.indexOf("'") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Error Based SQL Injection (')";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        } else if (gegeven.indexOf("&&") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Encoded Boolean Based SQL Injection (&&)";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        } else if (gegeven.indexOf("||") >= 0) {

            majorAttack = "SQL Injection";
            attack = "Encoded Boolean Based SQL Injection (||)";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        } else if (gegeven.indexOf("<script") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Malicious script ( <script )";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        } else if (gegeven.indexOf("<img") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Malicious image ( <img )";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        } else if (gegeven.indexOf("<") >= 0) {

            majorAttack = "XSS Attack";
            attack = "Cross-Site Scripting - others (used '<' )";
            inputType = "Text field";

            sendMail(majorAttack, attack, email, inputType);

        }
    }
}

function sendMail(majorAttack, attack, email, inputType) {

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
        majorVersion + '&userip=' + userip + '&url=' + url + '&date=' + date + '&attack=' + attack + '&majorAttack=' + majorAttack + '&inputType=' + inputType;

    // Send data to PhP file so the mail can be send
    $.ajax({
        type: "POST",
        url: 'mail.php', // The mail will be send by using this file
        data: data
    })

}

