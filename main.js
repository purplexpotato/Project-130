song1 = "";
song2 = "";
rightwristx = 0;
rightwristy = 0;
leftwristx  = 0;
leftwristy = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,400,350);
    fill("#FF0000")
    stroke("#FF0000");
}
function play{
scorerightwrist = results[0].pose.keypoints[10].score;
scoreleftwrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreleftwrist);

function load{
    if{
        rightwristy = reults[0].pose.keypoints
    }
}
}