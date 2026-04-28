const rtf = new Intl.RelativeTimeFormat("es-AR", { numeric: "auto" });

interface DateProps {
  dateTime: string | Date | number;
}

export class Format {
  public static date({ dateTime }: DateProps) {
    const formatDate = new Date(dateTime).toLocaleDateString(
      navigator.language,
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );
    return formatDate;
  }

  public static time({ dateTime }: DateProps) {
    const formatTime = new Date(dateTime).toLocaleTimeString(
      navigator.language,
      {
        hour: "2-digit",
        minute: "2-digit",
      },
    );
    return formatTime;
  }

  public static dateAndTime({ dateTime }: DateProps) {
    const formatDateAndTime = new Date(dateTime).toLocaleDateString(
      navigator.language,
      {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      },
    );
    return formatDateAndTime;
  }

  public static timeAgo(date: string) {
    const diff = new Date(date).getTime() - Date.now();
    const abs = Math.abs(diff);

    if (isNaN(abs)) return;

    const units = [
    { unit: "year", ms: 1000 * 60 * 60 * 24 * 365 },
    { unit: "month", ms: 1000 * 60 * 60 * 24 * 30 },
    { unit: "day", ms: 1000 * 60 * 60 * 24 },
    { unit: "hour", ms: 1000 * 60 * 60 },
    { unit: "minute", ms: 1000 * 60 },
    { unit: "second", ms: 1000 },
  ];

    for (const { unit, ms } of units) {
      const value = Math.round(diff / ms);

      if (abs >= ms || unit === "seconds") {
        return rtf.format(value, unit as Intl.RelativeTimeFormatUnit);
      }
    }
  }
}
