import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo, useMemo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function ButtonComponent({ iconName, title, selected, ...rest }: ButtonProps) {
  const icon = useMemo(() => iconName, [iconName])
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      <Icon name={icon} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected;
})