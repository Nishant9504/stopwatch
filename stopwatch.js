var sec=0;
var milliSec =0;
var seconds =document.getElementById('seconds');
var milliSeconds=document.getElementById('millisec');
 var startButton=document.getElementById('start');
 var stopButton=document.getElementById('stop');
 var resetButton=document.getElementById('reset');
 var interval;
startButton.addEventListener('click',function(){
    clearInterval(interval);
    console.log("clicked");
  interval= setInterval(function(){
        milliSec++;
        if(milliSec<10){
        milliSeconds.innerText="0"+milliSec;
        }
        if(milliSec>9){
            milliSeconds.innerText= milliSec;
        }
        if(milliSec>99){
            sec++;
           seconds.innerText="0"+sec;
            milliSec=0;
            milliSeconds.innerText="0"+milliSec;
        }
        if(sec>9){
            seconds.innerText=sec;
        }

        
    },10);
    
});
stopButton.addEventListener('click',function(){
    console.log("stop");
  clearInterval(interval);
});
resetButton.addEventListener('click',function(){
    console.log("reset"); 
    clearInterval(interval);
    milliSeconds.innerText="00";
    seconds.innerText="00";
    sec=0;
    milliSec=0;
});