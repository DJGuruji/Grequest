
import React, { useEffect, useRef } from "react";

const AutoClickLinkButton = () => {
  const linkRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (linkRef.current) {
        linkRef.current.click(); 
      }
    }, 4 * 60 * 1000); 

  
    return () => clearInterval(interval);
  }, []);

  return (
    <><h1>Auto Clickable Button in 4 minutes</h1>
       <a
      ref={linkRef}
      href="https://fmc.deno.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        Go to FMC
      </button>
    </a>
    </>
 
  );
};

export default AutoClickLinkButton;
