import kaplay from "kaplay";

const k = kaplay({
  width: 1280,
  height: 720
});

k.loadBean();
k.setGravity(1000);

const player = k.add([
  k.sprite("bean"),
  k.pos(k.center()),
  k.area(),
  k.body()
]);

k.add([
  rect(width(), 48),
  outline(4),
  area(),
  pos(0, height() - 48),
  body({ isStatic: true })
])

player.onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump();
  }
})
