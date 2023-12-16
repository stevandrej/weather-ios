import styles from "./widget.module.css";

export default function Widget() {
	return (
		<div className={styles.widget}>
			<h4 className={styles.title}>UV Index</h4>
			<div className={styles.main}>4 Moderate</div>
			<div className={styles.description}>description</div>
		</div>
	);
}
