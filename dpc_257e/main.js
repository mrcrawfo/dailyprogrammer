function solve(input) {
    var datatable = document.getElementById('datatable');
    var presidents = [];
    for(var i = 1; i < datatable.rows.length; i++) {
        var birthDate = datatable.rows[i].cells[1].textContent.split(' ');
        var birthYear = parseInt(birthDate[birthDate.length - 1]);
        
        var deathDate = datatable.rows[i].cells[3].textContent.split(' ');
        var deathYear = parseInt(deathDate[deathDate.length - 1]);
        if (isNaN(deathYear)) {
            deathYear = undefined;
        }
        
        presidents.push({birthYear: birthYear, deathYear: deathYear})
    }
    
    var years = [];
    for(var j = 1700; j < 2018; j++) {
        var livingPresidents = 0;
        for(var k = 0; k < presidents.length; k++) {
            if (presidents[k].birthYear <= j) {
                if (!presidents[k].deathYear || presidents[k].deathYear >= j) {
                    livingPresidents++;
                }
            }
        }
        years.push({year: j, presidents: livingPresidents});
    }
    
    var currentMax = 0;
    var answer = [];
    for(var a = 0; a < years.length; a++) {
        if (years[a].presidents > currentMax) {
            currentMax = years[a].presidents;
            answer = [];
            answer.push(years[a].year);
        } else if (years[a].presidents == currentMax) {
            answer.push(years[a].year);
        }
    }
    
    return answer;
}