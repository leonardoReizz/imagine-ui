export function smoothScrollTo(elementY: number, duration: number): void {
  const startingY = window.pageYOffset;
  const targetY = elementY - 101; // Ajuste para 101 pixels do topo
  const diff = targetY - startingY;
  let start: number;

  window.requestAnimationFrame(function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}
