import Navi from "./Navi";
import "../styles.scss";

export default function Layout(props) {
	return (
		<div>
			<Navi />
			{props.children}
		</div>
	);
}
