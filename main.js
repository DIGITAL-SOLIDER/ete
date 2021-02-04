prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});

camera = document.getElementById("capture");
Webcam.attach(camera);

function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='captured_image' src='"+data_uri+"'>";
    })
}

console.log("ml5:version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ocoGPU8C1/model.json",model_loded)

function model_loded()
{
    console.log("modelbfg")
}

function speech()
{
    var synth = window.speechSynthesis;
    speak_data_1= "the first prediction is"+prediction_1;
    speak_data_2= " and the second prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    image = document.getElementById("captured_image")
    classifier.classify(image,besult)
}

function besult(error,result)
{
   if(error)
   {
       console.log("404error",error);
   }
   else 
   {
       console.log(result,"resulllltttisdefined");
       document.getElementById("result_emotion_name").innerHTML=result[0].label;
       document.getElementById("result_emotion_name2").innerHTML=result[1].label;
       prediction_1 = result[0].label;
       prediction_2 = result[1].label;
       speech()
       if(result[0].label == "happy")
   {
       document.getElementById("update_emoji").innerHTML="&#128522;";
   }
   if(result[0].label == "sad")
   {
       document.getElementById("update_emoji").innerHTML="&#128532;";
   }
   if(result[0].label == "angry")
   {
       document.getElementById("update_emoji").innerHTML="&#128548;";
   }
   if(result[0].label == "happy")
   {
       document.getElementById("update_emoji2").innerHTML="&#128522;";
   }
   if(result[0].label == "sad")
   {
       document.getElementById("update_emoji2").innerHTML="&#128532;";
   }
   if(result[0].label == "angry")
   {
       document.getElementById("update_emoji2").innerHTML="&#128548;";
   }
   }
   
}