import { PartySize } from "../Pages/ShopBookingPage/PartySize";
import { useState, useEffect } from "react";
import { Counter } from "./Counter";
type Props = {
  partySize: PartySize;
};

interface MinMaxObject {
  min: number,
  max: number,
}


export const PartySizeList = ({ partySize }: Props): JSX.Element => {
  const party = partySize

  const [adults, setAdults] = useState<number>(party.shop.minNumPeople || 1);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [seniors, setSeniors] = useState<number>(0);
  const [totalPartySize, setTotalPartySize] = useState<number>(party.shop.minNumPeople || 1);
  const [maxNumberOfPeople, setMaxNumberOfPeople] = useState<number>(party.shop.maxNumPeople || 10);
  const [minNumberOfPeople, setMinNumberOfPeople] = useState<number>(party.shop.minNumPeople || 1);
  const [adultCount, setAdultCount] = useState<number>(party.shop.minNumPeople || 1);
  const [hasGroupOrder, setHasGroupOrder] = useState<boolean>(false);
  const [hasMenu, setHasMenu] = useState<boolean>(false);
 
  
  
  useEffect(()=>{
    if(party.shop.minNumPeople > party.shop.maxNumPeople){
      throw new Error("min can never be greater than max")
    }
    if(party.shop.minNumPeople === 0 || party.shop.minNumPeople === -Infinity){
      setMinNumberOfPeople(1);
      setAdults(1);
      setAdultCount(1);
      setTotalPartySize(1);
    }
    if(party.shop.maxNumPeople === Infinity){
      setMaxNumberOfPeople(10);
    }
    if(party.menu.length > 0){
      setHasMenu(true);
    }
  },[]);

  useEffect(()=>{
    if(hasMenu){
      hasMinMaxForMenu();
    }
  },[hasMenu]);

  useEffect(()=>{
    if(hasGroupOrder){
      const newMinMax: MinMaxObject = findMinMaxForGroupOrder();
      setMinNumberOfPeople(newMinMax.min);
      setMaxNumberOfPeople(newMinMax.max);
    }
  },[hasGroupOrder]);

  //helper
  function hasMinMaxForMenu(){
    for(let i = 0; i < party.menu.length; i ++){
      if(party.menu[i].isGroupOrder){
        setHasGroupOrder(true);
        return;
    }
  }
}

  function findMinMaxForGroupOrder(){
    let minMaxForMenu: MinMaxObject={
      min: 0,
      max: 0
    };
    
    for(let i = 0; i < party.menu.length; i ++){
      if(party.menu[i].minOrderQty > minMaxForMenu.min){
        minMaxForMenu.min = party.menu[i].minOrderQty
      }
      if(party.menu[i].maxOrderQty > minMaxForMenu.max){
        minMaxForMenu.max = party.menu[i].maxOrderQty
      }
    }

    return minMaxForMenu;
  }

  return <div data-testid="Party Size List">
    <label>
        Adults:
        <Counter
          max={maxNumberOfPeople}
          min={minNumberOfPeople}
          id={"Party Size List Adults Counter"}
          initialValue={adults}
          setState={setAdults}     
          totalPartySize={totalPartySize}
          setTotalPartySize={setTotalPartySize}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
        />
      </label>

      {party.shop.showChild && (
        <label>
          Children:
          <Counter
           max={maxNumberOfPeople}
           min={minNumberOfPeople}
            id={"Party Size List Children Counter"}
            initialValue={children}
            setState={setChildren}
            totalPartySize={totalPartySize}
          setTotalPartySize={setTotalPartySize}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
          />
        </label>
      )}

      {party.shop.showSenior && (
        <label>
          Seniors:
          <Counter
            max={maxNumberOfPeople}
            min={minNumberOfPeople}
            id={"Party Size List Seniors Counter"}
            initialValue={seniors}
            setState={setSeniors}
            totalPartySize={totalPartySize}
            setTotalPartySize={setTotalPartySize}
            adultCount={adultCount}
          setAdultCount={setAdultCount}
          />
        </label>
      )}

      {party.shop.showBaby && (
        <label>
          Babies:
          <Counter
            max={maxNumberOfPeople}
            min={minNumberOfPeople}
            id={"Party Size List Babies Counter"}
            initialValue={babies}
            setState={setBabies}
            totalPartySize={totalPartySize}
          setTotalPartySize={setTotalPartySize}
          adultCount={adultCount}
          setAdultCount={setAdultCount}
          />
        </label>
      )}
  </div>;
};