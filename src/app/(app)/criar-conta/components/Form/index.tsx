'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import supabase from "@/services/supabase";
import styles from '@/components/Wrappers/Auth/styles.module.css';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsCreating(true);
        setError(null);

        const {error} = await supabase.auth.signUp({
            email,
            password,
        });

        setIsCreating(false);

        if (error?.status === 422 && error?.code === 'weak_password') {
            setError('A senha deve ter no mínimo 6 caracteres');
            return;
        }

        if (error !== null) {
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
                    isCreating === true
                )}
                type="submit"
            >
                {isCreating ? 'CRIANDO CONTA...' : 'CRIAR CONTA'}
            </button>
        </form>
    );
}

export default Form;
