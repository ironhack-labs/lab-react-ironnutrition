import React from 'react';
import { useState } from 'react';

export const TodaysFood = () => {
  return (
    <div
      className="column"
      style={{
        backgroundColor: 'lightgreen',
      }}
    >
      <article
        className="message is-link"
        style={{ width: '50%', marginTop: '50px', marginLeft: '5%' }}
      >
        <div className="message-body" style={{ backgroundColor: 'white' }}>
          <h1 style={{ fontSize: '1.2rem' }}>
            <strong>Today's foods</strong>
          </h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </article>
    </div>
  );
};
