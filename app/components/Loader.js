import { useEffect, useState, useRef } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null); 

  useEffect(() => {
    // Simulate a delay to show the loader for 3 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);

    // Set the video playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Increase the speed to 2x
    }

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null; 
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-white">
      <video
        ref={videoRef} 
        src="/assets/loader.mp4"
        autoPlay
        loop
        muted
        className="w-[500px] h-[500px] object-contain"
      />
    </div>
  );
};

export default Loader;
