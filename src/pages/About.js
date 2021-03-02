import React from 'react';

import '../styles/about.css';

export default class About extends React.Component {
  render() {
    return (
      <main className="main-about">
        <div className="about-content">
          <h2>About</h2>
          <div className="about-description">
            <h4>
              Studio Ghibli Movies is an app for the lovers of Studio Ghibli productions.
            </h4>
            <p>
              Here you can search for some informations about Ghibli&apos;s movies like
              release date, director, description and the characters featured in them.
            </p>
            <p>Developed by: Eric Massaki Hirayama</p>
          </div>
        </div>
      </main>
    );
  }
}
