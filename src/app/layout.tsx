import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oxide Design System Library',
  description: 'A Figma-style design system library for Oxide, built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-6">
            <h1 className="text-2xl font-bold mb-8 tracking-tight">Oxide Design System</h1>
            <nav className="flex flex-col gap-4 text-lg">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/colors" className="hover:text-blue-600 transition">Colors</Link>
              <Link href="/typography" className="hover:text-blue-600 transition">Typography</Link>
              <Link href="/spacing" className="hover:text-blue-600 transition">Spacing</Link>
              <Link href="/icons" className="hover:text-blue-600 transition">Icons</Link>
              <Link href="/components" className="hover:text-blue-600 transition">Components</Link>
              <Link href="/tokens" className="hover:text-blue-600 transition">Tokens</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            </nav>
            <div className="mt-auto pt-8 text-xs text-gray-400">© {new Date().getFullYear()} Oxide Computer Company</div>
          </aside>
          <main className="flex-1 p-10 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
