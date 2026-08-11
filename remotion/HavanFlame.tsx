import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const tongues=[
  {x:320,w:145,h:360,phase:0,color:'#ff3b00'},
  {x:252,w:100,h:260,phase:1.7,color:'#ff7800'},
  {x:390,w:112,h:285,phase:3.1,color:'#ff6400'},
  {x:320,w:82,h:235,phase:4.4,color:'#ffd84a'},
  {x:300,w:45,h:150,phase:2.2,color:'#fff2a3'},
];

export const HavanFlame=()=>{
  const frame=useCurrentFrame();
  return <AbsoluteFill style={{background:'#000',overflow:'hidden'}}>
    <div style={{position:'absolute',left:110,bottom:42,width:420,height:125,borderRadius:'50%',background:'radial-gradient(ellipse,#ff9a16 0%,#b22b00 28%,#210400 68%,transparent 72%)',filter:'blur(12px)',opacity:.95}}/>
    {tongues.map((t,i)=>{
      const sway=Math.sin(frame*.15+t.phase)*25; const pulse=1+Math.sin(frame*.21+t.phase)*.11;
      return <svg key={i} width={t.w*2} height={t.h+70} viewBox={`0 0 ${t.w*2} ${t.h+70}`} style={{position:'absolute',left:t.x-t.w,bottom:65,filter:`blur(${i===4?2:7}px) drop-shadow(0 0 22px ${t.color})`,opacity:i===0?.82:.94,translate:`${sway}px 0`,scale:`${pulse} 1`}}>
        <path fill={t.color} d={`M ${t.w} 0 C ${t.w*.42} ${t.h*.28}, ${t.w*1.55} ${t.h*.38}, ${t.w*.35} ${t.h*.66} C ${t.w*.08} ${t.h*.84}, ${t.w*.5} ${t.h}, ${t.w} ${t.h} C ${t.w*1.5} ${t.h}, ${t.w*1.92} ${t.h*.84}, ${t.w*1.65} ${t.h*.66} C ${t.w*.45} ${t.h*.38}, ${t.w*1.58} ${t.h*.28}, ${t.w} 0 Z`}/>
      </svg>
    })}
    {Array.from({length:28},(_,i)=>{
      const cycle=(frame*3+i*23)%430; const y=510-cycle; const x=320+Math.sin(i*7.2+frame*.08)*(75+((i*19)%120));
      return <div key={i} style={{position:'absolute',left:x,top:y,width:4+(i%4)*2,height:4+(i%4)*2,borderRadius:'50%',background:i%3?'#ff8a18':'#ffe28c',boxShadow:'0 0 10px #ff5b00',opacity:interpolate(cycle,[0,80,360,430],[0,1,.8,0])}}/>
    })}
    <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 50% 70%,transparent 0 28%,#000 72%)'}}/>
  </AbsoluteFill>
};
