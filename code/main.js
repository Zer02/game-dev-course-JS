import kaplay from "kaplay";

kaplay();
loadBean();
setGravity(1600);

const player = add([
  sprite("bean"),
  pos(center()),
  area(),
  body(),
]);

add([
  rect(width(), 48),
  outline(4),
  area(),
  pos(0, height() - 48),
  body({ isStatic: true })
]);

onKeyPress("space", () => {
  if (player.isGrounded()) {
    player.jump();
  }
})

