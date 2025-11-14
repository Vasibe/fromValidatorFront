export const metadata = {
  title: 'GymFinity',
  description: 'Aplicación con múltiples páginas',
  icons: {
    icon: '/logoGym.png', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}