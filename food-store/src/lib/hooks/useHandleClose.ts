import { useEffect, RefObject } from "react";

export function useHandleClose(
  isOpen: boolean,
  onClose: () => void,
  overlayRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleOverlayClick = (e: MouseEvent) => {
      if(!overlayRef.current) return;
      if (e.target === overlayRef.current) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [isOpen, onClose, overlayRef]);
}
