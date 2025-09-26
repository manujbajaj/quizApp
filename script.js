document.addEventListener("DOMContentLoaded",async()=>{
    const mockData = [
  {
    id: 1,
    question: "What is the correct syntax to output 'Hello World' in JavaScript?",
    description: null,
    answers: {
      answer_a: "echo 'Hello World';",
      answer_b: "print('Hello World');",
      answer_c: "console.log('Hello World');",
      answer_d: "printf('Hello World');",
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false"
    },
    correct_answer: "console.log('Hello World');",
    explanation: "In JavaScript, the correct way to print to the console is using console.log().",
    tip: null,
    tags: [{ name: "JavaScript" }],
    category: "Code",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which HTML tag is used to link an external JavaScript file?",
    description: null,
    answers: {
      answer_a: "<link>",
      answer_b: "<script>",
      answer_c: "<js>",
      answer_d: "<style>",
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false"
    },
    correct_answer: "<script>",
    explanation: "The <script> tag is used to include JavaScript files in HTML.",
    tip: null,
    tags: [{ name: "HTML" }],
    category: "Web Development",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "Which method can be used to round a number to the nearest integer in JavaScript?",
    description: null,
    answers: {
      answer_a: "Math.round()",
      answer_b: "Math.floor()",
      answer_c: "Math.ceil()",
      answer_d: "round()",
      answer_e: null,
      answer_f: null
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false"
    },
    correct_answer: "Math.round()",
    explanation: "Math.round() returns the value of a number rounded to the nearest integer.",
    tip: null,
    tags: [{ name: "JavaScript" }],
    category: "Code",
    difficulty: "Medium"
  }
];
    let currentIndex=0;
    let submit=document.querySelector(".button");
    let option=document.querySelector(".options");
    let ques=document.querySelector(".question");
    let jawab=document.querySelectorAll(".opt");
    let selectedOption = document.querySelector(".opt.selected");
    let score=0;
    let data=mockData;
    let selectedAnswerText = "";
    let isAnswered=false;
    console.log(data);
    function selectOption(){
        jawab.classList.toggle("selected");
    }
    
    function renderQuestion(index){
        let questions=data[index].question;
        console.log(questions);
        ques.textContent=questions;

        let ans=data[index].answers;
        let finalAns=data[index].correct_answer;
        for(let key in ans){
            if(ans[key]){
                let newElem=document.createElement("p");
                newElem.textContent=ans[key];
                newElem.className="opt";
                option.appendChild(newElem);
                newElem.addEventListener("click", () => {
                    // Remove selection from all options
                    if (isAnswered) return; // 🔒 prevent further clicks
                    isAnswered = true;
                    document.querySelectorAll(".opt").forEach((opt) => {
                        opt.classList.remove("selected");
                    });

                    // Highlight the clicked one
                    newElem.classList.add("selected");

                    // Store selected key globally if needed
                    selectedAnswerText=newElem.textContent;
                    console.log(selectedAnswerText);
                    if(selectedAnswerText===finalAns){
                        score+=1;
                        newElem.classList.remove("selected");
                        newElem.classList.add("correct");
                    }
                    else{
                        newElem.classList.add("wrong");
                        document.querySelectorAll(".opt").forEach(opt=>{
                            if(opt.textContent===finalAns){
                                opt.classList.add("correct");
                            }
                        })
                    }
                });
            }
        }

        
        

        
        
    }

    renderQuestion(currentIndex);

    submit.addEventListener("click",()=>{
        isAnswered=false;
        option.innerHTML="";
        currentIndex++;
        if(currentIndex<mockData.length){
            renderQuestion(currentIndex);
        }
        else{
            ques.textContent=`Quiz ended! \n            You scored ${score} out of 3`;
            console.log(score);
            
        }
    })

   

    


})