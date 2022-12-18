import { useEffect, useState } from 'react';
import { AppContext } from './AppContext';
import axios from 'axios';

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const getData = async () => {
    try {
      if (status) {
        const res = await axios.get(
          `https://api.spacexdata.com/v3/capsules?offset=${
            (page - 1) * 10
          }&limit=10&status=${status}`
        );
        const data = res.data;
        setData([...data]);
        return;
      }
      if (type) {
        const res = await axios.get(
          `https://api.spacexdata.com/v3/capsules?offset=${
            (page - 1) * 10
          }&limit=10&type=${type}`
        );
        const data = res.data;
        setData([...data]);
        return;
      }
      if (date) {
        const res = await axios.get(
          `https://api.spacexdata.com/v3/capsules?offset=${
            (page - 1) * 10
          }&limit=10&original_launch=${new Date(date).toISOString()}`
        );
        const data = res.data;
        setData([...data]);
        return;
      }
      const res = await axios.get(
        `https://api.spacexdata.com/v3/capsules?offset=${
          (page - 1) * 10
        }&limit=10`
      );
      const data = res.data;
      setData([...data]);
    } catch (err) {
      console.log('err:', err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [page, status, type, date]);

  const value = {
    data,
    setData,
    page,
    setPage,
    status,
    setStatus,
    type,
    setType,
    date,
    setDate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
