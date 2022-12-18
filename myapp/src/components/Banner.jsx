import React from 'react';
import styles from '../styles/banner.module.css';

const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <div>
          <div className={styles.text}>
            <p>
              Hello! <p>I'm Universe</p>
            </p>
            <p>
              The Universe is everything we can
              <p> touch, feel, sense, measure or detect.</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
