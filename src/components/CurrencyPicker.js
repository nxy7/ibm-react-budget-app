import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export const CurrencyPicker = (props) => {
  const { currency, dispatch } = useContext(AppContext);
  
  return (
    <select style={{
      width: '100%',
      height: "50%",
      backgroundColor: "green",
      borderRadius: "5px",
      color: "white",
      fontWeight: 700,
      fontSize: "30px"
    }} onChange={(e) => {
        switch (e.target.value) {
          case 'p':
            dispatch({type: "CHG_CURRENCY", payload: "£"})
            break
          case 'd':
            dispatch({type: "CHG_CURRENCY", payload: "$"})
            break
          case 'e':
            dispatch({type: "CHG_CURRENCY", payload: "€"})
            break
          case 'r':
            dispatch({type: "CHG_CURRENCY", payload: "₹"})
            break
      }
      }}>
        <option value="p">Pound</option>
        <option value="d">Dollar</option>
        <option value="e">Euro</option>
        <option value="r">Rupee</option>

    </select>
  )
}
