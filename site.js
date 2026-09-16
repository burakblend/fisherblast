(()=>{'use strict';const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('navigation');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});window.matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}const path=location.pathname.replace(/index\.html$/,'').replace(/\/$/,'')||'/';document.querySelectorAll('#navigation a').forEach(a=>{if((new URL(a.href,location.href).pathname.replace(/index\.html$/,'').replace(/\/$/,'')||'/')===path)a.setAttribute('aria-current','page')});if(window.matchMedia('(max-width:800px)').matches){document.querySelectorAll('.legal-toc details').forEach(d=>d.removeAttribute('open'))}})();;(()=>{
window.initExhibit=()=>{
 if(window.disposeExhibit)window.disposeExhibit();
 const cleanups=[];document.querySelectorAll('.exhibit').forEach(root=>{
 const track=root.querySelector('.exhibit-track'),view=root.querySelector('.exhibit-window'),dots=[...root.querySelectorAll('[data-slide]')],pause=root.querySelector('.exhibit-pause');
 const originals=[...track.children],n=originals.length,ctrl=new AbortController(),signal=ctrl.signal,motion=matchMedia('(prefers-reduced-motion:reduce)');
 let index=0,position=1,timer,paused=motion.matches,hover=false,focus=false,start=null,busy=false,fallback;
 const first=originals[0].cloneNode(true),last=originals[n-1].cloneNode(true);
 [first,last].forEach(x=>{x.setAttribute('aria-hidden','true');x.removeAttribute('aria-label')});track.prepend(last);track.append(first);
 const step=()=>originals[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
 const draw=(animate=true)=>{track.style.transition=animate&&!motion.matches?'transform 650ms cubic-bezier(.22,.7,.25,1)':'none';track.style.transform=`translateX(${(view.clientWidth-originals[0].getBoundingClientRect().width)/2-position*step()}px)`;dots.forEach((d,i)=>d.setAttribute('aria-pressed',String(i===index)));originals.forEach((s,i)=>s.setAttribute('aria-hidden',String(i!==index)))};
 const settle=()=>{clearTimeout(fallback);if(position===0)position=n;if(position===n+1)position=1;draw(false);busy=false};
 const schedule=()=>{clearTimeout(timer);if(!paused&&!hover&&!focus&&!document.hidden&&!motion.matches)timer=setTimeout(()=>move(-1),Math.max(2000,Number(window.TAVOOK_SETTINGS?.slideIntervalMs)||5000))};
 function move(dir){if(busy)return;busy=true;position+=dir;index=(index+dir+n)%n;draw();fallback=setTimeout(settle,700);schedule()}
 const listen=(el,type,fn)=>el.addEventListener(type,fn,{signal});
 listen(track,'transitionend',e=>{if(e.target===track&&e.propertyName==='transform')settle()});
 root.querySelectorAll('[data-dir]').forEach(b=>listen(b,'click',()=>move(Number(b.dataset.dir))));
 dots.forEach((b,i)=>listen(b,'click',()=>{clearTimeout(fallback);busy=false;index=i;position=i+1;draw();schedule()}));
 const label=()=>{pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'Play slideshow':'Pause slideshow');pause.setAttribute('aria-pressed',String(paused))};
 listen(pause,'click',()=>{paused=!paused;label();schedule()});
 listen(root,'mouseenter',()=>{hover=true;schedule()});listen(root,'mouseleave',()=>{hover=false;schedule()});
 listen(root,'focusin',()=>{focus=true;schedule()});listen(root,'focusout',e=>{if(!root.contains(e.relatedTarget)){focus=false;schedule()}});
 listen(document,'visibilitychange',schedule);listen(window,'resize',()=>{settle();schedule()});
 listen(motion,'change',()=>{paused=motion.matches;label();settle();schedule()});
 listen(view,'keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 listen(view,'pointerdown',e=>{if(e.button!==0)return;start={x:e.clientX,y:e.clientY};clearTimeout(timer);view.setPointerCapture(e.pointerId)});
 listen(view,'pointerup',e=>{if(start){const dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1)}start=null;schedule()});
 listen(view,'pointercancel',()=>{start=null;schedule()});
 cleanups.push(()=>{clearTimeout(timer);clearTimeout(fallback);ctrl.abort();first.remove();last.remove()});
 draw(false);label();schedule();
 });window.disposeExhibit=()=>{cleanups.forEach(fn=>fn());window.disposeExhibit=null};
};window.initExhibit();})();
