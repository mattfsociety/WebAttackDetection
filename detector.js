function detectAttack() {

    var email = "matt.timmermans@student.fontys.nl";


    // Count all the inputfields with class SQLCHECK
    var count = document.querySelectorAll('.detection');
    // Fill variable with values of all inputfields via a loop
    for (var i = 0, len = count.length; i < len; i++) {
        var gegeven = count[i].value;
        // Check for SQL injection
        if (gegeven.indexOf("'" || "#" || ";" || "=") >= 0) {
            document.write("SQL INJECTION");

        } else if (gegeven.indexOf("<img" || "<b" || "<u" || "<script") >= 0) {
            document.write("XSS");
        } else{
            // Nothing (deleted)
        }
    }
}

