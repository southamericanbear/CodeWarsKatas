function scheduleMeeting(startTime: string, meetingDuration: number): boolean {
  const dayStart = "07:30";
  const dayEnd = "17:45";

  if (startTime > dayEnd || startTime < dayStart) {
    return false;
  } else {
    let [hours, minutes] = startTime.split(":").map((number) => Number(number));

    minutes += meetingDuration;

    while (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    hours %= 24;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    const endMeetingTime = `${formattedHours}:${formattedMinutes}`;

    if (endMeetingTime > dayEnd || endMeetingTime < startTime) {
      return false;
    } else {
      return true;
    }
  }
}

scheduleMeeting("10:00", 20);
