import bgImage from "../../assets/images/landscape-bg.png";
import houseImage from "../../assets/images/house.png";
import styles from './appContainer.module.css'

export default function AppContainer({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<div className={styles.container}>
			<img src={bgImage} alt="winter landscape" className={styles.bg} />
			<img src={houseImage} alt="house" className={styles.house} />
			{children}
		</div>
	);
}
