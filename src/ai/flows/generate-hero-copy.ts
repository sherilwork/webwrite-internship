'use server';
/**
 * @fileOverview A GenAI agent for generating minimalist hero section copy.
 *
 * - generateHeroCopy - A function that generates minimalist hero headlines and body text.
 * - GenerateHeroCopyInput - The input type for the generateHeroCopy function.
 * - GenerateHeroCopyOutput - The return type for the generateHeroCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroCopyInputSchema = z.object({
  projectDescription: z
    .string()
    .describe(
      'A brief description of the user\u0027s project or product type.'
    ),
});
export type GenerateHeroCopyInput = z.infer<typeof GenerateHeroCopyInputSchema>;

const GenerateHeroCopyOutputSchema = z.object({
  copyOptions: z
    .array(
      z.object({
        headline: z.string().describe('A minimalist hero headline.'),
        bodyText: z
          .string()
          .describe('Minimalist body text complementing the headline.'),
      })
    )
    .describe('An array of minimalist hero copy options.'),
});
export type GenerateHeroCopyOutput = z.infer<
  typeof GenerateHeroCopyOutputSchema
>;

export async function generateHeroCopy(
  input: GenerateHeroCopyInput
): Promise<GenerateHeroCopyOutput> {
  return generateHeroCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroCopyPrompt',
  input: {schema: GenerateHeroCopyInputSchema},
  output: {schema: GenerateHeroCopyOutputSchema},
  prompt: `You are an expert copywriter specializing in minimalist, premium, and modern SaaS landing page hero sections.

Generate 3 distinct options for a hero headline and accompanying body text based on the following project description.

Focus on creating copy that is:
- Minimalist, clean, airy, and modern.
- Premium and elegant.
- Concise and impactful.
- Designed to fit a hero section with a subtle, off-white background and light gray grid.

Avoid:
- Dark or heavy themes.
- Neon or overly futuristic sci-fi elements.
- Busy or distracting language.

Project Description: {{{projectDescription}}}

Provide the output in the specified JSON format.`,
});

const generateHeroCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroCopyFlow',
    inputSchema: GenerateHeroCopyInputSchema,
    outputSchema: GenerateHeroCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
