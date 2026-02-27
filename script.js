document.addEventListener("DOMContentLoaded", function(){

const messages = [
"mungkin aku bukan yang paling kamu mau.",
"tapi aku yang paling sungguh waktu itu.",
"aku belajar kalau mencintai",
"nggak selalu tentang memiliki.",
"kadang cuma tentang menerima",
"kalau nggak semua cerita harus selesai bersama."
];

const chat = document.getElementById("chat");
const ending = document.getElementById("ending");
const loveBtn = document.getElementById("loveBtn");
const loveScreen = document.getElementById("loveScreen");

function typeMessage(text, callback){
    let div = document.createElement("div");
    div.className="message";
    chat.appendChild(div);

    let i=0;
    let typing=setInterval(()=>{
        div.innerHTML+=text.charAt(i);
        i++;
        if(i>=text.length){
            clearInterval(typing);
            if(callback) callback();
        }
    },40);
}

function showMessages(index){
    if(index < messages.length){
        setTimeout(()=>{
            typeMessage(messages[index], ()=>{
                showMessages(index+1);
            });
        },1200);
    } else {
        setTimeout(()=>{
            chat.style.opacity="0";
            ending.classList.add("show-ending");
        },1500);
    }
}

showMessages(0);

loveBtn.addEventListener("click", function(){
    loveScreen.classList.add("show-love");

    for(let i=0;i<40;i++){
        let p=document.createElement("div");
        p.className="particle";
        p.innerHTML="♡";
        p.style.top=Math.random()*100+"%";
        p.style.left=Math.random()*100+"%";
        loveScreen.appendChild(p);

        setTimeout(()=>{ p.remove(); },3000);
    }

    setTimeout(()=>{
        let big=document.createElement("div");
        big.className="big-heart";
        big.innerHTML="❤";
        loveScreen.appendChild(big);
    },2500);
});

});