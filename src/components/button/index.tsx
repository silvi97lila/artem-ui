import React from 'react';
import clsx from 'clsx';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    indigo:
      'bg-indigo-900 text-white hover:bg-indigo-700 hover:text-indigo-100 active:bg-indigo-800 active:text-indigo-300 focus-visible:outline-indigo-900',
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue:
      'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    blue:
      'ring-blue-200 text-blue-700 hover:text-blue-900 hover:ring-blue-300 active:bg-blue-100 active:text-blue-600 focus-visible:outline-blue-600 focus-visible:ring-blue-300',
    indigo:
      'ring-indigo-200 text-indigo-700 hover:text-indigo-900 hover:ring-indigo-300 active:bg-indigo-100 active:text-indigo-600 focus-visible:outline-indigo-600 focus-visible:ring-indigo-300',
  },
};
type Props = {
  variant?: 'solid' | 'outline';
  color?: 'slate' | 'white' | 'blue' | 'indigo';
  className?: string;
};
export type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  ...props
}: ButtonProps): JSX.Element {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return <button className={className} {...props} />;
}
