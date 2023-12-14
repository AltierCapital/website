import { CircleBackground } from "@/components/ui/circle-background";

const CIRCLES = [
  ["w-1/3 h-1/3", "animate-spin-reverse-slower", "#3f3f46"],
  ["w-1/2 h-1/2", "animate-spin-slow", "#71717a"],
  ["w-4/6 h-4/6", "animate-spin-reverse-slow", "#52525b"],
  ["w-5/6 h-5/6", "animate-spin-slower", "#3f3f46"],
] as const;

export const HomeCirclesBackground = () => (
  <>
    {CIRCLES.map(([className, animation, color], index) => (
      <div
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className={`-z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${className}`}
      >
        <CircleBackground color={color} className={animation} />
      </div>
    ))}
  </>
);
