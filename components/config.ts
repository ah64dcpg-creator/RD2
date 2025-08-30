export function getApiBase(): string {
  if (typeof window === 'undefined') return process.env.NEXT_PUBLIC_API_BASE || '';
  return localStorage.getItem('rd.api') || process.env.NEXT_PUBLIC_API_BASE || '';
}
export function setApiBase(url: string){ if(typeof window!=='undefined') localStorage.setItem('rd.api', url); }
export function isConnected(): boolean { const b=getApiBase(); return !!b && /^https?:\/\//.test(b); }
