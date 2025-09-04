import { TimeEventWithLinks, TimeEvent } from "../utils/events";

export const virtualFair = new TimeEventWithLinks({
  year: 2026,
  month: 'February',
  weekdate: 19,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdLn50QRleiRPiihhRnyQfwermXe0bl19i8UFJfcpbLu0uF7Q/viewform?usp=dialog',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdqmJc_Cc5NRitKg2Uh-ylhUyaLYQ8MOCUnowrKAL6A4xZAXw/viewform?usp=dialog',
  location: 'Discord (register for more details)',
});

export const inPersonFair = new TimeEventWithLinks({
  year: 2026,
  month: 'February',
  weekdate: 21,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://forms.gle/Ycs1E51te6ngWS7Y9',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdqmJc_Cc5NRitKg2Uh-ylhUyaLYQ8MOCUnowrKAL6A4xZAXw/viewform?usp=dialog',
  location: 'the TAMU campus (Location To Be Determined)',
});

export const fairTimes = {
  yearStart: 2025,
  yearEnd: 2026,
  get yearEnDashRange() { return `${this.yearStart}–${String(this.yearEnd).substring(2)}`; },
};

export const professionalismWorkshops = {
  fallLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeAjNOdMDQEf70mHgucQqP77QBE3Hosry94HKUjbWS8URRN2A/viewform?usp=dialog',
  springLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6o45pXKln5V4Sk8GHsA0lFnibxUsu_5Px1pUCD_MswbkLnA/viewform?usp=dialog',

  fall: [
    new TimeEvent({ year: 2025, month: 'September', weekdate: 23, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2025, month: 'September', weekdate: 24, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2025, month: 'September', weekdate: 26, startTime: '3pm', endTime: '5pm' }),
  ],

  spring: [
    new TimeEvent({ year: 2026, month: 'January', weekdate: 13, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2026, month: 'January', weekdate: 14, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2026, month: 'January', weekdate: 16, startTime: '3pm', endTime: '5pm' }),
  ]
};

// TODO: change
export const alumniMixer = new TimeEventWithLinks({
  year: 1999,
  month: 'November',
  weekdate: 1,
  startTime: '1pm',
  endTime: '2pm',
  studentLink: '#',
  industryLink: '#',
  location: 'TBD',
});

export const portfolioReviews = {
  fall: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSfAeNdf3bE3Vq6t__D9vZXutKZImK4eEf4lnVtkoIOKLgO7tw/viewform?usp=dialog`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLScPY_kMZ6CHcMXwvn6HSiDDOxqtsiRO8OAvt83vj-IGhBWOGA/viewform?usp=dialog`,
    events: [
      new TimeEvent({ year: 2025, month: 'October', weekdate: 17, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2025, month: 'October', weekdate: 18, startTime: '10am', endTime: '4pm' }),
    ]
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSeFNRgsp-l8auT_DPu-O-9aKqO7FoPbp4yFcx256cRUaGHGYA/viewform?usp=dialog`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSc4UxS6RRwHNyYTHHejFFB8TJIwqL9P38fsip2UI7dy8KLmGQ/viewform?usp=dialog`,
    events: [
      new TimeEvent({ year: 2026, month: 'January', weekdate: 24, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2026, month: 'January', weekdate: 25, startTime: '10am', endTime: '4pm' }),
    ]
  },
};

export const mockInterviews = {
  fall: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSfmtFh3tZtcInAVJHUCXtxGpZ9Ij74I_aWB4cXisRiDBnbelg/viewform?usp=dialog`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLScC5ZcwFcsMHRlMcoCEB8xvb8SgdQr7tSyZJ8WmjpVejmtXrA/viewform?usp=dialog`,
    events: [
      new TimeEvent({ year: 2025, month: 'November', weekdate: 7, startTime: '10am', endTime: '4pm' }),
    ],
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSeCc51N3Kms7rslp3sP7TxPGO0jCqO5YDx9BkZZH-R3IWp6uA/viewform?usp=dialog`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLScHmaBOggcA-fITX3dLc0-cwaKuchmUyjqfqm8SYPZnhhD8fw/viewform?usp=dialog`,
    events: [
      new TimeEvent({ year: 2026, month: 'February', weekdate: 6, startTime: '10am', endTime: '4pm' }),
    ],
  },
};
