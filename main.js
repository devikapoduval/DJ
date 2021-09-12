songFIREWORK=""
songROAR=""
leftwristX=""
leftwristY=""
rightwristX=""
rightwristY=""
function preload(){
    songFIREWORK=loadSound("FIREWORK.mp3");
    songROAR=loadSound("ROAR.mp3");
}

function setup() {
     canvas=createCanvas(300,250);
     canvas.center();
     video=createCapture(VIDEO)
     video.hide()
     video.size(300,250)
     poseNet=ml5.poseNet(video,modelloaded)
     poseNet.on('pose',gotPoses)
}

function modelloaded(){
    console.log("Posenet is Intialized")
}


function draw(){
    image(video,0,0,300,250)
}




function gotPoses(result){
    if (result.length > 0) {
        console.log(result);
        leftwristY= result[0].pose.leftWrist.y
        leftwristX= result[0].pose.leftWrist.x
        rightwristY= result[0].pose.rightWrist.y
        rightwristX= result[0].pose.rightWrist.x
console.log("leftWristX= " + leftwristX)
console.log("leftWristY= " + leftwristY)
console.log("rightWristX= " + rightwristX)
console.log("rightWristY= " + rightwristY)
    }
}