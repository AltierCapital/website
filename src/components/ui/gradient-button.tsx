import { PropsWithChildren } from "react";

export const GradientButton = ({ children }: PropsWithChildren) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center rounded-full text-sm font-medium h-10 overflow-hidden p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFEF93_0%,#FE9929_50%,#FFEF93_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};
