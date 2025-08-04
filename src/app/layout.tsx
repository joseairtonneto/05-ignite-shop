import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import type { Metadata } from 'next'

import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from './styles-layout'

globalStyles()

export const metadata: Metadata = {
  title: 'Ignite Shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <Container>
          <Header>
            <Image src={logoImg} alt='' />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  )
}
