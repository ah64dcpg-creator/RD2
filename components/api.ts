export async function apiGet(path: string){
  const base = (typeof window==='undefined') ? (process.env.NEXT_PUBLIC_API_BASE || '') : (localStorage.getItem('rd.api') || process.env.NEXT_PUBLIC_API_BASE || '');
  if(!base) throw new Error('Not connected to backend');
  const url = base.replace(/\/$/,'') + path;
  const res = await fetch(url, { cache: 'no-store' });
  if(!res.ok) throw new Error('Request failed: ' + res.status);
  return res.json();
}
export const fetchEvents = (params: Record<string,string|number|undefined>={}) => {
  const qs = Object.entries(params).filter(([,v])=>v!==undefined).map(([k,v])=>`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`).join('&');
  return apiGet('/events' + (qs?`?${qs}`:''));
}
export const fetchEvent = (id: string|number) => apiGet('/events/'+id);
export const ping = () => apiGet('/health');
