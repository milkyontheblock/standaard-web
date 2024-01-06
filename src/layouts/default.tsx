import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'The Cloud Ones'
};

type LayoutProps = {
  children: ReactNode,
  className?: string
}

export default function Layout(props: LayoutProps) {
  return (
    <main className={props.className}> 
      {props.children}
    </main>
  );
}