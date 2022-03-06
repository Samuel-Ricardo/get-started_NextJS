import '../styles/globals.css';
import '../styles/app.css'; // global styles can be merged on this file

function MyApp({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp;
