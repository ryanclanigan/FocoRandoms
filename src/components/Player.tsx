import { getIcon } from './Character';
import { useState } from 'react';

interface Props {
  character: string
}

export function Player({character}: Props) {
  const [name, setName] = useState("")

  const onChange = (event) => {
    setName(event.target.value);
  }
        
  return <div className="flex flex-col items-center justify-center">
    <input className="text-5xl text-center appearance-none bg-transparent border-none
      w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none w-96"
      value={name} onChange={onChange} type="text" placeholder="player" aria-label="Player name" />
    <div className="h-20 w-20 m-4">
      {character && getIcon(character)}
      {!character && <span className="title text-8xl">?</span>}
    </div>
  </div>
}
