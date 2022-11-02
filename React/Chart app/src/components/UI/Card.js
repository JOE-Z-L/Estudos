import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //dont forget white space

  return <div className={classes}>{props.children}</div>;
};

export default Card;
