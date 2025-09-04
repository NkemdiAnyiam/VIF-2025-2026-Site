import React from 'react';
import { Link } from 'react-router-dom';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

// import { EventBox } from '../../components/EventBox/EventBox';
import { Header } from '../../components/Header/Header';
import { VideoBox } from '../../components/VideoBox/VideoBox';
import { fairTimes, virtualFair, inPersonFair } from '../../data';
import { printEventTimeLong } from '../../utils';

export function HomePage(): JSX.Element {
  return (
    <main className="home-page">
      <SearchEngineOpt
        title={`Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        description="Welcome to the Visualization Industry Fair (VIF), the student-run organization and annual event aimed at guiding students toward successful careers."
      />
      <Header type="landing" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          <span>Welcome to the</span> <span>{fairTimes.yearEnDashRange}</span> <span>VIZ Industry Fair!</span>
        </h1>
        <p className="header__intro-text">
          Viz Industry Fair (VIF) is both an organization and annual event dedicated to career planning and success for students within the new College
          of Performance, Visualization & Fine Arts (PVFA) at Texas A&M University.
        </p>
      </Header>

      <section className="section section--introduction" id="introduction">
        <div className="container">
          <h2 className="heading-secondary">Introduction</h2>
          <VideoBox
            title="Visualization Industry Fair 2024–2025 Trailer"
            videoId="k6dpVnG80NY"
            fixedScale
          />
          <div className="paragraphs">
            <p>
              This event is an opportunity for students and alumni interested in Visualization—which includes Animation, Gaming, Graphics
              and Interactive technologies—to connect with prospective employers working in high-level positions in some of today's leading industries
              and receive professional feedback on their work.
              <strong> The In-Person Fair will be held {printEventTimeLong(inPersonFair)} on {inPersonFair.location}.</strong>
            </p>
            <p>
              Because of continuing concerns with accessibility, we will be holding a Virtual Fair this year as well.
              <strong> The Virtual Fair will take place {printEventTimeLong(virtualFair)} on {virtualFair.location}.</strong>
            </p>
            <p>
              This year, we are inviting former students to participate in both our virtual and in-person events at the same level as our current students,
              so they can continue their journey of lifelong learning and receive advice from our industry representatives.
            </p>
            <p>
              The Viz Industry Fair (VIF) is a student-run organization. These dedicated students, with focuses in Game Development, Animation, and Interactive Media—such as
              UI/UX and web design—reach out to companies, create the Fair content and website, and run the social media campaign of the Fair and other events.
            </p>
            <p>
              Along with this year's fair, The <Link to="/about/vif-committee" className="link">VIF Committee</Link> has also put together several other events throughout the school year.
              These include industry speakers, workshops, portfolio & resume reviews, and mock interviews.
            </p>
          </div>

          <p className="cta-text">
            <span>We look forward to seeing you</span> <span>at our many events and the fair!</span>
          </p>
          <div className="cta-buttons">
            <Link to="/event-information/for-students" className="cta-button cta-button--yellow">Student Information</Link>
            <Link to="/event-information/for-industry" className="cta-button cta-button--red">Industry Information</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
