

const DataComponent = (props) => {
  return (
    <div >
        <p><span>conditions: </span>{props.conditions}</p>
        <p><span>time: </span>{props.time}</p>
    </div>
  );
};

export default DataComponent;