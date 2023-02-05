import React, { useEffect, useState } from 'react';
import * as settings from '../../../../settings';
import { Player } from '../../../components/Player';
import { randCharacter } from '../../../components/Character';
import { randStage, getIcon } from '../../../components/Stage';

export default function HomePage() {
  const [player1Character, setPlayer1Charcter] = useState("")
  const [player2Character, setPlayer2Charcter] = useState("")
  const [stage, setStage] = useState("")

  const shuffle = () => {
    // TODO animate shuffle
    setPlayer1Charcter(randCharacter());
    setPlayer2Charcter(randCharacter());
    setStage(randStage);
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="title uppercase text-5xl m-4 text-center text-white">
        {settings.title}
      </h1>
      <div className="p-16 text-gray-300 flex flex-col">
        <div className="flex mb-4">
          <Player character={player1Character}/>
          <span className="title text-8xl">VS</span>
          <Player character={player2Character}/>
        </div>
        <div className="flex m-4 items-center justify-center">
          {getIcon(stage)}
        </div>
        <div className="flex items-center justify-center m-8">
          <button className="title text-2xl bg-teal-500 hover:bg-teal-400 text-white py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={shuffle}>
              Shuffle
          </button>
        </div>
      </div>
      <div className="w-64 flex flex-col items-center justify-center">
        <div className="text-gray-300">Built by blorppppp</div>
        <span><a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-indigo-700 mr-2 hover:underline">
          Buy me a coffee
      </a>☕</span>
      </div>
    </div>
  );
}
