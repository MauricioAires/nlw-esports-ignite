import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export const CreateAdBanner = () => (
  <div className="pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden">
    <div className="bg-[#2A2634] px-8 py-6  self-stretch flex justify-between items-center">
      <div>
        <h2 className="text-2xl text-white font-black">
          Não encontrou seu duo?
        </h2>
        <p className="text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </p>
      </div>

      <Dialog.Trigger className="py-3 px-4 bg-violet-600 hover:bg-violet-700 text-white rounded flex items-center gap-3">
        <MagnifyingGlassPlus size={24} /> Publica anúncio
      </Dialog.Trigger>
    </div>
  </div>
);
