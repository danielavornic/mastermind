import { useContext } from "react";
import { GameContext } from "context/Game";

export const useGameContext = () => useContext(GameContext);
