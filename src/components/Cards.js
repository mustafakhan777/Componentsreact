function Cards(props) {
  const { id, name, age, isActive } = props;
  return (
    <div className="border">
      <div className="">
        <p>Id : {id}</p>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Active : {isActive ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default Cards;
