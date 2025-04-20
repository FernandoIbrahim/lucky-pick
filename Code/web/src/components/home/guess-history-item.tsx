import { Guess } from "@/lib/types";

type GuessHistoryItemProps = {
  guess: Guess;
};

export function GuessHistoryItem({ guess }: GuessHistoryItemProps) {
  return (
    <div className="flex justify-between items-center text-xs px-3 py-1.5 bg-white rounded-md shadow-sm border border-gray-200 w-90/100 max-w-3xl">
      <span className="text-black">
        {guess.number}
      </span>
      <span className="text-gray-700">
        {guess.tip}
      </span>
      <span className={`font-bold ${guess.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
        {guess.isCorrect ? '✓' : '✗'}
      </span>
    </div>
  );
}