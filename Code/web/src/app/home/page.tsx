"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
import { getCurrentMatch, startMatch , sendGuess  } from "@/services/match";
import { ToastContainer, toast } from 'react-toastify'
import { Guess, Match } from "@/lib/types";
import { GuessHistorySection } from "@/components/home/guess-history-section";
import Navbar from '@/components/navbar';

import TipModal from "@/components/home/tip-model";

const Home = () => {

  const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
  const [guessNumber, setGuessNumber] = useState<string>("");
  const [lastGuessResult, setLastGuessResult] = useState<Guess | null>(null);

  useEffect(() => {

    const fetchCurrentMatch = async () => {
      try {

        const match = await getCurrentMatch();

        if (match != null) {

          setCurrentMatch(match);
          console.log('curent match found: ' + match.id);

        }

      } catch (error) {

        console.error("Failed to fetch current match:", error);

      }

    };

    fetchCurrentMatch();
  }, []);


  const handleStartMatch = async () => {

    try {
      const newMatch = await startMatch();

      setLastGuessResult(null);
      
      if (newMatch != null) {

        setCurrentMatch(newMatch);

        toast.success("New match created",{ 
          autoClose: 5000,
          pauseOnHover: true,
          position: "bottom-right",
          theme: "colored",
        });

      }

    } catch (error) {

      toast.error("Failed to start new match: " + error, { 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });

    }

  };


  const handleSendGuess = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const number = parseInt(guessNumber);

      if (isNaN(number) || number > 100 || number < 1) {
        toast.error("Please enter a valid number between 1 and 100",{ 
          autoClose: 5000,
          pauseOnHover: true,
          position: "bottom-right",
          theme: "colored",
        });
        return;
      }

      const newGuess : Guess = await sendGuess({ number: number });
      const updatedMatch = await getCurrentMatch();

      setCurrentMatch(updatedMatch);

      if(newGuess.isCorrect){
        setCurrentMatch(null);
      }

      setLastGuessResult(newGuess);


      toast.success("Guess send",{ 
        autoClose: 5000,
        pauseOnHover: true,
        position: "bottom-right",
        theme: "colored",
      });

    } catch (error: any) {

      console.error("Failed to send guess:", error);
      alert(error.message || "Error sending guess.");

    }

  };




  return (
    <div>
      <Navbar/>
      <main className="flex flex-col items-center min-h-screen px-6 bg-stone-100">
        <section className="flex flex-col h-[200px] items-center justify-center">
        {lastGuessResult && (
                <div className="mb-8 ">
                  <TipModal number={lastGuessResult.number} tip={lastGuessResult.tip} />
                </div>
        )}
        </section>

        <section className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center transition-all duration-300 border border-gray-200">
          {currentMatch == null ? (
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
              <p className="text-gray-500 mb-6 text-lg">Enter your best guess below!<br/><span className="text-xs">Only numbers between 1 / 100</span></p>
              <Input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={guessNumber}
                  onChange={(e) => setGuessNumber(e.target.value)}
                  placeholder="Your guess..."
                />
              <Button
                  type="submit"
                  className="w-full bg-blue-600 mt-5 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                  onClick={handleSendGuess}
              >Submit </Button>
            </>
          )}
        </section>
        <GuessHistorySection guesses={currentMatch?.guesses}/>
        <ToastContainer/>
      </main>
    </div> 
  );
}
export default Home;