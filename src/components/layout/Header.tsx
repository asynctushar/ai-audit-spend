'use client';

import { Badge } from '../ui/badge';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isAudit = pathname === '/audit';
    const isResults = pathname.startsWith('/results/');

    return (
        <header className="relative z-10  px-6 md:px-16 py-5 border-b border-border/40">
            <nav className='flex items-center justify-between max-w-7xl mx-auto'>
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-primary font-black text-xl tracking-tight">
                        AI Spend Audit
                    </Link>
                    <Badge variant="secondary" className="text-[10px] font-semibold uppercase tracking-widest">
                        Credex
                    </Badge>
                </div>
                {isAudit ? null : isResults ? (
                    <Link href="/audit">
                        <Button size="sm" variant="outline" className="text-xs font-semibold tracking-wide uppercase">
                            Start Again
                        </Button>
                    </Link>
                ) : (
                    <Link href="/audit">
                        <Button size="sm" variant="outline" className="text-xs font-semibold tracking-wide uppercase">
                            Get Started
                        </Button>
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;