import React, {HTMLAttributes} from 'react';
import clsx from "clsx";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'stroke' | 'flat';
  disabled?: boolean;
  selected?: boolean;
};

const Button = (props: ButtonProps) => {
  const { className, variant, disabled, selected, ...rest } = props;
  return (
    <button
      className={clsx(className, 'relative duration-200', {
        // Stroke
        ['font-gt-sectra-fine tracking-[.6em] text-[1.6em] uppercase z-10 text-col-2 duration-200 after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-z-10 ' +
        'after:w-[12rem] after:h-[3rem] after:-translate-x-[166%] after:translate-y-1/2 after:rotate-[-12deg] after:opacity-0 after:bg-cover ' +
        'after:hover:-translate-x-[60%] after:hover:-translate-y-1/2 after:duration-200 after:hover:opacity-50 ' +
        'hover:text-col-5 after:bg-[url("/Button-stroke.png")]']: variant === 'stroke',
        ['after:!-translate-x-[60%] after:!-translate-y-1/2 after:!opacity-50 !text-col-5']: variant === 'stroke' && selected,
        ['pointer-events-none !text-col-1']: variant === 'stroke' && disabled,
        // Flat
        ['p-2 border-2 border-col-2/50 rounded bg-col-4 hover:bg-col-1 text-col-2']: variant === 'flat',
        ['!bg-col-1/100']: variant === 'flat' && selected,
        ['text-col-2/40 pointer-events-none']: variant === 'flat' && disabled,
      })}
      {...rest}
    />
  );
};

export default Button;