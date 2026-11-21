import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Performant Canvas Starfield with optional shooting stars and mouse parallax
 * Pauses automatically when offscreen
 */
export const StarCanvas = ({ 
  count = 130, 
  enableShootingStars = true,
  parallax = { x: 0, y: 0 },
  className = "hm-starfield-canvas" 
}) => {
  const canvasRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = false;

    let width = 0;
    let height = 0;
    let stars = [];
    let shootingStar = null;
    let lastShootingStarTime = Date.now();

    const setupCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || window.innerWidth;
      height = rect?.height || 600;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      ctx.scale(dpr, dpr);

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: Math.random() * 1.3 + 0.4,
        baseAlpha: Math.random() * 0.5 + 0.25,
        speed: Math.random() * 0.02 + 0.006,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.8 + 0.2, // for 3D parallax depth
      }));
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    const spawnShootingStar = () => {
      const startX = Math.random() * width * 0.8;
      const startY = Math.random() * height * 0.4;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2;
      const speed = Math.random() * 8 + 10;
      shootingStar = {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 60 + 50,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 30 + 35,
      };
    };

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Render Stars with subtle parallax
      stars.forEach((star) => {
        star.phase += star.speed;
        const alpha = star.baseAlpha + Math.sin(star.phase) * 0.22;
        const posX = star.baseX + (parallax.x * star.depth * 0.8);
        const posY = star.baseY + (parallax.y * star.depth * 0.8);

        ctx.fillStyle = `rgba(251, 246, 238, ${Math.max(0.08, Math.min(0.95, alpha))})`;
        ctx.beginPath();
        ctx.arc(posX, posY, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Occasional Shooting Star
      const now = Date.now();
      if (enableShootingStars && !shootingStar && now - lastShootingStarTime > 8000) {
        if (Math.random() < 0.02) {
          spawnShootingStar();
          lastShootingStarTime = now;
        }
      }

      if (shootingStar) {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life += 1;
        shootingStar.alpha = 1 - (shootingStar.life / shootingStar.maxLife);

        const tailX = shootingStar.x - shootingStar.vx * 3.5;
        const tailY = shootingStar.y - shootingStar.vy * 3.5;

        const grad = ctx.createLinearGradient(shootingStar.x, shootingStar.y, tailX, tailY);
        grad.addColorStop(0, `rgba(234, 88, 12, ${shootingStar.alpha})`);
        grad.addColorStop(0.3, `rgba(212, 175, 55, ${shootingStar.alpha * 0.8})`);
        grad.addColorStop(1, `rgba(251, 246, 238, 0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (shootingStar.life >= shootingStar.maxLife) {
          shootingStar = null;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            render();
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setupCanvas);
    };
  }, [count, enableShootingStars, parallax, prefersReduced]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true" 
    />
  );
};
