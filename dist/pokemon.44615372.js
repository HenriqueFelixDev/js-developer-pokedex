function e(e,{className:t,children:a,...n}={},o){const s=document.createElement(e);for(let e in n)s.setAttribute(e,n[e]);return t&&s.classList.add(...t.trim().split(" ")),a&&s.append(...a),o&&(s.innerText=o),s}function t(t){return e("li",{className:`chip ${t}`},t)}function a(a,n=!1){return e("ul",{className:"pokemon-types "+(n?"pokemon-types--horizontal":""),children:a.map(t)})}class n{number;name;type;types=[];photo}class o extends n{species;height;weight;abilities;hp;attack;defense;specialAttack;specialDefense;speed;total}const s="https://pokeapi.co/api/v2/pokemon";async function c(e){return function(e){const t=new o;t.number=e.id,t.name=e.name;const a=e.types.map((e=>e.type.name)),[n]=a;t.types=a,t.type=n,t.photo=e.sprites.other.home.front_default,t.species=e.species,t.height=e.height,t.weight=e.weight,t.abilities=e.abilities.map((({ability:e})=>{return 0===(t=e.name).length?"":t[0].toUpperCase()+t.substring(1);var t})).join(", ");const s=new Map(e.stats.map((e=>[e.stat.name,e.base_stat])));return t.hp=s.get("hp"),t.attack=s.get("attack"),t.defense=s.get("defense"),t.specialAttack=s.get("special-attack"),t.specialDefense=s.get("special-defense"),t.speed=s.get("speed"),t.total=0,t}(await fetch(e).then((e=>e.json())))}async function r(e){return c(`${s}/${e}`)}function i(e){const t=3.28084*e,a=Math.floor(t),n=function(e,t=1){const a=Math.pow(10,t);return Math.round(e*a)/a}(12*(t-a));return`${a}' ${n}"`}const p=function(){const e=decodeURIComponent(location.search).replace("?","").split("&").map((e=>e.split("=")));return new Map(e)}().get("name");p||location.replace("/"),async function(){const e=await r(p);var t;console.log({pokemon:e}),document.body.classList.add(e.type),document.querySelector(".pokemon-header__title").innerText=e.name,document.querySelector(".pokemon-header__number").innerText="#"+e.number.toString().padStart(3,"0"),document.querySelector(".pokemon-header__content").appendChild(a(e.types,!0)),document.querySelector(".pokemon-display__image").src=e.photo,document.querySelector("[data-stat=species]").innerText=e.species.name,document.querySelector("[data-stat=height]").innerText=`${i(e.height/10)} (${(e.height/10).toFixed(2)} m)`,document.querySelector("[data-stat=weight]").innerText=`${(t=e.weight/10,2.20462*t).toFixed(1)} lbs (${(e.weight/10).toFixed(1)} kg)`,document.querySelector("[data-stat=abilities]").innerText=e.abilities,document.querySelector("[data-stat=hp]").innerText=e.hp,document.querySelector("[data-progress=hp]").value=e.hp,document.querySelector("[data-stat=attack]").innerText=e.attack,document.querySelector("[data-progress=attack]").value=e.attack,document.querySelector("[data-stat=defense]").innerText=e.defense,document.querySelector("[data-progress=defense]").value=e.defense,document.querySelector("[data-stat=special-attack]").innerText=e.specialAttack,document.querySelector("[data-progress=special-attack]").value=e.specialAttack,document.querySelector("[data-stat=special-defense]").innerText=e.specialDefense,document.querySelector("[data-progress=special-defense]").value=e.specialDefense,document.querySelector("[data-stat=speed]").innerText=e.speed,document.querySelector("[data-progress=speed]").value=e.speed,document.querySelector("[data-stat=total]").innerText=e.total,document.querySelector("[data-progress=total]").value=e.total}();
//# sourceMappingURL=pokemon.44615372.js.map
