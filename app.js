/* Magenta showcase. Add a car object and optional GLB path to expand the archive. */
'use strict';
const LICENSES = {
  by2: 'https://creativecommons.org/licenses/by/2.0/',
  bysa4: 'https://creativecommons.org/licenses/by-sa/4.0/'
};
const commons = (path) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;
const cars = [
  {
    id:'black', index:'001', tag:'THE ORIGINAL SHAPE', title:'The Black', italic:'Roadster.',
    variant:'OPEN-TOP MAGENTA', type:'Open-top roadster', sourceType:'Submitted photograph',
    year:'Build year unknown', colour:'Black', registration:'Not verified', donor:'Not verified',
    description:'A distinctive black open-top example with grey bucket seats, white wheels and a simple roll hoop. Now preserved as both a photograph and an interactive 3D model.',
    overviewTitle:'Individuality was always the point.',
    overview:'The archive begins with this striking black Magenta. Its flowing fibreglass sides, upright grille, exposed cabin and open wheelarches capture the model’s unmistakable charm.',
    context:'The exact build date, donor vehicle and engine are not established from this photograph. The 3D model on this page was supplied with the original photo and is available to explore.',
    model:'bundled', hero:'assets/magenta-black.jpg',
    photos:[{src:'assets/magenta-black.jpg',alt:'Black open-top Magenta kit car with white wheels, seen from the front left',caption:'Black Magenta — supplied photograph',credit:'Original photograph supplied for this archive',source:null,license:null}]
  },
  {
    id:'yellow', index:'002', tag:'THE SUNSHINE CAR', title:'The Yellow', italic:'Magenta.',
    variant:'MAGENTA / OPEN TOP', type:'Open-top Magenta', sourceType:'Wikimedia Commons',
    year:'Photographed 2021', colour:'Yellow / black stripes', registration:'DLF 728J', donor:'Not independently verified',
    description:'Bright yellow paint, black bonnet stripes and an unmistakable MG-style radiator grille. A cheerful survivor photographed at a classic-car gathering.',
    overviewTitle:'A statement in sunshine yellow.',
    overview:'This yellow open-top example, registration DLF 728J, was photographed on 31 May 2021. Its bright finish and bonnet stripes give the familiar Magenta silhouette an exuberant personality.',
    context:'Photograph by Calreyn88, shared under CC BY-SA 4.0. The date and registration describe this photographed car; its engine and build date have not been independently verified.',
    model:null, hero:commons('2/29/Lightspeed_Magenta.jpg'),
    photos:[{src:commons('2/29/Lightspeed_Magenta.jpg'),alt:'Yellow Magenta kit car with black stripes and plate DLF 728J',caption:'The yellow Magenta, photographed May 2021',credit:'Calreyn88',source:'https://commons.wikimedia.org/wiki/File:Lightspeed_Magenta.jpg',license:'CC BY-SA 4.0',licenseUrl:LICENSES.bysa4}]
  },
  {
    id:'white', index:'003', tag:'THE ALL-WEATHER TOURER', title:'The White', italic:'Tourer.',
    variant:'MAGENTA / SOFT TOP', type:'Weather-equipped Magenta', sourceType:'Wikimedia Commons',
    year:'Photographed 2014', colour:'White / black hood', registration:'WVH 53J (pictured)', donor:'Not independently verified',
    description:'A white Magenta with its black weather hood raised, photographed at Paisley during the 2014 Rallye Monte Carlo Historique gathering.',
    overviewTitle:'A little weather never stopped it.',
    overview:'Photographer Mark Harkin captured this white, hooded Magenta on 23 January 2014 in Paisley, at the UK start of the Rallye Monte Carlo Historique.',
    context:'The three angles below show a single photographed vehicle, not three different cars. The vehicle’s participation in the rally itself is not independently established.',
    model:null, hero:commons('9/9d/Magenta_%2812159544084%29.jpg'),
    photos:[
      {src:commons('9/9d/Magenta_%2812159544084%29.jpg'),alt:'Front three-quarter view of white Magenta with raised black hood at Paisley',caption:'White Magenta at Paisley — front three-quarter',credit:'Mark Harkin',source:'https://commons.wikimedia.org/wiki/File:Magenta_(12159544084).jpg',license:'CC BY 2.0',licenseUrl:LICENSES.by2},
      {src:commons('1/1b/Magenta_%2812159343453%29.jpg'),alt:'White Magenta from left front with weather hood and auxiliary lights',caption:'White Magenta at Paisley — left front',credit:'Mark Harkin',source:'https://commons.wikimedia.org/wiki/File:Magenta_(12159343453).jpg',license:'CC BY 2.0',licenseUrl:LICENSES.by2},
      {src:commons('5/5b/Magenta_%2812159348773%29.jpg'),alt:'Side view of white Magenta showing black hood and its rear proportions',caption:'White Magenta at Paisley — profile',credit:'Mark Harkin',source:'https://commons.wikimedia.org/wiki/File:Magenta_(12159348773).jpg',license:'CC BY 2.0',licenseUrl:LICENSES.by2}
    ]
  },
  {
    id:'cream', index:'004', tag:'THE SHOW-GROUND SURVIVOR', title:'The Cream', italic:'Classic.',
    variant:'MAGENTA / OPEN TOP', type:'Open-top Magenta', sourceType:'Wikimedia Commons',
    year:'Photographed 2013', colour:'Ivory / cream', registration:'EDC 140C', donor:'Not independently verified',
    description:'An ivory-coloured open-top Magenta with a traditional grille and black interior, photographed at Newby Hall’s historic-car rally.',
    overviewTitle:'Simple lines. Endless character.',
    overview:'At Newby Hall’s historic-car rally on 21 July 2013, this cream Magenta, registration EDC 140C, showed off the uncluttered, low-sided body design for which the marque is remembered.',
    context:'This photograph was taken by Draco2008 and is shared under CC BY 2.0. The registration and event are documented, while its original donor and build date remain unverified.',
    model:null,hero:commons('5/54/Newby_Hall_Historic_Car_Rally_2013_%289345333013%29.jpg'),
    photos:[{src:commons('5/54/Newby_Hall_Historic_Car_Rally_2013_%289345333013%29.jpg'),alt:'Cream Magenta kit car with registration EDC 140C at Newby Hall in 2013',caption:'Cream Magenta at Newby Hall — July 2013',credit:'Draco2008',source:'https://commons.wikimedia.org/wiki/File:Newby_Hall_Historic_Car_Rally_2013_(9345333013).jpg',license:'CC BY 2.0',licenseUrl:LICENSES.by2}]
  }
];
const factorySpecs = [
  ['ENGINE', '1,098 cc', 'BMC A-series inline-four, transverse'],
  ['DONOR', 'MG 1100', 'Subframes, drivetrain and ancillary components'],
  ['WHEELBASE', '2,223 mm', '7 ft 3½ in'],
  ['LENGTH', '3,251 mm', '10 ft 8 in'],
  ['WIDTH', '1,613 mm', '5 ft 3½ in'],
  ['HEIGHT', '1,181 mm', '3 ft 10½ in'],
  ['BODY', 'GRP', 'Self-coloured fibreglass reinforced plastic'],
  ['CHASSIS', 'Steel box-section', '10-gauge rectangular hollow sections'],
  ['SUSPENSION', 'Hydrolastic', 'Independent front and rear'],
  ['FRONT BRAKES', 'Disc', 'Lockheed 8.39 in'],
  ['REAR BRAKES', 'Drum', 'Lockheed 8.00 in'],
  ['FUEL TANK', '36.4 litres', '8 imperial gallons']
];
const history = [
  {year:'1972',title:'The Magenta arrives',detail:'Lightspeed Panels announces its MG 1100-based sports tourer from Lealholm, near Whitby, on 10 August 1972.'},
  {year:'1970s',title:'A kit with character',detail:'Its accessible build proposition and distinctive roadster/buggy styling attract enthusiasts. Contemporary reporting recalls a £250 kit price.'},
  {year:'1979',title:'The LSR appears',detail:'The Ford Escort-based LSR becomes part of the Magenta family, offering a distinct two-seat roadster interpretation.'},
  {year:'1980',title:'Enter the Sprint',detail:'A lighter, Mini-based Magenta Sprint expands the range. Original Sprint literature survives in enthusiast archives.'},
  {year:'1986–88',title:'Production winds down',detail:'Sources typically date Lightspeed’s Magenta offering to 1986, with the related Magna Sport operation continuing into 1988.'},
  {year:'Today',title:'The owners keep it alive',detail:'Surviving cars continue to appear at UK shows. A 2025 Hagerty feature documented Gordon Diffey’s 300,000-mile Magenta.'}
];
const sources = [
 {name:'Lightspeed Panels period press material',detail:'1972 announcement and original specifications, reproduced by an enthusiast archive.',url:'https://www.djbarryjohn.co.uk/magenta.php'},
 {name:'Hagerty UK · Gordon Diffey’s Magenta',detail:'Antony Ingram, 14 November 2025; owner history, production context and preservation.',url:'https://www.hagerty.co.uk/articles/magenta-still-going-strong/'},
 {name:'Classic Kitcars · Magenta profile',detail:'Introduction, period kit pricing, MG 1100 donor and later variations.',url:'https://classic-kitcars.com/car_details.php?car_id=30'},
 {name:'AllCarIndex · Lightspeed Panels / Magenta',detail:'Manufacturer chronology, variants and historical context.',url:'https://www.allcarindex.com/brand/united-kingdom/lightspeed-panels-magenta'},
 {name:'Magna Sport history',detail:'Overview of the Magenta, LSR, Sprint and related kit-car range.',url:'https://motor-car.net/british/item/19428-magna-sport'}
];
// GitHub Pages serves the original user-supplied GLB as losslessly gzipped
// binary parts. Reconstruct it in the browser only when 3D is requested.
// This avoids GitHub's upload-size limits without changing the source model.
const modelParts = Array.from({length:14}, (_,i)=>
  `assets/models/magenta-${String(i+1).padStart(2,'0')}.gzpart`);
const originalModelBytes = 58882856;
let bundledModelUrl = null;
let bundledModelPromise = null;

async function getBundledModelUrl(){
  if(bundledModelUrl) return bundledModelUrl;
  if(bundledModelPromise) return bundledModelPromise;
  bundledModelPromise = (async()=>{
    if(!('DecompressionStream' in window)) {
      throw new Error('This browser does not support decompressed 3D models. Try a current Chrome, Edge, Firefox, or Safari browser.');
    }
    const chunks=[];
    for(let i=0; i<modelParts.length; i++){
      const response=await fetch(modelParts[i]);
      if(!response.ok) throw new Error(`Model download failed (part ${i+1}/${modelParts.length}, HTTP ${response.status}).`);
      chunks.push(await response.arrayBuffer());
      if(currentMode==='model' && selectedCarId==='black') {
        setText('#stage-mode',`DOWNLOADING 3D / ${i+1} OF ${modelParts.length}`);
      }
    }
    if(currentMode==='model' && selectedCarId==='black') setText('#stage-mode','PREPARING 3D MODEL');
    const decoded = await new Response(
      new Blob(chunks).stream().pipeThrough(new DecompressionStream('gzip'))
    ).blob();
    if(decoded.size !== originalModelBytes) throw new Error('The model failed its size check. Please reload the page.');
    const header = new Uint8Array(await decoded.slice(0,4).arrayBuffer());
    if(String.fromCharCode(...header)!=='glTF') throw new Error('The reconstructed model has an invalid format.');
    bundledModelUrl = URL.createObjectURL(new Blob([decoded],{type:'model/gltf-binary'}));
    return bundledModelUrl;
  })().catch(err=>{bundledModelPromise=null;throw err;});
  return bundledModelPromise;
}
function displayModelError(error){
  if(currentMode!=='model' || selectedCarId!=='black') return;
  console.error('Magenta 3D loading error:',error);
  $('#viewer-wrap').hidden=true;
  const placeholder=$('#model-placeholder');placeholder.hidden=false;
  placeholder.querySelector('h3').textContent='Unable to load 3D model';
  placeholder.querySelector('p').textContent=error.message || 'The 3D model could not be loaded. Please check your connection and try again.';
  setText('#stage-mode','3D MODEL / ERROR');
}
let selectedCarId='black', currentMode='photo', currentTab='overview';
const $ = (s) => document.querySelector(s);
function make(tag, cls='', text='') { const el=document.createElement(tag); if(cls)el.className=cls; if(text)el.textContent=text; return el; }
function setText(selector,text){$(selector).textContent=text;}
function currentCar(){return cars.find(c=>c.id===selectedCarId) || cars[0];}
function imageCredit(car) {return car.id==='black'?'ORIGINAL PHOTOGRAPH / USER SUPPLIED':`IMAGE: ${car.photos[0].credit.toUpperCase()} / ${car.photos[0].license}`;}
function switchMode(mode){
  const car=currentCar(); currentMode=mode;
  const modelMode=mode==='model';
  $('#hero-image').hidden=modelMode;
  $('#viewer-wrap').hidden=!modelMode || !car.model;
  $('#model-placeholder').hidden=!modelMode || !!car.model;
  if(modelMode && !car.model){
    $('#model-placeholder h3').textContent='Awaiting 3D generation';
    $('#model-placeholder p').textContent='This Magenta has been photographed, but its interactive model has yet to be created.';
  }
  $('#mode-photo').classList.toggle('active',!modelMode);
  $('#mode-model').classList.toggle('active',modelMode);
  $('#mode-photo').setAttribute('aria-pressed',String(!modelMode));
  $('#mode-model').setAttribute('aria-pressed',String(modelMode));
  $('#view-3d').innerHTML=modelMode?'<span class="button-icon">↶</span> BACK TO PHOTO <span aria-hidden="true">↗</span>':'<span class="button-icon">◈</span> EXPLORE IN 3D <span aria-hidden="true">↗</span>';
  setText('#stage-mode',modelMode?(car.model?'INTERACTIVE / 3D':'3D MODEL / PENDING'):'PHOTOGRAPH / 01');
  if(modelMode && car.model){
    const viewer=$('#model-viewer');
    if(car.model==='bundled'){
      setText('#stage-mode','DOWNLOADING 3D / STARTING');
      getBundledModelUrl().then(url=>{
        if(selectedCarId!=='black' || currentMode!=='model') return;
        if(viewer.getAttribute('src')!==url) viewer.setAttribute('src',url);
        setText('#stage-mode','INTERACTIVE / 3D');
      }).catch(displayModelError);
    } else if(viewer.getAttribute('src')!==car.model){
      viewer.setAttribute('src',car.model);
    }
  }
}
function renderCollection(){
 const wrap=$('#collection-grid'); wrap.innerHTML='';
 cars.forEach((car,i)=>{
   const card=make('button','collection-card'+(car.id===selectedCarId?' selected':''));
   card.type='button'; card.setAttribute('aria-pressed',String(car.id===selectedCarId)); card.dataset.id=car.id;
   const media=make('div','collection-image'); const img=make('img');img.src=car.hero; img.alt=`${car.colour} Magenta kit car`;img.loading=i>0?'lazy':'eager';
   media.append(img); const layer=make('div','collection-image-overlay'); media.append(layer);
   const index=make('span','card-number',`NO. ${car.index}`);media.append(index);
   if(car.model) media.append(make('span','model-badge','◈ 3D READY'));
   const body=make('div','collection-card-body'); const top=make('div','collection-card-top');top.append(make('span','collection-name',`${car.title} ${car.italic}`)); top.append(make('span','card-arrow','↗'));
   body.append(top); body.append(make('span','collection-subtitle',`${car.registration==='Not verified'?'OPEN TOP':car.registration}  /  ${car.year.toUpperCase()}`));card.append(media,body);
   card.addEventListener('click',()=>selectCar(car.id)); wrap.append(card);
 });
}
function renderFacts(car){
  const fields=[['BODY STYLE',car.type],['COLOUR',car.colour],['REGISTRATION',car.registration],['OBSERVED',car.year],['DONOR / ENGINE',car.donor],['3D RECORD',car.model?'Available for viewing':'Awaiting generation']];
  const target=$('#individual-facts');target.innerHTML='';
  fields.forEach(([k,v])=>{const row=make('div','fact-row');row.append(make('span','fact-key',k),make('strong','fact-value',v));target.append(row);});
}
function renderSpecs(){ $('#spec-grid').innerHTML=factorySpecs.map(([name,value,desc])=>`<div class="spec-item"><span class="spec-name">${name}</span><strong>${value}</strong><small>${desc}</small></div>`).join(''); }
function renderTimeline(){ $('#timeline').innerHTML=history.map(h=>`<div class="timeline-item"><span class="timeline-year">${h.year}</span><div><h4>${h.title}</h4><p>${h.detail}</p></div></div>`).join(''); }
function openLightbox(photo){
 const modal=$('#image-modal');$('#modal-image').src=photo.src;$('#modal-image').alt=photo.alt;setText('#modal-caption',`${photo.caption} · ${photo.credit}`);
 const link=$('#modal-source');link.href=photo.source||photo.src;link.textContent=photo.source?'VIEW ORIGINAL & LICENCE ↗':'VIEW PHOTOGRAPH ↗';modal.showModal();
}
function renderPhotos(car){
 setText('#photos-title',`${car.title} ${car.italic}`);
 const archive=$('#photo-archive');archive.innerHTML='';
 car.photos.forEach((photo,i)=>{
   const figure=make('figure','photo-tile');const btn=make('button','photo-open');btn.type='button';btn.setAttribute('aria-label',`Enlarge ${photo.caption}`);const img=make('img');img.src=photo.src;img.alt=photo.alt;img.loading='lazy';btn.append(img,make('span','photo-zoom','↗ ENLARGE'));btn.addEventListener('click',()=>openLightbox(photo));figure.append(btn);
   const cap=make('figcaption','photo-caption');cap.append(make('strong','',photo.caption),make('span','',`${photo.credit} · ${photo.license||'User-provided'}`));
   if(photo.source){const credit=make('a','photo-license-link','SOURCE & LICENCE ↗');credit.href=photo.source;credit.target='_blank';credit.rel='noopener noreferrer';cap.append(credit);}
   figure.append(cap);archive.append(figure);
 });
 if(car.photos.length===1) archive.classList.add('single-image');else archive.classList.remove('single-image');
}
function selectCar(id){
 const car=cars.find(c=>c.id===id);if(!car)return;selectedCarId=id;
 const idx=cars.indexOf(car)+1; setText('#hero-index',String(idx).padStart(2,'0')+' / '+String(cars.length).padStart(2,'0'));
 setText('#hero-category',car.tag);$('#car-title').innerHTML=`${car.title}<br><em>${car.italic}</em>`;
 setText('#car-description',car.description);setText('#hero-variant',car.variant);
 $('#hero-status').innerHTML=car.model?'<i class="status-dot"></i> 3D AVAILABLE':'<i class="status-dot pending"></i> AWAITING MODEL';
 $('#hero-image').src=car.hero;$('#hero-image').alt=car.photos[0].alt;
 setText('#stage-number',car.index);setText('#image-credit',imageCredit(car));
 setText('#overview-number','/ '+car.index);setText('#record-number','/ '+car.index);
 setText('#overview-title',car.overviewTitle);setText('#overview-body',car.overview);setText('#overview-context',car.context);
 renderFacts(car);renderPhotos(car);renderCollection();
 switchMode('photo');
 if(location.hash==='#collection' || location.hash==='#dossier') $('#showcase').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
function switchTab(id){
 currentTab=id;
 document.querySelectorAll('.tab-button').forEach(button=>{const active=button.dataset.tab===id;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
 document.querySelectorAll('.tab-panel').forEach(panel=>{panel.hidden=panel.id!==`tab-${id}`;});
}
function renderReferences(){
 $('#history-sources').innerHTML='';sources.forEach((source,i)=>{
   const a=make('a','source-item');a.href=source.url;a.target='_blank';a.rel='noopener noreferrer';
   a.innerHTML=`<span class="source-index">${String(i+1).padStart(2,'0')}</span><span class="source-content"><strong>${source.name}</strong><small>${source.detail}</small></span><span class="source-arrow">↗</span>`;$('#history-sources').append(a);
 });
 $('#photo-credits').innerHTML='';
 const credits=[
  {title:'Black Magenta · submitted photograph',detail:'Photograph and 3D asset provided for this site. Not Creative Commons.',url:null},
  {title:'Yellow Magenta · Calreyn88',detail:'2021 · CC BY-SA 4.0 · displayed with layout crop.',url:cars[1].photos[0].source},
  {title:'White Magenta · Mark Harkin',detail:'Three views · 2014 · CC BY 2.0 · displayed with layout crop.',url:cars[2].photos[0].source},
  {title:'Cream Magenta · Draco2008',detail:'2013 · CC BY 2.0 · displayed with layout crop.',url:cars[3].photos[0].source}
 ];
 credits.forEach((credit,i)=>{
   const a=make(credit.url?'a':'div','source-item');if(credit.url){a.href=credit.url;a.target='_blank';a.rel='noopener noreferrer';}
   a.innerHTML=`<span class="source-index">${String(i+1).padStart(2,'0')}</span><span class="source-content"><strong>${credit.title}</strong><small>${credit.detail}</small></span><span class="source-arrow">${credit.url?'↗':'◈'}</span>`;$('#photo-credits').append(a);
 });
}
function setup(){
 renderSpecs();renderTimeline();renderReferences();selectCar('black');
 $('#mode-photo').addEventListener('click',()=>switchMode('photo'));
 $('#mode-model').addEventListener('click',()=>switchMode('model'));
 $('#view-3d').addEventListener('click',()=>switchMode(currentMode==='photo'?'model':'photo'));
 $('#return-photo').addEventListener('click',()=>switchMode('photo'));
 document.querySelectorAll('.tab-button').forEach(button=>{
   button.addEventListener('click',()=>switchTab(button.dataset.tab));
   button.addEventListener('keydown',(e)=>{
     if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
     e.preventDefault();const all=[...document.querySelectorAll('.tab-button')];let i=all.indexOf(button);
     if(e.key==='Home')i=0;else if(e.key==='End')i=all.length-1;else i=(i+(e.key==='ArrowRight'?1:-1)+all.length)%all.length;
     all[i].focus();switchTab(all[i].dataset.tab);
   });
 });
 $('#modal-close').addEventListener('click',()=>$('#image-modal').close());
 $('#image-modal').addEventListener('click',e=>{if(e.target===$('#image-modal'))e.target.close();});
}
document.addEventListener('DOMContentLoaded',setup);