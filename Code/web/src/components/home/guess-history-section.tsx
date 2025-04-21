import { Guess } from "@/lib/types";
import { GuessHistoryItem } from "./guess-history-item";

type GuessHistorySectionProps = {
  guesses: Guess[] | null | undefined;
};

export function GuessHistorySection({ guesses }: GuessHistorySectionProps) {
  if (!guesses || guesses.length === 0) return null;
  return (
    <section className="flex flex-col items-center w-full max-w-[500px] mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Guess History</h2>
      <div className="flex flex-col  items-center gap-3 w-full max-h-[125px] overflow-y-scroll">
        {guesses.map((guess, index) => (
          <GuessHistoryItem key={index} guess={guess} />
        ))}
      </div>
    </section>
  );
}