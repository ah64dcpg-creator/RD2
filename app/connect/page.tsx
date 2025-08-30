'use client'
import { setApiBase, getApiBase } from '../../components/config'
import { ping } from '../../components/api'
import { useState } from 'react'

export default function Connect(){
  const [url, setUrl] = useState(getApiBase());
  const [status, setStatus] = useState<string>('');
  async function save(){
    try{
      setStatus('Testing...');
      setApiBase(url.trim());
      const j = await ping();
      setStatus('Connected ✓ ' + (j.time || ''));
    }catch(ex:any){
      setStatus('Could not connect. Please check the URL and try again.');
    }
  }
  return (
    <div>
      <h1>Connect to your backend</h1>
      <input className="input" placeholder="https://yourapp.up.railway.app" value={url} onChange={e=>setUrl(e.target.value)} />
      <div style={{marginTop:10, display:'flex', gap:8}}>
        <button className="button" onClick={save}>Save & Test</button>
        <a className="button" href="/search">Go to Search</a>
      </div>
      {status && <p style={{marginTop:8}}>{status}</p>}
    </div>
  )
}
