import { useId } from "react";

const GRADIENT_VALUES = {
  x1: "79",
  y1: "16",
  x2: "105",
  y2: "237",
};

const INVERTED_GRADIENT_VALUES = {
  x2: "79",
  y2: "16",
  x1: "105",
  y1: "237",
};

export const CircleBackground = ({
  color,
  isInverted = false,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & {
  color: string;
  isInverted?: boolean;
}) => {
  const id = useId();

  return (
    <svg
      viewBox="0 0 558 558"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          {...(isInverted ? INVERTED_GRADIENT_VALUES : GRADIENT_VALUES)}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
        stroke={color}
      />
      <path
        d="M1 279C1 125.465 125.465 1 279 1"
        stroke={`url(#${id})`}
        strokeLinecap="round"
      />
    </svg>
  );
};
