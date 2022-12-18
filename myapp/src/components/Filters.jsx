import React, { useContext } from 'react';
import { AppContext } from '../context/AppContextm';
import styles from '../styles/filters.module.css';

const Filters = () => {
  const { setPage, setStatus, setDate, setType } =
    useContext(AppContext);

  return (
    <div className={styles.filters}>
      <h1>Capsules</h1>
      <h2>Filters</h2>
      <div className={styles.filters_div}>
        <div>
          Status :
          <select
            name=""
            id=""
            className={styles.status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="active">Active</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div>
          Type :
          <input
            className={styles.input}
            type="search"
            name=""
            id=""
            placeholder="Search Type.."
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          Launch :
          <input
            onChange={(e) => setDate(e.target.value)}
            className={styles.input_time}
            type="datetime-local"
          />
        </div>
        <div className={styles.button_div}>
          <button
            onClick={() => {
              setStatus('');
              setType('');
              setDate('');
              setPage(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
