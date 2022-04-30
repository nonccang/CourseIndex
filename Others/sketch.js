var x = 1;
let colorPicker;

let b1;
let b2;
var bar;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(234, 227, 178);
  bar = createP("	&#8595;Pick your colour and press'p'");
  bar.style("background-color", "Darkblue");
  bar.position(20, 223);
  bar.mouseOver(changeColor);
  bar.mouseOut(changeColor2);
  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(20, 270);
  b1 = createButton("Erase All");
  b1.position(windowWidth - 100, 275);
  b1.mousePressed(erase);

  b2 = createButton("Save");
  b2.position(80, 270);
  b2.mousePressed(save);
}

function changeColor() {
  bar.style("background-color", "Coral");
}
function changeColor2() {
  bar.style("background-color", "Darkblue");
}

function erase() {
  background(234, 227, 178);
}

function save() {
  save(str(year()) + month() + day() + hour + minute() + second() + ".png");
  print("Saved your memo!");
}

function draw() {
  x = constrain(x, 1, 80);

  if (mouseIsPressed) {
    strokeWeight(x);

    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  if (keyIsPressed == true && key == "]") {
    x = x + 0.5;
  } else if (keyIsPressed == true && key == "[") {
    x = x - 0.5;
  }
}

function keyPressed() {
  if (key === "p") {
    stroke(colorPicker.color());
  } else if (key === "e") {
    stroke(234, 227, 178);
  }
  if (key == "s") {
    save(str(year()) + month() + day() + hour + minute() + second() + ".png");
    print("Saved your memo!");
  }
  if (key === "a") {
    background(234, 227, 178);
  }
  if (key === "f") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
