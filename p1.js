let UserScore=0;
let ComScore=0;
let choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");
let msgCont=document.querySelector(".msg-container");

let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");


const Playgame=(UserChoice)=>{
     console.log(UserChoice);
     let Compchoice=GencomChoice();
     console.log(Compchoice);
     let userwin=true;  
     if(UserChoice == Compchoice){
        draw();  
     }
     //let userwin=true
     else if(UserChoice=="rock"){ 

        Compchoice =="paper" ? userwin=false:true;
        if(userwin){
            UserScore++;
            console.log("You Won!!");
            msg.innerText=`Your ${UserChoice} beats ${Compchoice}!!`; 
            user.innerText=UserScore;
            msgCont.style.backgroundColor="green";
        }else{
            ComScore++;
            console.log("You Lose!!");
            msg.innerText=`${Compchoice} beats your ${UserChoice}!!`;
            comp.innerText=ComScore; 
            msgCont.style.backgroundColor="red";
        }
      //  console.log("You Lose!");
     }else if(UserChoice=="paper"){
        Compchoice=="scissors" ? userwin=false:true;
        if(userwin){
            UserScore++;
            console.log("You Won!!");
            msg.innerText=`Your ${UserChoice} beats ${Compchoice}!!`; 
            user.innerText=UserScore;
            msgCont.style.backgroundColor="green";
        }else{
            ComScore++;
            console.log("You Lose!!");
            msg.innerText=`${Compchoice} beats your ${UserChoice}!!`;
            comp.innerText=ComScore; 
            msgCont.style.backgroundColor="red";
        }
        //console.log("You Lose!");
     }else if(UserChoice=="scissors"){
        Compchoice=="rock" ? userwin=false:true;
        if(userwin){
            UserScore++;
            console.log("You Won!!");
            msg.innerText=`Your ${UserChoice} beats ${Compchoice}!!`; 
            user.innerText=UserScore;
            msgCont.style.backgroundColor="green";
        }else{
            ComScore++;
            console.log("You Lose!!");
            msg.innerText=`${Compchoice} beats your ${UserChoice}!!`;
            comp.innerText=ComScore; 
            msgCont.style.backgroundColor="red";
        }
        //console.log("You Lose!");
     }
    
    
    
}
choices.forEach((choice)=>{
   // let UserChoice=choice.getAttribute("id");
    choice.addEventListener(("click"),()=>{
        let UserChoice=choice.getAttribute("id");
    // console.log(UserChoice);
     Playgame(UserChoice);
})
    })
const GencomChoice=()=>{
    options=["rock","paper","scissors"];
    ind=Math.floor(Math.random()*3);
    return options[ind];
}

const draw=()=>{
    console.log("The Game is draw");
     msg.innerText="The Game is draw"; 
}

