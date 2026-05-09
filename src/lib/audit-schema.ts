import { z } from 'zod';

const coerceInt = (label: string) =>
    z.coerce
        .number({ error: `${label} must be a number` })
        .int(`${label} must be a whole number`);

const coerceFloat = (label: string) =>
    z.coerce.number({ error: `${label} must be a number` });

export const toolEntrySchema = z.object({
    toolId: z.string().min(1, 'Select a tool'),
    planId: z.string().min(1, 'Select a plan'),
    billingCycle: z.enum(['monthly', 'yearly']),
    seats: coerceInt('Seats').min(1, 'At least 1 seat'),
    monthlySpend: coerceFloat('Monthly spend').min(0, 'Cannot be negative'),
});

export const auditFormSchema = z.object({
    tools: z.array(toolEntrySchema).min(1, 'Add at least one tool'),
    teamSize: coerceInt('Team size').min(1, 'Team must have at least 1 person'),
    useCase: z.enum(['coding', 'writing', 'data', 'research', 'mixed'], {
        error: 'Select a primary use case',
    }),
});

export type ToolEntry = z.infer<typeof toolEntrySchema>;
export type AuditFormValues = z.infer<typeof auditFormSchema>;

export const AUDIT_FORM_STORAGE_KEY = 'ai_spend_audit_form';