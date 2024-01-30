import { useState, useEffect } from "react";

export const Counter = ({ initialValue, setState, id, totalPartySize, setTotalPartySize, max, min, adultCount, setAdultCount}) => {
    const [disabled, setDisabled] = useState(true);
    const [addDisabled, setAddDisabled] = useState(false);
  
  useEffect(()=>{
    
    if(id === "Party Size List Adults Counter" && initialValue >= min ||
    id === "Party Size List Adults Counter" && totalPartySize >= min ||
    id !== "Party Size List Adults Counter" && initialValue  > 0){
      setDisabled(false);
    }
  
    if(id !== "Party Size List Adults Counter" && initialValue  === 0 ||
    id === "Party Size List Seniors Counter" && totalPartySize === 1  && initialValue === 1||
    id === "Party Size List Adults Counter" && totalPartySize === min || 
    id === "Party Size List Adults Counter" && initialValue === 0 ||
    id === "Party Size List Seniors Counter" && totalPartySize === min ||
    totalPartySize === min ||
    id === "Party Size List Adults Counter" && adultCount === 1 || 
    id === "Party Size List Seniors Counter" && adultCount === 1){
      setDisabled(true);
    }
   
    if(totalPartySize === max){
      setAddDisabled(true);
    }
   
    if(totalPartySize < max){
      setAddDisabled(false);
    }
   
  
  },[initialValue, totalPartySize]);
  
  
  
    // handler
    function addPerson(){
      setState((prev:number)=> prev += 1)
      setTotalPartySize((prev:number)=> prev += 1)
      if(id === "Party Size List Adults Counter" || id === "Party Size List Seniors Counter"){
        setAdultCount((prev:number)=> prev += 1)
      }
    }
    
    function subtractPerson(){
      setState((prev:number)=> prev -= 1)
      setTotalPartySize((prev:number)=> prev -= 1)
      if(id === "Party Size List Adults Counter" || id === "Party Size List Seniors Counter"){
        setAdultCount((prev:number)=> prev -= 1)
      }
    }
  
    return (
      <div data-testid={id}>
        <button data-testid={`Counter Subtract Button`} onClick={subtractPerson} disabled={disabled}>
          Subtract
        </button>    
        <select data-testid={`Counter Select ${id}`} defaultValue={initialValue}>
        <option value={initialValue}>{initialValue}</option>
    </select>
        <button data-testid={`Counter Add Button`} onClick={addPerson} disabled={addDisabled}>
          Add
        </button>
      </div>
    );
  };