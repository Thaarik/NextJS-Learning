import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
// secondary font to be applied in p tag of page.tsx
export const lusitana = Lusitana({subsets:['latin'], weight: ["400","700"]});