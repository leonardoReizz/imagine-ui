import { useRouter } from "next/navigation";
import { useEffect, useRef, MouseEvent } from "react";

interface UseSidebarProps {
  onOpenChange: (open: boolean) => void;
}

export function useSidebar({ onOpenChange }: UseSidebarProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent<Element, MouseEvent>) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onOpenChange(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { cardRef, router };
}
