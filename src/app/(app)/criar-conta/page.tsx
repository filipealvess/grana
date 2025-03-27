import Link from "next/link";
import Form from "@/app/(app)/criar-conta/components/Form";
import Auth from "@/components/Wrappers/Auth";
import styles from "@/components/Wrappers/Auth/styles.module.css";

function CreateAccount() {
    return (
        <Auth>
            <h1>Criar conta</h1>

            <div className={styles['link-wrapper']}>
                <h4>
                    Já tem uma conta?&nbsp;

                    <Link href='/entrar'>
                        Entrar
                    </Link>
                </h4>
            </div>

            <Form />
        </Auth>
    );
}

export default CreateAccount;
