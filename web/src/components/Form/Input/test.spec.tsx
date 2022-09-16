import { render, screen } from '@testing-library/react';

import { Input as InputComponent } from '.';

const sut = () => render(<InputComponent placeholder="input placeholder" />);

describe('<Input />', () => {
  it('should render correctly', () => {
    const { container } = sut();

    expect(
      screen.getByPlaceholderText(/input placeholder/i)
    ).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <input
          autocomplete="off"
          class="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
          placeholder="input placeholder"
        />
      </div>
    `);
  });
});
