'use client'
import Link from 'next/link'
import { isConnected, getApiBase } from '../components/config'
export default function Home(){
  const connected = isConnected();
  const base = getApiBase();
  return (
    <div>
      <h1>Find gentle support near you</h1>
      {!connected && (<div className="card"><strong>Not connected.</strong><p className="small">Tap <Link href="/connect">Connect</Link> and paste your backend URL.</p></div>)}
      {connected && (<p className="card" style={{fontSize:14,color:'#cbd5e1'}}>Connected to: <code>{base}</code></p>)}
      <div style={{marginTop:14, display:'flex', gap:10, flexWrap:'wrap'}}>
        <Link className="button" href="/search">Open the app</Link>
        <a className="button" href="https://988lifeline.org/" target="_blank">Crisis 988</a>
      </div>
    </div>
  );
}
