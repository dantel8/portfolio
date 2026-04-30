import { useEffect, useState } from "react";

const DEFAULT_WORK_TIME_ZONE = "America/Argentina/Buenos_Aires";

const getTimeZoneOffsetMinutes = (date: Date, timeZone: string) => {
  const dateParts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const lookup = Object.fromEntries(dateParts.map((part) => [part.type, part.value]));
  const asUTC = Date.UTC(
    Number(lookup.year),
    Number(lookup.month) - 1,
    Number(lookup.day),
    Number(lookup.hour),
    Number(lookup.minute),
    Number(lookup.second)
  );

  return (asUTC - date.getTime()) / 60000;
};

const getZonedDateParts = (date: Date, timeZone: string) => {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    year: Number(lookup.year),
    month: Number(lookup.month),
    day: Number(lookup.day),
  };
};

const makeZonedDate = (
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timeZone: string
) => {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second);
  const offsetMinutes = getTimeZoneOffsetMinutes(new Date(utcGuess), timeZone);
  return new Date(utcGuess - offsetMinutes * 60_000);
};

const formatTimeInZone = (date: Date, timeZone: string) =>
  new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
  }).format(date);

interface UseAvailabilityScheduleOptions {
  workStartHour?: number;
  workEndHour?: number;
  workTimeZone?: string;
  refreshIntervalMs?: number;
}

export function useAvailabilitySchedule({
  workStartHour = 9,
  workEndHour = 18,
  workTimeZone = DEFAULT_WORK_TIME_ZONE,
  refreshIntervalMs = 60_000,
}: UseAvailabilityScheduleOptions = {}) {
  const [availabilityText, setAvailabilityText] = useState("");

  useEffect(() => {
    const updateAvailabilityText = () => {
      const visitorTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const todayInWorkTimeZone = getZonedDateParts(new Date(), workTimeZone);

      const workStart = makeZonedDate(
        todayInWorkTimeZone.year,
        todayInWorkTimeZone.month,
        todayInWorkTimeZone.day,
        workStartHour,
        0,
        0,
        workTimeZone
      );
      const workEnd = makeZonedDate(
        todayInWorkTimeZone.year,
        todayInWorkTimeZone.month,
        todayInWorkTimeZone.day,
        workEndHour,
        0,
        0,
        workTimeZone
      );

      const startInVisitorZone = formatTimeInZone(workStart, visitorTimeZone);
      const endInVisitorZone = formatTimeInZone(workEnd, visitorTimeZone);

      setAvailabilityText(`Disponible en tu zona: ${startInVisitorZone} - ${endInVisitorZone}`);
    };

    updateAvailabilityText();
    const intervalId = window.setInterval(updateAvailabilityText, refreshIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [workEndHour, workStartHour, workTimeZone, refreshIntervalMs]);

  return { availabilityText };
}