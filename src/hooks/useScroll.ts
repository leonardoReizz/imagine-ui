import { useDebounce } from "@/utils/useDebounce";
import { useEffect, useState } from "react";

interface UseScrollProps {
  refs: RefsType;
}

export function useScroll({ refs }: UseScrollProps) {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleScroll = useDebounce(() => {
    const yOffset = window.scrollY + 100; // Considerando a distância de 100px do topo

    for (const section in refs) {
      const ref = refs[section];
      if (
        ref.current &&
        yOffset >= ref.current.offsetTop &&
        yOffset < ref.current.offsetTop + ref.current.offsetHeight
      ) {
        if (currentSection !== section) {
          setCurrentSection(section);
        }
        return;
      }
    }
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { handleScroll, currentSection };
}
