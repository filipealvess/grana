import styles from '@/components/Card/styles.module.css';

import {IProps} from '@/components/Card/index.d';

function Card({
    label,
    value,
    icon,
}: IProps) {
    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <p>{label}</p>

                {icon}
            </header>

            <h4>{value}</h4>
        </article>
    );
}

export default Card;
