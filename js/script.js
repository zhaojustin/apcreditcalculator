var tests;

//initialize dropdowns
$('#score-select').dropdown({
    onChange: function() {
        tests = $('#score-select').dropdown('get value');
        addScoreInput();
    }
});

//create input and label every time new input is added
function addScoreInput() {
    
}


