import React from 'react';

interface AspectRatioImageProps {
  /** The URL of the image to display. */
  src: string;
  /** A description of the image for accessibility. */
  alt: string;
}

/**
 * Renders an image within a container that maintains a 16:9 aspect ratio.
 * It uses the CSS `object-cover` property to ensure the image fills 
 * the container without being stretched or distorted.
 */
export function AspectRatioImage({ src, alt }: AspectRatioImageProps) {
  return (
    // 1. THE CONTAINER (The "Frame"):
    // This div creates the consistently-sized frame for your image.
    //  - `relative`: Establishes a coordinate system for the `absolute` child.
    //  - `w-full`: Makes the frame take up the full width of its parent.
    //  - `aspect-video`: This is the key class that sets a 16:9 aspect ratio.
    //  - `overflow-hidden`: Clips any part of the image that might spill out.
    <div className="relative w-full aspect-video overflow-hidden rounded-md">
      
      {/* 2. THE IMAGE ITSELF: */}
      {/* This img tag is styled to fill the frame correctly. */}
      {/*  - `absolute inset-0`: Positions the image to fill its `relative` parent. */}
      {/*  - `w-full h-full`: Ensures the image element's box matches the container's size. */}
      {/*  - `object-cover`: The most important part. Scales the image content to */}
      {/*    cover the frame, maintaining its aspect ratio by cropping excess parts. */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />

    </div>
  );
} 