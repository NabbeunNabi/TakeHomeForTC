import { PartySize } from "../Pages/ShopBookingPage/PartySize";
import { useState } from "react";
import { Counter } from "./Counter";
type Props = {
  partySize: PartySize;
};


export const PartySizeList = ({ partySize }: Props): JSX.Element => {
  const party = partySize
  console.log(party);

  const [adults, setAdults] = useState<number>(party.shop.minNumPeople || 1);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [seniors, setSeniors] = useState<number>(0);
  const [totalPartySize, setTotalPartySize] = useState<number>(party.shop.minNumPeople || 1)
  const [maxNumberOfPeople, setMaxNumberOfPeople] = useState<number>(party.shop.maxNumPeople || 10)
  const [minNumberOfPeople, setMinNumberOfPeople] = useState<number>(party.shop.minNumPeople || 1)
  const [adultCount, setAdultCount] = useState<number>(party.shop.minNumPeople || 1)
  


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