"use client";

import Image, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { helpers } from "@/utils/helpers";

export interface DlUiImageProps extends Omit<NextImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  imageClassName?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  width?: number;
  height?: number;
  fill?: boolean;
}

const DlUiImage = (props: DlUiImageProps) => {
  const {
    alt,
    fallbackSrc,
    aspectRatio,
    imageClassName,
    className,
    placeholder = "empty",
    priority = false,
    width,
    height,
    fill,
    ...imageProps
  } = props;

  const [imgSrc, setImgSrc] = useState(props.src);
  const [isLoading, setIsLoading] = useState(true);

  // Lógica para determinar si usar fill
  const hasExplicitDimensions = Boolean(width && height);
  const hasContainerDimensions = Boolean(
    className && (className.includes("w-") || className.includes("h-"))
  );

  const shouldUseFill = Boolean(
    fill === true ||
      (fill !== false && hasContainerDimensions && !hasExplicitDimensions)
  );

  const finalWidth = width || 500;
  const finalHeight = height || 300;

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={helpers.cn(className, shouldUseFill && "relative")}
      style={{ aspectRatio }}
    >
      <Image
        {...imageProps}
        src={imgSrc}
        alt={alt}
        className={helpers.cn(
          imageClassName,
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          shouldUseFill && "object-cover"
        )}
        onError={handleError}
        onLoad={handleLoad}
        priority={priority}
        placeholder={placeholder}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        fill={shouldUseFill}
        {...(!shouldUseFill && { width: finalWidth, height: finalHeight })}
      />
    </div>
  );
};

export default DlUiImage;
