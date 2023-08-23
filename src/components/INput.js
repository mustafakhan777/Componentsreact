function INput(props) {
  return (
    <div className={props.style}>
      <input
        value={props.value}
        onChange={props.onChangefn}
        type={props.inptype}
      />
    </div>
  );
}
export default INput;
