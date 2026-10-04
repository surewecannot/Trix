import './globals.css';
import { AppShell } from '@/components/app-shell';
export const metadata = { title: 'Trix', description: 'Self-hosted business workspace and CRM' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><AppShell>{children}</AppShell></body></html>; }
