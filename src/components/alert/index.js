import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import Alert from '@mui/material/Alert';
import { Wrapper } from './wrapper';

const AlertArea = () =>{
  const { alerts } = useSelector(state => state.notifications);
  const [alert, setAlert] = useState({ type: "", message: "", timeOut: 4000 });
  const {type, message, timeOut} = alert
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, timeOut);
    }
  }, [alerts]);

  return show && (
    <Wrapper>
      <Alert severity={type}>{message}</Alert>
    </Wrapper>

  )
}

export default AlertArea;
