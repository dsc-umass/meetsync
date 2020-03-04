import Navi from "./Navi";
import Foot from "./Foot";
import "../styles.scss";

export default function Layout(props) {
	return (
		<div>
			<Navi />
			{props.children}
			<Foot />
		</div>
	);
}
