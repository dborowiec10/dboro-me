import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-01-30T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Damian Borowiec</h2>
        <p><a href="mailto:dborowiec10@gmail.com">dborowiec10@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Damian. I like Deep Learning and Compilers.
        I am a Lancaster University (UK), BSc graduate and I&apos;m
        currently working towards a PhD in Computer Science (also at Lancaster University).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/timeline') ? <Link to="/timeline" className="button">My Timeline</Link> : <Link to="/" className="button">About Me</Link>}
        </li>
      </ul>
      <p>Current Age: <Age /> years</p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Damian Borowiec <Link to="/">dboro.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
