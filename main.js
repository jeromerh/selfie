var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
textarea=document.getElementById("textbox")

function iniciar()
{
   textarea.innerHTML="";
   recognition.iniciar();
}

recognition.onresult=function(event){

console.log(event);

Content=event.results[0][0].transcript;

textarea.innerHTML=Content
console.log(content)
if(content=="toma mi selfie"){
    console.log("tomando selfie --- ");
    speak()
   }
   
   }
   
   function speak(){
      synth=window.speechSynthesis
   
      diciendo="tomando tu selfie en 5 segundos";
   
      utterThis=new SpeechSynthesisUtterance(diciendo)
   
      synth.speak(utterThis)
   
      Webcam.attach(camera)
   
      setTimeout(function(){
       take_selfie() 
       save() 
      },5000);
   }
   
   camara =document.getElementById("camara")
   Webcam.set({
      width:360,
      heigth:250,
      image_format: "jpeg",
      jpeg_quality:90
   })
   
   function take_selfie(){
      Webcam.snap(function(data_uri){
         document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';   
      })
   }
   
   function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ;
   link.href
   = image; link.click(); }


