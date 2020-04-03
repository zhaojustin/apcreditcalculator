var tests = ['art_history','biology','calc_ab','calc_bc','chem','chinese','comp_gov','csa','csp','lang','lit','apes','euro','french','german',
    'human_geo','italian','japanese','latin','macro','micro','music_theory','phys_1','phys_2','phys_c_em','phys_c_m','psych','research','seminar',
    'spanish_lang','spanish_lit','stats','art_2d','art_3d','drawing','gov','apush','whap']

var scores = new Array(38);

$('.ui.dropdown').dropdown();

function calculate() {
    //get all scores and match up with tests array
    for(var i=0; i<tests.length; i++) {
        //store score into scores array if it is not null
        var score = $('#'+tests[i]).dropdown('get value')
        if( score != 'n/a' ) scores[i] = score;
    }
    alert(scores);
}

