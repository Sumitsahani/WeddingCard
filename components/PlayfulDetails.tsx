"use client";

import {useEffect,useState} from "react";

export function HiddenRing({n}: {n:number}){
  const [found,setFound]=useState(false);
  return <button className={`hidden-ring ring-${n} ${found?"found":""}`} aria-label={`Hidden ring ${n}`} onClick={()=>{if(found)return;setFound(true);window.dispatchEvent(new CustomEvent("ring-found",{detail:n}))}}><img src="/images/details/rings.png" alt=""/><span>found!</span></button>
}

export function PlayfulLayer(){
  const [haldi,setHaldi]=useState(false);
  useEffect(()=>{const splash=()=>{setHaldi(true);setTimeout(()=>setHaldi(false),1800)};window.addEventListener("haldi-splash",splash);return()=>window.removeEventListener("haldi-splash",splash)},[]);
  return <>{haldi&&<div className="haldi-burst" aria-hidden>{Array.from({length:16},(_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}><img src="/images/details/marigolds.png" alt=""/></i>)}<strong>Rang barse!</strong></div>}</>
}
