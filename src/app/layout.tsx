import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='grid max-w-screen-lg m-auto min-h-screen grid-rows-[60px,1fr,60px] px-4 my-2'>
          <NavBar>
            BLOG
          </NavBar>
          <section className='m-1 p-1'>
            {children}
          </section>
          <Footer className='flex items-center justify-center'>
            HenryTC
          </Footer>
        </main>
      </body>
    </html>
  )
}
