import { Day } from "@/types/global";
import { canvasWrapperId } from "@/constants";
import { Theme } from "@/styles";
import { drawMonthlyView } from "./drawMonthlyView";
import { drawYearlyView } from "./drawYearlyView";

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  rows: number,
  cols: number,
  parsedStartDate: Day,
  theme: Theme
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const canvasWrapper = document.getElementById(canvasWrapperId);
  if (!canvasWrapper) return;

  if (zoom === 1) {
    drawMonthlyView(ctx, rows, cols, parsedStartDate, theme);
  } else {
    drawYearlyView(ctx, rows, cols, parsedStartDate, theme);
  }
};
