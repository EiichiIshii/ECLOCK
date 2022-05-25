let sw, bc, fc, myfont, ts, w, lr;
let nday = "";

function preload() {
    myfont = loadFont("data/Staatliches-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(myfont);
    textAlign(CENTER, CENTER);
    sw = 0;
    bc = color(0);
    fc = color(255);
    w = min(windowWidth, windowHeight);
    ts = w / 2.5;
    lr = ts/6;
}

function draw() {
    background(bc);
    if (sw > 1) {
        sw = 0;
    }
    if (sw == 0) {
        bc = color(0);
        fc = color(255);
    }
    if (sw == 1) {
        bc = color(255);
        fc = color(0);
    }

    let today = new Date();
    nday = cvDay(today.getDay());

    push();
    translate(width / 2, height / 2);
    fill(fc);
    noStroke();
    textSize(ts / 2.1);
    text(today.getFullYear() + " / " + (today.getMonth() + 1) + " / " + today.getDate() + " [ " + nday + " ] ", 0, -ts / 2);
    textSize(ts);
    text(today.getHours() + " : " + today.getMinutes() + " : " + ('0' + today.getSeconds()).slice(-2), 0, ts / 6);

    stroke(fc);
    strokeWeight(ts / 60);
    line(-width / 2, -ts / 6, width / 2, -ts / 6);
    pop();

    stroke(fc);
    noFill();
    logo(lr*2, height-lr*2, lr);

}

function cvDay(val) {
    if (val == 1) {
        return "MON."
    }
    if (val == 2) {
        return "TUE."
    }
    if (val == 3) {
        return "WED."
    }
    if (val == 4) {
        return "THU."
    }
    if (val == 5) {
        return "FRI."
    }
    if (val == 6) {
        return "SAT."
    }
    if (val == 7) {
        return "SUN."
    }
}

function logo(posx, posy, r, _pg) {
    push();
    translate(posx, posy);

    let lr = r / 20;

    strokeWeight(lr);
    noFill();

    beginShape();
    vertex(r / 1.3, -r / 2);
    vertex(-r / 2, -r / 2);
    vertex(-r, 0);
    vertex(-r / 2, r / 2);
    vertex(r / 1.3, r / 2);
    endShape(CLOSE);

    line(-r, 0, -r / 2, 0);

    beginShape();
    vertex(-r / 20, -r / 2);
    vertex(-r / 2, 0);
    vertex(-r / 20, r / 2);
    endShape();

    line(r / 3, -r / 2, r / 3, r / 2);
    line(r / 3, 0, r / 1.3, 0);

    strokeWeight(lr / 2);
    line(-r / 2, r / 2, r / 3, -r / 2);
    line(-r / 20, r / 2, r / 1.3, -r / 2);
    pop();
}

function keyPressed() {
    if (keyCode === ENTER || keyCode === RETURN) {
        sw++;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    w = min(windowWidth, windowHeight);
    ts = w / 2.5;
    lr = ts/6;
    redraw();
}