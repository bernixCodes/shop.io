import "./Title.scss";

// eslint-disable-next-line react/prop-types
const Title = ({ heading, btnText }) => {
  return (
    <>
      <div className="flex-btn">
        <h2 className="thin-text">{heading}</h2>
        <button className="btn"> {btnText}</button>
      </div>

      <div className="hr"></div>
    </>
  );
};

export default Title;
