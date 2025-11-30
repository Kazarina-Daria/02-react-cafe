import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { VoteType } from "../../types/votes";
import type Vote from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../Votes/VoteStats";
import Notification from "../../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Vote>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(option: VoteType) {
    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  }
  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <CafeInfo />
      <div className={css.app}>
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={totalVotes > 0}
        />

        {totalVotes === 0 ? (
          <Notification />
        ) : (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        )}
      </div>
    </>
  );
}
