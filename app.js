
let quiz = [];
let btn = document.getElementById('new-question');
let cont = document.getElementById("cont");
let ansAttempt;

let answer1 = document.getElementById('answer-1');
let answer2 = document.getElementById('answer-2');
let answer3 = document.getElementById('answer-3');
let answer4 = document.getElementById('answer-4');

let userChoice;
let intervalTimer;
let count;
let correct = 0;
let missed = 0;


let questionNum = 0;

let reveal = document.getElementById('reveal');
let playAgain = document.getElementById('playAgain');

let secondCount = document.getElementById('seconds-count');
let secondCount2 = document.getElementById('seconds-count2');

let message = document.getElementById('message');
let message2 = document.getElementById('message2');
let message3 = document.getElementById('message3');
let message4 = document.getElementById('message4');


let aa = 15;
let bb = 15;

let circle_animation = document.querySelector('.circle_animation');


let tryAgain = document.getElementById('tryAgain');
tryAgain.style.backgroundColor = 'red';

let endGame = false;
let secondss = 0;
let secondss2 = 0;

let click = 0;
let answer = document.querySelectorAll('.answer');
let myTimeout;
let myTimeout2;

let iconStar = document.querySelectorAll('.bi-star-fill');
let minus = false;
let moneyColor = document.querySelectorAll('.moneyColor');

let letPlayBtn = document.querySelector('.letPlayBtn');
let letplayAudio = document.querySelector('.letPlayAudio');
let timeUpAudio = document.querySelector('.letPlayAudio');

let help1 = document.querySelector('#help1');
let help2 = document.querySelector('#help2');
let help3 = document.querySelector('#help3');
let myChart = document.querySelector('#myChart');
let phone = false;
let lastques = false;


btn.style.visibility = 'hidden';
letPlayBtn.addEventListener('click', function () {
    btn.style.visibility = 'visible';
    letPlayBtn.style.visibility = 'hidden';
    letplayAudio.play();
})


var level100Audio = document.querySelector('.level100Audio');
var correctAudio = document.querySelector('.correctAudio');
var wrongAudio = document.querySelector('.wrongAudio');

hidden();
function hidden() {
    playAgain.style.visibility = "hidden";
    myChart.style.display = 'none';
    cont.style.visibility = "hidden";
    message.style.visibility = "hidden";
    message2.style.visibility = "hidden";
    message4.style.visibility = "hidden";
    secondCount.style.visibility = 'hidden';
    secondCount2.style.visibility = 'hidden';

    tryAgain.style.visibility = 'hidden';

    iconStar.forEach(function (element, index, arr) {
        element.style.visibility = 'hidden';
    })

}

moneyColor.forEach(function (element, index, arr) {
    // element.style.visibility = 'hidden';
    element.style.color = '#fff';
})



quizBuild(1);
console.log(questionNum)



// @@ Function Chinh 

btn.addEventListener('click', function () {
    myChart.style.display = 'none';

    letplayAudio.pause();
    level100Audio.play();

    btn.disabled = true;
    count_Sec();

    message.style.visibility = 'hidden';
    message.innerHTML = '';

    message3.style.visibility = 'hidden';


    secondCount.style.visibility = 'visible';
    countDown();
    stopCount();


    questionNum += 1;
    // console.log(questionNum + 'a');


    displayNewQuestion();

    btn.innerHTML = 'Next Question';
    clearButton();

    quizBuild(questionNum);
    // displayStats();

    reveal.addEventListener('click', function () {

        message3.style.visibility = 'hidden';

        revealColorAnswer(quiz[questionNum].ans);
        console.log('33');
        revealAnswer(quiz[questionNum].ans);
        if (endGame == true) {
            tryAgain.style.visibility = 'visible';
            tryAgain.addEventListener('click', function () {
                location.replace('index.html');
                endGame == false;
                console.log('try again');

            })
        }
    })

})


//function trình bày câu hỏi
function displayNewQuestion() {
    document.getElementById('cont').style.visibility = 'visible';


    //ansAttempt = false;
    quizWrite();
    reveal.style.visibility = 'hidden';

    // if (questionNum > 2) {
    //     btn.disabled = true;
    // }
}


for (let x = 0; x < answer.length; x++) {
    answer[x].addEventListener('click', function () {


        level100Audio.pause();

        userChoice = x + 1;

        btn.disabled = false;

        Attempted();

        if (questionNum > 14) {
            btn.style.visibility = 'hidden';
        }
    });
}



//@@@ kiểm tra đáp án
function Attempted() {
    ansAttempt = true;

    for (let x = 0; x < answer.length; x++) {
        answer[x].addEventListener('click', function () {
            userChoice = x + 1;
        });
    }
    myChart.style.display = 'none';


    if (userChoice != quiz[questionNum].ans) {

        wrongAudio.play();

        message.innerHTML = 'Oh! Wrong Answer.' + '<br>' + 'Good Luck for next  time!';
        //tru 1 de ko bi cong sao
        //questionNum = questionNum - 1;
        minus = true;

        message.style.visibility = 'visible';
        endGame = true;
        btn.style.visibility = 'hidden';
    }

    if (userChoice == quiz[questionNum].ans) {

        correctAudio.play();
        letplayAudio.pause();


        if (questionNum == 1) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $' + 100;
        }
        if (questionNum == 2) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $' + 200;
        }
        if (questionNum == 3) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $' + 300;
        }
        if (questionNum == 4) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $' + 500;
        }
        if (questionNum == 5) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $1,000';
        }
        if (questionNum == 6) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $2,000';
        }
        if (questionNum == 7) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $4,000';
        }
        if (questionNum == 8) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $8,000';
        }
        if (questionNum == 9) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $16, 000';
        }
        if (questionNum == 10) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $32, 000';
        }
        if (questionNum == 11) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $64, 000';
        }
        if (questionNum == 12) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $125, 000';
        }
        if (questionNum == 13) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $250, 000';
        }
        if (questionNum == 14) {
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $500,000';
        }
        if (questionNum == 15) {
            lastques = true;
            message3.style.visibility = 'visible';
            message3.innerText = 'Congratulation! You got' + '  $1,000,000';
            playAgain.style.visibility = 'visible';
            playAgain.addEventListener('click', function(){
                location.replace('index.html');
            })
        }

    }

    //Cong sao cho moi lan dung
    iconStar.forEach(function (element, index, arr) {
        if (index === (15 - questionNum)) {
            element.style.visibility = 'visible';

        }
        if (minus == true) {
            if (index === (15 - questionNum)) {
                element.style.visibility = 'hidden';
            }
        }
    })
    //thay doi mau sac cho moi lan dung
    moneyColor.forEach(function (element, index, arr) {
        if (index === (15 - questionNum)) {
            element.style.color = 'rgb(222, 163, 49)';
            element.style.fontWeight = '700';
        }
        if (minus == true) {
            if (index === (15 - questionNum)) {
                element.style.color = '#fff';
                element.style.fontWeight = '300';
            }
        }
    })


    quizAnswer(userChoice, quiz[questionNum].ans);
}




//function để dừng lại thời gian
function stopCount() {
    for (let x = 0; x < answer.length; x++) {
        answer[x].addEventListener('click', function () {
            aa = 0;
            bb = 0;
            clearInterval(myTimeout);
            clearInterval(myTimeout2);
            secondCount2.style.visibility = 'hidden';
            secondCount.style.visibility = 'visible';

            
            circle_animation.style.strokeDashoffset = 440 - (1 * (440 / 30));
        });
    }
}

function increaseTime() { }



//@@@ Class tạo bộ câu hỏi
function quizConstructor(question, ans1, ans2, ans3, ans4, ans, imageURL, attempted, videoURL) {
    this.question = question;
    this.ans1 = ans1;
    this.ans2 = ans2;
    this.ans3 = ans3;
    this.ans4 = ans4;
    this.ans = ans;
    this.imageURL = imageURL;
    this.attempted = attempted;
    this.videoURL = videoURL;
}



//@@@ Tạo bộ Câu hỏi
function quizBuild(questionNum) {
    quiz[1] = new quizConstructor('The magnet would most likely attract which of the following?',
        'A: Metal', 'B: Plastic', 'C: Wood', 'D: The wrong man', 1, 'img/magnet', false);
    quiz[2] = new quizConstructor('If someone asked to see your ID, what might you show them?',
        'A: Your tongue', 'B: Your teeth', 'C: Your passport', 'D: The door', 3, false, false);
    quiz[3] = new quizConstructor('A person with well-developed abdominal muscles is said to have a what?',
        'A: One-pack', 'B: Six-pack', 'C: 12-pack', 'D: Family-pack', 2, false, false);
    quiz[4] = new quizConstructor('Which two words traditionally appear onscreen at the termination of a feature film?',
        'A: The End', 'B: The Conclusion', 'C: The finish', 'D: The Pizza Rolls Are Done', 1, false, false);
    quiz[5] = new quizConstructor('Which of these names is not in the title of a Shakespeare play?',
        'A: Hamlet', 'B: Romeo', 'C: Macbeth', 'D: Darren', 4, false, false);
    quiz[6] = new quizConstructor('Where did Scotch whisky originate?',
        'A: Ireland', 'B: Wales', 'C: The United States', 'D: Scotland', 4, false, false);
    quiz[7] = new quizConstructor('What name is traditionally given to the party held for a woman who is expecting a baby?',
        'A: Baby drizzle', 'B: Baby shower', 'C: Baby downpour', 'D: Baby deluge', 2, false, false);

    //https://www.buzzfeed.com/daves4/who-wants-to-be-a-millionaire-trivia-questions
    quiz[8] = new quizConstructor('In fancy hotels, it is traditional for what tantalizing treat to be left on your pillow?',
        'A: A pretzel', 'B: An apple', 'C: A mint', 'D: A photo of Wolf Blitzer', 3, false, false);
    quiz[9] = new quizConstructor('At a restaurant, someone who "foots the bill" does what?',
        'A1: Kisses it', 'B: Rips it up', 'C: Hopes to get lucky', 'D: Pays it', 4, false, false);
    quiz[10] = new quizConstructor('Due to the geographical areas they represented, the opposing sides of the US Civil War were known by what names?',
        'A: The Hills and the Valleys', 'B: The Cities and the Farms', 'C: The North and the South', 'D: The Kool and the Gang', 3, false, false);
    quiz[11] = new quizConstructor('A person who is not a banker and lends money at an extremely high interest rate is known as what?',
        'A: Loan Shark', 'B: Green snake', 'C: Paper tiger', 'D: Brother-in-law', 1, false, false);
    quiz[12] = new quizConstructor('A well-known lyric in the holiday song "Silver Bells" promises that "soon it will be" what?',
        'A: July 4th weekend', 'B: Halloween night', 'C: Christmas Day', 'D: National Burrito Month', 3, false, false);
    quiz[13] = new quizConstructor('A common piece of advice goes, "Be there or be" what?',
        'A: Bare', 'B: Square', 'C: Aware', 'D: All alone as usual', 2, false, false);
    quiz[14] = new quizConstructor('Which of these phrases is slang for "someone who has a strong and unyielding attitude"?',
        'A: Boiled ham', 'B: Tough cookie', 'C: Ruffled chip', 'D: Soggy cereal', 2, false, false);
    quiz[15] = new quizConstructor('Something in an obvious location is said to be "right under your" what?',
        'A: Mattress', 'B: Azaleas', 'C: Boxer shorts', 'D: Nose', 4, false, false);
    // quiz[16] = new quizConstructor('If someone asked to see your ID, what might you show them?',
    //     'A:Your tongue', 'B:Your teeth', 'C:Your passport', 'D:The door', 3, false, false);


    return quiz;
}


// @@@ Trình bày câu hỏi và đáp án
function quizWrite() {
    let question = document.getElementById('question');
    question.innerHTML = '<strong> Question ' + questionNum + '</strong>: ' + quiz[questionNum].question;

    answer1.innerHTML = quiz[questionNum].ans1;
    answer2.innerHTML = quiz[questionNum].ans2;
    answer3.innerHTML = quiz[questionNum].ans3;
    answer4.innerHTML = quiz[questionNum].ans4;
}


//function để làm đồng hồ đếm thời gian
function countDown() {
    myTimeout = setTimeout(function () {
        let time = 30;
        aa = 30;
        let ii = 0;
        let initialOffset = '440';
        // let circle_animation = document.querySelector('.circle_animation');

        /* Need initial run as interval hasn't yet occured... */
        circle_animation.style.strokeDashoffset = initialOffset - (1 * (initialOffset / time));

        let interval = setInterval(function () {
            let countTime = document.querySelector('.countTime');
            countTime.innerHTML = aa;

           if (aa == 0 && phone == false) {

                reveal.style.visibility = 'visible';
                clearInterval(interval);
                secondCount.classList.remove('changeColor');


                return;
            }

            if (aa < 10) {
                secondCount.classList.add('changeColor');
            }

            circle_animation.style.strokeDashoffset = initialOffset - ((ii + 1) * (initialOffset / time));
            ii++;
            aa--;
        }, 1000);

    }, 1000)
}


// @@ function for help2
function countDownforHelp2() {
    myTimeout2 = setTimeout(function () {
        let time = 60;
        bb = 60;
        let ii = 0;
        let initialOffset = '440';
        // let circle_animation = document.querySelector('.circle_animation');

        /* Need initial run as interval hasn't yet occured... */
        circle_animation.style.strokeDashoffset = initialOffset - (1 * (initialOffset / time));

        let interval = setInterval(function () {
            let countTime2 = document.querySelector('.countTime2');
            countTime2.innerHTML = bb;

            if (bb == 0) {

                reveal.style.visibility = 'visible';
                clearInterval(interval);
                secondCount2.classList.remove('changeColor');


                return;
            }

            if (bb < 10) {
                secondCount2.classList.add('changeColor');
            }

            circle_animation.style.strokeDashoffset = initialOffset - ((ii + 1) * (initialOffset / time));
            ii++;
            bb--;
        }, 1000);

    }, 1000)
}

//@@@ Tạo màu cho đáp án
function quizAnswer(x, y) {
    //x: userChoice, 
    //y: quiz[questionNum].ans
    if (y == 1) {
        if (x == 1) {
            answer1.style.backgroundColor = 'rgb(80, 143, 0)';
        } else if (x == 2) {
            answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 3) {
            answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        } else {
            answer4.style.backgroundColor = 'rgb(168, 88, 0)';
        }
    }
    if (y == 2) {
        if (x == 1) {
            answer1.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 2) {
            answer2.style.backgroundColor = 'rgb(80, 143, 0)';
        } else if (x == 3) {
            answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        } else {
            answer4.style.backgroundColor = 'rgb(168, 88, 0)';
        }
    }
    if (y == 3) {
        if (x == 1) {
            answer1.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 2) {
            answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 3) {
            answer3.style.backgroundColor = 'rgb(80, 143, 0)';
        } else {
            answer4.style.backgroundColor = 'rgb(168, 88, 0)';
        }
    }
    if (y == 4) {
        if (x == 1) {
            answer1.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 2) {
            answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        } else if (x == 3) {
            answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        } else {
            answer4.style.backgroundColor = 'rgb(80, 143, 0)';
        }
    }
    return y;
}

//reset lại màu sắc cho các btn câu trả lời
function clearButton() {
    answer1.style.backgroundColor = '#445ac5';
    answer2.style.backgroundColor = '#445ac5';
    answer3.style.backgroundColor = '#445ac5';
    answer4.style.backgroundColor = '#445ac5';

    answer1.style.opacity = '1';
    answer2.style.opacity = '1';
    answer3.style.opacity = '1';
    answer4.style.opacity = '1';

    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;

}



//thay đổi màu sắc cho reveal đáp án
function revealColorAnswer(z) {
    if (z == 1) {
        answer1.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        answer4.style.backgroundColor = 'rgb(168, 88, 0)';
    }

    if (z == 2) {
        answer2.style.backgroundColor = 'rgb(80, 143, 0)';
        answer1.style.backgroundColor = 'rgb(168, 88, 0)';
        answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        answer4.style.backgroundColor = 'rgb(168, 88, 0)';
    }

    if (z == 3) {
        answer3.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        answer1.style.backgroundColor = 'rgb(168, 88, 0)';
        answer4.style.backgroundColor = 'rgb(168, 88, 0)';
    }

    if (z == 4) {
        answer1.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'rgb(168, 88, 0)';
        answer3.style.backgroundColor = 'rgb(168, 88, 0)';
        answer1.style.backgroundColor = 'rgb(168, 88, 0)';
    }
}

// đáp án cho function reveal
function revealAnswer(u) {
    if (u == 1) {
        message.innerHTML = 'Correct Answer is A';
        message.style.visibility = 'visible';
    } else if (u == 2) {
        message.innerHTML = 'Correct Answer is B';
        message.style.visibility = 'visible';
    } else if (u == 3) {
        message.innerHTML = 'Correct Answer is C';
        message.style.visibility = 'visible';
    } else {
        message.innerHTML = 'Correct Answer is D';
        message.style.visibility = 'visible';
    }
}


//function set 30s để trả lời câu hỏi
let countSec = document.querySelector('.countSeconds');
function count_Sec() {
    let sec = setInterval(countSecond, 1000);


    secondss = 0;
    // let countSec = document.querySelector('.countSeconds');
    function countSecond() {
        secondss += 1;
        console.log(secondss);

        countSec.innerHTML = secondss;
        //qua 30s, btn for ans and ques bị lock
        if (phone == false) {
            if (secondss > 31) {

                myChart.style.display = 'none';
                timeUpAudio.play();

                question.style.opacity = 0.5;
                btn.style.visibility = 'hidden';
                reveal.style.visibility = 'visible';

                message2.innerHTML = 'Oh No! TIME OUT!';
                message2.style.visibility = "visible";

                reveal.addEventListener('click', () => {
                    message2.style.visibility = "hidden";
                    message.style.visibility = "visible";
                    tryAgain.style.visibility = 'visible';
                    tryAgain.addEventListener('click', function () {
                        console.log('try again');
                        location.replace('index.html');
                    })
                })

                clearInterval(sec);


                for (let x = 0; x < answer.length; x++) {
                    answer[x].addEventListener('click', function () {
                    });
                    answer[x].disabled = true;
                    answer[x].style.backgroundColor = 'grey';
                    answer[x].style.opacity = 0.5;

                }
            }
        } else if (phone == true) {
            if (secondss > (62 + secondss2) ){

                myChart.style.display = 'none';
                timeUpAudio.play();

                question.style.opacity = 0.5;
                btn.style.visibility = 'hidden';
                reveal.style.visibility = 'visible';

                message2.innerHTML = 'Oh No! TIME OUT!';
                message2.style.visibility = "visible";

                reveal.addEventListener('click', () => {
                    message2.style.visibility = "hidden";
                    message.style.visibility = "visible";
                    tryAgain.style.visibility = 'visible';
                    tryAgain.addEventListener('click', function () {
                        location.replace('index.html');
                    })
                })

                clearInterval(sec);


                for (let x = 0; x < answer.length; x++) {
                    answer[x].addEventListener('click', function () {
                    });
                    answer[x].disabled = true;
                    answer[x].style.backgroundColor = 'grey';
                    answer[x].style.opacity = 0.5;
                }
            }
        }
    }




    //nếu đap án được click trươc 30s, thì thời gian 30s dừng lại, và reset cho câu mới
    for (let x = 0; x < answer.length; x++) {
        answer[x].addEventListener('click', function () {
            click += 1;
            if (click > 0) {
                clearInterval(sec);
                phone = false;
                console.log(phone);
            }
        });

    }
    return secondss;
}


//@@ function cho help1 50%50
function help1Func(x) {
    if (x == 1) {
        answer1.style.backgroundColor = 'rgb(80, 143, 0)';
        answer4.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'grey';
        answer2.style.opacity = '0.5';
        answer3.style.backgroundColor = 'grey';
        answer3.style.opacity = '0.5';
        answer2.disabled = true;
        answer3.disabled = true;
    }
    if (x == 2) {
        answer2.style.backgroundColor = 'rgb(80, 143, 0)';
        answer3.style.backgroundColor = 'rgb(80, 143, 0)';
        answer1.style.backgroundColor = 'grey';
        answer1.style.opacity = '0.5';
        answer4.style.backgroundColor = 'grey';
        answer4.style.opacity = '0.5';
        answer1.disabled = true;
        answer4.disabled = true;
    }
    if (x == 3) {
        answer3.style.backgroundColor = 'rgb(80, 143, 0)';
        answer4.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'grey';
        answer2.style.opacity = '0.5';
        answer1.style.backgroundColor = 'grey';
        answer1.style.opacity = '0.5';
        answer1.disabled = true;
        answer2.disabled = true;
    }
    if (x == 4) {
        answer4.style.backgroundColor = 'rgb(80, 143, 0)';
        answer1.style.backgroundColor = 'rgb(80, 143, 0)';
        answer2.style.backgroundColor = 'grey';
        answer2.style.opacity = '0.5';
        answer3.style.backgroundColor = 'grey';
        answer3.style.opacity = '0.5';
        answer2.disabled = true;
        answer3.disabled = true;

    }
}

help1.addEventListener('click', function () {
    help1.style.opacity = 0.5;
    help1.disabled = true;

    help1Func(quiz[questionNum].ans);
    // for (let x = 0; x < answer.length; x++) {
    // answer[x].addEventListener('click', function () {
    //     userChoice = x + 1;
    // });
    // }
})


//@@ function help2
help2.addEventListener('click', function () {

    phone = true;
    secondss2 = secondss;


    clearInterval(myTimeout);
    secondCount.style.visibility = 'hidden';
    secondCount2.style.visibility = 'visible';

    // aa = 0;
    // clearInterval(myTimeout);
    // circle_animation.style.strokeDashoffset = 440 - (1 * (440 / 30));

    help2.disabled = true;
    help2.style.opacity = 0.5;

    message4.style.visibility = 'visible';
    message4.innerHTML = 'You have more 1 minute to call anyone for support!';

    setTimeout(function () {
        message4.style.visibility = 'hidden';
    }, 5000);
    console.log('hien thi');


    countDownforHelp2();
    reveal.style.visibility = 'hidden';


})





// @@ function help3
function help3Func(x) {
    var xValues = [];
    var yValues = [];
    var barColors = ["rgb(63, 59, 108)", "rgb(98, 79, 130)", "rgb(159, 115, 171)", "rgb(163, 199, 214)"];

    if (x == 1) {
        xValues = ["A", "B", "C", "D"];
        yValues = [90, 0, 5, 5];
    }
    else if (x == 2) {
        xValues = ["A", "B", "C", "D"];
        yValues = [5, 10, 80, 5];
    }
    else if (x == 3) {
        xValues = ["A", "B", "C", "D"];
        yValues = [15, 70, 10, 5];
    }
    else if (x == 4) {
        xValues = ["A", "B", "C", "D"];
        yValues = [45, 40, 10, 5];
    }
    else if (x == 5) {
        xValues = ["A", "B", "C", "D"];
        yValues = [5, 10, 40, 45];
    }
    else if (x == 6) {
        xValues = ["A", "B", "C", "D"];
        yValues = [10, 5, 30, 55];
    }
    else if (x == 7) {
        xValues = ["A", "B", "C", "D"];
        yValues = [25, 35, 25, 15];
    }
    else if (x == 8) {
        xValues = ["A", "B", "C", "D"];
        yValues = [39, 12, 40, 9];
    }
    else if (x == 9) {
        xValues = ["A", "B", "C", "D"];
        yValues = [15, 9, 23, 53];
    }
    else if (x == 10) {
        xValues = ["A", "B", "C", "D"];
        yValues = [5, 10, 50, 35];
    }
    else if (x == 11) {
        xValues = ["A", "B", "C", "D"];
        yValues = [45, 40, 10, 5];
    }
    else if (x == 12) {
        xValues = ["A", "B", "C", "D"];
        yValues = [40, 5, 45, 10];
    }
    else if (x == 13) {
        xValues = ["A", "B", "C", "D"];
        yValues = [11, 40, 10, 39];
    }
    else if (x == 14) {
        xValues = ["A", "B", "C", "D"];
        yValues = [5, 50, 10, 35];
    }
    else if (x == 15) {
        xValues = ["A", "B", "C", "D"];
        yValues = [5, 10, 30, 55];
    }

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Ask the audience",
            }
        }
    });
}



help3.addEventListener('click', function () {
    myChart.style.display = 'block';
    help3.disabled = true;
    help3.style.opacity = 0.5;

    help3Func(questionNum);
    console.log(questionNum);
})





// function countDown() {
//     count--;
//     secondCount.innerHTML = '<h3> ' + count + ' seconds left </h3>';
//     if (count < 1) {
//         clearInterval(intervalTimer);
//         secondCount.innerHTML = '<h3> Time Out! </h3>';
//         secondCount.classList.add('changeColor');
//         reveal.style.visibility = 'visible';
//     }
//     return count;
// }

// function displayStats() {
//     let stats = document.getElementById('div1');
//     stats.innerHTML = 'Correct Answer: ' + correct + '<br>'
//         + 'Wrong Answers: ' + missed;
// }