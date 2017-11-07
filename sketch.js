var myImage, state = true;
var mySong, analyzer, fromCol, toCol;

function preload(){
    myImage = loadImage("./assets/ocean.jpg");
    mySong = loadSound('assets/music.mp3');
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    imageMode(CENTER)
    background(202);
    image(myImage,width/2,height/2,myImage.width,myImage.height);
    mySong.play();
    
    analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
    
}

function draw() {
    if (state) {
        var volume = analyzer.getLevel();
        var size = map(volume,0,1,0,width)
        //ellipse(width/2,height/2, size, size)
        var thisX = random(0,width);
        var thisY = random(0,height)
        var c = get(thisX, thisY)
        fill(c);
        noStroke(255);
        ellipse(thisX, thisY, size/5, size/5);
    }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}