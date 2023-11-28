import { useEffect, useState } from "react";

export const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileDevice(window.innerWidth < 1400);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will run once on mount

  return { isMobileDevice };
};
