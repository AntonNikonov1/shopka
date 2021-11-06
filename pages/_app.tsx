import type { AppProps } from 'next/app'
import '../styles/reset.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
