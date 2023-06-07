import "styles/globals.css"

export const metadata = {
  title: 'Board.',
  description: 'OpeninApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        {children}</body>
    </html>
  )
}
