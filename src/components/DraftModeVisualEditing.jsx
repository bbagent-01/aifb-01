'use client';

import { usePathname } from 'next/navigation';
import { VisualEditing } from 'next-sanity/visual-editing';

export default function DraftModeVisualEditing() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return <VisualEditing />;
}
