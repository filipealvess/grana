import styles from '@/app/(app)/painel/styles.module.css';
import Sidebar from '@/components/Navigation/Sidebar';
import DashboardProvider from '@/contexts/Dashboard';

import { IProps } from "@/app/core/index.d";

function Layout({
    children,
}: IProps) {
    return (
        <section className={styles.container}>
            <Sidebar />

            <DashboardProvider>
                <main className={styles.content}>
                    {children}
                </main>
            </DashboardProvider>
        </section>
    );
}

export default Layout;
