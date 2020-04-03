//array for ap tests
var tests = ['art_history', 'biology', 'calc_ab', 'calc_bc', 'chem', 'chinese', 'comp_gov', 'csa', 'csp', 'lang', 'lit', 'apes', 'euro', 'french', 'german',
    'human_geo', 'italian', 'japanese', 'latin', 'macro', 'micro', 'music_theory', 'phys_1', 'phys_2', 'phys_c_em', 'phys_c_m', 'psych', 'research', 'seminar',
    'spanish_lang', 'spanish_lit', 'stats', 'art_2d', 'art_3d', 'drawing', 'gov', 'apush', 'whap']

//empty array for ap scores
var scores = new Array(38);

//initialize dropdowns
$('.ui.dropdown').dropdown();

//add all colleges to college array and dropdown
var colleges = new Array();
for (var i = 0; i < tests.length; i++) {
    //iterate for each test
    var test_variable = window[tests[i]];
    for (var n = 0; n < test_variable.length; n++) colleges.push(test_variable[n]['Name of College']);
}

//remove duplicates from college array and sort
function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
colleges = unique(colleges);
colleges.sort();

//add colleges to dropdown
var college_dropdown = document.getElementById('college-select');
for(var i = 0; i < colleges.length; i++) {
    var option = document.createElement('option');
    option.value = colleges[i];
    option.text = colleges[i];
    college_dropdown.add(option);
}

//get scores from dropdowns
function pullFromDropdowns() {
    //get all scores and match up with tests array
    for (var i = 0; i < tests.length; i++) {
        //store score into scores array if it is not null
        var score = $('#' + tests[i]).dropdown('get value');
        if (score != 'n/a') scores[i] = score;
        else scores[i] = 'n/a';
    }
}

//calculate ap credit
function calculate() {
    //fill scores array
    pullFromDropdowns();

    //get selected college from dropdown
    var selected_college = $('#college-select').dropdown('get value');
    
    //create results array and objects
    var results = new Array();
    for(var i = 0; i < tests.length; i++) {
        
    }
}



