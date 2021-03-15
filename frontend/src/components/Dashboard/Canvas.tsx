import styled from "styled-components";
import { useEffect } from "react";

const Canvas = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = (window.innerHeight * 9) / 10;
    const ctx = canvas.getContext("2d");

    class Circle {
      x: number;
      y: number;
      radius: number;
      color: string;
      dx: number;
      dy: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        speed: number
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = Math.random() * speed - speed / 2;
        this.dy = Math.random() * speed - speed / 2;
      }

      render = () => {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      };
      move = () => {
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;
        }
        if (
          this.y + this.radius >= canvas.height ||
          this.y - this.radius <= 0
        ) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.render();
      };
    }

    const randomColor = () => {
      const colors = [
        "#fff60080",
        "#ff005c80",
        "#eb5e0b80",
        "#5eaaa880",
        "#ec464680",
        "#00af9180",
        "#b3418080",
        "#252a3480",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const circles: Circle[] = [];
    let radiusFactor = window.innerWidth / 20;
    let speedFactor = 10;
    //?speed and radius is decided based on the width of device
    if (window.innerWidth < 700) {
      radiusFactor = window.innerWidth / 12;
      speedFactor = 6;
    }
    if (window.innerWidth < 400) {
      radiusFactor = window.innerWidth / 9;
      speedFactor = 5;
    }
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const addCircle = () => {
      let radius = Math.random() * radiusFactor + radiusFactor;
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let y =
        Math.random() * ((window.innerHeight * 9) / 10 - radius * 2) + radius;
      let color = randomColor();
      //?Speed factor and radius is used from the if statements present above
      const circle = new Circle(x, y, radius, color, speedFactor / 1.5);
      circles.push(circle);
    };

    for (let i = 0; i < 10; i++) {
      addCircle();
    }

    function animate() {
      requestAnimationFrame(animate);
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach(circle => {
        circle.move();
      });
    }

    animate();
  }, []);

  return <StyledCanvas id="canvas"></StyledCanvas>;
};

const StyledCanvas = styled.canvas`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
`;

export default Canvas;
