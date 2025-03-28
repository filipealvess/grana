'use client';

import { createContext, useEffect, useState } from "react";
import storage from "@/services/storage";
import { KEYS } from "@/services/storage/constants";

import { IProps } from "@/app/core/index.d";

export const DashboardContext = createContext({
    hidden: true,
    switchVisibility: () => {},
});

function DashboardProvider({ children }: IProps) {
    const [hidden, setHidden] = useState(true);

    function switchVisibility() {
        setHidden(prev => {
            storage.set(KEYS.CASH_HIDDEN, !prev);
            return !prev;
        });
    }

    useEffect(() => {
        const isHidden = storage.get<boolean>(KEYS.CASH_HIDDEN);

        if (isHidden !== null) {
            setHidden(isHidden);
        }
    }, []);

    return (
        <DashboardContext.Provider value={{
            hidden,
            switchVisibility,
        }}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardProvider;
