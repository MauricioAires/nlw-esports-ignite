import { InputHTMLAttributes } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => (
  <input
    autoComplete="off"
    className="bg-zinc-900 py-3 pl-4 pr-3 rounded text-sm placeholder:text-zinc-500"
    {...props}
  />
);
