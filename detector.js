function detectAttack() {

    var email = "matt.timmermans@student.fontys.nl";


    // Count all the inputfields with class SQLCHECK
    var count = document.querySelectorAll('.detection');
    // Fill variable with values of all inputfields via a loop
    for (var i = 0, len = count.length; i < len; i++) {
        var gegeven = count[i].value;
        // Check for SQL injection
        if (gegeven.indexOf("'") >= 0) {
            document.write("Error Based SQL Injection (')");
        } else if (gegeven.indexOf("&&") >= 0) {
            document.write("Encoded Boolean Based SQL Injection (&&)");
        } else if (gegeven.indexOf("||") >= 0) {
            document.write("Encoded Boolean Based SQL Injection (||)");
        } else if (gegeven.indexOf("||") >= 0) {
            document.write("Encoded Boolean Based SQL Injection (||)");
        } else if (gegeven.indexOf("<script") >= 0) {
            document.write("SCRIPT XSS Attack (SCRIPT)");
        } else if (gegeven.indexOf("<img") >= 0) {
            document.write("IMG XSS Attack (IMG)");
        } else if (gegeven.indexOf("<") >= 0) {
            document.write("Other XSS Attack (<)");
        } else{
            // Nothing (deleted)
        }
    }
}

