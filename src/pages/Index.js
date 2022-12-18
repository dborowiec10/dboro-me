import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
// import raw from 'raw.macro';
import Main from '../layouts/Main';
import 'react-vertical-timeline-component/style.min.css';

// // uses babel to load contents of file
// const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description="Damian Borowiec - personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
        </div>
      </header>

      <main>
      I am a passionate and motivated soon-to-be PhD Laureate in Computer Science, focusing on Adaptive and Energy-aware systems for Deep Learning (DL). My research revolves around optimizations of performance and energy consumption in DL frameworks and compilers such as TVM, as well as resource management for Deep Learning in compute clusters. I have experience in full-stack software development both in teams and freelance, using a range of languages and technologies, including several projects for clients such as Siemens UK/National Rail, where I have built bespoke full-stack solutions starting at back-end storage design, automatic AI/Deep Learning-based predictions and insights, performance optimization, network connectivity and front-end visualisation. My strongest expertise revolves around high-performance integration of various technologies at different levels of the stack to achieve tight cost/time constraints.


      </main>

      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
    </article>

  </Main>
);

export default Index;
