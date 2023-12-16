import Spinner from "../Spinner/Spinner";
import styles from "./lodingScreen.module.css";

export default function LoadingScreen() {
	return (
		<div className={styles.loadingScreen}>
			<Spinner />
		</div>
	);
}
