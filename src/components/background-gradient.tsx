"use client";
import React, { useEffect, useRef } from "react";

export const BackgroundGradient = ({
  children,
  className = "",
  containerClassName = "",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes borderColorAnim {
        0% { border-color: #9333ea; }
        25% { border-color: #3b82f6; }
        50% { border-color: #10b981; }
        75% { border-color: #f59e0b; }
        100% { border-color: #9333ea; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={containerClassName}
      style={{
        padding: "4px",
        borderRadius: "24px",
        border: "3px solid",
        animation: "borderColorAnim 6s linear infinite",
        display: "block",
      }}
    >
      <div
        className={className}
        style={{
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};
