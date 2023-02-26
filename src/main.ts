/**
 * Pulse
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev/pulse
 */

import { createMonitor, createPulse } from "./pulse";

const [count, setCount] = createPulse(0);

const h1 = document.createElement("h1");
createMonitor(() => h1.innerText = `Count is ${count()}`);

const btn = document.createElement("button");
btn.innerText = "Increment";
btn.onclick = () => setCount(count() + 1);

const btnDouble = document.createElement("button");
btnDouble.innerText = "Double";
btnDouble.onclick = () => setCount(count() * 2);

document.body.append(h1, btn, btnDouble);
