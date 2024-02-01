import classes from "./StatisticsSection.module.css";
import BalanceChart from "./BalanceChart";

const StatisticsSection = () => {
    return <section className={classes["statistics-section"]}>
        <h1>Fake statistics just for test of Recharts. Page in development....</h1>
        <BalanceChart />
    </section>;
};

export default StatisticsSection;