import kaplay from "kaplay";

// kaplay();
// loadBean();
// setGravity(1600);

// const player = add([
//   sprite("bean"),
//   pos(center()),
//   area(),
//   body(),
// ]);

// add([
//   rect(width(), 48),
//   outline(4),
//   area(),
//   pos(0, height() - 48),
//   body({ isStatic: true })
// ]);

// onKeyPress("space", () => {
//   if (player.isGrounded()) {
//     player.jump();
//   }
// })


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

// k.add([
//   k.rect([k.width(), 300, k.pos(0, 300)])
// ])