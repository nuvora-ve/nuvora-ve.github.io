'use strict';
const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(n||0));
const fmt=n=>Number(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const seed=()=>({
 accounts:[
  {id:'cash',name:'Efectivo',kind:'Efectivo',currency:'USD',balance:95.27},
  {id:'bank',name:'Banco principal',kind:'Banco',currency:'USD',balance:245},
  {id:'wallet',name:'Billetera digital',kind:'Billetera',currency:'USDT',balance:75}
 ],
 txs:[
  {id:'t1',type:'expense',amount:12.5,cat:'Comida',note:'Almuerzo',place:'Café Centro',date:'2026-10-10',account:'cash'},
  {id:'t2',type:'expense',amount:6,cat:'Transporte',note:'Transporte',place:'',date:'2026-10-10',account:'cash'},
  {id:'t3',type:'income',amount:40,cat:'Ventas',note:'Trabajo extra',place:'',date:'2026-10-10',account:'bank'},
  {id:'t4',type:'expense',amount:58.9,cat:'Comida',note:'Mercado',place:'Supermercado',date:'2026-10-07',account:'bank'},
  {id:'t5',type:'expense',amount:22,cat:'Servicios',note:'Teléfono',place:'',date:'2026-10-05',account:'bank'},
  {id:'t6',type:'income',amount:360,cat:'Sueldo',note:'Ingreso mensual',place:'',date:'2026-10-01',account:'bank'}
 ],
 budgets:[
  {name:'Comida',limit:140,spent:71.4,rollover:true},{name:'Transporte',limit:55,spent:26,rollover:false},{name:'Entretenimiento',limit:45,spent:19,rollover:true}
 ],
 goals:[
  {name:'Fondo de emergencia',target:900,current:285,deadline:'2027-04-30',kind:'Meta'},
  {name:'Seguro anual',target:360,current:120,deadline:'2027-01-15',kind:'Fondo de amortización'}
 ],
 debts:[
  {name:'Yisus',total:120,paid:45,balance:75,next:'2026-10-20',installment:15,currency:'USD'},
  {name:'Laptop',total:480,paid:320,balance:160,next:'2026-10-28',installment:40,currency:'USD'}
 ],
 owed:[
  {person:'Carlos',total:85,paid:25,balance:60,due:'2026-10-17',note:'Compra compartida'},
  {person:'María',total:40,paid:0,balance:40,due:'2026-10-25',note:'Préstamo'}
 ],
 subs:[
  {name:'Netflix',amount:7.99,cycle:'Mensual',next:'2026-10-14',active:true},
  {name:'Spotify',amount:5.99,cycle:'Mensual',next:'2026-10-18',active:true},
  {name:'Nube',amount:2.49,cycle:'Mensual',next:'2026-10-26',active:true}
 ],
 templates:[
  {name:'Pasaje diario',type:'expense',amount:2.5,cat:'Transporte'},
  {name:'Almuerzo',type:'expense',amount:6,cat:'Comida'},
  {name:'Venta rápida',type:'income',amount:10,cat:'Ventas'}
 ],
 reminders:[
  {title:'Pagar internet',date:'2026-10-20',kind:'Pago',amount:15},
  {title:'Cobrar a Carlos',date:'2026-10-17',kind:'Cobro',amount:60},
  {title:'Aporte meta',date:'2026-10-22',kind:'Meta',amount:25}
 ],
 automations:[
  {name:'Internet mensual',kind:'Gasto',every:'Cada mes · día 20',amount:15,on:true,auto:false},
  {name:'Ingreso esperado',kind:'Ingreso',every:'Cada mes · día 1',amount:360,on:true,auto:false},
  {name:'Ahorro semanal',kind:'Meta',every:'Cada semana',amount:12,on:false,auto:false}
 ],
 homeProducts:[
  {name:'Arroz',qty:2,min:2,unit:'kg',price:2.4},{name:'Café',qty:0.5,min:1,unit:'kg',price:7.2},{name:'Detergente',qty:1,min:1,unit:'u',price:4.5},{name:'Pasta',qty:4,min:2,unit:'u',price:1.2}
 ],
 shopping:[
  {name:'Café',qty:1,price:7.2,done:false},{name:'Huevos',qty:1,price:4.1,done:false},{name:'Frutas',qty:2,price:3.5,done:false},{name:'Detergente',qty:1,price:4.5,done:true}
 ],
 businesses:[
  {id:'b1',name:'Accesorios JC',currency:'USD',cash:428.5,salesToday:96,profitMonth:214.4,receivable:72}
 ],
 bizProducts:[
  {name:'Pulsera azul',sku:'P-001',stock:12,min:4,cost:2.2,price:5},{name:'Collar dorado',sku:'C-014',stock:3,min:4,cost:4.5,price:9},{name:'Aretes',sku:'A-008',stock:18,min:5,cost:1.8,price:4}
 ],
 bizSales:[
  {client:'Ana',item:'Pulsera azul',qty:2,amount:10,paid:10,date:'2026-10-10'},
  {client:'Luis',item:'Collar dorado',qty:2,amount:18,paid:8,date:'2026-10-10'},
  {client:'María',item:'Aretes',qty:5,amount:20,paid:0,date:'2026-10-09'}
 ],
 bizClients:[
  {name:'Ana',phone:'+58 412 0000001',debt:0,status:'verde'},{name:'Luis',phone:'+58 414 0000002',debt:10,status:'amarillo'},{name:'María',phone:'+58 424 0000003',debt:20,status:'rojo'}
 ],
 rates:{USD:1,VES:875.64,USDT:1.002,EUR:.964,CAD:1.40,COP:3875,MXN:18.42,BRL:5.36,GBP:.832},
 settings:{hideAmounts:false,notifications:true,household:true,rates:true,biometric:true,pin:true,ads:true,language:'Español',country:'Venezuela',currency:'USD'},
 achievements:[{name:'Primer registro',done:true},{name:'7 días en orden',done:true},{name:'Presupuesto consciente',done:false},{name:'Meta en marcha',done:true}]
});
let state=seed();
let logged=false,workspace='personal',screen='home',analysisMode='expenses',featureStack=[];
const cats=['Comida','Transporte','Servicios','Compras','Salud','Entretenimiento','Sueldo','Ventas','Otros'];

const moneyFeatures=[
 ['accounts','▰','Cuentas','Saldos y cuentas'],['movements','▤','Movimientos','Historial real'],['budgets','◔','Presupuestos','Límites y categorías'],['goals','◒','Metas','Ahorro reservado'],
 ['debts','▱','Deudas','Cuotas y pagos'],['owed','⇠','Me deben','Cobros pendientes'],['subscriptions','◫','Suscripciones','Pagos recurrentes'],['templates','★','Frecuentes','Plantillas rápidas'],
 ['split','⑂','Dividir gastos','Pareja y grupos'],['import','⇧','Importar','Trae movimientos'],['emergency','✚','Emergencia','Prioriza tu dinero']
];
const moreFeatures=[
 ['mobilePayments','▣','Mis pagos móviles'],['reminders','♧','Recordatorios'],['reports','▥','Reportes'],['achievements','♜','Logros'],['profile','●','Mi perfil'],['premium','♛','Premium'],['settings','⚙','Configuración']
];

function clone(v){return JSON.parse(JSON.stringify(v))}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function today(){return '2026-10-10'}
function dateLabel(iso){if(!iso)return 'Sin fecha';const [y,m,d]=iso.split('-');const ms=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];return `${Number(d)} ${ms[Number(m)-1]} ${y}`}
function toast(msg){openSheet('Nuvora',`<div class="notice">${esc(msg)}</div><div class="action-row"><button class="primary" data-close>Entendido</button></div>`)}
function showLogin(){logged=false;$('app').classList.add('hidden');$('login').classList.remove('hidden')}
function showApp(){logged=true;$('login').classList.add('hidden');$('app').classList.remove('hidden');renderAll()}
$('loginForm').addEventListener('submit',e=>{e.preventDefault();if($('loginUser').value.trim()==='nuvora'&&$('loginPass').value==='Nuvora2026!'){$('loginError').textContent='';showApp()}else $('loginError').textContent='Usuario o contraseña incorrectos.'});

function renderFeatureTiles(){
 $('moneyTiles').innerHTML=moneyFeatures.map(([id,ic,t,s])=>`<button class="feature-tile" data-feature="${id}"><span class="fi">${ic}</span><b>${t}</b><small>${s}</small></button>`).join('');
 $('moreTiles').innerHTML=moreFeatures.map(([id,ic,t])=>`<button class="feature-tile" data-feature="${id}"><span class="fi">${ic}</span><b>${t}</b><small>${moreSubtitle(id)}</small></button>`).join('');
}
function moreSubtitle(id){return ({mobilePayments:'Datos para cobrar y pagar',reminders:'Pagos, cobros y avisos',reports:'Resumen y exportación',achievements:'Progreso y misiones',profile:'Cuenta Nuvora',premium:'Funciones avanzadas',settings:'Cuenta, dinero, seguridad y datos'})[id]||''}

function totals(){
 const total=state.accounts.reduce((s,a)=>s+a.balance,0);
 const committed=state.debts.reduce((s,d)=>s+(d.next<='2026-11-09'?Math.min(d.installment,d.balance):0),0)+state.subs.filter(x=>x.active&&x.next<='2026-11-09').reduce((s,x)=>s+x.amount,0);
 const reserved=45;
 const available=total-committed-reserved;
 return {total,committed,reserved,available};
}
function renderHome(){
 const t=totals();$('available').textContent=state.settings.hideAmounts?'••••':money(t.available);
 const ves=t.available*state.rates.VES;$('vesRef').textContent=state.settings.hideAmounts?'••••':`VES ${fmt(ves)}`;$('fxVes').textContent=state.settings.hideAmounts?'••••':`VES ${fmt(ves)}`;$('fxUsdt').textContent=state.settings.hideAmounts?'••••':`USDT ${fmt(t.available*state.rates.USDT)}`;$('fxEur').textContent=state.settings.hideAmounts?'••••':`EUR ${fmt(t.available*state.rates.EUR)}`;
 const tod=state.txs.filter(x=>x.date===today());const ex=tod.filter(x=>x.type==='expense').reduce((s,x)=>s+x.amount,0);const inc=tod.filter(x=>x.type==='income').reduce((s,x)=>s+x.amount,0);
 $('todayExpense').textContent=state.settings.hideAmounts?'••••':money(ex);$('todayIncome').textContent=state.settings.hideAmounts?'••••':money(inc);$('todayExpenseCount').textContent=`${tod.filter(x=>x.type==='expense').length} mov.`;$('todayIncomeCount').textContent=`${tod.filter(x=>x.type==='income').length} mov.`;
 const next=state.reminders.slice().sort((a,b)=>a.date.localeCompare(b.date))[0];if(next){$('nextName').textContent=next.title.replace(/^Pagar /,'');$('nextDate').textContent=dateLabel(next.date);$('nextAmount').textContent=state.settings.hideAmounts?'••••':money(next.amount)}
 $('planTotal').textContent=state.settings.hideAmounts?'••••':money(t.total);$('planCommitted').textContent=state.settings.hideAmounts?'••••':money(t.committed);$('planReserved').textContent=state.settings.hideAmounts?'••••':money(t.reserved);
 $('analysisExpense').textContent=state.settings.hideAmounts?'••••':money(state.txs.filter(x=>x.type==='expense'&&x.date.startsWith('2026-10')).reduce((s,x)=>s+x.amount,0));
}
function renderPlan(){
 const rows=[...state.reminders,...state.subs.filter(s=>s.active).map(s=>({title:s.name,date:s.next,kind:'Suscripción',amount:s.amount}))].sort((a,b)=>a.date.localeCompare(b.date)).slice(0,6);
 $('planEvents').innerHTML=rows.map(r=>`<div class="list-row"><span class="list-icon">${r.kind==='Cobro'?'↑':'▣'}</span><span class="list-main"><b>${esc(r.title)}</b><small>${esc(r.kind)} · ${dateLabel(r.date)}</small></span><span class="${r.kind==='Cobro'?'green':'gold'}">${state.settings.hideAmounts?'••••':money(r.amount)}</span></div>`).join('');
}
function renderAnalysis(){
 const sets={
  expenses:[['Comida',71.4],['Servicios',37],['Transporte',26],['Entretenimiento',19],['Otros',13.5]],
  income:[['Sueldo',360],['Ventas',92],['Otros',40]],
  merchants:[['Supermercado',58.9],['Café Centro',24.5],['Telefonía',22],['Transporte',16]]
 };
 const arr=sets[analysisMode],max=Math.max(...arr.map(x=>x[1]),1);
 $('analysisBars').innerHTML=`<h3>${analysisMode==='expenses'?'Gastos por categoría':analysisMode==='income'?'Ingresos por categoría':'Comercios'}</h3>`+arr.map(([n,v])=>`<div class="bar-row"><div class="bar-meta"><b>${n}</b><span>${state.settings.hideAmounts?'••••':money(v)}</span></div><div class="progress"><i style="width:${v/max*100}%"></i></div></div>`).join('');
}
function renderAll(){renderFeatureTiles();renderHome();renderPlan();renderAnalysis();renderWorkspace();bindDynamic()}

function switchScreen(name){
 screen=name;workspace='personal';showWorkspace('personal');
 document.querySelectorAll('#personalWorkspace .screen').forEach(x=>x.classList.toggle('active',x.id===`screen-${name}`));
 document.querySelectorAll('.navbtn').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));
 if(name==='plan')renderPlan();if(name==='analysis')renderAnalysis();
}
function showWorkspace(w){
 workspace=w;featureStack=[];
 const labels={personal:'Finanzas personales',home:'Hogar',rates:'Tasas y Multimoneda',business:'Emprendimiento'};
 $('workspaceLabel').textContent=labels[w];$('workspaceMenu').classList.add('hidden');
 document.querySelectorAll('.workspace-view').forEach(v=>v.classList.remove('active'));
 $('bottomNav').classList.toggle('hidden',w!=='personal');
 if(w==='personal'){$('personalWorkspace').classList.add('active');switchScreenOnly(screen)}
 else if(w==='home'){$('homeWorkspace').classList.add('active');renderHomeWorkspace()}
 else if(w==='rates'){$('ratesWorkspace').classList.add('active');renderRatesWorkspace()}
 else if(w==='business'){$('businessWorkspace').classList.add('active');renderBusinessWorkspace()}
 bindDynamic();
}
function switchScreenOnly(name){
 document.querySelectorAll('#personalWorkspace .screen').forEach(x=>x.classList.toggle('active',x.id===`screen-${name}`));
 document.querySelectorAll('.navbtn').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));
}
function renderWorkspace(){if(workspace==='home')renderHomeWorkspace();if(workspace==='rates')renderRatesWorkspace();if(workspace==='business')renderBusinessWorkspace()}

function openSheet(title,body){$('sheetTitle').textContent=title;$('sheetBody').innerHTML=body;$('overlay').classList.remove('hidden');bindDynamic()}
function closeSheet(){$('overlay').classList.add('hidden')}
$('closeSheet').addEventListener('click',closeSheet);
$('overlay').addEventListener('click',e=>{if(e.target===$('overlay'))closeSheet()});
