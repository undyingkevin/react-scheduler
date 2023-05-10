import { useContext, useEffect, useState } from "react";
import { ZoomLevel, allZoomLevel } from "@/types/global";
import { isAvailableZoom } from "@/types/guards";
import { calendarContext } from "./calendarContext";
import { CalendarProviderProps } from "./types";

const CalendarProvider = ({ children, config, onRangeChange }: CalendarProviderProps) => {
  const [zoom, setZoom] = useState<ZoomLevel>(config.zoom);
  const isNextZoom = allZoomLevel[zoom] !== allZoomLevel[allZoomLevel.length - 1];
  const isPrevZoom = zoom !== 0;

  useEffect(() => {
    onRangeChange();
  }, [onRangeChange, zoom]);

  const handleGoNext = () => {
    console.log("Handle next");
    onRangeChange();
  };

  const handleGoPrev = () => {
    console.log("Handle prev");
    onRangeChange();
  };

  const handleGoToday = () => {
    console.log("Handle go today");
    onRangeChange();
  };

  const zoomIn = () => {
    const nextZoom = zoom + 1;
    changeZoom(nextZoom as ZoomLevel);
  };

  const zoomOut = () => {
    const prevZoom = zoom - 1;
    changeZoom(prevZoom as ZoomLevel);
  };

  const changeZoom = (zoomLevel: ZoomLevel) => {
    if (!isAvailableZoom(zoomLevel)) return;
    setZoom(zoomLevel);
  };

  const { Provider } = calendarContext;

  return (
    <Provider
      value={{
        handleGoNext,
        handleGoPrev,
        handleGoToday,
        zoomIn,
        zoomOut,
        zoom,
        isNextZoom,
        isPrevZoom
      }}>
      {children}
    </Provider>
  );
};

const useCalendar = () => useContext(calendarContext);

export default CalendarProvider;
export { useCalendar };
