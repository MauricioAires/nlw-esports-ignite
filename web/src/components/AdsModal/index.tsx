import { useEffect, useState } from 'react';
import { Check, GameController } from 'phosphor-react';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';

import { CreateAdBanner } from 'src/components/CreateAdBanner';
import { Input } from 'src/components/Form/Input';

import { Game } from '../GameList';

export const AdsModal = () => {
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
    <Dialog.Root>
      <CreateAdBanner />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 shadow-lg shawod-black/5 rounded-lg w-[480px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-3xl  font-black">
            Publique um anúncio
          </Dialog.Title>

          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o game?
              </label>
              <select
                id="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
              >
                <option disabled value="" selected>
                  Selecione o game que deseja jogar
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">
                Seu nome(ou nickname)
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Como te chama dentro do game?"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying" className="font-semibold">
                  Joga há quantos anos?
                </label>
                <Input
                  id="yarnsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>

              <div>
                <label htmlFor="discor" className="font-semibold">
                  Qual o seu discord?
                </label>
                <Input id="discord" type="text" placeholder="Usuário#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays" className="font-semibold">
                  Quando costuma jogar?
                </label>

                <div className="grid grid-cols-4 gap-2">
                  <button
                    title="Domingo"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    D
                  </button>
                  <button
                    title="Segunda"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>
                  <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">
                    T
                  </button>
                  <button title="Quata" className="w-8 h-8 rounded bg-zinc-900">
                    Q
                  </button>
                  <button
                    title="Quinta"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    Q
                  </button>
                  <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">
                    S
                  </button>
                  <button
                    title="Sabado"
                    className="w-8 h-8 rounded bg-zinc-900"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart" className="font-semibold">
                  Qual horáriodo dia?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root className="w-6 h-6  p-1 rounded bg-zinc-900">
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="voice">
                Constumo me conectar com ao chat de voz
              </label>
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                type="button"
                className="hover:bg-zinc-600 bg-zinc-500 px-5 h-12 rounded-md font-semibold"
              >
                Cancelar
              </Dialog.Close>

              <button
                type="submit"
                className="hover:bg-violet-600 bg-violet-500 flex items-center px-5 gap-4 h-12 rounded-md font-semibold"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
