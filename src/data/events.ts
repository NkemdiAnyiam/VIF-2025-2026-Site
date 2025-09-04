import { TimeEventWithLinks, TimeEvent } from "../utils/events";

export const virtualFair = new TimeEventWithLinks({
  year: 2025,
  month: 'February',
  weekdate: 20,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc3fUZpRlQ6cb70fEC-5DQzMclIu9UIV3qOd-aIdMGwq3BjOw/viewform?usp=sf_link',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9py6MJjTf5IecnIta7BFZaSo7mm1YwfEFc5OYmSsYAkENeQ/viewform?usp=sf_link',
  location: 'Discord',
});

export const inPersonFair = new TimeEventWithLinks({
  year: 2025,
  month: 'February',
  weekdate: 21,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLScSyjIGDruxEXK9J5VTcyX2cs0AtWVAkAZaIEWcIUjWwl4t4g/viewform?usp=sf_link',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9py6MJjTf5IecnIta7BFZaSo7mm1YwfEFc5OYmSsYAkENeQ/viewform?usp=sf_link',
  location: 'the TAMU campus (Location To Be Determined)',
});

export const fairTimes = {
  yearStart: 2024,
  yearEnd: 2025,
  get yearEnDashRange() { return `${this.yearStart}–${String(this.yearEnd).substring(2)}`; },
};

export const professionalismWorkshops = {
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSd-ZnN9_EDIkmejamRJdxBVMqe1ZrBzQgdm11KH4HRqGV44-w/viewform?usp=sf_link',

  fall: [
    new TimeEvent({ year: 2024, month: 'September', weekdate: 24, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2024, month: 'September', weekdate: 25, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2024, month: 'September', weekdate: 27, startTime: '3pm', endTime: '5pm' }),
  ],

  spring: [
    new TimeEvent({ year: 2025, month: 'January', weekdate: 14, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2025, month: 'January', weekdate: 15, startTime: '10am', endTime: '12pm' }),
    new TimeEvent({ year: 2025, month: 'January', weekdate: 17, startTime: '3pm', endTime: '5pm' }),
  ]
};

export const alumniMixer = new TimeEventWithLinks({
  year: 2024,
  month: 'November',
  weekdate: 16,
  startTime: '7pm',
  endTime: '10pm',
  // studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdyRn-3dVB9q_1qfkP2MTx3cjOKjHkQRONqQwFFUQvwUhjoEQ/viewform?usp=sf_link',
  // industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdyRn-3dVB9q_1qfkP2MTx3cjOKjHkQRONqQwFFUQvwUhjoEQ/viewform?usp=sf_link',
  studentLink: '#',
  industryLink: '#',
  location: 'TBD',
});

export const portfolioReviews = {
  fall: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSf7nnaYybNwZOKcpEiMSdKaqul86TqGAwHhvwsDaUV4nVZv9Q/viewform?usp=sf_link`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSfNS-ZJFzCvcigJAELoKFY34j_i9ZzIRivrmR8J1JUsgQNQrQ/viewform?usp=sf_link`,
    events: [
      new TimeEvent({ year: 2024, month: 'October', weekdate: 18, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2024, month: 'October', weekdate: 19, startTime: '10am', endTime: '4pm' }),
    ]
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSer6Vvt7GMlDyuiJZpm3DGcNmCRmZY9mZo1mMWG2w_lmlV7Aw/viewform?usp=sf_link`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSd1mOyhl7UGzctZqxngIk16Bm_eeoyZQrq2hMJk-YnvZbcK5w/viewform?usp=sf_link`,
    events: [
      new TimeEvent({ year: 2025, month: 'January', weekdate: 24, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2025, month: 'January', weekdate: 25, startTime: '10am', endTime: '4pm' }),
    ]
  },
};

export const mockInterviews = {
  fall: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLScv0r3HDa4H61GPp8aigegVrpgSCFUy62Z2TJlG1dwdAVZV0w/viewform?usp=sf_link`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSflSAGSoFqtyLXA7ZwJpHv_TibVa7IE5whkKU16ipSqTvp0iQ/viewform?usp=sf_link`,
    events: [
      new TimeEvent({ year: 2024, month: 'November', weekdate: 8, startTime: '10am', endTime: '4pm' }),
    ],
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSdVzGMG3G4I9buRM4bO8UTjeq_QhYlFa0KloeHkvPQNIviw1A/viewform?usp=sf_link`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSfVjJZ7Wsu8FoHDF6c1aGHvlL2oqI7pIeWgX9X4L0JTX5wbKg/viewform?usp=sf_link`,
    events: [
      new TimeEvent({ year: 2025, month: 'February', weekdate: 7, startTime: '10am', endTime: '4pm' }),
    ],
  },
};
