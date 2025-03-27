import Link from "next/link";
import Form from "@/app/(app)/entrar/components/Form";
import Auth from "@/components/Wrappers/Auth";
import styles from "@/components/Wrappers/Auth/styles.module.css";

function Login() {
    return (
        <Auth>
            <h1>Entrar</h1>

            <div className={styles['link-wrapper']}>
                <h4>
                    Ainda não tem conta?&nbsp;

                    <Link href='/criar-conta'>
                        Cadastre-se
                    </Link>
                </h4>
            </div>

            <Form />
        </Auth>
    );
}

export default Login;
