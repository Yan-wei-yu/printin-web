export const IconMenu = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
  
  export const IconX = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
  
  interface IconChevronProps {
    dir?: "up" | "down" | "right";
  }
  
  export const IconChevron = ({ dir = "down" }: IconChevronProps) => {
    const rotate = dir === "up" ? "rotate(180deg)" : dir === "right" ? "rotate(-90deg)" : "none";
    return (
      <svg
        width="14" height="14" fill="none"
        stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
        style={{ transform: rotate, transition: "transform 0.25s" }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  };