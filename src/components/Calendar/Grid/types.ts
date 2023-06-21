import { Days } from "@/utils/dates";

export type GridProps = {
  days: Days;
  zoom: number;
  rows: number;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
