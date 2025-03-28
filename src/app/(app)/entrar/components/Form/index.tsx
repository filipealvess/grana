'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import {createClient} from "@/services/supabase/client";
import styles from '@/components/Wrappers/Auth/styles.module.css';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        const supabase = createClient();

        const {error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error?.status === 400 && error?.code === 'invalid_credentials') {
            setIsLoading(false);
            setError('E-mail e/ou senha incorretos');
            return;
        }

        if (error !== null) {
            setIsLoading(false);
            setError('Ocorreu um erro, tente novamente mais tarde');
            return;
        }

        router.push('/painel');
    }

    return (
        <form onSubmit={handleSubmit}>
            {error !== null && (
                <p className={styles.error}>
                    {error}
                </p>
            )}

            <input
                onChange={({target}) => setEmail(target.value)}
                placeholder="E-mail"
                required
                type="email"
                value={email}
            />

            <input
                onChange={({target}) => setPassword(target.value)}
                placeholder="Senha"
                required
                type="password"
                value={password}
            />

            <button
                disabled={(
                    email.trim().length === 0 ||
                    password.trim().length === 0 ||
                    isLoading === true
                )}
                type="submit"
            >
                {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
            </button>
        </form>
    );
}

export default Form;
