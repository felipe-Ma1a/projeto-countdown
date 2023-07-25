import Title from "../components/Title";
import Counter from "../components/Counter";
import Description from "../components/Description";
import { Navigate } from "react-router-dom";

import { useContext } from "react";

import useCountdown from "../hooks/useCountdown";

import { CountdownContext } from "../context/CountdownContext";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;
  const eventDescription = event.desc;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
      <Description description={eventDescription} eventColor={eventColor} />
    </>
  );
};

export default Countdown;
