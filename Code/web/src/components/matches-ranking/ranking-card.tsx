import { RankingCardProps } from "@/lib/types";

  export default function RankingCard({
    username,
    matchId,
    correctNumber,
    guessesCount,
  }: RankingCardProps) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition w-full max-w-[500px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-600 capitalize">
            {username}
          </h2>
          <span className="text-sm font-medium text-gray-500">
            Match #{matchId}
          </span>
        </div>
  
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold text-gray-800">Correct number:</span>{' '}
            {correctNumber}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Tries:</span>{' '}
            {guessesCount}
          </p>
        </div>
      </div>
    );
  }