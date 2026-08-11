"use client";

import {useState} from "react";
import Image from "next/image";

const rituals=[
  {number:"०१",name:"Baraat",hindi:"बारात",time:"6:30 PM",text:"With dhol, dancing and boundless joy, the groom arrives with his loved ones."},
  {number:"०२",name:"Varmala",hindi:"वरमाला",time:"8:00 PM",text:"Two garlands, two smiles and a beautiful promise made before everyone we love."},
  {number:"०३",name:"Saat Phere",hindi:"सात फेरे",time:"9:30 PM",text:"Seven sacred circles around the holy fire, each carrying a vow for a lifetime."},
  {number:"०४",name:"Vidaai",hindi:"विदाई",time:"After the ceremony",text:"A tender goodbye, a joyful beginning and blessings that travel with the bride."},
];
const vows=[
  ["प्रथम पग","अन्न एवं पोषण","हम अपने घर में अन्न, संतोष और सम्मान बनाए रखेंगे।"],
  ["द्वितीय पग","शक्ति एवं स्वास्थ्य","हम एक-दूसरे को साहस देंगे और हर परिस्थिति में साथ खड़े रहेंगे।"],
  ["तृतीय पग","धर्म एवं समृद्धि","हम सत्य, धर्म और परिश्रम से अपने जीवन को समृद्ध बनाएँगे।"],
  ["चतुर्थ पग","सुख एवं प्रेम","हम अपने घर को प्रेम, हँसी और शांति से भरेंगे।"],
  ["पंचम पग","परिवार एवं कल्याण","हम परिवार, संतति और सभी अपनों के कल्याण की कामना करेंगे।"],
  ["षष्ठ पग","ऋतु एवं दीर्घायु","हम जीवन की हर ऋतु में स्वस्थ, संयमित और साथ बने रहेंगे।"],
  ["सप्तम पग","मैत्री एवं साथ","इन सात पगों के साथ हम जीवनभर के मित्र और सहयात्री बनते हैं।"],
];

export function GaneshVandana(){return <section id="ganesh-vandana" className="ganesh-vandana"><div className="ganesh-aura" aria-hidden/><div className="ganesh-art"><Image src="/images/details/ganesh.png" alt="Lord Ganesha blessing the wedding celebration" fill sizes="(max-width:800px) 58vw, 330px" priority/></div><div className="ganesh-copy"><span className="eyebrow devanagari">श्री गणेशाय नमः</span><h2>Shubh <em>Aarambh</em></h2><p className="shlok devanagari">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br/>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p><small>May every beginning be blessed, every path be clear and every heart be filled with joy.</small></div></section>}

export default function WeddingRituals(){const [active,setActive]=useState(0),[vow,setVow]=useState(6);return <>
  <section className="family-invite"><div className="invite-mandala" aria-hidden><i/><i/><i/><span>शुभ</span></div><div className="family-copy"><span className="eyebrow">Together with our families</span><h2>We request the honour<br/>of your presence.</h2><p>Come witness our vows, bless our beginning, share our table and make this celebration complete with your presence.</p><div className="family-sign"><span>The Chourasiya Family</span><i>&</i><span>The Bride&apos;s Family</span></div></div></section>
  <div className="shlok-divider"><i>❦</i><p>मंगलं भगवान विष्णुः मंगलं गरुड़ध्वजः।<br/>मंगलं पुण्डरीकाक्षः मंगलाय तनो हरिः॥</p><i>❦</i></div>
  <section className="rituals"><header><span className="eyebrow dark">Sacred moments</span><h2>A wedding woven<br/><em>with traditions.</em></h2><p>Tap each ceremony to discover the journey of our wedding evening.</p></header><div className="ritual-stage"><div className="ritual-wheel">{rituals.map((r,i)=><button key={r.name} className={active===i?"active":""} onClick={()=>setActive(i)} style={{"--angle":`${i*90}deg`} as React.CSSProperties}><b>{r.number}</b><span>{r.name}</span></button>)}<div className="wheel-center"><span>{rituals[active].hindi}</span><i>❦</i></div></div><article key={active} className="ritual-detail"><small>{rituals[active].number} · {rituals[active].time}</small><h3>{rituals[active].name}</h3><div>{rituals[active].hindi}</div><p>{rituals[active].text}</p><span className="ritual-line"/></article></div></section>
  <section className="saptapadi"><header><span className="devanagari">सप्तपदी</span><h2>सात पग.<br/><em>सात संकल्प.</em></h2><p>विवाह के सात पवित्र चरण—साथ, सम्मान और जीवनभर की मैत्री का संकल्प।</p></header><div className="vow-tabs">{vows.map((v,i)=><button key={v[0]} className={vow===i?"active":""} onClick={()=>setVow(i)}><b>०{i+1}</b><span>{v[0]}</span></button>)}</div><article key={vow} className="vow-card"><small>संकल्प {String(vow+1).padStart(2,"0")}</small><h3>{vows[vow][1]}</h3><p>{vows[vow][2]}</p><i>ॐ</i></article></section>
  <section className="swasti"><div className="swasti-seal">शुभ</div><div><span>स्वस्तिवाचन</span><p>ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः। स्वस्ति नः पूषा विश्ववेदाः।<br/>स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः। स्वस्ति नो बृहस्पतिर्दधातु॥</p><small>ईश्वर नवदम्पति को यश, ज्ञान, सुरक्षा, स्वास्थ्य और मंगलमय जीवन प्रदान करें।</small></div></section>
  <section className="blessing-band"><span>शुभ विवाह</span><i>May this celebration be filled with love, laughter and your blessings.</i><span>शुभ विवाह</span></section>
  <section className="procession scene"><Image src="/images/baraat-doli.png" alt="A joyful Indian wedding baraat with a vintage car and ceremonial doli" fill sizes="100vw"/><div className="procession-shade"/><div className="procession-copy"><span className="eyebrow">Dhol. Dance. Celebration.</span><h2>The Baraat<br/><em>& the Doli</em></h2><p>One arrives with music and dancing.<br/>One leaves carrying blessings and a lifetime of memories.</p><div><b>बारात</b><i>✦</i><b>डोली</b></div></div><div className="procession-caption">A celebration moving from one beautiful family to another</div></section>
  <div className="shlok-divider final-shlok"><i>॥</i><p>समञ्जन्तु विश्वे देवाः समापो हृदयानि नौ।<br/><span>May all divine forces unite our hearts in harmony.</span></p><i>॥</i></div>
  </>}
