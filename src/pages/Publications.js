import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const Publications = () => {
  const publications = [
    {
      year: 2021,
      pubs: [
        {
          authors: 'Borowiec, Damian; Harper, R H R; Garraghan, Peter',
          title: 'Environmental Consequence of Deep Learning',
          venue: 'ITNOW, Volume 63, Issue 4, Winter 2021, Pages 10–11',
          link: 'https://eprints.lancs.ac.uk/id/eprint/161289/',
        },
        {
          authors: 'Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter',
          title: 'Horus: Interference-Aware and Prediction-Based Scheduling in Deep Learning Systems',
          venue: 'IEEE Transactions on Parallel and Distributed Systems, 2021, ISSN: 1045-9219',
          link: '10.1109/TPDS.2021.3079202',
        },
        {
          authors: 'Sarkar, Advait; Rintel, Sean; Borowiec, Damian; Bergmann, Rachel; Gillett, Sharon; Bragg, Danielle; Baym, Nancy; Sellen, Abigail',
          title: 'The Promise and Peril of Parallel Chat in Video Meetings for Work',
          venue: 'Conference on Human Factors in Computing Systems Extended Abstracts (CHI 21 Extended Abstracts), 2021.',
          link: 'https://doi.org/10.1145/3411763.3451793',
        },
      ],
    },
    {
      year: 2020,
      pubs: [
        {
          authors: 'Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter',
          title: 'Horus: An Interference-aware Resource Manager for Deep Learning Systems',
          venue: 'Algorithms and Architectures for Parallel Processing. ICA3PP 2020',
          link: 'http://dx.doi.org/10.1007/978-3-030-60239-0_33',
        },
        {
          authors: 'Towards GPU Utilization Prediction for Cloud Deep Learning',
          title: 'Yeung, Gingfung; Borowiec, Damian; Yang, Renyu; Friday, Adrian; Harper, R H R; Garraghan, Peter',
          venue: 'The 12th USENIX Workshop on Hot Topics in Cloud Computing (HotCloud `20)',
          link: 'https://dl.acm.org/doi/10.5555/3485849.3485855',
        },
      ],
    },
  ];
  return (
    <Main
      title="Publications"
      description="Learn about  my publications."
    >
      <article className="post" id="publications">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/publications">Publications</Link></h2>
            <p>A selection of publications that I&apos;m not too ashamed of</p>
          </div>
        </header>
        {publications.map((pub) => (
          <div key={pub.year}>
            <h2>{pub.year}</h2>
            {pub.pubs.map((p) => (
              <div key={p.title}>
                <a href={p.link}>{p.title}</a>
                <br />
                <b>{p.authors}</b>
                <br />
                <i>{p.venue}</i>
                <br />
                <br />
              </div>
            ))}
            <hr />
          </div>
        ))}
      </article>
    </Main>
  );
};

export default Publications;
