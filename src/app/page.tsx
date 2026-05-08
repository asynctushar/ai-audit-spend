
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ScanSearch, ChartNoAxesCombined, Handshake } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: ScanSearch,
        title: 'Enter your subscriptions',
        description:
            'Tell us which AI tools you use, your plan, number of seats, and monthly spend. Takes under 2 minutes.',
    },
    {
        number: '02',
        icon: ChartNoAxesCombined,
        title: 'Get your instant audit',
        description:
            'Our engine benchmarks your stack against current pricing, flags mismatched plans, and surfaces cheaper alternatives.',
    },
    {
        number: '03',
        icon: Handshake,
        title: 'Act on the savings',
        description:
            'Download your report or — if savings are significant — connect with Credex to capture even more through discounted AI credits.',
    },
];


const testimonials = [
    {
        quote: "Saved us $600/month across ChatGPT and Claude.",
        author: "Founder, SaaS Startup",
        saving: '$7,200/yr saved',
        tag: "Mocked",
    },
    {
        quote: "I didn't realize we were overpaying for seats.",
        author: "Indie Hacker",
        tag: "Mocked",
        saving: '$1,800/yr saved',
    },
];

const faqs = [
    {
        q: "What does this tool do?",
        a: "It analyzes your AI tool subscriptions and identifies opportunities to reduce costs by switching plans or alternatives.",
    },
    {
        q: "Do I need to create an account?",
        a: "No. You can run the audit instantly without signing up.",
    },
    {
        q: "How accurate are the recommendations?",
        a: "Recommendations are based on current pricing data and common patterns. They provide strong guidance, not financial advice.",
    },
    {
        q: "Will my data be stored?",
        a: "Only if you choose to save your report via email. Otherwise, no personal data is stored.",
    },
    {
        q: "What happens if I have high savings?",
        a: "If your potential savings are significant, you'll have the option to connect with Credex for deeper optimization.",
    },
];

const Home = () => {

    return (
        <main className="flex flex-col">

            {/* Hero */}
            <section className="flex flex-col items-center text-center gap-6 px-6 pt-24 pb-20 md:pt-32 md:pb-28">
                <Badge variant="secondary" className="text-xs font-semibold uppercase tracking-widest px-3 py-1">
                    Free • No account required
                </Badge>

                <h1 className="max-w-3xl text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                    Stop Overpaying for{' '}
                    <span className="text-primary">AI Tools</span>
                </h1>

                <p className="max-w-xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Analyze your AI subscription and instantly dicover where you&apos;re
                    wasting money - with clear recommendations to cut costs.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                    <Link href="/audit">
                        <Button size="lg" className="gap-2 font-semibold px-8">
                            Run Free Audit <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Average audit finds <span className="font-semibold text-foreground">$4,200/year</span> in savings
                    </p>
                </div>
            </section>

            {/* How it works */}
            <section className="px-6 md:px-16 py-20 border-t border-border/40">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            How it works
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            From subscriptions to savings in 3 steps
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-black text-muted-foreground/50 tracking-widest">
                                            {step.number}
                                        </span>
                                        <div className="h-px flex-1 bg-border/60" />
                                    </div>
                                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                    <h3 className="font-bold text-base tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-6 md:px-16 py-20 border-t border-border/40 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            What people are saying
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Real savings. Real teams.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <Card key={i} className="border-border/40">
                                <CardContent className="pt-6 flex flex-col gap-4">
                                    <p className="text-sm leading-relaxed text-foreground">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">{t.author}</p>
                                            <Badge variant="outline" className="text-[10px] mt-1 text-muted-foreground">
                                                {t.tag}
                                            </Badge>
                                        </div>
                                        <Badge variant="secondary" className="text-xs font-bold text-primary">
                                            {t.saving}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="px-6 md:px-16 py-20 border-t border-border/40">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            FAQ
                        </p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Common questions
                        </h2>
                    </div>

                    <Accordion className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`}>
                                <AccordionTrigger className="text-lg font-semibold text-left">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-6 md:px-16 py-24 border-t border-border/40">
                <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                        Find out what you&apos;re actually paying for.
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        No account. No credit card. Just a clear picture of your AI spend
                        and exactly what to do about it.
                    </p>
                    <Link href="/audit">
                        <Button size="lg" className="gap-2 font-semibold px-8">
                            Run Free Audit <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground">
                        Powered by Credex · credex.rocks
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;