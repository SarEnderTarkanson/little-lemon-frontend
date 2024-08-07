import Heading from "../components/sections/reserve/Heading";
import ReservationForm from "../components/sections/reserve/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../bookingData";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}