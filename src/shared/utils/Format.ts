interface DateProps {
  dateTime: string | Date | number;
}

export class Format {
  public static date({ dateTime }: DateProps) {
    const formatDate = new Date(dateTime).toLocaleDateString(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formatDate;
  }

  public static time({ dateTime }: DateProps) {
    const formatTime = new Date(dateTime).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    });
    return formatTime;
  }

  public static dateAndTime({ dateTime }: DateProps) {
    const formatDateAndTime = new Date(dateTime).toLocaleDateString(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return formatDateAndTime;
  }
}
