import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720,
});

k.loadBean();
k.setGravity(1000);

const player = k.add([k.sprite("bean"), k.pos(k.center()), k.area(), k.body()]);

k.add([
  rect(width(), 48),
  outline(4),
  area(),
  pos(0, height() - 48),
  body({ isStatic: true }),
]);

player.onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump();
  }
});

k.loop(1, () => {
  k.add([
    k.rect(50, 50),
    k.pos(1000, 500),
    k.area(),
    k.body(),
    k.outline(3),
    k.move(k.vec2(-1, 0), 300),
  ]);
});
