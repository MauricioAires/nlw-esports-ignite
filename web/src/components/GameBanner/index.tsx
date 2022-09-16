/**
 * Componente React:
 *
 * Um função que retorna um conjunto de HTML
 */

export type GameBannerProps = {
  bannerUrl: string;
  title: string;
  adsCount: number;
};

export const GameBanner = ({ adsCount, bannerUrl, title }: GameBannerProps) => (
  <a href="" className="relative rounded-lg overflow-hidden">
    <img src={bannerUrl} alt={title} />

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <h2 className="font-bold text-white block">{title}</h2>
      <span className="text-zinc-300 block ">{adsCount} anúncio(s)</span>
    </div>
  </a>
);
