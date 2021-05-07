const svg  = document.getElementById('Star');
const path = document.createElementNS('http://www.w3.org/2000/svg','path'); //I have tried createElement(string) too
   path.setAttribute('style',"stroke: #000; stroke-width: 2px; stroke-linecap: round; fill: none;");
   path.setAttribute('d',"M 0,0 L 150,150 L 100,150 L 150,150 L 150,100");
   var anim = document.createElementNS('http://www.w3.org/2000/svg/','animate');
   anim.setAttribute('from','M 0,0 L 150,0 L 115,35 L 150,0 L 115,-35');
   anim.setAttribute('to','M 0,0 L 150,150 L 100,150 L 150,150 L 150,100');
   anim.setAttribute('dur','10s');
   anim.setAttribute('begin','5s');
   anim.setAttribute('attributeType','XML');
   anim.setAttribute('attributeName','d');
   path.appendChild(anim);
   svg .appendChild(path);