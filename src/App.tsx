import React from 'react';
import { StoreProvider } from "./app/StoreProvider"
import { MainConditions } from './theme/components/WeatherConditions';
import GeoLocation from './theme/components/GeoLocation';
import Units from './theme/components/Units';
import Intl from './theme/components/Intl';
import './App.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <StoreProvider>
            <main>
                <GeoLocation/>
                <Units/>
                <Intl/>
                <MainConditions/>
                {children}
            </main>
        </StoreProvider>
    );
}