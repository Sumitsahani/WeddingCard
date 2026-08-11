"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronDown, Heart, MapPin, X } from "lucide-react";
import {ScratchReveal} from "./InteractiveMoments";
import {PlayfulLayer} from "./PlayfulDetails";
import GuestExperience from "./GuestExperience";
import WeddingRituals, {GaneshVandana} from "./WeddingRituals";
import FairytaleChapter from "./FairytaleChapter";
import RoyalFrame from "./RoyalFrame";
import CuteRituals from "./CuteRituals";

const events = [
  { icon: "✦", name: "Engagement", date: "17 February 2027", time: "7:00 PM", note: "An evening of rings, promises & celebration" },
  { icon: "❋", name: "Haldi", date: "19 February 2027", time: "10:00 AM", note: "Sunshine, marigolds & joyous laughter" },
  { icon: "❧", name: "Mehendi", date: "19 February 2027", time: "4:00 PM", note: "Henna, music & stories in every line" },
  { icon: "♡", name: "The Wedding", date: "20 February 2027", time: "7:30 PM", note: "Seven vows. Two hearts. One forever." },
];
const CinematicEffects=dynamic(()=>import("./CinematicEffects"),{ssr:false});

function Petals() { return <div className="petals" aria-hidden>{Array.from({length:18},(_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}>❧</i>)}</div> }

function Countdown() {
  const target = useMemo(()=>new Date("2027-02-20T19:30:00+05:30").getTime(),[]);
  const [left,setLeft]=useState<number|null>(null);
  useEffect(()=>{const update=()=>setLeft(Math.max(0,target-Date.now()));update();const id=setInterval(update,1000);return()=>clearInterval(id)},[target]);
  const values=left===null?null:[Math.floor(left/86400000),Math.floor(left/3600000)%24,Math.floor(left/60000)%60,Math.floor(left/1000)%60];
  return <div className="count-grid">{["days","hours","minutes","seconds"].map((label,i)=><div key={label}><strong>{values?String(values[i]).padStart(2,"0"):"--"}</strong><span>{label}</span></div>)}</div>
}

export default function WeddingExperience(){
  const [open,setOpen]=useState(false); const [lightbox,setLightbox]=useState(false);
  const enter=()=>setOpen(true);
  useEffect(()=>{const els=document.querySelectorAll(".reveal");const ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("seen")),{threshold:.16});els.forEach(e=>ob.observe(e));return()=>ob.disconnect()},[]);
  return <main className={open?"is-open":""}>
    <CinematicEffects/>
    <RoyalFrame/>
    <PlayfulLayer/>
    <section className="opening" aria-label="Open the wedding invitation">
      <div className="door door-left"/><div className="door door-right"/><div className="door-copy">
        <span className="eyebrow">You are invited</span><div className="monogram">A <i>&</i> S</div><h1>Ankit & Shreya</h1><p>20 · 02 · 2027</p>
        <button onClick={enter}><span>Open the invitation</span><Heart size={15}/></button><small>A beautiful journey awaits</small>
      </div><ChevronDown className="down"/><Petals/>
    </section>

    <GaneshVandana/>
    <FairytaleChapter/>

    <section id="introduction" className="portrait-story ivory">
      <div className="portrait-card reveal"><Image src="/images/couple.png" alt="Ankit and Shreya together" fill sizes="(max-width: 700px) 90vw, 45vw"/></div>
      <div className="portrait-copy reveal"><span className="eyebrow dark">A love, written in the stars</span><h2>Meet<br/><em>Shreya</em></h2><p>Grace in her smile, warmth in her heart, and a little magic everywhere she goes.</p><span className="fine">THE BRIDE</span></div>
    </section>

    <section className="portrait-story groom">
      <div className="portrait-copy reveal"><span className="eyebrow">And then came</span><h2>Meet<br/><em>Ankit</em></h2><p>Her forever partner, her safest place, and the reason every adventure feels like home.</p><span className="fine">THE GROOM</span></div>
      <div className="arch reveal"><Image src="/images/couple.png" alt="Ankit, the groom, with Shreya" fill sizes="(max-width: 700px) 90vw, 45vw"/></div>
    </section>

    <section className="forever scene"><Image src="/images/couple.png" alt="Ankit and Shreya" fill sizes="100vw"/><div className="scrim"/><div className="scene-copy reveal"><span className="eyebrow">Together, forever begins</span><h2>Ankit <i>&</i> Shreya</h2><p>Some stories are meant to last beyond a lifetime.</p></div><Petals/></section>

    <ScratchReveal/>

    <section className="timeline ivory"><header className="section-head reveal"><span className="eyebrow dark">A thousand little moments</span><h2>Our Story</h2><p>Every love story is beautiful, but ours is our favourite.</p></header><div className="line">
      {[['01','The Beginning','Where two paths crossed and the world quietly changed.'],['02','The First Chapter','From shy hellos to countless memories.'],['03','The Question','A yes, a promise, and happy tears.'],['04','The Forever','20 February 2027 — and now, forever begins.']].map(x=><article className="reveal" key={x[0]}><b>{x[0]}</b><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}
    </div></section>

    <section className="celebrations"><header className="section-head reveal"><span className="eyebrow">Save the dates</span><h2>Four days. One forever.</h2></header><div className="event-grid">{events.map((e,i)=><article className={`event reveal ${e.name==="Haldi"?"haldi-event":""}`} key={e.name} onClick={()=>e.name==="Haldi"&&window.dispatchEvent(new Event("haldi-splash"))}><span>{e.icon}</span><small>0{i+1}</small><h3>{e.name}</h3><p className="date">{e.date}</p><p>{e.time}</p><i>{e.note}</i>{e.name==="Haldi"&&<button className="play-haldi">Tap for haldi ✦</button>}</article>)}</div></section>

    <GuestExperience/>
    <CuteRituals/>
    <WeddingRituals/>

    <section className="wedding scene"><div className="scrim"/><div className="scene-copy reveal"><span className="eyebrow">The sacred celebration</span><h2>The Wedding</h2><div className="ornament">❧</div><p className="wdate">Saturday · 20 February 2027</p><p>Wedding ceremony from 7:30 in the evening</p><p className="script">Join us as we begin our forever.</p></div></section>

    <section className="countdown ivory"><div className="reveal"><span className="eyebrow dark">The wait is almost over</span><h2>Counting Down<br/><em>to Forever</em></h2><Countdown/></div></section>

    <section className="venue"><div className="venue-art reveal"><Image src="/images/mandap.png" alt="Wedding venue mandap" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="venue-copy reveal"><MapPin/><span className="eyebrow">Where we say I do</span><h2>The Royal Courtyard</h2><p>Venue details to be announced<br/>Madhya Pradesh, India</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div></section>

    <section className="gallery ivory"><header className="section-head reveal"><span className="eyebrow dark">Frames from our story</span><h2>A few moments,<br/><em>forever ours.</em></h2></header><div className="gallery-grid">
      {["couple.png","mandap.png","couple.png","door.png"].map((src,i)=><button className={`g${i+1} reveal`} key={i} onClick={()=>setLightbox(true)}><Image src={`/images/${src}`} alt={["That smile","That dream","Us","A new beginning"][i]} fill sizes="(max-width: 700px) 90vw, 40vw"/><span>{["That smile.","That dream.","Us.","A new beginning."][i]}</span></button>)}
    </div></section>

    <footer className="closing scene diya-scene"><Image src="/images/couple.png" alt="Ankit and Shreya begin their forever" fill sizes="100vw"/><div className="scrim"/><button className="light-diya" onClick={e=>e.currentTarget.closest(".diya-scene")?.classList.add("lit")}><i>♨</i><span>Light the diya</span></button><div className="scene-copy reveal"><span className="eyebrow">And so</span><h2>Our forever begins.</h2><div className="names">Ankit <i>♡</i> Shreya</div><p>20 · February · 2027</p><small>With love, laughter & happily ever after.</small></div><Petals/></footer>
    {lightbox&&<div className="lightbox" role="dialog" aria-modal="true"><button onClick={()=>setLightbox(false)} aria-label="Close"><X/></button><Image src="/images/couple.png" alt="Ankit and Shreya" fill sizes="90vw"/></div>}
  </main>
}
