function transactionForm(type='expense'){
 const label=type==='income'?'Ingreso':type==='transfer'?'Transferencia':'Gasto';
 openSheet(`Nuevo ${label}`,`
 <div class="sim-note">Modo demo: este movimiento solo cambia la simulación en memoria. Al recargar desaparece.</div>
 <form id="txDemoForm" class="form" style="margin-top:12px">
  <div class="chips"><button type="button" class="chip ${type==='expense'?'active':''}" data-set-type="expense">Gasto</button><button type="button" class="chip ${type==='income'?'active':''}" data-set-type="income">Ingreso</button><button type="button" class="chip ${type==='transfer'?'active':''}" data-set-type="transfer">Transferir</button></div>
  <input type="hidden" id="txType" value="${type}">
  <label>Monto<input id="txAmount" type="number" min=".01" step=".01" value="${type==='expense'?'8.50':type==='income'?'25':'10'}" required></label>
  <label>Moneda<select id="txCurrency"><option>USD</option><option>VES</option><option>EUR</option><option>USDT</option></select></label>
  <label>${type==='income'?'¿Dónde recibiste el dinero?':type==='transfer'?'Cuenta de origen':'¿De dónde salió el dinero?'}<select id="txAccount">${state.accounts.map(a=>`<option value="${a.id}">${esc(a.name)} · ${esc(a.currency)}</option>`).join('')}</select></label>
  ${type==='transfer'?`<label>Cuenta destino<select id="txTo">${state.accounts.slice().reverse().map(a=>`<option value="${a.id}">${esc(a.name)}</option>`).join('')}</select></label><label>Comisión<input id="txFee" type="number" min="0" step=".01" value="0"></label>`:`<label>Categoría<select id="txCat">${cats.map(c=>`<option>${c}</option>`).join('')}</select></label>`}
  <label>Nota<input id="txNote" value="${type==='income'?'Ingreso demo':type==='transfer'?'Transferencia demo':'Compra demo'}"></label>
  <label>Fecha<input id="txDate" type="date" value="${today()}"></label>
  ${type!=='transfer'?`<label class="switch"><input id="txPending" type="checkbox"> Marcar como ${type==='income'?'pendiente de cobro':'pago previsto'}</label>`:''}
  <details><summary class="cyan" style="cursor:pointer;font-weight:900">Más opciones</summary><div class="form" style="margin-top:10px">
   ${type==='expense'?`<label>Comercio o lugar<input id="txPlace" value="Comercio demo"></label><label>Tipo de gasto<select><option>Variable</option><option>Fijo</option><option>Extraordinario</option></select></label><label class="switch"><input type="checkbox"> Dividir entre categorías</label>`:''}
   ${type!=='transfer'?`<label>Repetir<select><option>Solo esta vez</option><option>Cada semana</option><option>Cada 14 días</option><option>Cada mes</option><option>Intervalo personalizado</option></select></label>`:''}
   <button type="button" class="secondary" data-sim="attachment">📎 Adjuntar comprobante / Cámara</button>
   ${type!=='transfer'?`<button type="button" class="secondary" data-sim="template">★ Guardar como frecuente</button>`:''}
  </div></details>
  <button class="primary" type="submit">Guardar movimiento en demo</button>
 </form>`);
}
function saveTransaction(e){e.preventDefault();const type=$('txType').value,amount=Number($('txAmount').value);if(!(amount>0))return;const acc=state.accounts.find(a=>a.id===$('txAccount').value);const pending=$('txPending')?.checked||false;
 if(type==='expense'&&!pending&&acc)acc.balance-=amount;if(type==='income'&&!pending&&acc)acc.balance+=amount;
 if(type==='transfer'&&acc){const fee=Number($('txFee')?.value||0),to=state.accounts.find(a=>a.id===$('txTo').value);if(to&&to.id!==acc.id){acc.balance-=amount+fee;to.balance+=amount}}
 state.txs.unshift({id:'d'+Date.now(),type,amount,cat:$('txCat')?.value||'Transferencia',note:$('txNote').value,place:$('txPlace')?.value||'',date:$('txDate').value,account:acc?.id,pending});
 closeSheet();renderAll();toast('Movimiento aplicado solo a esta sesión de demostración.');
}

function featurePage(id){
 workspace='feature';document.querySelectorAll('.workspace-view').forEach(v=>v.classList.remove('active'));$('featureView').classList.add('active');$('bottomNav').classList.add('hidden');
 featureStack.push(id);$('featureView').innerHTML=featureHTML(id);bindDynamic();window.scrollTo({top:0,behavior:'smooth'});
}
function featureBack(){const current=featureStack.pop();if(current&&String(current).startsWith('home:')){featureStack=[];workspace='home';$('featureView').classList.remove('active');$('homeWorkspace').classList.add('active');$('bottomNav').classList.add('hidden');renderHomeWorkspace();bindDynamic();return}if(current&&String(current).startsWith('biz:')){featureStack=[];workspace='business';$('featureView').classList.remove('active');$('businessWorkspace').classList.add('active');$('bottomNav').classList.add('hidden');renderBusinessWorkspace();bindDynamic();return}if(featureStack.length){const id=featureStack[featureStack.length-1];$('featureView').innerHTML=featureHTML(id);bindDynamic()}else{workspace='personal';$('featureView').classList.remove('active');$('personalWorkspace').classList.add('active');$('bottomNav').classList.remove('hidden');switchScreenOnly(screen)}}
function head(title,sub=''){return `<div class="back-head"><button type="button" data-back>‹</button><div><h2>${title}</h2>${sub?`<div class="muted tiny">${sub}</div>`:''}</div></div>`}
function featureHTML(id){
 switch(id){
  case'accounts':return accountsHTML();
  case'movements':return movementsHTML();
  case'budgets':return budgetsHTML();
  case'goals':return goalsHTML();
  case'debts':return debtsHTML();
  case'owed':return owedHTML();
  case'subscriptions':return subsHTML();
  case'templates':return templatesHTML();
  case'split':return splitHTML();
  case'import':return importHTML();
  case'emergency':return emergencyHTML();
  case'automations':return automationsHTML();
  case'calendar':return calendarHTML();
  case'future':return futureHTML();
  case'mobilePayments':return mobileHTML();
  case'reminders':return remindersHTML();
  case'reports':return reportsHTML();
  case'achievements':return achievementsHTML();
  case'profile':return profileHTML();
  case'premium':return premiumHTML();
  case'settings':return settingsHTML();
  case'search':return searchHTML();
  case'alerts':return alertsHTML();
  case'analysis':screen='analysis';featureStack=[];workspace='personal';$('featureView').classList.remove('active');$('personalWorkspace').classList.add('active');$('bottomNav').classList.remove('hidden');switchScreen('analysis');return '';
  default:return head('Nuvora')+`<div class="panel">Función de demostración.</div>`;
 }
}
