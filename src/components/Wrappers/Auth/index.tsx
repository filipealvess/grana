import Image from "next/image";
import styles from "@/components/Wrappers/Auth/styles.module.css";
import logo from "#/logo.png";
import money from "#/money.jpg";

import {IProps} from "@/components/Wrappers/Auth/index.d";

function Auth({children}: IProps) {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <Image
                    alt="Grana"
                    className={styles.logo}
                    src={logo}
                />

                <Image
                    alt="Muda de planta dentro de uma nota 50 euros"
                    className={styles.background}
                    src={money}
                />
            </section>

            <section className={styles.content}>
                {children}
            </section>
        </div>
    );
}

export default Auth;
