'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DollarSign, Home, Repeat } from "react-feather";
import styles from '@/components/Navigation/Sidebar/styles.module.css';
import logo from '@/app/favicon.ico';

function Sidebar() {
    const path = usePathname();

    return (
        <aside className={styles.container}>
            <Image
                alt="Letra G com cifrão de dinheiro (Grana)"
                className={styles.logo}
                src={logo}
            />

            <nav className={styles.nav}>
                <Link
                    href='/painel'
                    className={styles.link}
                    data-active={path === '/painel' ? 'true' : 'false'}
                >
                    <Home />
                </Link>

                <Link
                    href='/painel/movimentacoes'
                    className={styles.link}
                    data-active={path === '/painel/movimentacoes' ? 'true' : 'false'}
                >
                    <Repeat />
                </Link>

                <Link
                    href='/painel/investimentos'
                    className={styles.link}
                    data-active={path === '/painel/investimentos' ? 'true' : 'false'}
                >
                    <DollarSign />
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
