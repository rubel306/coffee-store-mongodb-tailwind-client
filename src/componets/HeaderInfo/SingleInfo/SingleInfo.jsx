import "./SingleInfo.css";

const SingleInfo = (props) => {
  return (
    <div className="single-info">
      <img src={props.img} alt="" />
      <h2 className="pt-4">{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};

export default SingleInfo;
