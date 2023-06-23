let display=document.querySelectorAll('h2');
display[0].addEventListener('click',()=>
{
  function startclock(){
    let time=new Date();

    let hrs=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();
    let AMPM="AM";
    
    if(hrs>12){
        hrs-=12;
        AMPM="PM"
    }
    console.log(`time:${hrs}:${mins}:${secs}`);
   
    display[1].innerHTML=`${hrs}:${mins}:${secs}   ${AMPM}`
  } 
    setInterval(()=>{
        startclock();
        
    },1000)
   
})
//1
let heading=document.querySelector('h3');
heading.addEventListener('mouseover',()=>
{
    heading.innerText='Hello';
    
})
heading.addEventListener('mouseleave',()=>
{
    heading.innerText='Hii';
    
})
//2

var a=document.getElementsByClassName("change");
console.log(a[0].innerHTML);

a[0].addEventListener('click',() =>{
             a[0].innerHTML="MERN Stack";
})
//5.
var b=document.getElementsByClassName("changetext");
console.log(b[0].innerHTML);

function trans(){
            b[0].innerHTML="Welcome To Elevation Academy";
}