import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { PictureSquare } from '../../../components/PictureSquare/PictureSquare';
import { VideoBox } from '../../../components/VideoBox/VideoBox';
import { Header } from '../../../components/Header/Header';
import { fairTimes } from '../../../data';

export function AboutVizPage(): JSX.Element {
  return (
    <main className="about-viz-page">
      <SearchEngineOpt
        title={`About Viz | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        description="Learn about the internationally recognized Visualization program, which has helped develop artists who have ventured into creative and technical fields."
      />
      
      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          About Viz
        </h1>
      </Header>

      <section className="section section--development" id="development">
        <div className="container">
          <h2 className="heading-secondary">Development</h2>
          <div className="paragraphs">
            <p>
              The Texas A&M University Visualization Laboratory was established in 1988. The academic program started one year later.
              The Visualization Laboratory and Visualization academic program were created in response to clear indications
              that digital visualization was going to play a highly important role in digital communication.
              The visualization academic programs produce leaders in the fields where art and science merge.
            </p>
            <p>
              Our program has helped develop artists who have gone into fields such as Game Art, Game Design, Technical Art, Animation,
              Surfacing, Production, Tool Development, Rigging, UI/UX, Interactive Design, Graphic Design, AR and VR, Visual Computing, and more.
              Our program also sponsors the <a href="http://chillennium.com/" className="link" target="_blank" rel="noreferrer">international game jam Chillennium</a> at
              Texas A&M University, which is the largest student run game jam in the world.
            </p>
            <p>
              Since our establishment, the Visualization program has expanded to international recognition, and it most recently transitioned
              into the new College of Performance, Visualization & Fine Arts (PVFA). With the development of the new school,
              we look forward to welcoming new students and ushering in future generations of leaders in the fields of art and science.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--programs" id="programs">
        <div className="container">
          <h2 className="heading-secondary">Programs</h2>
          <div className="paragraphs">
            <p>Our programs include the following</p>
          </div>
          <ul className="programs__list">
            <li className="programs__item">
              <PictureSquare
                text="Minor in Game Design and Development"
                imageName={'game-design-and-development-min'}
                color='purple'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Bachelor of Science in Visualization"
                imageName={'bachelor-of-science-visualization-min'}
                color='green'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Master of Science in Visualization"
                imageName={'master-of-science-visualization-min'}
                color='yellow'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Master of Fine Arts in Visualization"
                imageName={'master-of-fine-arts-visualization-min'}
                color='yellow'
              />
            </li>

            <li className="programs__item">
              <PictureSquare
                text="Ph.D. in Architecture"
                imageName={'phd-architecture-min'}
                color='red'
              />
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--sizzle-reels" id="sizzle-reels">
        <div className="container">
          <h2 className="heading-secondary">Viz Sizzle Reels</h2>
          <div className="paragraphs">
            <p>If you would like to check out our students work, below are our 2021 department reels</p>
          </div>
          <ul className="video-list">
            <li className="video-item">
              <VideoBox
                title="Visualization Animation Sizzle Reel 23-24"
                videoId="ojG9NL-CG1I"
                includeCaption
              />
            </li>
            <li className="video-item">
              <VideoBox
                title="TAMU Best of Visualization - UI/UX and Graphic Design"
                videoId="0kxrir2IMGE"
                includeCaption
              />
            </li>
            <li className="video-item">
              <VideoBox
                title="TAMU Best of Visualization - Game Development"
                videoId="1JO_ck6B2QI"
                includeCaption
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
