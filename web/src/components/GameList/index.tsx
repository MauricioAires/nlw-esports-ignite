import { GameBanner } from 'src/components/GameBanner';

export type Game = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

type GameListProps = {
  games: Game[];
};

export const GameList = ({ games }: GameListProps) => (
  <div className="grid grid-cols-6 gap-6 mt-16">
    {games.map((game) => (
      <GameBanner
        key={game.id}
        title={game.title}
        adsCount={game._count.ads}
        bannerUrl={game.bannerUrl}
      />
    ))}
  </div>
);
