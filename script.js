



//Outside Choose Btns:
const easyQ = document.querySelector(".easyQ");
const hardQ = document.querySelector(".hardQ");

const easyQues = document.querySelector(".easyQues");
const hardQues = document.querySelector(".hardQues");
//Sound 
const popSound = document.getElementById("pop");


//Containers :
const questionsContainer = document.querySelector(".questions-container");
const choDif = document.querySelector(".choose-difficulty");


//For Out (Easy/Hard):
function playSoundPop(){
    popSound.play();
    popSound.volume = 0.6;
}
function donePick(){
    questionsContainer.classList.toggle("bck-main-style");
    choDif.classList.toggle("displayNone");
}

easyQ.addEventListener('click', ()=>{
    playSoundPop();
    setTimeout(()=>{
        donePick();
        easyQues.classList.remove("displayNone");
    },300);
});
hardQ.addEventListener('click', ()=>{
    playSoundPop();
    setTimeout(()=>{
        donePick();
        hardQues.classList.remove("displayNone");
    },300);
});



// Select navigation buttons (easy quest)
const nextToQ2 = document.querySelector(".nextToQ2");
const backToQ1 = document.querySelector(".backToQ1");
const nextToQ3 = document.querySelector(".nextToQ3");
const backToQ2 = document.querySelector(".backToQ2");
const submit = document.querySelector(".submit");

// Select question containers
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');

// Select radio buttons
const q1True = document.getElementById('q1-true');
const q1False = document.getElementById('q1-false');
const q2True = document.getElementById('q2-true');
const q2False = document.getElementById('q2-false');
const q3True = document.getElementById('q3-true');
const q3False = document.getElementById('q3-false');

let score = 0;

// Navigation logic
nextToQ2.addEventListener('click', () => {
    playSoundPop()
    setTimeout(()=>{
        question1.classList.add("displayNone");
        question2.classList.remove("displayNone");
        
    },300)
});
backToQ1.addEventListener('click', () => {
    playSoundPop()
    setTimeout(()=>{
        question2.classList.add("displayNone");
        question1.classList.remove("displayNone");
    },300)
});
nextToQ3.addEventListener('click', () => {
    playSoundPop()
    setTimeout(()=>{
        question2.classList.add("displayNone");
        question3.classList.remove("displayNone");
    },300)


});
backToQ2.addEventListener('click', () => {
    playSoundPop()
    setTimeout(()=>{
        question3.classList.add("displayNone");
        question2.classList.remove("displayNone");
    },300);
});

// Submit logic
submit.addEventListener('click', () => {
    score = 0; // Reset score each time submit is clicked
    playSoundPop();

    setTimeout(()=>{ 
         // Check answers and update score
        if (q1False.checked) {
            score++;
        }
        if (q2False.checked) {
            score++;
        }
        if (q3False.checked) {
            score++;
        }

        if(score <= 1){
            document.querySelector(".goods").textContent = "Nice Try Baby Shark";
        }

        document.querySelector('.box').classList.add("displayNone");
        document.querySelector('.done-box').classList.remove("displayNone");
        document.querySelector('.scrEas').textContent = score.toString();
    },300);
});



//Hard (quest);

const userAns = document.querySelector(".userAns");
const submitAns = document.querySelector(".submitAns");


submitAns.addEventListener('click',()=>{

    score = 0; // Reset score each time submit is clicked
    playSoundPop();

    setTimeout(()=>{ 
        if(userAns.value == 1){
            score = 100;

            document.querySelector('.box').classList.add("displayNone");
            document.querySelector('.done-box').classList.remove("displayNone");
            document.querySelector('.scrEas').textContent = score.toString();
        }else{
            document.querySelector(".goods").textContent = "Nice Try Baby Shark";
            document.querySelector('.box').classList.add("displayNone");
            document.querySelector('.done-box').classList.remove("displayNone");
            document.querySelector('.scrEas').textContent = "0";
        }
    },300);
});







//Main Inside
const rules = document.querySelector(".rules");
const closeR = document.querySelector(".close");


const rulesContainer = document.querySelector(".rules-cont");
const rulesBox = document.querySelector(".rules-box");
rules.addEventListener('click', ()=>{
    setTimeout(()=>{
        rules.style.display = "none";
        rulesBox.classList.remove("animation-out");
        rulesContainer.classList.toggle("toggle-RULSE");
        rulesBox.classList.add("animation-in");
    }, 200);
   
});

closeR.addEventListener('click', ()=>{
    setTimeout(()=>{
        rules.style.display = "block";
        rulesBox.classList.remove("animation-in");
        rulesContainer.classList.toggle("toggle-RULSE");
        
    }, 600);
    setTimeout(()=>{rulesBox.classList.add("animation-out");},100)
    
});

