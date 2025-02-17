import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720,
});

k.loadBean();
k.setGravity(1000);

const player = k.add([
  k.sprite("bean"),
  k.pos(k.center()),
  k.area(),
  k.body(),
  k.offscreen(),
]);

player.onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump();
  }
});

player.onExitScreen(() => {
  k.go("gameover");
})

k.scene("gameover", () => {
  k.add([k.text(`Game Over!\nScore: ${counter}`), k.pos(k.center())]);
})

k.add([
  rect(width(), 48),
  outline(4),
  area(),
  pos(0, height() - 48),
  body({ isStatic: true }),
]);

let counter = 0;
const counterUI = k.add([k.text("0")]);

k.loop(1, () => {
  counter++;
  counterUI.text = counter;

  const speeds = [300, 500, 800, 1000, 1500];
  const currentSpeed = speeds[Math.floor(Math.random() * speeds.length)];

  k.add([
    k.rect(50, 50),
    k.pos(1000, 500),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(-1, 0), currentSpeed),
  ]);
});
