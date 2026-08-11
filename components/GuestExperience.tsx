"use client";

import {useState} from "react";
import {Camera, Check, Heart, Music, Sparkles, Utensils, Zap} from "lucide-react";

const kit=[
  {icon:Utensils,title:"Bring an appetite",text:"Calories consumed at weddings don't count. Family rule."},
  {icon:Music,title:"Warm up those moves",text:"The dance floor will remember everything. We won't."},
  {icon:Camera,title:"Charge your phone",text:"Candid photographers are everywhere. Look alive."},
  {icon:Heart,title:"Pack happy tears",text:"Waterproof kajal is not optional. Consider this a warning."},
];
export default function GuestExperience(){
  const [team,setTeam]=useState<"ankit"|"shreya"|null>(null);
  return <>
    <section className="guest-pass">
      <div className="pass-copy"><span className="eyebrow">Your official invitation</span><h2>You&apos;re not just<br/>a guest.</h2><p>You are part of the laughter, the dancing, the happy tears—and every memory we are about to make.</p><div className="pass-stamp">ADMIT ONE<br/><b>VERY IMPORTANT GUEST</b></div></div>
      <div className="ticket"><div className="ticket-top"><small>THE WEDDING OF</small><h3>Ankit <i>&</i> Shreya</h3><span>20 · FEB · 2027</span></div><div className="ticket-cut"/><div className="ticket-bottom"><span>Dress fabulous</span><span>Dance mandatory</span><span>Love unlimited</span><b>AS2027</b></div></div>
    </section>

    <section className="squad"><div className="squad-head"><span className="eyebrow">Choose wisely</span><h2>Whose squad<br/>are you on?</h2><p>No pressure. We are definitely keeping score.</p></div><div className="team-buttons"><button className={team==="ankit"?"picked":""} onClick={()=>setTeam("ankit")}><span>Team</span><b>Ankit</b><small>Ready with the baraat moves</small>{team==="ankit"&&<Check/>}</button><div className="versus">OR</div><button className={team==="shreya"?"picked":""} onClick={()=>setTeam("shreya")}><span>Team</span><b>Shreya</b><small>Here for the bride, obviously</small>{team==="shreya"&&<Check/>}</button></div>{team&&<div className="team-result"><Sparkles/> Welcome to Team {team==="ankit"?"Ankit":"Shreya"}. Your first duty: own the dance floor.</div>}</section>

    <section className="dress-code"><header><span className="eyebrow dark">The wedding wardrobe</span><h2>Come dressed<br/><em>to celebrate.</em></h2></header><div className="fabric-row"><article className="haldi-look"><i/><span>Haldi</span><h3>Sunshine & Marigold</h3><p>Yellow · Ivory · Orange</p></article><article className="mehendi-look"><i/><span>Mehendi</span><h3>Garden Royalty</h3><p>Emerald · Sage · Gold</p></article><article className="wedding-look"><i/><span>Wedding</span><h3>Regal Evening</h3><p>Burgundy · Jewel tones · Gold</p></article></div><small>Style suggestion, not a uniform. Your favourite festive look is always perfect.</small></section>

    <section className="survival"><header><Zap/><span>Guest survival guide</span><h2>Four things<br/>to remember</h2></header><div className="kit-grid">{kit.map(({icon:Icon,title,text},i)=><article key={title}><b>0{i+1}</b><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

  </>
}
