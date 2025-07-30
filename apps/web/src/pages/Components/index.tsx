import { ResultCard } from "../../components/ResultCard/ResultCard";
import { CardResult } from "../../components/ResultCard/cardConfig";

export const ComponentsPage = () => {
  return (
    <div>
      <ResultCard result={CardResult.GOLD} />
      <ResultCard result={CardResult.SILVER} />
      <ResultCard result={CardResult.BRONZE} />
    </div>
  );
};
