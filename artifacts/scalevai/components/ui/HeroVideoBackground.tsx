"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./HeroVideoBackground.module.css";

interface HeroVideoBackgroundProps {
  readonly className: string;
  readonly src: string;
}

export default function HeroVideoBackground({ className, src }: HeroVideoBackgroundProps) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;
    if (reducedMotion) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setVideoFailed(true);
    });
  }, [reducedMotion, videoFailed]);

  return (
    <div className={className} aria-hidden="true">
      {videoFailed ? null : (
        <video
          className={styles.video}
          ref={videoRef}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
          onError={() => setVideoFailed(true)}
        >
          <source src={src} type="video/mp4" onError={() => setVideoFailed(true)} />
        </video>
      )}
      <div className={styles.shade} />
    </div>
  );
}
