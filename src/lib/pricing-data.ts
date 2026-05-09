export type BillingCycle = 'monthly' | 'yearly';
export type SeatType = 'individual' | 'per_seat';

export interface Plan {
    id: string;
    label: string;
    monthlyPrice: number | null; // null = custom
    yearlyPrice?: number | null;
    seatType: SeatType;
}

export interface Tool {
    id: string;
    label: string;
    plans: Plan[];
    supportsYearly?: boolean;
}

export const TOOLS: Tool[] = [
    {
        id: 'cursor',
        label: 'Cursor',
        supportsYearly: true,
        plans: [
            { id: 'hobby', label: 'Hobby', monthlyPrice: 0, yearlyPrice: 0, seatType: 'individual' },
            { id: 'pro', label: 'Pro', monthlyPrice: 20, yearlyPrice: 16, seatType: 'individual' },
            { id: 'pro_plus', label: 'Pro+', monthlyPrice: 60, yearlyPrice: 48, seatType: 'individual' },
            { id: 'ultra', label: 'Ultra', monthlyPrice: 200, yearlyPrice: 160, seatType: 'individual' },
            { id: 'teams', label: 'Teams', monthlyPrice: 40, yearlyPrice: 32, seatType: 'per_seat' },
            { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, yearlyPrice: null, seatType: 'per_seat' },
        ],
    },
    {
        id: 'github_copilot',
        label: 'GitHub Copilot',
        supportsYearly: false,
        plans: [
            { id: 'free', label: 'Free', monthlyPrice: 0, seatType: 'individual' },
            { id: 'pro', label: 'Pro', monthlyPrice: 10, seatType: 'individual' },
            { id: 'pro_plus', label: 'Pro+', monthlyPrice: 39, seatType: 'individual' },
            { id: 'business', label: 'Business', monthlyPrice: 19, seatType: 'per_seat' },
            { id: 'enterprise', label: 'Enterprise', monthlyPrice: 39, seatType: 'per_seat' },
        ],
    },
    {
        id: 'claude',
        label: 'Claude',
        supportsYearly: true,
        plans: [
            { id: 'free', label: 'Free', monthlyPrice: 0, yearlyPrice: 0, seatType: 'individual' },
            { id: 'pro', label: 'Pro', monthlyPrice: 20, yearlyPrice: 17, seatType: 'individual' },
            { id: 'max', label: 'Max', monthlyPrice: 100, yearlyPrice: 100, seatType: 'individual' },
            { id: 'team_standard', label: 'Team – Standard Seat', monthlyPrice: 25, yearlyPrice: 20, seatType: 'per_seat' },
            { id: 'team_premium', label: 'Team – Premium Seat', monthlyPrice: 125, yearlyPrice: 120, seatType: 'per_seat' },
            { id: 'enterprise', label: 'Enterprise', monthlyPrice: 20, yearlyPrice: 20, seatType: 'per_seat' },
        ],
    },
    {
        id: 'chatgpt',
        label: 'ChatGPT',
        supportsYearly: false,
        plans: [
            { id: 'free', label: 'Free', monthlyPrice: 0, seatType: 'individual' },
            { id: 'go', label: 'Go', monthlyPrice: 8, seatType: 'individual' },
            { id: 'plus', label: 'Plus', monthlyPrice: 20, seatType: 'individual' },
            { id: 'pro', label: 'Pro', monthlyPrice: 100, seatType: 'individual' },
            { id: 'business_codex', label: 'Business (Codex only)', monthlyPrice: null, seatType: 'per_seat' },
            { id: 'business_full', label: 'Business (Codex + ChatGPT)', monthlyPrice: 20, seatType: 'per_seat' },
            { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, seatType: 'per_seat' },
        ],
    },
    {
        id: 'anthropic_api',
        label: 'Anthropic API',
        supportsYearly: false,
        plans: [
            { id: 'opus_4_7', label: 'Claude Opus 4.7', monthlyPrice: null, seatType: 'individual' },
            { id: 'sonnet_4_6', label: 'Claude Sonnet 4.6', monthlyPrice: null, seatType: 'individual' },
            { id: 'haiku_4_5', label: 'Claude Haiku 4.5', monthlyPrice: null, seatType: 'individual' },
        ],
    },
    {
        id: 'openai_api',
        label: 'OpenAI API',
        supportsYearly: false,
        plans: [
            { id: 'gpt55', label: 'GPT-5.5', monthlyPrice: null, seatType: 'individual' },
            { id: 'gpt55_pro', label: 'GPT-5.5 Pro', monthlyPrice: null, seatType: 'individual' },
            { id: 'gpt54', label: 'GPT-5.4', monthlyPrice: null, seatType: 'individual' },
            { id: 'gpt54_mini', label: 'GPT-5.4 Mini', monthlyPrice: null, seatType: 'individual' },
            { id: 'gpt55_nano', label: 'GPT-5.5 Nano', monthlyPrice: null, seatType: 'individual' },
            { id: 'gpt54_pro', label: 'GPT-5.4 Pro', monthlyPrice: null, seatType: 'individual' },
        ],
    },
    {
        id: 'gemini',
        label: 'Gemini',
        supportsYearly: false,
        plans: [
            { id: 'free', label: 'Free', monthlyPrice: 0, seatType: 'individual' },
            { id: 'ai_plus', label: 'Google AI Plus', monthlyPrice: 7.99, seatType: 'individual' },
            { id: 'ai_pro', label: 'Google AI Pro', monthlyPrice: 19.99, seatType: 'individual' },
            { id: 'ai_ultra', label: 'Google AI Ultra', monthlyPrice: 249.99, seatType: 'individual' },
        ],
    },
    {
        id: 'windsurf',
        label: 'Windsurf',
        supportsYearly: false,
        plans: [
            { id: 'free', label: 'Free', monthlyPrice: 0, seatType: 'individual' },
            { id: 'pro', label: 'Pro', monthlyPrice: 20, seatType: 'individual' },
            { id: 'max', label: 'Max', monthlyPrice: 200, seatType: 'individual' },
            { id: 'team', label: 'Team', monthlyPrice: 40, seatType: 'per_seat' },
            { id: 'enterprise', label: 'Enterprise', monthlyPrice: null, seatType: 'per_seat' },
        ],
    },
];

export const USE_CASES = [
    { id: 'coding', label: 'Coding' },
    { id: 'writing', label: 'Writing' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'research', label: 'Research' },
    { id: 'mixed', label: 'Mixed' },
] as const;

export type UseCaseId = (typeof USE_CASES)[number]['id'];

export function getPlan(toolId: string, planId: string): Plan | undefined {
    return TOOLS.find(t => t.id === toolId)?.plans.find(p => p.id === planId);
}

export function getPlansForTool(toolId: string): Plan[] {
    return TOOLS.find(t => t.id === toolId)?.plans ?? [];
}