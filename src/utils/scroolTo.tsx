interface ScrollToProps {
  ref: React.RefObject<HTMLElement>;
  callback: (targetPosition: number, duration: number) => void;
}

export const scrollTo = ({ ref, callback }: ScrollToProps): void => {
  if (ref && ref.current) {
    const elementHeight = ref.current.offsetHeight;
    const viewportHeight = window.innerHeight;

    const targetPosition =
      ref.current.offsetTop - viewportHeight / 3 + elementHeight / 2;

    callback(targetPosition, 100);
  }
};
