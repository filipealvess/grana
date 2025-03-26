import {Montserrat} from "next/font/google";
import "@/app/core/globals.css";

import type { Metadata } from "next";
import type { IProps } from "@/app/core/index.d";

export const metadata: Metadata = {
    title: "Grana",
    description: "Controle todas as suas finanças em um só lugar",
};

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

export default function RootLayout({
    children,
}: IProps) {
    return (
        <html lang="pt-BR" className={montserrat.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
