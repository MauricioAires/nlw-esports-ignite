import { render, screen } from '@testing-library/react';
import { GameBanner } from '.';

const sut = () =>
  render(
    <GameBanner adsCount={1} bannerUrl="/img.jpg" title="game banner title" />
  );

describe('<GameBanner />', () => {
  it('should render correctly', () => {
    const { container } = sut();

    expect(screen.getByRole('img')).toHaveAttribute('src', '/img.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'game banner title');
    expect(
      screen.getByRole('heading', {
        name: /game banner title/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/1 anúncio\(s\)/)).toBeInTheDocument();

    expect(container.firstElementChild).toMatchSnapshot();
  });
});
