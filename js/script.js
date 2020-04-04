//array for ap tests
var tests = ['art_history', 'biology', 'calc_ab', 'calc_bc', 'chem', 'chinese', 'comp_gov', 'csa', 'csp', 'lang', 'lit', 'apes', 'euro', 'french',
    'german', 'human_geo', 'italian', 'japanese', 'latin', 'macro', 'micro', 'music_theory', 'phys_1', 'phys_2', 'phys_c_em', 'phys_c_m',
    'psych', 'research', 'seminar', 'spanish_lang', 'spanish_lit', 'stats', 'art_2d', 'art_3d', 'drawing', 'gov', 'apush', 'whap']

//empty array for ap scores
var scores = new Array(38);

//selected college variable
var selected_college;

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
for (var i = 0; i < colleges.length; i++) {
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
    }
}

//create results array
var results = new Array();
function generateResults() {

}

//make list
function makeUL(array) {
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

//convert legend to text
function pretty(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 'art_history') array[i] = 'Art History';
        if (array[i] == 'biology') array[i] = 'Biology';
        if (array[i] == 'calc_ab') array[i] = 'Calculus AB';
        if (array[i] == 'calc_bc') array[i] = 'Calculus BC';
        if (array[i] == 'chem') array[i] = 'Chemistry';
        if (array[i] == 'chinese') array[i] = 'Chinese Language and Culture';
        if (array[i] == 'comp_gov') array[i] = 'Comparative Government and Politics';
        if (array[i] == 'csa') array[i] = 'Computer Science A';
        if (array[i] == 'csp') array[i] = 'Computer Science Principles';
        if (array[i] == 'lang') array[i] = 'English Language and Composition';
        if (array[i] == 'lit') array[i] = 'English Literature and Composition';
        if (array[i] == 'apes') array[i] = 'Environmental Science';
        if (array[i] == 'euro') array[i] = 'European History';
        if (array[i] == 'french') array[i] = 'French Language and Culture';
        if (array[i] == 'german') array[i] = 'German Language and Culture';
        if (array[i] == 'human_geo') array[i] = 'Human Geography';
        if (array[i] == 'italian') array[i] = 'Italian Language and Culture';
        if (array[i] == 'japanese') array[i] = 'Japanese Language and Culture';
        if (array[i] == 'latin') array[i] = 'Latin';
        if (array[i] == 'macro') array[i] = 'Macroeconomics';
        if (array[i] == 'micro') array[i] = 'Microeconomics';
        if (array[i] == 'music_theory') array[i] = 'Music Theory';
        if (array[i] == 'phys_1') array[i] = 'Physics 1';
        if (array[i] == 'phys_2') array[i] = 'Physics 2';
        if (array[i] == 'phys_c_em') array[i] = 'Physics C: Electricity and Magnetism';
        if (array[i] == 'phys_c_m') array[i] = 'Physics C: Mechanics';
        if (array[i] == 'psych') array[i] = 'Psychology';
        if (array[i] == 'research') array[i] = 'Research';
        if (array[i] == 'seminar') array[i] = 'Seminar';
        if (array[i] == 'spanish_lang') array[i] = 'Spanish Language and Culture';
        if (array[i] == 'spanish_lit') array[i] = 'Spanish Literature and Culture';
        if (array[i] == 'stats') array[i] = 'Statistics';
        if (array[i] == 'art_2d') array[i] = 'Studio Art: 2-D Art and Design';
        if (array[i] == 'art_3d') array[i] = 'Studio Art: 3-D Art and Design';
        if (array[i] == 'drawing') array[i] = 'Drawing';
        if (array[i] == 'gov') array[i] = 'United States Government and Politics';
        if (array[i] == 'apush') array[i] = 'United States History';
        if (array[i] == 'whap') array[i] = 'World History';
    }
    return array;
}

//calculate ap credit
function calculate() {
    //fill scores array
    pullFromDropdowns();

    //set selected college from dropdown
    selected_college = $('#college-select').dropdown('get value');

    //find tests that have scores
    var test_search_queue = new Array();
    var scores_search_queue = new Array();
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] !== '') {
            test_search_queue.push(tests[i]);
            scores_search_queue.push(scores[i]);
        }
    }

    //for each test, check if score passes at each college
    var get_credit = new Array();
    for (var i = 0; i < test_search_queue.length; i++) {
        var test = window[test_search_queue[i]];
        //iterate through test from data.js
        for (var n = 0; n < test.length; n++) {
            //found college name in list
            if (test[n]['Name of College'] == selected_college) {
                //met minimum requirement
                if (test[n]['Minimum Score Required'] <= scores_search_queue[i]) get_credit.push(true);
                //failed minimum requirement
                else get_credit.push(false);

                break;
            }
        }
    }

    var will_receive_credit = new Array();
    var will_not_receive_credit = new Array();
    for (var i = 0; i < get_credit.length; i++) {
        if (get_credit[i] == true) will_receive_credit.push(test_search_queue[i]);
        else will_not_receive_credit.push(test_search_queue[i]);
    }

    //convert legend to text
    will_receive_credit = pretty(will_receive_credit);
    will_not_receive_credit = pretty(will_not_receive_credit);

    //show results
    if (selected_college != '') {
        //add lists to columns
        $("#get_credit_column").html("");
        document.getElementById('get_credit_column').appendChild(makeUL(will_receive_credit));
        $("#no_credit_column").html("");
        document.getElementById('no_credit_column').appendChild(makeUL(will_not_receive_credit));

        //show hidden content
        document.getElementById('selected_college_header').innerHTML = selected_college;
        $('.initially_hidden').css('visibility', 'visible');
    }
}