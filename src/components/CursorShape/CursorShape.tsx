"use client";
import React, { useEffect, useRef } from "react";

const CursorShape = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is not null
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context is available

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      // Smoothly follow the cursor
      position.current.x += (target.current.x - position.current.x) * 0.1;
      position.current.y += (target.current.y - position.current.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the larger circle with blur
      ctx.beginPath();
      ctx.arc(position.current.x, position.current.y, 80, 0, Math.PI * 2); // Increase radius to 80
      ctx.fillStyle = "rgba(249, 216, 68, 0.8)"; // Yellow color
      ctx.shadowColor = "rgba(249, 216, 68, 0.5)"; // Softer shadow
      ctx.shadowBlur = 50; // Increased blur
      ctx.fill();
      ctx.closePath();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-20"
    />
  );
};
export default CursorShape;
