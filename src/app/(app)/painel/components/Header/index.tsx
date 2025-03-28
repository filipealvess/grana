'use client';

import { usePathname } from "next/navigation";
import { Eye, EyeOff } from "react-feather";
import { PAGES } from "@/app/(app)/painel/components/Header/constants";
import styles from "@/app/(app)/painel/components/Header/styles.module.css";
import useDashboard from "@/contexts/Dashboard/useDashboard";

function Header() {
    const path = usePathname();

    const {hidden, switchVisibility} = useDashboard();

    return (
        <header className={styles.container}>
            <h1>{PAGES[path]}</h1>

            <button
                className={styles['visibility-button']}
                data-type="tertiary"
                onClick={switchVisibility}
                type="submit"
            >
                {hidden === true ? <Eye size={18} /> : <EyeOff size={18} />}

                <span>
                    {hidden === true ? 'MOSTRAR' : 'ESCONDER'}
                </span>
            </button>
        </header>
    );
}

export default Header;
