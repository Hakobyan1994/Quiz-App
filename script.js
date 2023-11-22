let questions=[
  {
   "question":"Wer ist JavaScript Creator",
   "answer_1":"Brendan Eich",
   "answer_2":"Steave Jobs",
   "answer_3":"Mark Zuckerberg",
   "answer_4":"Bjarne Stroustrup",
    "right_answer":1
  },   
     
     {    "question":"Welche ist ein JavaScrit Framework",
     "answer_1":"Django",
     "answer_2":"Angular",
     "answer_3":"FuelPHP",
     "answer_4":"Laravel",
      "right_answer":2
    }, 
       
    {           
        "question":"Wer ist Python  Creator",
    "answer_1":"Linus Torvalds",
    "answer_2":"Guido van Rossum",
    "answer_3":"Bill Gates",
    "answer_4":"Lary Wall",
     "right_answer":2
   }, 
    
     {
   "question":"Wie nennt man null-Variable in JavaScript",
   "answer_1":"Error",
   "answer_2":"Garbage",
   "answer_3":"Not found",
   "answer_4":"undefined",
    "right_answer":4
  },  

  {
    "question":"Wie nennt man null-Variable in JavaScript",
    "answer_1":"Error",
    "answer_2":"Garbage",
    "answer_3":"Not found",
    "answer_4":"undefined",
     "right_answer":4
   },  
      
   {
   "question":"Wann wurde erste programmieresprache erfunden",
   "answer_1":"1933",
   "answer_2":"1985",
   "answer_3":"1954",
   "answer_4":"1994",
    "right_answer":3
  },  
        
  {
    "question":"Welcher Wert ist ein Byte in Bit?",
    "answer_1":"10 Bit",
    "answer_2":"4 Bit",
    "answer_3":"8 Bit",
    "answer_4":"100 Bit",
     "right_answer":3
   },  
    
       
     
    
];  
   
let rightAnswerQuestion=0;
let currentQuestion=0;
 let audioSuccses = new Audio('Audio/succsess.mp3');
 let audiofailed=new Audio('Audio/failed.mp3')
   
     
   function init(){  
      document.getElementById('all-questions').innerHTML=questions.length;//Array länge//
        
        showQuestion();
      
   };  
      
     function showQuestion(){
        if(currentQuestion>=questions.length){
         document.getElementById('resultDiv').style='';
         document.getElementById('main-container').style='display:none;';
         document.getElementById('question-length').innerHTML=rightAnswerQuestion;
         document.getElementById('resultQuestion').innerHTML= questions.length;
         document.getElementById('image').src ='./img/cup.jpg';
        } 
        else{
          
       let percent= (currentQuestion +1)  / questions.length;
       percent=Math.round(percent*100);
       document.getElementById('progress-bar').innerHTML=`${percent}%`;
       document.getElementById('progress-bar').style=`width:${percent}%;`;
       
        
          
          
        let question=questions[currentQuestion];

         document.getElementById('question_Count').innerHTML=currentQuestion+1
         document.getElementById('question-Text').innerHTML=question['question'];
         document.getElementById('answer_1').innerHTML=question['answer_1'];
         document.getElementById('answer_2').innerHTML=question['answer_2'];
         document.getElementById('answer_3').innerHTML=question['answer_3'];
         document.getElementById('answer_4').innerHTML=question['answer_4'];
        };
     };   
             

        function answer (selection){  
          let question=questions[currentQuestion];
                      
            let selectedQuestionNumber = selection.slice(-1);//slice nimmt den letzten Stringwert.

           
          

         theIdOfRightAnswer =`answer_${question['right_answer']}`; //hier kriegt die Variable Richtige ID answer.
                       // answer ist hier ID von Answer.

             if(selectedQuestionNumber==question['right_answer']) { 
              document.getElementById(selection).parentNode.classList.add('bg-success');
              rightAnswerQuestion++;
              audioSuccses.play();
            }  
              else{  
                  document.getElementById(selection).parentNode.classList.add('bg-danger');
                  document.getElementById(theIdOfRightAnswer).parentNode.classList.add('bg-success');
               //   document.getElementById('answer_1').parentNode.classList.add('bg-success') so kann man auch machen
               audiofailed.play();
              };      
                   
                   document.getElementById('next-button').disabled = false;
                   // button ist hier blockiert=>mit dem Befehl is es wieder aktiv:
        }; 
            
                    
                      


           function nextQuestion(){  
            
            currentQuestion++; //erhöht den Wert auf  von dem ARRAY 
            document.getElementById('next-button').disabled = true;
            resetAnswercolor();
            showQuestion();   
           }    
   

              
             function resetAnswercolor(){
               document.getElementById('answer_1').parentNode.classList.remove('bg-success')
               document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
               document.getElementById('answer_2').parentNode.classList.remove('bg-success')
               document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
               document.getElementById('answer_3').parentNode.classList.remove('bg-success')
               document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
               document.getElementById('answer_4').parentNode.classList.remove('bg-success')
               document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
             }
            
 
             function playagain(){
             document.getElementById('image').src ='./img/quiz.jpg';
             document.getElementById('resultDiv').style='display:none;';
             document.getElementById('main-container').style='';
             rightAnswerQuestion=0;
             currentQuestion=0;
             init();
             };


                