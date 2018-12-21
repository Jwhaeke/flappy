var bird;
var pipes =[];
var score = 0;
var scoreArea;



function setup() {
    score = 0;
    createCanvas(1200, 600);

    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);

    scoreArea = document.getElementById("myScore");
    scoreArea.innerHTML = "Your score: " + score;
    console.log(score);

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        
        if (pipes[i].hits(bird)) {
            alert("You scored: " + score);
            score = 0;
            pipes.splice(0, pipes.length);
            setup();
        }


        if (pipes[i].offscreen()) {
            pipes.splice(i,1);
        }    
    }
    
    bird.update();
    bird.show();
    
    // every 100 frames new pipe
    if (frameCount % 40 == 0) { //If number of framecounts can be divided by 100 and the remained is 0 then result = True
        pipes.push(new Pipe());

    }

    if (frameCount % 1 == 0) {
        score = score + 1;
    }

    
}


function keyPressed() {
    if (key == ' ') {
        bird.up();    
        // console.log("space");
    }
}