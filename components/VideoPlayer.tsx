'use client';

import { useRef, useState } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    enableClickToggle?: boolean;
}

export default function VideoPlayer({ src, poster, className = '', enableClickToggle = true }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const togglePlay = (e: React.MouseEvent) => {
        if (!enableClickToggle) return; // Allow click to propagate if toggle disabled
        e.preventDefault();
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-gray-900 group ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
            />

            {/* Sound Spectrum Icon (Bottom Right) */}
            <div className="absolute bottom-3 right-3 p-1.5 bg-black/40 backdrop-blur-sm rounded-md text-white/90 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 8L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 10L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 10L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Subtle gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    );
}
