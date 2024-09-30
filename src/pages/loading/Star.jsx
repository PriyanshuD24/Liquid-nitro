import React, { useEffect, useRef } from "react";

const Star = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let id;
    let x_off;
    let y_off;

    const min_dist = 0;
    const max_dist = 32;
    const d = 150;
    const n_stars = 250;

    const Point = {
      x: 0,
      y: 0,
    };

    let elements = [];

    const project2d = (point, dist) => {
      const p = Object.create(Point);
      p.x = Math.round((d * point.x) / dist);
      p.y = Math.round((d * point.y) / dist);
      return p;
    };

    const StarElement = {
      p1: null,
      width: 3,
      dist: 0,

      draw: function () {
        const p2 = project2d(this.p1, this.dist);

        if (
          p2.x + x_off <= 0 ||
          p2.x + x_off > c.width ||
          p2.y + y_off <= 0 ||
          p2.y + y_off > c.height
        ) {
          this.dist = max_dist;
        } else {
          const percent = 1 - this.dist / max_dist;

          ctx.beginPath();
          // Change the color to white using hsl(0, 0%, brightness%)
          ctx.strokeStyle = `hsl(0, 0%, 90%)`;

          this.width = percent * 3;
          ctx.rect(p2.x + x_off, p2.y + y_off, this.width, this.width);

          ctx.stroke();
          ctx.closePath();
        }
      },
    };

    const createElements = () => {
      for (let i = 0; i < n_stars; i++) {
        const elem = Object.create(StarElement);
        elem.p1 = Object.create(Point);
        elem.p1.x = randomRange(-50, 50);
        elem.p1.y = randomRange(-50, 50);
        elem.dist = randomRange(0, max_dist);
        elements.push(elem);
      }
    };

    const update = () => {
      ctx.clearRect(0, 0, c.width, c.height);

      elements.forEach((elem) => {
        elem.dist -= 0.2;
        elem.draw();
      });
    };

    const restart = () => {
      ctx.strokeStyle = "hsl(0, 0%, 90%)"; // Change the initial stroke style to white
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.lineWidth = 2;
      ctx.moveTo(0, 0);

      x_off = c.width / 2;
      y_off = c.height / 2;

      elements = [];
      createElements();
      id = setInterval(update, 30);
    };

    const handleResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;

      clearInterval(id);
      restart();
    };

    const randomRange = (minVal, maxVal) => {
      return Math.floor(Math.random() * (maxVal - minVal - 1)) + minVal;
    };

    // Initialize canvas and stars
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    restart();

    // Handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="myCanvas"
      style={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 10, 
        pointerEvents: 'none',
        // top: 0,
        // left: 0,
      }}
    >
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};

export default Star;
