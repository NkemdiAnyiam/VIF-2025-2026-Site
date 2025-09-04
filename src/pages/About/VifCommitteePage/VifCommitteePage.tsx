import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { CommitteeBlock, CommitteeBlockProps } from './CommitteeBlock/CommitteeBlock';
import { Header } from '../../../components/Header/Header';
import { committeeMembersData } from '../../../data/committee';
import { fairTimes } from '../../../data';

const renderVifCommBlocks = (items: CommitteeBlockProps[]) => {
  return [...items]
    .sort(({rank: rankA, fullName: fullNameA}, {rank: rankB, fullName: fullNameB}) => {
      if (rankA !== rankB) {
        return rankA - rankB;
      }
      const lastNameA = fullNameA.split(' ').at(-1)!;
      const lastNameB = fullNameB.split(' ').at(-1)!;
      return lastNameA.localeCompare(lastNameB);
    })
    .map((data, index) => {
      return (
        <li className="committee-item" key={`${data.fullName} ${data.role}`}>
          <CommitteeBlock {...data} />
        </li>
      );
    });
};

export function VifCommitteePage(): JSX.Element {
  return (
    <main className="vif-committee-page">
      <SearchEngineOpt
        title={`VIF Committee | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
        description="Introducing the VIF committee, our dedicated students and faculty who help make the Visualization Industry Fair possible!"
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          VIF Committee
        </h1>
      </Header>

      <section className="section section--vif-committee-members" id="vif-committee-members">
        <div className="container">
          <h2 className="heading-secondary">Team Leads</h2>
          <ul className="committee-list">
            {renderVifCommBlocks(committeeMembersData)}
          </ul>
        </div>
      </section>
    </main>
  );
}
