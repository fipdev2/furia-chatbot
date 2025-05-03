// components/ThemeToggle.tsx

'use client';

import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // evita mismatch no SSR
    }, []);

    if (!mounted) return null;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Alternar tema"
        >
            {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-yellow-400"/>
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-zinc-900"/>
            )}
        </Button>
    );
}
