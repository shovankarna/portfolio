import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { Tuple } from 'types';

export function useRandomColorPair(): Tuple<string> {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkColors: Tuple<string>[] = [
    ['#F5E1FF', '#CAF0F8'],
    ['#EAF4F4', '#FFEDD8'],
    ['#F9E5D8', '#EDE9F6'],
    ['#EEEBFF', '#FFFAD4'],
  ];

  const lightColors: Tuple<string>[] = [
    ['#E879F9', '#38BDF8'], // Fuchsia 400, Sky 400
    ['#2DD4BF', '#FBBF24'], // Teal 400, Amber 400
    ['#FB7185', '#A78BFA'], // Rose 400, Violet 400
    ['#A78BFA', '#38BDF8'], // Violet 400, Sky 400
  ];

  const random = useMemo(
    () => Math.round(Math.random() * (darkColors.length - 1)),
    [],
  );

  const colors =
    mounted && resolvedTheme === 'light' ? lightColors : darkColors;

  return colors[random];
}
