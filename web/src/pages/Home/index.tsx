import { useEffect, useState } from 'react';

import { AdsModal } from 'src/components/AdsModal';

import { logoImg } from 'src/assets';

import { Game, GameList } from 'src/components/GameList';

export function Home() {
  const [games, setGames] = useState<Game[]>([]);
  // hook de efeitos colaterais
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
      });
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 ">
      <img src={logoImg} alt="Logo esports nlw" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu
        <span className="bg-nlw-gradient mx-3 text-transparent bg-clip-text">
          duo
        </span>
        está aqui.
      </h1>

      <GameList games={games} />
      <AdsModal />
    </div>
  );
}
