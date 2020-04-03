var tests;

//initialize dropdowns
$('#score-select').dropdown({
    onChange: function () {
        tests = $('#score-select').dropdown('get value');
        addScoreInput(tests[tests.length-1]);
    }
});

$('.ui.dropdown').dropdown();

//create input and label every time new input is added
function addScoreInput(test_name) {
    var newInput = document.createElement('select');
    newInput.setAttribute('test_name', 'empTable');
}


function func() {
    alert( $('#art_history').dropdown('get text'));
}

