let sw, bc, fc, myfont, ts, w, lr, hue;
let nday = "";

function preload() {
    myfont = loadFont("data/Staatliches-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    textFont(myfont);
    textAlign(CENTER, CENTER);
    sw = 0;
    bc = color(0, 0, 0);
    fc = color(0, 0, 100);
    w = min(windowWidth, windowHeight);
    ts = w / 2.5;
    lr = ts / 8;
    hue = random(360);
}

function draw() {
    background(bc);
    if (sw > 2) {
        sw = 0;
    }
    if (sw == 0) {
        bc = color(0, 0, 0);
        fc = color(0, 0, 100);
    }
    if (sw == 1) {
        bc = color(0, 0, 100);
        fc = color(0, 0, 0);
    }
    if (sw == 2) {
        bc = color(hue, 100, 60);
        fc = color(0, 0, 100);
    }

    hue += 0.1;

    if (hue > 360) {
        hue = 0;
    }

    let today = new Date();
    nday = cvDay(today.getDay());

    push();
    translate(width / 2, height / 2 - ts / 8);
    fill(fc);
    noStroke();
    textSize(ts / 2.1);
    text(today.getFullYear() + " / " + (today.getMonth() + 1) + " / " + today.getDate() + " [ " + nday + " ] ", 0, -ts / 2);
    textSize(ts);
    text(today.getHours() + " : " + ('0' + today.getMinutes()).slice(-2) + " : " + ('0' + today.getSeconds()).slice(-2), 0, ts / 6);

    stroke(fc);
    strokeWeight(ts / 60);
    line(-width / 2, -ts / 6, width / 2, -ts / 6);
    pop();

    stroke(fc);
    noFill();
    logo(width / 2, height - lr * 3, lr);

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
    lr = ts / 6;
    redraw();
}