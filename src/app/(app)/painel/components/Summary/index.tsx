'use client';

import { DollarSign, PieChart } from "react-feather";
import Card from "@/components/Card";
import styles from "@/app/(app)/painel/components/Summary/styles.module.css";
import useDashboard from "@/contexts/Dashboard/useDashboard";

function Summary() {
    const {hidden} = useDashboard();

    return (
        <section className={styles.container}>
            <Card
                label="Saldo em caixa"
                value={hidden ? "R$ *****" : "R$ 0,00"}
                icon={<PieChart color="var(--semantic-success)" />}
            />

            <Card
                label="Investimentos"
                value={hidden ? "R$ *****" : "R$ 0,00"}
                icon={<DollarSign color="var(--primary)" />}
            />
        </section>
    );
}

export default Summary;
