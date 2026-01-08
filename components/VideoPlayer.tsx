'use client';

import { useRef, useState } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
}

export default function VideoPlayer({ src, poster, className = '' }: VideoPlayerProps) {
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
            className={`relative w-full h-full overflow-hidden bg-gray-900 ${className}`}
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

            {/* Play/Pause Overlay - shows when not playing or on hover */}
            {(!isPlaying || isHovering) && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity cursor-pointer"
                    onClick={togglePlay}
                >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg">
                        {isPlaying ? (
                            // Pause icon
                            <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            // Play icon
                            <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </div>
                </div>
            )}

            {/* Subtle gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
    );
}
