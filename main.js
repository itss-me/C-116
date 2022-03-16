lipsX = 0;
lipsY = 0;
function preload(){
    lips_filter = loadImage('https://toppng.com/uploads/preview/lips-png-11552942139easitafetd.png');
}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function draw(){ 
  image(video,0,0,300,300);  
  fill(255,0,0);
  stroke(255,0,0);
  circle(lipsX, lipsY, 20);
  image(clown_nose, lipsY, lipsX, 30,30);
}

function take_snapshot(){
    save('Filterr@.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.lips.x;
        noseY = results[0].pose.lips.y;
        console.log("lips x = " + noseX);
        console.log("lips y = " + noseY);
    }
}



function draw() {

    image(video, 0, 0, 0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY,20);
}

