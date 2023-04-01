const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return (
    <div className={className}>
      <p className="name">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="box box-1" name="Small" />
      <Box className="box box-2" name="Medium" />
      <Box className="box box-3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
