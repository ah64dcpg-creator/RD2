import './globals.css'
import Link from 'next/link'
export default function RootLayout({ children }:{children:React.ReactNode}){
  return (<html lang="en">
    <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </head>
    <body>
      <header className="header">
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
          <strong>Raising Daisies</strong>
          <nav style={{display:'flex',gap:12}}>
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/connect">Connect</Link>
            <Link href="/qr">QR</Link>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <div style={{position:'sticky',bottom:0,background:'rgba(255,255,255,.03)',borderTop:'1px solid rgba(148,163,184,.15)',padding:'10px 0'}}>
        <div className="container" style={{fontSize:12,color:'#cbd5e1'}}>Need help now? Call/Text/Chat <a href="https://988lifeline.org/" target="_blank">988</a></div>
      </div>
      <script dangerouslySetInnerHTML={{__html:`if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js')}`}} />
    </body>
  </html>)
}