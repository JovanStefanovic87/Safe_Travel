export default function BookingSelect(props) {
  return (
    <div>
      <select
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        <option disabled>{props.defaultValue}</option>
        {props.array.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
