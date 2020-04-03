//array for ap tests
var tests = ['art_history', 'biology', 'calc_ab', 'calc_bc', 'chem', 'chinese', 'comp_gov', 'csa', 'csp', 'lang', 'lit', 'apes', 'euro', 'french', 'german',
    'human_geo', 'italian', 'japanese', 'latin', 'macro', 'micro', 'music_theory', 'phys_1', 'phys_2', 'phys_c_em', 'phys_c_m', 'psych', 'research', 'seminar',
    'spanish_lang', 'spanish_lit', 'stats', 'art_2d', 'art_3d', 'drawing', 'gov', 'apush', 'whap']

//empty array for ap scores
var scores = new Array(38);

//initialize dropdowns
$('.ui.dropdown').dropdown();

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
}



