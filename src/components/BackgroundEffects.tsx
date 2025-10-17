import { motion } from "motion/react";
import { Sparkles, Gift, Star, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  icon: "sparkle" | "gift" | "star" | "heart" | "dot";
}

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      icon: ["sparkle", "gift", "star", "heart", "dot"][
        Math.floor(Math.random() * 5)
      ] as Particle["icon"],
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getIcon = (icon: Particle["icon"]) => {
    const iconProps = {
      className: "w-full h-full",
      strokeWidth: 1.5,
    };

    switch (icon) {
      case "sparkle":
        return <Sparkles {...iconProps} fill="currentColor" />;
      case "gift":
        return <Gift {...iconProps} />;
      case "star":
        return <Star {...iconProps} fill="currentColor" />;
      case "heart":
        return <Heart {...iconProps} fill="currentColor" />;
      case "dot":
        return <div className="w-full h-full rounded-full bg-current" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#E5C400]/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#CB6000]/10 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#43487E]/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
        }}
      />

      {/* Additional Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#E5C400]/8 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
        }}
      />

      <motion.div
        animate={{
          x: [0, 70, -70, 0],
          y: [0, -90, 90, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#CB6000]/6 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px)`,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          <motion.div
            className={
              particle.id % 4 === 0
                ? "text-[#E5C400]"
                : particle.id % 4 === 1
                ? "text-[#CB6000]"
                : particle.id % 4 === 2
                ? "text-[#43487E]"
                : "text-[#E5C400]/70"
            }
            style={{
              transform: `translate(${mousePosition.x * (particle.id % 3) * 0.1}px, ${
                mousePosition.y * (particle.id % 3) * 0.1
              }px)`,
            }}
          >
            {getIcon(particle.icon)}
          </motion.div>
        </motion.div>
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-[#E5C400]/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border-2 border-[#CB6000]/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px)`,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#43487E]/15"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Confetti Elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor:
              i % 3 === 0 ? "#E5C400" : i % 3 === 1 ? "#CB6000" : "#43487E",
          }}
          animate={{
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, Math.random() * 720 - 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  );
}
