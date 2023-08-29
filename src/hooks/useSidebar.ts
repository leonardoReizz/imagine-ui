import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface UseSidebarProps {
  onOpenChange: (open: boolean) => void;
}

export function useSidebar({ onOpenChange }: UseSidebarProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOpenChange]);

  return { cardRef, router };
}
