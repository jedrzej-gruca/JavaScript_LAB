class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = this.colorRandomizer();
        this.dx = Math.random() * 4 - 1.5;
        this.dy = Math.random() * 4 - 1.5;
    }

    colorRandomizer() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let toReturn = "#" + r.toString(16) + g.toString(16) + b.toString(16);
        return toReturn;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    }
}

let canvWidth = 0;
let canvHeight = 0;
let numOfBalls = 0;
let ballsArray = [];
let ball = new Ball(1,1,1);
canvWidth = document.querySelector("#canvWidth");
canvHeight = document.querySelector("#canvHeight");
let startButton = document.querySelector("#startButton");
let resetButton = document.querySelector("#resetButton");

function getWidth() {
    return Number(document.querySelector("#canvWidth").value);
}

function getHeight() {
    return Number(document.querySelector("#canvHeight").value);
}

function getDist() {
    return Number(document.querySelector("#distance").value);
}

function getBalls() {
    return Number(document.querySelector("#ballsNumber").value);
}

//create canvas container
const createCanvas = document.createElement ("canvas");
createCanvas.classList.add("canvas");
const body =  document.querySelector("body");
body.appendChild(createCanvas);

//getting 2d drawing context
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

//setting up starting params and invoke animation function
function start() {
    canvas.width = getWidth();
    canvas.height = getHeight();
    numOfBalls = getBalls();
    if (ballsArray.length === 0) {
        for (let i = 0; i < numOfBalls; i++) {
            let radius = ballRandomizer(10, 30)
            ball = new Ball(ballRandomizer(radius, canvas.width-radius), ballRandomizer(radius, canvas.height-radius), radius);
            ballsArray.push(ball);
        }
    }
    ballAnimation();
}

//erase pixels in canvas container in given coordinates
function reset() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ballsArray = [];
}

//looped function that calls itself to perform animation
function ballAnimation() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numOfBalls; i++) {
        for (let j = 0; j < numOfBalls; j++) {
            if (i !== j &&
                Math.sqrt(
                    Math.pow((ballsArray[i].x - ballsArray[j].x),2) +
                    Math.pow((ballsArray[i].y - ballsArray[j].y),2)) < getDist()) {
                ballConnector(ballsArray[i], ballsArray[j]);
            }
        }
        ballsArray[i].move();
        ballsArray[i].draw();
    }
    requestAnimationFrame(ballAnimation);
}

//function to randomize ball properties
function ballRandomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//connecting balls with line
function ballConnector(b1, b2) {
    context.beginPath();
    context.strokeStyle = "#ff0000";
    context.shadowColor = "#000"
    context.shadowOffsetX = 1;
    context.moveTo(b1.x, b1.y);
    context.lineTo(b2.x, b2.y);
    context.stroke();
}