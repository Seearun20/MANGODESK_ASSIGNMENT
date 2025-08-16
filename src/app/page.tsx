import { SummarizerForm } from '@/components/summarizer-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">SummarizeIt</h1>
          <p className="text-muted-foreground mt-2">
            Your AI-powered assistant to summarize and share meeting notes instantly.
          </p>
        </header>
        <SummarizerForm />
      </div>
    </main>
  );
}
