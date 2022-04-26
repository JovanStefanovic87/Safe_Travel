const Arrow = (props) => (
	<div className={props.divClassName} id={props.id} onClick={props.onClick}>
		<i className={props.anchorClassName}></i>
	</div>
);

export default Arrow;
