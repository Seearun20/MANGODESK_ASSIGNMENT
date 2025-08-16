// Summarize the transcript based on a custom prompt.

'use server';

/**
 * @fileOverview Summarizes a text transcript using a custom prompt.
 *
 * - summarizeTranscript - A function that takes a transcript and a custom prompt and returns a summary.
 * - SummarizeTranscriptInput - The input type for the summarizeTranscript function.
 * - SummarizeTranscriptOutput - The return type for the summarizeTranscript function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTranscriptInputSchema = z.object({
  transcript: z.string().describe('The text transcript to summarize.'),
  customPrompt: z.string().describe('A custom prompt to guide the summarization.'),
});
export type SummarizeTranscriptInput = z.infer<typeof SummarizeTranscriptInputSchema>;

const SummarizeTranscriptOutputSchema = z.object({
  summary: z.string().describe('The generated summary of the transcript.'),
});
export type SummarizeTranscriptOutput = z.infer<typeof SummarizeTranscriptOutputSchema>;

export async function summarizeTranscript(input: SummarizeTranscriptInput): Promise<SummarizeTranscriptOutput> {
  return summarizeTranscriptFlow(input);
}

const summarizeTranscriptPrompt = ai.definePrompt({
  name: 'summarizeTranscriptPrompt',
  input: {schema: SummarizeTranscriptInputSchema},
  output: {schema: SummarizeTranscriptOutputSchema},
  prompt: `Summarize the following transcript according to the custom prompt provided.\n\nTranscript:\n{{{transcript}}}\n\nCustom Prompt:\n{{{customPrompt}}}`, // Changed Jinja to Handlebars
});

const summarizeTranscriptFlow = ai.defineFlow(
  {
    name: 'summarizeTranscriptFlow',
    inputSchema: SummarizeTranscriptInputSchema,
    outputSchema: SummarizeTranscriptOutputSchema,
  },
  async input => {
    const {output} = await summarizeTranscriptPrompt(input);
    return output!;
  }
);
