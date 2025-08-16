"use client";

import { useState } from 'react';
import { generateSummaryAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Wand2 } from 'lucide-react';

export function SummarizerForm() {
  const [transcript, setTranscript] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [summary, setSummary] = useState('');
  const [recipients, setRecipients] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    if (!transcript.trim()) {
      toast({
        title: 'Error',
        description: 'Please provide a transcript to summarize.',
        variant: 'destructive',
      });
      return;
    }

    if (!customPrompt.trim()) {
      toast({
        title: 'Error',
        description: 'Please provide a custom prompt.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setSummary('');

    const result = await generateSummaryAction({ transcript, customPrompt });

    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.summary) {
      setSummary(result.summary);
    }
  };

  const handleShare = () => {
    if (!summary.trim()) {
      toast({
        title: 'Error',
        description: 'There is no summary to share. Please generate one first.',
        variant: 'destructive',
      });
      return;
    }
    if (!recipients.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter at least one recipient email address.',
        variant: 'destructive',
      });
      return;
    }
    
    const subject = encodeURIComponent("Meeting Summary from SummarizeIt");
    const body = encodeURIComponent(summary);
    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">1. Input Your Data</CardTitle>
          <CardDescription>
            Paste your transcript and provide a custom prompt for the AI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="transcript">Transcript</Label>
            <Textarea
              id="transcript"
              placeholder="Paste your meeting notes or call transcript here..."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              rows={10}
              className="bg-card"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="prompt">Custom Prompt</Label>
            <Input
              id="prompt"
              placeholder="e.g., 'Summarize in bullet points for executives' or 'Highlight action items'"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="bg-card"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerateSummary} disabled={isLoading} size="lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Summary
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {(isLoading || summary) && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">2. Review and Share</CardTitle>
            <CardDescription>
              Edit the generated summary below and share it with your team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="summary">Generated Summary</Label>
               {isLoading ? (
                <div className="space-y-2">
                  <div className="animate-pulse bg-muted/80 rounded-md h-32 w-full"></div>
                  <div className="animate-pulse bg-muted/80 rounded-md h-8 w-3/4"></div>
                </div>
              ) : (
                <Textarea
                  id="summary"
                  placeholder="Your summary will appear here..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={15}
                  disabled={isLoading}
                  className="bg-card"
                />
              )}
            </div>
            {!isLoading && (
              <div className="grid w-full gap-1.5">
                <Label htmlFor="recipients">Share via Email (To)</Label>
                <Input
                  id="recipients"
                  type="email"
                  placeholder="Enter recipient emails, separated by commas"
                  value={recipients}
                  onChange={(e) => setRecipients(e.target.value)}
                  className="bg-card"
                />
              </div>
            )}
          </CardContent>
          {!isLoading && summary && (
            <CardFooter>
              <Button onClick={handleShare} variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Share Summary
              </Button>
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  );
}
