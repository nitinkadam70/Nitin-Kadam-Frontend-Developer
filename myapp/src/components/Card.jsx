import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import styles from '../styles/card.module.css';

const Card = ({ el }) => {
  const [model, setModel] = useState(false);

  const modelRef = useRef();

  window.onclick = function (event) {
    if (event.target === modelRef.current) {
      setModel(false);
    }
  };

  return model ? (
    <div ref={modelRef} className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <span
            className={styles.close}
            onClick={() => setModel(false)}
          >
            &times;
          </span>
          <h2>{el.capsule_serial}</h2>
        </div>
        <div className={styles.modal_body}>
          <p>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {el.capsule_id}</p>
          <p>Details : {el.details}</p>
          <p>Status &nbsp;: {el.status}</p>
          <p>
            Launch &nbsp;: {new Date(el.original_launch).toString()}
          </p>
          <p>Type &nbsp;&nbsp;&nbsp;: {el.type}</p>
          <p>
            Missions:
            <span>
              {el.missions &&
                el.missions.map((elm) => {
                  return (
                    <div
                      className={styles.missions}
                      key={elm.name + Math.random()}
                    >
                      <p>Name : {elm.name}</p>
                      <p>Flight : {elm.flight}</p>
                    </div>
                  );
                })}
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.card} onClick={() => setModel(true)}>
      <div>
        Serial :&nbsp;
        <span className={styles.serial}>{el.capsule_serial} </span>
      </div>
      <div>
        ID &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
        <span className={styles.serial}>{el.capsule_id} </span>
      </div>
      <div>
        Launch :&nbsp;
        <span className={styles.serial}>
          {new Date(el.original_launch).toString().slice(0, 15)}
        </span>
      </div>
      <div>
        Status :&nbsp;
        <span className={styles.serial}>{el.status}</span>
      </div>
      <div>
        Type &nbsp;&nbsp;:&nbsp;
        <span className={styles.serial}>{el.type}</span>
      </div>
    </div>
  );
};

export default React.memo(Card);
