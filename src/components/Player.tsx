import { getIcon } from './Character';
import { useState } from 'react';

interface Props {
  score: number
  character: string
  onNameChange: (string) => void
}

export function Player({score, character, onNameChange}: Props) {
  const [name, setName] = useState("")

  const onChange = (event) => {
    setName(event.target.value);
    onNameChange(event.target.value);
  }
        
  return <div className="flex flex-col items-center justify-center">
    {character && <div className="title text-9xl">{score}</div>}
    <input className="text-5xl text-center appearance-none bg-transparent border-none
      w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none w-96"
      value={name} onChange={onChange} type="text" placeholder="player" aria-label="Player name" />
    <div className="h-20 w-20 m-4">
      {getIcon(character)}
    </div>
  </div>
}
