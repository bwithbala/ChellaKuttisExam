var currentQuestion = null;
var questionIndex = 0;
 
// Your list of questions. Each question has an answer (either a,b or c)
// and then a set of "options" in the question
var questions = [
  { 
      'answer': 'c',
      'question': 'What doesn\'t fit?',
      options: ['Dog', 'Capybara', 'Pizza']
  },
  { 
      'answer': 'b',
      'question': 'What is 9*9',
      options: ['9', '81', '99']
  }
];
 
// Detect when the submit button is clicked and check if the question
// was answered correctly
$('input[type="submit"]').click(function() {
    var val = $('#questions').find('input:checked').val();
    if(currentQuestion) {
        if(currentQuestion.answer == val) {
            alert("Nice work!");
            showQuestion();
        } else {
            alert("Nope!");
        }
    }
    return false;
});
 
// Set the value of an option in the question
function setRadioLabel(radioId, text) {
     $('label[for="' + radioId + '"]').find('span.ui-btn-text').text(text);
};
 
// Show a random question
function showQuestion() {
    // Grab next question, and increment so we get a new one next time
    var random = questions[questionIndex++ % questions.length];
    
    $('#question').text(random.question);
    
    $('input[type="radio"]').attr('checked', false).checkboxradio('refresh');
    
    setRadioLabel('radio1', random.options[0]);
    setRadioLabel('radio2', random.options[1]);
    setRadioLabel('radio3', random.options[2]);
    currentQuestion = random;
};
 
// Start the question stuff off
showQuestion();