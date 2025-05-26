'use server';

/**
 * @fileOverview Recommends content to feature based on user preferences and content performance data.
 *
 * - recommendContent - A function that handles the content recommendation process.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of user preferences, including viewing history and demographics.'),
  contentPerformanceData: z
    .string()
    .describe('Data on content performance, including views, click-through rates, and conversion rates.'),
  currentFeaturedContent: z.string().optional().describe('A description of the content currently being featured, if any.'),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendedContent: z
    .string()
    .describe('The title and short description of the content recommended to be featured.'),
  reasoning: z
    .string()
    .describe('The AI reasoning for recommending the specific content based on the provided data.'),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are an AI content recommendation expert. Based on user preferences and content performance data, you will recommend content to feature to increase conversion rates.

User Preferences: {{{userPreferences}}}
Content Performance Data: {{{contentPerformanceData}}}
Current Featured Content: {{{currentFeaturedContent}}}

Based on this information, recommend a single piece of content to feature, along with your reasoning for the recommendation. The recommended content should be in the format of a title and short description.
`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
