import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import VerticalTimeline from '../components/Timeline/VerticalTimeline';
import VerticalTimelineElement from '../components/Timeline/VerticalTimelineElement';

import Main from '../layouts/Main';
import activities from '../data/activities';


const types = {
  all: ['', 'All'],
  employment: ['blue', 'Employment'],
  education: ['green', 'Education'],
  achievement: ['gold', 'Achievements'],
  life_event: ['brown', 'Life Events'],
  project: ['pink', 'Projects'],
};

const Timeline = () => {
  const [currentType, setCurrentType] = useState('all');

  return (
    <Main
      title="Timeline"
      description="Damian Borowiec Resume Timeline"
    >
      <article className="post" id="timeline">
        <header>
          <div className="title">
            <h2 data-testid="heading">
              <Link to="timeline">Timeline</Link>
            </h2>
          </div>
        </header>
        <div className="link-container">
          {Object.keys(types).map((sec) => (
            <button key={uuid()} className="button" style={{ margin: '2px', borderTop: `5px solid ${types[sec][0]}` }} type="button" onClick={() => setCurrentType(sec)}>{types[sec][1]}</button>
          ))}
        </div>
      </article>
      <VerticalTimeline>
        {activities.map((act) => (
          (currentType === act.type || currentType === 'all') && (
            <VerticalTimelineElement
              key={uuid()}
              contentArrowStyle={{ borderRight: '7px solid  #b5121b' }}
              headerStyle={{ backgroundColor: types[act.type][0] }}
              date={act.date}
              icon={act.icon}
            >
              <h3 className="vertical-timeline-element-title">{act.title}</h3>
              <h6 className="vertical-timeline-element-subtitle">{act.subtitle}</h6>
              <div>
                {act.content_paragraphs.map((par) => (
                  <div className="contentParagraph" key={uuid()}>{par} <br /></div>
                ))}
              </div>
            </VerticalTimelineElement>
          )))}
      </VerticalTimeline>
    </Main>
  );
};

export default Timeline;
