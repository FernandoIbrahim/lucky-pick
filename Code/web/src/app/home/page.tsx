"use client";

import { Input } from "@/components/ui/input";

import { useState, useEffect } from "react";
import { getCurrentMatchId, startMatch as startNewMatch } from "@/services/match";

const Home = () => {
  const [matchId, setMatchId] = useState(null); // null = no match

  useEffect(() => {

    const fetchMatch = async () => {
      try {

        const currentMatchId = await getCurrentMatchId();

        if (currentMatchId != null) {

          setMatchId(currentMatchId);
          console.log('curent match finded: ' + currentMatchId);
        }

      } catch (error) {

        console.error("Failed to fetch current match:", error);

      }

    };

    fetchMatch();
  }, []);

  const handleStartMatch = async () => {

    try {
      const newMatchId = await startNewMatch();

      if (newMatchId != null) {
        setMatchId(newMatchId);
      }

    } catch (error) {

      console.error("Failed to start new match:", error);

    }
  };




  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-stone-100">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center transition-all duration-300 border border-gray-200">
        {matchId == null ? (
          <>
            <h1 className="text-5xl font-extrabold mb-8 text-gray-800"> Welcome</h1>
            <p className="text-gray-500 mb-6 text-lg">Ready to challenge your mind?</p>
            <button
              onClick={handleStartMatch}
              className="bg-blue-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition duration-200"
            >
              Start New Match
            </button>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-extrabold mb-8 text-gray-800"> Guess the Number</h1>
            <p className="text-gray-500 mb-6 text-lg">Enter your best guess below</p>
            <Input className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </>
        )}
      </div>
    </div>
  );
}
export default Home;