import { Day, getCentralTimeZone, getWeekdateOrdinal, makeDate, Month, Time } from "./time";

interface TimeEventProps {
  year: number | `${number}`;
  month: Month;
  weekdate: number;
  startTime: Time;
  endTime: Time;
}

export class TimeEvent {
  readonly year: number;
  readonly month: Month;
  readonly weekdate: number;
  readonly startTime: Time;
  readonly endTime: Time;

  readonly dateObj: Date;
  readonly timeZone: 'CST' | 'CDT';
  readonly timeRange: `${Time}–${Time}`; // e.g.: '10am–4pm CST`
  readonly weekday: Day;
  readonly weekdateOrdinal: 'st' | 'nd' | 'rd' | 'th';

  constructor({year, month, weekdate, startTime, endTime}: TimeEventProps) {
    this.year = Number(year);
    this.month = month;
    this.weekdate = weekdate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.dateObj = makeDate({year, month, weekdate});
    this.timeZone = getCentralTimeZone(this.dateObj).short;
    this.timeRange = `${startTime}–${endTime}`;
    this.weekday = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(this.dateObj) as Day;
    this.weekdateOrdinal = getWeekdateOrdinal(weekdate);
  }

  // private get startDate() { return makeDate({year: this.year, month: this.month, weekdate: this.weekdate, time: this.startTime}); }
  // private get endDate() { return makeDate({year: this.year, month: this.month, weekdate: this.weekdate, time: this.endTime}); }
}

interface FairTimeEventProps extends TimeEventProps {
  studentLink: string;
  industryLink: string;
  location: string;
}

export class TimeEventWithLinks extends TimeEvent {
  readonly studentLink: string;
  readonly industryLink: string;
  readonly location: string;

  constructor(data: FairTimeEventProps) {
    super(data);
    this.studentLink = data.studentLink;
    this.industryLink = data.industryLink;
    this.location = data.location;
  }
}

export function printEventTimeLong(event: TimeEvent) {
  const {
    weekday,
    month,
    weekdate,
    weekdateOrdinal,
    year,
    timeRange,
    timeZone,
  } = event;

  return (
    <>
      {weekday}, {month} {weekdate}<sup>{weekdateOrdinal}</sup>, {year} from {timeRange} {timeZone}
    </>
  );
}
