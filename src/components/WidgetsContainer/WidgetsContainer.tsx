import Widget from "../Widget/Widget";
import styles from "./widgetsContainer.module.css";

export default function WidgetsContainer() {
    return (
        <div className={styles.container}>
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
        </div>
    );
}