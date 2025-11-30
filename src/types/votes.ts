export default interface Vote {
  good: number;
  neutral: number;
  bad: number;
}
export type VoteType = "good" | "neutral" | "bad";
