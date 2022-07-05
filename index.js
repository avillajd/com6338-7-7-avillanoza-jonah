var questionsArr = [
    {
      question: 'C.F. Martin & Company (often referred to as Martin) is an American guitar manufacturer established in: ?',
      answer: '1883 in Nazareth, Pennsylvania',
      options: [
        '1801 in Boston, Massachusetts ',
        '1883 in Nazareth, Pennsylvania',
        '1790 in Providence, Rhode Island',
        '1850 in Las Vegas, Nevada'
      ]
    },
    {
        question: 'Snails and slugs, belong to a large taxonomic class of invertebrates within which phylum? ',
        answer: 'Mollusca',
        options: [
          'Chordata',
          'Nematoida ',
          'Mollusca',
          'Ambulacraria'
        ]
      },
      {
        question: 'How much does an Formula 1 car weigh in the 2022 season?',
        answer: '1752lbs',
        options: [
          '1752lbs',
          '1900lbs',
          '3500lbs',
          '1500lbs'
        ]
      },
      {
        question: 'What kind of airplane does Snoopy fly?',
        answer: 'Sopwith Camel',
        options: [
          'Sopwith Camel',
          'Zeppelin-Lindau D.I',
          'Curtiss JN-4',
          'Handley Page V/1500'
        ]
      },
      {
        question: 'What is a group of Pandas called?',
        answer: 'An embarrassment',
        options: [
          'An option',
          'A gaggle',
          'An embarrassment',
          'a tangle',
          'a hoard'
        ]
      },
  ]

  var quizContainer = document.getElementById('quiz')
  var score = 0 
  var currentQuestion = 0 
  var timeRemaining
  var timerId

  quizContainer.onclick = function (e){
    if (e.target.id === 'start-quiz'){
      drawQuestion()
    } else if (e.target.parentElement.id === 'choices'
    && e.target.tagName === 'BUTTON') {
      if ( e.target.textContent === questionsArr[currentQuestion].answer){
        score++
      }
      clearInterval(timerId)
      currentQuestion++

      if(currentQuestion< questionsArr.length){
        drawQuestion()
      } else {
        endGame()
      }
    }
  }

  function drawGameStart() {
    score = 0 
    currentQuestion = 0 
    quizContainer.innerHTML = ""
    var previousScore  = localStorage.getItem('previous-score')

    if (previousScore) {
      var previousScoreEl = document.createElement('p')
      previousScoreEl.textContent = 'Previous Score: ' + previousScore
      quizContainer.appendChild(previousScoreEl)
    }

    var startBtn = document.createElement('button')
    startBtn.id = 'start-quiz'
    startBtn.textContent = "Start Quiz!"
    quizContainer.appendChild(startBtn)

  }
// Buttons for choices and displaying questions
  function drawQuestion(){
    var questionObj = questionsArr[currentQuestion]
    quizContainer.innerHTML= ""

    var questionTextEl = document.createElement('p')
    questionTextEl.textContent = questionObj.question
    quizContainer.appendChild(questionTextEl)

    var choicesContainer = document.createElement('div')
    choicesContainer.id = 'choices'
    quizContainer.appendChild(choicesContainer)

    questionObj.options.forEach(function(choice){
      var btn = document.createElement('button')
      btn.textContent = choice
      choicesContainer.appendChild(btn)

    })

    //Timer Display and adding elements
    timeRemaining = 30
    var timerEl = document.createElement('p')
    timerEl.id = 'timer'
    timerEl.textContent = timeRemaining
    quizContainer.appendChild(timerEl)

    startTimer()

  }

  function startTimer(){
    var timerEl = document.getElementById('timer')
    
    timerId = setInterval(function(){
      timeRemaining--
      if(timeRemaining >= 0){
        timerEl.textContent = timeRemaining
      } else { 
        clearInterval(timerId)

        currentQuestion ++

        if (currentQuestion < questionsArr.length){
          drawQuestion()
        } else {
          endGame()
        }
      }
    }, 1000)
  }

  function endGame(){
    quizContainer.innerHTML = ""
    
    var percentage = Math.round(score / questionsArr.length * 100) + "%"
    localStorage.setItem('previous-score', percentage)
    drawGameStart()
  }

  drawGameStart()