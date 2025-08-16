'use server';

import { summarizeTranscript } from '@/ai/flows/summarize-transcript';
import type { SummarizeTranscriptInput } from '@/ai/flows/summarize-transcript';

export async function generateSummaryAction(input: SummarizeTranscriptInput): Promise<{ summary?: string; error?: string }> {
  try {
    const result = await summarizeTranscript(input);
    if (!result.summary) {
      return { error: 'Failed to generate summary. The result was empty.' };
    }
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `An error occurred while generating the summary: ${errorMessage}` };
  }
}
