function letterGrader() {
    var letterGrade = "";
    var numGrade = parseInt(prompt("What was the numerical grade? Enter a value between 1-100."));
    while (isNaN(numGrade) || numGrade < 0 || numGrade > 100) {
        numGrade = parseInt(prompt("Invalid input. Enter a number between 1-100 please."));
    }
    switch (numGrade) {
        case numGrade > 90:
            letterGrade = "A";
            break;
        case numGrade > 80:
            letterGrade = "B";
            break;
        case numGrade > 70:
            letterGrade = "C";
            break;
        case numGrade > 60:
            letterGrade = "D";
            break;
        default:
            letterGrade = "F";
    }
    alert("The letter grade is: " + letterGrade);
}

letterGrader()