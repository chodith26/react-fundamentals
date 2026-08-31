import { useState } from "react";
function OmnitrixCharge(){
    const [charge, setCharge] = useState(20);
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '20px' }}>
            <h3 style={{margin : 0}}>Current Charge: {charge}%</h3>
            <button onClick={() => {charge < 100 ? setCharge(c => Math.min(c + 10, 100)) : alert("Omnitrix Charged!")}}>+10%</button>
            <button onClick={() => {charge > 0 ? setCharge(c => Math.max(c - 10, 0)) : alert("Insufficient Charge")}}>-10%</button>
        </div>
    )
}
export default OmnitrixCharge;