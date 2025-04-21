'use client';

import { useEffect, useState } from 'react';
import { getMatchRanking } from '@/services/ranking'; 

import { MatchRanking } from '@/lib/types';

import Navbar from '@/components/navbar';
import RankingCard from '@/components/matches-ranking/ranking-card';


export default function MatchesRankingPage() {
  const [ranking, setRanking] = useState<MatchRanking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      const data = await getMatchRanking();
      if (data) setRanking(data);
      setLoading(false);
    };

    fetchRanking();
  }, []);

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto">
        <Navbar/>
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 mt-20">
          🏆 Fast Guessers Ranking
        </h1>

            {loading ? (
              <p className="text-gray-500 text-center">Carregando ranking...</p>
            ) : ranking.length === 0 ? (
              <p className="text-gray-500 text-center">Nenhum ranking disponível.</p>
            ) : (
              <div className=" gap-6 flex flex-col items-center justify-center w-full">

                {ranking.map((item, index) => (
                  <RankingCard key={index} username={item.username} matchId={item.match_id} correctNumber={item.correct_number} guessesCount={item.guesses_count}/>
                ))}
              </div>
            )}
        </div>
  );    
}