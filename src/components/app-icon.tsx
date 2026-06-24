"use client";

import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

type AppIconProps = Omit<HugeiconsIconProps, "color"> & {
  color?: string;
};

export function AppIcon({
  color = "currentColor",
  strokeWidth = 1.8,
  ...props
}: AppIconProps) {
  return <HugeiconsIcon color={color} strokeWidth={strokeWidth} {...props} />;
}
