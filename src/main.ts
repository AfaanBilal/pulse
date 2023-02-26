/**
 * Pulse
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev/pulse
 */

import { createMonitor, createPulse } from "@afaanbilal/pulse";

const [count, setCount] = createPulse(0);

const h1 = document.createElement("h1");
createMonitor(() => h1.innerText = `Count is ${count()}`);

const btn = document.createElement("button");
createMonitor(() => btn.innerText = `Increment (To: ${count() + 1})`);
btn.onclick = () => setCount(count() + 1);

const btnDouble = document.createElement("button");
createMonitor(() => btnDouble.innerText = `Double (To: ${count() * 2})`);
btnDouble.onclick = () => setCount(count() * 2);

document.body.append(h1, btn, btnDouble);
