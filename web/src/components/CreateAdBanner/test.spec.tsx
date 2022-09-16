import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

import * as Dialog from '@radix-ui/react-dialog';

import { CreateAdBanner } from '.';

const sut = () =>
  render(
    <Dialog.Root>
      <CreateAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Modal title</Dialog.Title>

          <p>Modal Content</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );

describe('<CreateAdBanner />', () => {
  it('should render correclty', () => {
    const { container } = sut();
    expect(
      screen.getByRole('heading', {
        name: /Não encontrou seu duo\?/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Publique um anúncio para encontrar novos players!/)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /Publica anúncio/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should open modal when click button', async () => {
    sut();

    expect(
      screen.queryByRole('heading', {
        name: /Modal title/i,
      })
    ).not.toBeInTheDocument();

    await useEvent.click(
      screen.getByRole('button', {
        name: /Publica anúncio/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /Modal title/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Modal Content/i)).toBeInTheDocument();
  });

  it('should close modal when press [esc]', async () => {
    sut();

    // abrir modal
    await useEvent.click(
      screen.getByRole('button', {
        name: /Publica anúncio/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /Modal title/i,
      })
    ).toBeInTheDocument();

    await useEvent.keyboard('{ESCAPE}');

    expect(
      screen.queryByRole('heading', {
        name: /Modal title/i,
      })
    ).not.toBeInTheDocument();
  });
});
