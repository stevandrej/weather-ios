import CardForecast from '../CardForecast/CardForecast';
import styles from './weatherForecast.module.css'

export default function WeatherForecast() {
    return (
        <div className={styles.container}>
          <CardForecast />
          <CardForecast />
          <CardForecast />
          <CardForecast />
          <CardForecast />
        </div>
    );
}