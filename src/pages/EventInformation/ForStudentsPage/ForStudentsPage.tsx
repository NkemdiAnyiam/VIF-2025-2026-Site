import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../../components/Header/Header';
import { Event } from '../../../components/Event/Event';
import { EventBox } from '../../../components/EventBox/EventBox';
import { pastCompanies } from '../../../data/companies';
import { alumniMixer, fairTimes, inPersonFair, mockInterviews, portfolioReviews, professionalismWorkshops, virtualFair } from '../../../data';
import { printEventTimeLong, TimeEvent } from '../../../utils/events';
import { Notice } from '../../../components/Notice/Notice';

const listWorkshopData = (workshop: TimeEvent): JSX.Element => {
  return (
  <li key={`${workshop.month} ${workshop.weekdate} ${workshop.timeRange}`}>
    {workshop.weekday}, {workshop.month} {workshop.weekdate}<sup>{workshop.weekdateOrdinal}</sup>, {workshop.timeRange} {workshop.timeZone}
  </li>);
};

const renderPastCompanies = (companies: string[]) => {
  return companies.map((companyName) => {
    return (
      <li key={companyName} className="past-company-item">
        <div className="past-company-box">
          <p>{companyName}</p>
        </div>
      </li>
    )
  });
};

export function ForStudentsPage(): JSX.Element {
  return (
    <main className="for-students-page">
      <SearchEngineOpt
        title={`For Students | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        description="Students will find important information about the Viz Industry Fair, including registration forms for the fair and other events."
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          For Students
        </h1>
      </Header>

      <section className="section section--welcome-students" id="students-welcome">
        <div className="container">
          <h2 className="heading-secondary">
            Welcome, Vizzers!
          </h2>

          <div className="paragraphs">
            <p>
              The Visualization Industry Fair (VIF) is an opportunity for students interested in Animation, Gaming, Graphics,
              and Interactive technologies to connect with prospective employers working in high level positions
              in some of today's leading industries and receive professional feedback on their work.
              <strong> The Virtual Fair will be held {printEventTimeLong(virtualFair)} on {virtualFair.location}.</strong>
              <strong> The In-Person Fair will be held {printEventTimeLong(inPersonFair)} on {inPersonFair.location}.</strong>
            </p>

            <p className="no-gap">
              <strong>Before you register for the Fair, </strong>please <a href={professionalismWorkshops.link} className="link" target="_blank" rel="noreferrer">register for our new Professionalism Workshop</a>!
              This workshop serves as an informational for the VIF events and teaches you best practices for communicating with industry professionals.
              To uphold the professional standards of Texas A&M University, current students are <strong>required</strong> to
              attend one of the three professionalism workshops before attending the industry fair or any other VIF event.
              Current students who attempt to register for an event without first attending a workshop day will be removed from the registration list.
              Former students are not required to attend a workshop, but it is encouraged!
              The workshops will be held on the following dates:
            </p>

            <ul className="no-gap">
              <li>
                <strong>Fall 2024</strong>
                <ul>
                  {professionalismWorkshops.fall.map(workshop => listWorkshopData(workshop))}
                </ul>
              </li>
              <li>
                <strong className="strike-through">Spring 2025</strong>
                <ul className="strike-through">
                  {professionalismWorkshops.spring.map(workshop => listWorkshopData(workshop))}
                </ul>
                <Notice>
                  <div>
                    The spring professionalism workshops have been cancelled. Please view these recordings from the fall workshops to prepare for the Fair! 
                    If you did not attend the workshop in the fall, your attendance will not be affected.
                    <ul>
                      <li>
                        <a
                          href="https://drive.google.com/file/d/1Qk29Go8oqydcWS7ZOMm4Xn3UA5Jjw9js/view?usp=drive_link"
                          className="link link--lighter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Please view the recordings here
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.google.com/presentation/d/1DVlTay_P9ORjr3p8fLfBC3TejvYH9bju/edit?usp=drive_link&ouid=102154056541970998723&rtpof=true&sd=true"
                          className="link link--lighter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Please view the slides here
                        </a>
                      </li>
                    </ul>
                  </div>
                </Notice>
              </li>
            </ul>
            
            <p>
              If you cannot attend one of the workshop dates, please contact a committee member
              or email us at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> so
              we can send you the information and add you to our exceptions list.
            </p>

            <p className="no-gap">
              To register for the fair itself, you will need a downloadable version of your resume and a link to your portfolio website.
            </p>
            <p className="no-gap">
              Please <a href={virtualFair.studentLink} className="link" target="_blank" rel="noreferrer">register for the Virtual Fair here</a>.
            </p>
            <p>
              Please <a href={inPersonFair.studentLink} className="link" target="_blank" rel="noreferrer">register for the In-Person Fair here</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--events section--additional-events" id="additional-events">
        <div className="container">
          <h2 className="heading-secondary">Additional Events</h2>
          <div className="paragraphs">
            <p>
              In addition to our annual Visualization Industry Fair, VIF also hosts portfolio reviews, mock interviews, and our alumni mixer!
              Below are the dates and registration forms for these events. Instructions on how to participate are in the registration forms.
              We hope to see you there!
            </p>
          </div>
          
          <div className="events">
            <Event
              eventName="Virtual Portfolio Reviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink={portfolioReviews.fall.studentLink}
                  events={portfolioReviews.fall.events}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={portfolioReviews.spring.studentLink}
                  events={portfolioReviews.spring.events}
                />
              ]}
            />

            <Event
              eventName="Virtual Mock Interviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink={mockInterviews.fall.studentLink}
                  events={mockInterviews.fall.events}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={mockInterviews.spring.studentLink}
                  events={mockInterviews.spring.events}
                />
              ]}
            />

            <Event
              eventName="Alumni Mixer"
            >
              <Notice>
                Due to logistical issues, we unfortunately need to cancel the Alumni Mixer.
                Stay tuned for a new date announcement for next semester!
                We appreciate your understanding and look forward to seeing you soon.
              </Notice>
              <div className="paragraphs">
                <p>
                  Our Alumni Mixer is a new event on <strong className="strike-through">{printEventTimeLong(alumniMixer)}. </strong>
                  It is an opportunity for current students to network with former students within and outside of the industry,
                  allowing them to network in a casual setting and introduce new faces into the Viz Aggie Network community.
                  <strong> All participants must RSVP in order to attend.</strong>
                </p>

                <div className="photo-and-paragraph">
                  <p>
                    Once we have secured a venue for this event, an announcement email will be sent out with more details,
                    and an update will be posted here on our website. VIF will be catering a fixed menu and non-alcoholic beverages.
                    Expenses such as parking and alcoholic beverages will not be covered by VIF. <a href={alumniMixer.studentLink} className="link strike-through" target="_blank" rel="noreferrer">Register for the event here</a>.
                  </p>

                  <picture className="building-photo-picture">
                    <source srcSet={require(`../../../images/misc/alumni-mixer-photo-min.webp`)} type="image/webp" />
                    <source srcSet={require(`../../../images/misc/alumni-mixer-photo-min.jpg`)} type="image/jpeg" />
                    <img src={require(`../../../images/misc/alumni-mixer-photo-min.jpg`)} alt={`Alumni Mixer`} className="building-photo-img" />
                  </picture>
                </div>
              </div>
            </Event>
          </div>
        </div>
      </section>

      <section className="section section--past-companies" id="past-companies">
        <div className="container">
          <h2 className="heading-secondary">Past Companies</h2>
          <div className="paragraphs">
            <p>
              Past fairs have included some of the following companies:
            </p>
          </div>
          <ul className="past-company-list">
            {renderPastCompanies(pastCompanies)}
          </ul>
        </div>
      </section>
    </main>
  );
}
