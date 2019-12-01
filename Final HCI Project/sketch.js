//let SAOFont;
let textX = 300;
let questionText;
let rulesText;
let cond1;
let cond2;
let cond3;
let questionCount;
let optionAText;
let optionBText;
let optionCText;
let optionDText;
let optionEText;
let correctOption;

// question Texts
let questionText1;
let questionText2;
let questionText3;
let questionText4;
let questionText5;

//option A Texts
let optionAText1;
let optionAText2;
let optionAText3;
let optionAText4;
let optionAText5;

//option B Texts
let optionBText1;
let optionBText2;
let optionBText3;
let optionBText4;
let optionBText5;

//option C Texts
let optionCText1;
let optionCText2;
let optionCText3;
let optionCText4;
let optionCText5;

//option D Texts
let optionDText1;
let optionDText2;
let optionDText3;
let optionDText4;
let optionDText5;

//option E Texts
let optionEText1;
let optionEText2;
let optionEText3;
let optionEText4;
let optionEText5;

//Correct Options
let correctOption1;
let correctOption2;
let correctOption3;
let correctOption4;
let correctOption5;


function preload(){
    //SAOFont=loadFont('assets/SAOWelcomeAnotherTT-Bold.ttf');
}

function setup() {
    questionCount=0;
    createCanvas(1280, 640);
    rulesText="A movie sutdio is scheduling the release of six films -- Fiesta, Glaciers, Hurricanes, Jets, Kangaroos, and Lovebird. No two of these films can be released on the same date. The release schedule is governed by the following conditions:";
    cond1="Fiesta must be released earlier than both Jets and Lovebird.";
    cond2="Kangaroos must be released earlier than Jets, and Jets must be released earlier than Hurricanes.";
    cond3= "Lovebird must be released earlier than Glaciers";
    questionCount=0;

    //Question 1 Setup
    questionText1= "Which one of the following CANNOT be true?";
    optionAText1="Fiesta is released second.";
    optionBText1="Glaciers is released third.";
    optionCText1="Hurricanes is released fourth.";
    optionDText1="Kangaroos is released fourth";
    optionEText1="Kangaroos is released fifth.";
    correctOption1 = 'E';

    //q

}

function draw() {
    switch (questionCount){
        case 0:
            questionText = questionText1;
            correctOption=correctOption1;
            optionAText=optionAText1;
            optionBText=optionBText1;
            optionCText=optionCText1;
            optionDText=optionDText1;
            optionEText=optionEText1;
            break;
        case 1:
            questionText = questionText2;
            correctOption = correctOption2;
            optionAText=optionAText2;
            optionBText=optionBText2;
            optionCText=optionCText2;
            optionDText=optionDText2;
            optionEText=optionEText2;
            break;
    }
    background(255,255,255);
    textSize(32);
    textFont('Georgia');
    text('Rules',100,0,100,100);
    fill(0,0,0);
    textFont('Arial');
    textSize(10);
    text(rulesText,textX,100,100,200);
    fill(0,0,0);
    text(cond1,textX,200,100,100);
    fill(0,0,0);
    text(cond2,textX,300,100,100);
    fill(0,0,0);
    text(cond3,textX,400,100,100);
    fill(0,0,0);
    textSize(32);
    textFont('Georgia');
    text('Question',textX,100,500,500);
    fill(0,0,0);    textFont('Arial');
    textSize(24);
    text(questionText);
    fill(0,0,0);
}