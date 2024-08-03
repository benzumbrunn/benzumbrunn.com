import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script defer data-domain="benzumbrunn.com" src="https://plausible.io/js/script.js"></script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
