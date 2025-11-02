import React from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  overlayColor?: string;
  children?: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  overlayColor = "bg-black/95", // default overlay
  children,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`} />

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center  text-white text-center h-full px-4">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
