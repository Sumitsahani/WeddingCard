const moments=[
  {hindi:"फूलों की चादर",title:"Under a sky of flowers",text:"Her people hold the flowers. She carries every blessing beneath them.",mark:"01"},
  {hindi:"जूता छुपाई",title:"A very serious negotiation",text:"The bride's squad has one mission. The groom's shoes do not stand a chance.",mark:"02"},
  {hindi:"कलीरे",title:"A little luck from above",text:"Stand close, single friends. Tradition says the falling kaleera knows who is next.",mark:"03"},
  {hindi:"मुँह मीठा",title:"Love, served sweet",text:"Every new beginning deserves mithai—and probably a second helping.",mark:"04"},
];
export default function CuteRituals(){return <section className="cute-rituals"><header><span className="eyebrow">Little wedding joys</span><h2>रस्में भी.<br/><em>शरारतें भी.</em></h2><p>The traditions everyone waits for—and the mischief nobody wants to miss.</p></header><div className="cute-grid">{moments.map((m,i)=><article key={m.mark}><span>{m.mark}</span><div className={`cute-symbol s${i+1}`} aria-hidden><i/><b>{["✿","♛","❦","◉"][i]}</b></div><small>{m.hindi}</small><h3>{m.title}</h3><p>{m.text}</p></article>)}</div></section>}
