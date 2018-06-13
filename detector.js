function detectAttack() {

    var email = "matt.timmermans@student.fontys.nl";

    var attack;
    var data;

    // Count all the inputfields with class SQLCHECK
    var count = document.querySelectorAll('.detection');
    // Fill variable with values of all inputfields via a loop
    for (var i = 0, len = count.length; i < len; i++) {
        var gegeven = count[i].value;
        // Check for SQL injection
        if (gegeven.indexOf("'") >= 0) {

            attack = "Error Based SQL Injection (')";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else if (gegeven.indexOf("&&") >= 0) {

            attack = "Encoded Boolean Based SQL Injection (&&)";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else if (gegeven.indexOf("||") >= 0) {

            attack = "Encoded Boolean Based SQL Injection (||)";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else if (gegeven.indexOf("<script") >= 0) {

            attack = "SCRIPT XSS Attack (SCRIPT)";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else if (gegeven.indexOf("<img") >= 0) {

            attack = "IMG XSS Attack (IMG)";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else if (gegeven.indexOf("<") >= 0) {

            attack = "Other XSS Attack (<)";
            // Set up the data for an email alert
            data = 'email=' + email + '&attack=' + attack;

            // Send data to PhP file so the mail can be send
            $.ajax({
                type: "POST",
                // The mail will be send by using this file
                url: 'mail.php',
                data: data
            })

        } else{
            // Nothing (deleted)
        }
    }
}

