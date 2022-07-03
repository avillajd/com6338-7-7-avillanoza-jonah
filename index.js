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

  

  //Start Button Add
  var quiz = document.getElementById("quiz")
  var text = document.createElement("p")
  var startBtn = document.createElement('button')
  startBtn.setAttribute('id', 'start-quiz')
  var startLabel = document.createTextNode('Start Quiz!')
  startBtn.appendChild(startLabel)
  quiz.appendChild(startBtn)

//Quiz button
  startBtn.onclick = function(){
    //Remove start button 
    var removeBtn = document.getElementById('start-quiz')
    removeBtn.remove();
    
    //Show Questions
    quiz.innerHTML = ""
    for (var i =0; i < questionsArr.length; i++){
        text.textContent=questionsArr[i].question
        answer = questionsArr[i].answer
        quiz.appendChild(text)
        
    }
    
    //Timer
    var timerPare = document.createElement('p')
    var timerParaTxt = document.createTextNode('30')
    timerPare.appendChild(timerParaTxt)
    timerPare.setAttribute('id', 'timer')
    quiz.appendChild(timerPare)
    startTimer
      

var startTimer = setInterval(function() {
  var timerEl = document.getElementById('timer')

  var seconds = Number(timerEl.textContent) - 1
  if (seconds === -1) {
   
    clearInterval(startTimer)
  } else {
         
    timerEl.textContent = seconds
  }

}, 1000)
}

  

