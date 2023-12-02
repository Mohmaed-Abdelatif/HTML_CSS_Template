//scroll persentage line
let scrollLine = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    scrollLine.style.width = `${(scrollTop / height) * 100}%`;
});


let up = document.querySelector(".up");

let progSection = document.querySelector(".our-skills");
let progSpans = document.querySelectorAll(".our-skills .the-progress span");

let statsSection = document.querySelector(".stats");
let statsCounter = document.querySelectorAll(".stats .box .number");
let started = false //counter started? no
window.onscroll = function(){
    //scroll top icon:-
    // this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");       or:-
    document.documentElement.scrollTop >= document.documentElement.clientHeight ? up.classList.add("show") : up.classList.remove("show");

    //skill progress:-
    if(window.scrollY >= progSection.offsetTop - window.innerHeight / 2){
        progSpans.forEach((span)=>{
        span.style.width = span.dataset.width;
        })
    }

    //statsCounter:-
    if(window.scrollY >= statsSection.offsetTop - window.innerHeight / 2){
        if(!started){
            statsCounter.forEach((span)=>{
                let goal = parseInt(span.dataset.goal);

                let currentCount = span.textContent;
                let counter = setInterval(()=>{
                    span.textContent = ++currentCount;
                    if(currentCount === goal){
                        clearInterval(counter);
                    }
                },2000 / goal);
            })
        }
        started = true; 
    }
};
up.onclick = function(){
    window.scrollTo({top:0})
};


let countDownDate = new Date("Jun 30,2026 23:59:59").getTime();
let counter = setInterval(()=>{
    let datenow = new Date().getTime();
    let dateDiff = countDownDate - datenow;

    //get time unites
    let days = Math.floor(dateDiff / (1000  * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60 ));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

    document.querySelector(".events .days").innerHTML = days < 100 ? `0${days}` : days < 10 ? `00${days}` : days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` :  minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if(dateDiff < 0){
        clearInterval(counter);
    }
},1000);


let count = document.querySelector(".discount .form .count");
let progress = document.querySelector(".discount .form .progress");
let textArea = document.querySelector(".discount .form .textarea");
let maxLength = textArea.getAttribute("maxlength");

count.innerHTML = maxLength;

textArea.oninput = function(){
    count.innerHTML = maxLength - this.value.length;
    progress.style.width = `${(this.value.length / maxLength) * 100}%`;
    // count.innerHTML <= 5 ? count.classList.add("zero") : count.classList.remove("zero");/
    if(count.innerHTML <= 5){
        count.classList.add("nearZeroCnt");
        progress.classList.add("nearZeroProg");
    }else{
        count.classList.remove("nearZeroCnt");
        progress.classList.remove("nearZeroProg");
    }
};

