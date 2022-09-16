import { render, screen } from '@testing-library/react';
import { GameList } from '.';

import games from './mock';

const sut = () => render(<GameList games={games} />);

describe('GameList', () => {
  it('should render correctly', () => {
    sut();

    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });
});
