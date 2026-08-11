"use client";

import {useEffect, useRef} from "react";
import * as THREE from "three";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function CinematicEffects(){
  const canvas=useRef<HTMLCanvasElement>(null);
  const cursor=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile=matchMedia("(max-width: 900px)").matches;
    const ctx=gsap.context(()=>{
      document.documentElement.classList.add("js-motion");
      gsap.to(".film-progress i",{scaleY:1,ease:"none",scrollTrigger:{trigger:"main",start:"top top",end:"bottom bottom",scrub:true}});
      if(!mobile) gsap.utils.toArray<HTMLElement>(".scene").forEach(scene=>{
        const image=scene.querySelector("img");
        if(image) gsap.fromTo(image,{scale:1.08},{scale:1,ease:"none",scrollTrigger:{trigger:scene,start:"top bottom",end:"bottom top",scrub:1.2}});
      });
      if(!mobile){
        gsap.utils.toArray<HTMLElement>(".portrait-card,.arch,.venue-art").forEach(card=>gsap.fromTo(card,{clipPath:"inset(12% 12% 12% 12% round 220px)",scale:.94},{clipPath:"inset(0% 0% 0% 0% round 0px)",scale:1,ease:"power3.out",scrollTrigger:{trigger:card,start:"top 85%",end:"top 30%",scrub:1}}));
        gsap.utils.toArray<HTMLElement>(".event").forEach((card,i)=>gsap.from(card,{y:90,rotateY:i%2?8:-8,opacity:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:card,start:"top 88%"}}));
        gsap.utils.toArray<HTMLElement>(".section-head h2,.portrait-copy h2").forEach(title=>gsap.from(title,{letterSpacing:".12em",opacity:.1,y:35,duration:1.5,ease:"power3.out",scrollTrigger:{trigger:title,start:"top 88%"}}));
      }else{
        gsap.set(".reveal,.event,.section-head h2,.portrait-copy h2,.portrait-card,.arch,.venue-art",{clearProps:"all"});
      }
    });

    const onPointer=(e:PointerEvent)=>{gsap.to(cursor.current,{x:e.clientX,y:e.clientY,duration:.55,ease:"power3.out"})};
    window.addEventListener("pointermove",onPointer);
    if(reduced||!canvas.current)return()=>{ctx.revert();window.removeEventListener("pointermove",onPointer)};

    const renderer=new THREE.WebGLRenderer({canvas:canvas.current,alpha:true,antialias:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,100);camera.position.z=8;
    const count=90,positions=new Float32Array(count*3),colors=new Float32Array(count*3);const gold=new THREE.Color("#d5b36b"),rose=new THREE.Color("#8c1730");
    for(let i=0;i<count;i++){positions[i*3]=(Math.random()-.5)*16;positions[i*3+1]=(Math.random()-.5)*12;positions[i*3+2]=(Math.random()-.5)*8;const c=Math.random()>.28?gold:rose;colors.set([c.r,c.g,c.b],i*3)}
    const geo=new THREE.BufferGeometry();geo.setAttribute("position",new THREE.BufferAttribute(positions,3));geo.setAttribute("color",new THREE.BufferAttribute(colors,3));
    const points=new THREE.Points(geo,new THREE.PointsMaterial({size:.055,transparent:true,opacity:.52,vertexColors:true,blending:THREE.AdditiveBlending,depthWrite:false}));scene.add(points);
    let mx=0,my=0,raf=0;const track=(e:PointerEvent)=>{mx=(e.clientX/innerWidth-.5)*.5;my=(e.clientY/innerHeight-.5)*.35};window.addEventListener("pointermove",track);
    const resize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false)};resize();window.addEventListener("resize",resize);
    const tick=()=>{points.rotation.y+=(mx-points.rotation.y)*.012;points.rotation.x+=(-my-points.rotation.x)*.012;points.position.y+=.0015;if(points.position.y>1)points.position.y=-1;renderer.render(scene,camera);raf=requestAnimationFrame(tick)};tick();
    return()=>{cancelAnimationFrame(raf);document.documentElement.classList.remove("js-motion");ctx.revert();window.removeEventListener("pointermove",onPointer);window.removeEventListener("pointermove",track);window.removeEventListener("resize",resize);geo.dispose();(points.material as THREE.Material).dispose();renderer.dispose()};
  },[]);
  return <><canvas ref={canvas} className="cinematic-canvas" aria-hidden/><div ref={cursor} className="cursor-aura" aria-hidden/><div className="film-progress" aria-hidden><span>20 · 02 · 27</span><b><i/></b></div></>;
}
