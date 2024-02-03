import { CircleBackground } from "@/components/ui/circle-background";

const CIRCLES = [
  [0, "w-1/3 h-1/3", "animate-spin-reverse-slower", "#3f3f46"],
  [1, "w-1/2 h-1/2", "animate-spin-slow", "#71717a"],
  [2, "w-4/6 h-4/6", "animate-spin-reverse-slow", "#52525b"],
  [3, "w-5/6 h-5/6", "animate-spin-slower", "#3f3f46"],
] as const;

export const HomeCirclesBackground = () => (
  <>
    {CIRCLES.map(([index, className, animation, color]) => (
      <div
        key={index}
        className={`absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 ${className}`}
      >
        <CircleBackground
          color={color}
          className={animation}
          isInverted={animation.includes("reverse")}
        />
      </div>
    ))}
  </>
);
