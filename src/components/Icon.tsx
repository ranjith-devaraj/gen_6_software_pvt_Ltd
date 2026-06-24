import type { ReactElement } from "react";

type Props = { name: string; size?: number };

const paths: Record<string, ReactElement> = {
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  shield: <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />,
  rocket: <path d="M5 19l-2-2 8-8a7 7 0 019-2l1 1a7 7 0 01-2 9l-8 8-2-2-4 4-2-2 4-4z" />,
  cloud: <path d="M7 18a5 5 0 010-10 7 7 0 0113 1 4 4 0 01-2 8H7z" />,
  code: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  chart: <path d="M3 3v18h18M7 14l4-4 4 4 5-7" />,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></>,
  star: <path d="M12 2l3 6.9 7.6.6-5.8 5 1.8 7.5L12 18l-6.6 4 1.8-7.5L1.4 9.5l7.6-.6L12 2z"/>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></>,
  phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L7.9 9.7a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z"/>,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
  arrow: <path d="M5 12h14M13 5l7 7-7 7"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  home: <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V11z"/>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/></>,
  msg: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1A1.7 1.7 0 009 4.6h0a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v0a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></>,
  users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/></>,
  facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>,
  twitter: <path d="M23 3a10.9 10.9 0 01-3.1 1.5 4.5 4.5 0 00-7.9 3v1A10.7 10.7 0 013 4s-4 9 5 13a11.6 11.6 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.1-.8A7.7 7.7 0 0023 3z"/>,
  linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1112.6 8 4 4 0 0116 11.4z"/><path d="M17.5 6.5h0"/></>,
};

export function Icon({ name, size = 22 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] ?? null}
    </svg>
  );
}
