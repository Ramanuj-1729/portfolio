'use client';

import Templete from '@/app/templete';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvider {...props}>
        <Templete>
            {children}
        </Templete>
    </NextThemesProvider>;
}