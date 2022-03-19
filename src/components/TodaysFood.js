import React from 'react';
import { useState } from 'react';

export const TodaysFood = () => {
  return (
    <div className="column" style={{ backgroundColor: 'lightgreen' }}>
      <article
        className="message is-link"
        style={{ width: '50%', marginTop: '50px', marginLeft: '5%' }}
      >
        <div className="message-body">
          <h1 style={{ fontSize: '1rem' }}>
            <strong>Today's foods:</strong>
          </h1>
        </div>
      </article>
    </div>
  );
};
