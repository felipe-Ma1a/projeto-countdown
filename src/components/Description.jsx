import "./Description.css";

const Description = ({ description, eventColor }) => {
  return (
    <p className="description" style={{ color: eventColor }}>
      {description}
    </p>
  );
};

export default Description;
