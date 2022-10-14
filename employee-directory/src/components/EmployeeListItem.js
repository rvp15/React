

function EmployeeListItem(props) {
  return (

    <div className="items">
      <h3>{props.whichEmployee.name}</h3>
      <h3>{props.whichEmployee.title}</h3>
    </div>

  );
}

export default EmployeeListItem;
