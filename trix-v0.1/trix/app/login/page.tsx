'use client';
import {FormEvent, useState} from 'react';
import {createClient} from '@/lib/supabase/client';
export default function Login(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [mode,setMode]=useState<'signin'|'signup'>('signin'); const [msg,setMsg]=useState(''); const [busy,setBusy]=useState(false);
 async function submit(e:FormEvent){e.preventDefault();setBusy(true);setMsg('');const supabase=createClient();const result=mode==='signin'?await supabase.auth.signInWithPassword({email,password}):await supabase.auth.signUp({email,password});setBusy(false);if(result.error){setMsg(result.error.message);return;} window.location.href='/dashboard';}
 return <main className="auth"><div className="auth-card"><div className="brand large"><span className="brand-mark">T</span><span>Trix</span></div><h1>{mode==='signin'?'Welcome back':'Create your workspace'}</h1><p className="muted">Your self-hosted business platform.</p><form onSubmit={submit}><label>Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label><label>Password<input value={password} onChange={e=>setPassword(e.target.value)} type="password" minLength={6} required/></label><button className="primary full" disabled={busy}>{busy?'Working…':mode==='signin'?'Sign in':'Create account'}</button></form>{msg&&<div className="notice">{msg}</div>}<button className="link-button" onClick={()=>setMode(mode==='signin'?'signup':'signin')}>{mode==='signin'?"Don't have an account? Sign up":"Already have an account? Sign in"}</button></div></main>
}
