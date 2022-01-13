import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Skillz from '../components/Skills/Skills';
import { skills, categories } from '../data/skills';

const Skills = () => (
  <Main
    title="Skills"
    description="Damian Borowiec Skills"
  >
    <article className="post" id="skills">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/skills">Skills</Link></h2>
          <p>Some things I am decent at</p>
        </div>
      </header>
      <Skillz skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Skills;
