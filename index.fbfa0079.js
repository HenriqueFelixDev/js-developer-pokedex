class e{number;name;type;types=[];photo}class t extends e{species;height;weight;abilities;hp;attack;defense;specialAttack;specialDefense;speed;total}const n="https://pokeapi.co/api/v2/pokemon";async function a(e){return function(e){const n=new t;n.number=e.id,n.name=e.name;const a=e.types.map((e=>e.type.name)),[s]=a;n.types=a,n.type=s,n.photo=e.sprites.other.home.front_default,n.species=e.species,n.height=e.height,n.weight=e.weight,n.abilities=e.abilities.map((({ability:e})=>{return 0===(t=e.name).length?"":t[0].toUpperCase()+t.substring(1);var t})).join(", ");const o=new Map(e.stats.map((e=>[e.stat.name,e.base_stat])));return n.hp=o.get("hp"),n.attack=o.get("attack"),n.defense=o.get("defense"),n.specialAttack=o.get("special-attack"),n.specialDefense=o.get("special-defense"),n.speed=o.get("speed"),n.total=0,n}(await fetch(e).then((e=>e.json())))}async function s(e=0,t=5){const s=`${n}?offset=${e}&limit=${t}`,{results:o}=await fetch(s).then((e=>e.json()));return await Promise.all(o.map((e=>a(e.url))))}function o(e,{className:t,children:n,...a}={},s){const o=document.createElement(e);for(let e in a)o.setAttribute(e,a[e]);return t&&o.classList.add(...t.trim().split(" ")),n&&o.append(...n),s&&(o.innerText=s),o}function c(e){return o("li",{className:`chip ${e}`},e)}function i(e,t=!1){return o("ul",{className:"pokemon-types "+(t?"pokemon-types--horizontal":""),children:e.map(c)})}function p(e){const t=o("p",{className:"pokemon-card__number",children:[]},"#"+e.number.toString().padStart(3,"0")),n=o("p",{className:"pokemon-card__name",children:[]},e.name);return o("header",{className:"pokemon-card__header",children:[n,t]})}function r(e){const t=o("img",{className:"pokemon-card__image",src:e.photo,alt:`Imagem do pokemon ${e.name}`});return o("div",{className:"pokemon-card__details",children:[i(e.types),t]})}function m(){const e=o("div");return e.innerHTML='\n        <svg class="pokemon-card__background-pokeball" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537 537" width="100" height="100" fill="#ffffff2a">\n            <path  d="m267 537c-182.4 0-261.5-159-268-238.9 74.4 0.1 119.7-0.1 119.7-0.1 0 0 32.3 123.1 148.3 120.5 103.8-2.4 136-78 146.2-120.4 63.2 0 70.7 0 120.8 0-4.8 64.7-75.2 238.9-267 238.9z"/>\n            <path  d="m267 0c182.4 0 261.5 159 268 238.9-74.4-0.1-119.7 0.1-119.7 0.1 0 0-32.3-123.1-148.3-120.5-103.8 2.4-136 78-146.2 120.4-63.2 0-70.7 0-120.8 0 4.8-64.7 75.2-238.9 267-238.9z"/>\n            <path  d="m268 369c-55.3 0-100-44.7-100-100 0-55.3 44.7-100 100-100 55.3 0 100 44.7 100 100 0 55.3-44.7 100-100 100z"/>\n        </svg>\n    ',e}function l(e){const t=o("article",{className:"pokemon-card "+e.type,children:[p(e),r(e),m()]});return o("a",{href:`pokemon.html?name=${e.name}#about`,style:"text-decoration: none;",children:[t]})}const d=document.getElementById("pokemons"),h=document.getElementById("loadMoreButton");let u=0;async function f(e,t){const n=await s(e,t),a=document.createDocumentFragment();a.append(...n.map(l)),d.append(a)}f(u,10),console.log(function(){const e=decodeURIComponent(location.search).replace("?","").split("&").map((e=>e.split("=")));return new Map(e)}()),h.addEventListener("click",(()=>{u+=10;const e=Math.min(10,151-u);f(u,e);u+10>=151&&h.parentElement.removeChild(h)}));
//# sourceMappingURL=index.fbfa0079.js.map
