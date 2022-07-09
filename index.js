const Button = (props) => {
  const { Text, className } = props;
  return <button className={`button ${className}`}>{Text}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content">
      <h1 className="heading"> Social Buttons </h1>
      <div className="buttons-container">
        <Button Text="Like" className="button1" />
        <Button Text="Comment" className="button2" />
        <Button Text="Share" className="button3" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
