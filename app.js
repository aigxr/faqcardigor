function toggleDisplay(questionNumber) {
  const answerElement = document.getElementById(`element${questionNumber}`)
  const questionElement = answerElement.parentNode

  answerElement.classList.toggle('active')

  questionElement.querySelector('.question').classList.toggle('weight')
  questionElement.querySelector('.arrow').classList.toggle('transform')

  const allQuestions = document.querySelectorAll('.question-container')
  allQuestions.forEach(question => {
    const answer = question.querySelector('.disactivate')
    if (question !== questionElement && answer.classList.contains('active')) {
      answer.classList.remove('active')
      question.querySelector('.question').classList.remove('weight')
      question.querySelector('.arrow').classList.remove('transform')
    }
  });
}

