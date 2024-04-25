async function fetchAndCacheRates(){try{const e="https://apilayer.net/api/live?access_key=4ccded65216ed540d9d8cf0972afbf90",t=await fetch(e);if(!t)throw new Error("Failed to fetch data");const n=await t.json(),o={data:n.quotes,timestamp:Date.now()};return console.log("Printing data....: "),console.log(n.quotes),await chrome.storage.local.set({exchangeRates:o}),n.quotes}catch(e){return console.log("CANT FETCH DATA"),null}}async function convertCurrency(e,t,n){const o=await retrieveCache();let c;return c="USD"===t?o[`USD${n}`]:"USD"===n?1/o[`USD${t}`]:o[`USD${n}`]/o[`USD${t}`],e*c}async function retrieveCache(){return new Promise(((e,t)=>{chrome.storage.local.get(["exchangeRates"],(function(n){if(console.log("CHeckpoint1"),chrome.runtime.lastError)return console.log("CHeckpoint2"),void t(chrome.runtime.lastError);const o=n.exchangeRates;if(!o.data)return console.log("No data found, doing initial API call..."),void e(fetchAndCacheRates());const c=Date.now(),r=o.timestamp;console.log("CHeckpoint3"),c-r>100?(console.log("CHeckpoint4"),console.log("Data expired, doing another API call..."),chrome.storage.local.remove("exchangeRates",(function(){chrome.runtime.lastError&&t(chrome.runtime.lastError)})),e(fetchAndCacheRates())):e(o.data)}))}))}async function extractCurrencyAndAmount(e){const t=e.match(/[A-Z]{3}/),n=e.match(/[\d,]+\.?\d*/);let o=null;return n&&(o=parseFloat(n[0].replace(/,/g,""))),{currency:t?t[0]:null,number:o||null}}function createPopup(e,t){var n=document.createElement("div");n.style.position="fixed",n.style.top=t.top-50+"px",n.style.left=t.left+"px",n.style.backgroundColor="#fff",n.style.border="1px solid #000",n.style.padding="10px";var o=document.createElement("div");return o.textContent=e,n.appendChild(o),n.id="myPopup",n}console.log("[Content] this is content script"),document.addEventListener("mouseup",(async e=>{var t=window.getSelection(),n=t.toString().trim();if(console.log("[Content] selection: "+t),n&&""!==n){var o=t.getRangeAt(0).getBoundingClientRect();try{const e=await extractCurrencyAndAmount(n),t=createPopup(await convertCurrency(e.number,e.currency,"USD"),o);document.body.appendChild(t),document.addEventListener("mousedown",(function(e){t.contains(e.target)||(t.parentNode.removeChild(t),document.removeEventListener("mousedown",arguments.callee))}))}catch(e){throw e}}}));