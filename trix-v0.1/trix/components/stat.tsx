export function Stat({label,value,detail}:{label:string;value:string;detail:string}){return <div className="stat"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>}
