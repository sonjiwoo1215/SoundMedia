let img;

function preload() {
  img = loadImage("jj.png");
}

function setup() {
  createCanvas(1280, 720);
  image(img, 0, 0, width, height);
  noLoop();
  noStroke();

  fill(176, 194, 217);
  beginShape();
  vertex(547, 256);
  vertex(568, 314);
  vertex(614, 272);
  endShape(CLOSE);

  fill(73, 125, 161);
  beginShape();
  vertex(571, 346);
  vertex(568, 314);
  vertex(618, 334);
  endShape(CLOSE);

  beginShape();
  vertex(612, 274);
  vertex(568, 314);
  vertex(618, 334);
  endShape(CLOSE);

  beginShape();
  vertex(616, 334);
  vertex(673, 310);
  vertex(609, 270);
  endShape(CLOSE);

  beginShape();
  vertex(673, 310);
  vertex(655, 229);
  vertex(612, 272);
  endShape(CLOSE);

  fill(176, 194, 217);
  beginShape();
  vertex(546, 256);
  vertex(592, 208);
  vertex(614, 274);
  endShape(CLOSE);

  fill(73, 125, 161);
  beginShape();
  vertex(644, 360);
  vertex(708, 335);
  vertex(673, 306);
  endShape(CLOSE);

  beginShape();
  vertex(709, 335);
  vertex(673, 309);
  vertex(655, 232);
  vertex(700, 273);
  endShape(CLOSE);

  fill(50, 43, 38);
  beginShape();
  vertex(708, 335);
  vertex(752, 379);
  vertex(790, 320);
  endShape(CLOSE);

  beginShape();
  vertex(707, 336);
  vertex(785, 325);
  vertex(698, 272);
  endShape(CLOSE);

  beginShape();
  vertex(785, 325);
  vertex(757, 269);
  vertex(696, 272);
  endShape(CLOSE);

  fill(73, 125, 161);
  beginShape();
  vertex(694, 275);
  vertex(654, 229);
  vertex(756, 268);
  endShape(CLOSE);

  fill(50, 43, 38);
  beginShape();
  vertex(787, 328);
  vertex(850, 320);
  vertex(820, 258);
  endShape(CLOSE);

  beginShape();
  vertex(786, 330);
  vertex(755, 269);
  vertex(822, 260);
  endShape(CLOSE);

  fill(176, 194, 217);
  beginShape();
  vertex(611, 274);
  vertex(591, 209);
  vertex(655, 228);
  endShape(CLOSE);

  beginShape();
  vertex(591, 208);
  vertex(654, 229);
  vertex(674, 164);
  endShape(CLOSE);

  fill(73, 125, 161);
  beginShape();
  vertex(654, 228);
  vertex(755, 268);
  vertex(756, 228);
  endShape(CLOSE);

  fill(50, 43, 38);
  beginShape();
  vertex(754, 229);
  vertex(820, 267);
  vertex(826, 214);
  endShape(CLOSE);

  beginShape();
  vertex(756, 271);
  vertex(818, 266);
  vertex(756, 228);
  endShape(CLOSE);

  fill(73, 125, 161);
  beginShape();
  vertex(654, 230);
  vertex(759, 229);
  vertex(675, 163);
  endShape(CLOSE);

  beginShape();
  vertex(756, 229);
  vertex(826, 215);
  vertex(739, 126);
  endShape(CLOSE);

  beginShape();
  vertex(758, 229);
  vertex(677, 163);
  vertex(738, 128);
  endShape(CLOSE);

  fill(176, 194, 217);
  beginShape();
  vertex(590, 207);
  vertex(583, 148);
  vertex(677, 164);
  endShape(CLOSE);

  beginShape();
  vertex(671, 118);
  vertex(583, 148);
  vertex(677, 164);
  endShape(CLOSE);

  beginShape();
  vertex(740, 127);
  vertex(672, 118);
  vertex(677, 162);
  endShape(CLOSE);
}

function mousePressed() {
  console.log("Mouse X: " + mouseX + ", Mouse Y: " + mouseY);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
