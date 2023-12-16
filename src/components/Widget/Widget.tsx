import styles from "./widget.module.css";

interface WidgetProps {
	title: string;
	main: string | number;
	description?: string | number;
}

export default function Widget({ title, main, description }: WidgetProps) {
	return (
		<div className={styles.widget}>
			<h4 className={styles.title}>{title}</h4>
			<div className={styles.main}>{main}</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
}
