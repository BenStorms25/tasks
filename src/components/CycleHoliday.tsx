import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🍎");

    return <div></div>;
}
//     //🎄
//     //🎃
//     //🐲
//     //👨‍💼
//     //🍎

// function cycleAlphabetically() {
//     switch (holiday) {
//         case "🍎":
//             setHoliday("👨‍💼");
//             return;
//         case "👨‍💼":
//             setHoliday("🎄");
//             return;
//         case "🎄":
//             setHoliday("🎃");
//             return;
//         case "🎃":
//             setHoliday("🐲");
//             return;
//         case "🐲":
//             setHoliday("🍎");
//             return;
//     }
// }

// function cycleByYear() {
//     switch (holiday) {
//         case "🐲":
//             setHoliday("🍎");
//             return;
//         case "🍎":
//             setHoliday("👨‍💼");
//             return;
//         case "👨‍💼":
//             setHoliday("🎃");
//             return;
//         case "🎃":
//             setHoliday("🎄");
//             return;
//         case "🎄":
//             setHoliday("🐲");
//             return;
//     }
// }

//     return (
//         <div>
//             <p>Holiday: {holiday}</p>
//             <button onClick={cycleAlphabetically}>Advance by Alphabet</button>
//             <button onClick={cycleByYear}>Advance by Year</button>
//         </div>
//     );
// }
