import{d as h,u as I,c as a,a as s,t as i,b as w,e as n,f as $,r as b,o,g as C,p as E,h as y,_ as N,i as m,F as A,j as g,k as T,l as x,m as k,C as K,L as W,n as J,q as R,s as U,v as Q}from"./index.583b3f7c.js";const z="/bnb/icons/signal.svg",B=e=>(E("data-v-7f499268"),e=e(),y(),e),Z={class:"right-side"},X={class:"sticky"},H={class:"container"},ee={class:"sidebar"},se={class:"row items-center gap-8 mb-2"},te=B(()=>s("div",null,"par nuit",-1)),ie={class:"row items-center gap-4 subtitle mb-24"},oe=B(()=>s("img",{src:N},null,-1)),ne=$('<div class="tab caption mb-16" data-v-7f499268><div class="row" data-v-7f499268><div class="col-6 cell" data-v-7f499268><div class="bold mb-2" data-v-7f499268>Arriv\xE9e</div><div data-v-7f499268>09/01/20...</div></div><div class="col-6 cell cell-right" data-v-7f499268><div class="bold mb-2" data-v-7f499268>D\xE9part</div><div data-v-7f499268>15/01/20...</div></div></div><div class="cell cell-bottom" data-v-7f499268><div class="bold mb-2" data-v-7f499268>Voyageurs</div><div data-v-7f499268>1 voyageur</div></div></div>',1),ae=B(()=>s("div",{class:"subtitle text-center mb-24"}," Aucun montant ne vous sera d\xE9bit\xE9 pour le moment ",-1)),ce={class:"row items-center justify-between mb-16"},le={class:"underline"},de=B(()=>s("div",null,"1 032 \u20AC",-1)),re=B(()=>s("div",{class:"row items-center justify-between"},[s("div",{class:"underline"},"Frais de service"),s("div",null,"171 \u20AC")],-1)),ve=B(()=>s("div",{class:"separator mb-24 mt-24"},null,-1)),me=B(()=>s("div",{class:"row items-center justify-between bold"},[s("div",null,"Total"),s("div",null,"1 203 \u20AC")],-1)),ue=B(()=>s("div",{class:"signal row items-center justify-center bold underline text-dark-grey"},[s("img",{class:"mr-16",src:z}),s("div",null,"Signaler cette annonce")],-1)),_e=h({__name:"BnbSidebar",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();return c(t.home),(u,l)=>{const r=b("bnb-link"),v=b("bnb-button");return o(),a("div",Z,[s("div",X,[s("div",H,[s("div",ee,[s("div",se,[s("h2",null,i(e.home.price)+" \u20AC",1),te]),s("div",ie,[oe,s("div",null,i(w(C)(e.home.reviews).toFixed(1))+" \xB7",1),n(r,{class:"bold text-dark-grey",label:`${e.home.reviews.length} commentaires`,onClick:l[0]||(l[0]=p=>w(d)("comment-popup")),outlined:""},null,8,["label"])]),ne,n(v,{class:"col mb-16",label:"R\xE9server","bg-color":"gradient"}),ae,s("div",ce,[s("div",le,i(e.home.price)+" x 6 nuits",1),de]),re,ve,me]),ue])])])}}});const be=m(_e,[["__scopeId","data-v-7f499268"]]),he={class:"top-link"},pe={class:"row"},ge={style:{position:"relative"}},fe=["src"],xe={class:"counter-image caption bold"},we=h({__name:"MobilePhotos",props:{home:null},setup(e){return(t,d)=>{const c=b("bnb-button");return o(),a("div",null,[s("div",he,[n(c,{icon:"/icons/arrow-left.svg",shadow:"",round:""}),s("div",pe,[n(c,{class:"mr-16",icon:"/icons/mobile-share.svg",shadow:"",round:""}),n(c,{icon:"/icons/mobile-save.svg",shadow:"",round:""})])]),s("div",ge,[s("img",{class:"cover-image",src:e.home.photos[0].url},null,8,fe),s("div",xe,"1 / "+i(e.home.photos.length),1)])])}}});const $e=m(we,[["__scopeId","data-v-38a66ca7"]]),Ee={class:"laptop-photos"},ye={class:"container"},Ae={class:"box row items-center"},Be=["src"],ke={class:"small-image"},Ie=["src"],Ne=["src"],Se={class:"small-image"},De=["src"],Te=["src"],Ce=h({__name:"LaptopPhotos",props:{home:null},setup(e){return(t,d)=>(o(),a("div",Ee,[s("div",ye,[s("div",Ae,[s("img",{class:"image-1",src:e.home.photos[0].url},null,8,Be),s("div",ke,[s("img",{class:"image",src:e.home.photos[1].url},null,8,Ie),s("img",{class:"image image-bottom",src:e.home.photos[2].url},null,8,Ne)]),s("div",Se,[s("img",{class:"image image-top-left",src:e.home.photos[3].url},null,8,De),s("img",{class:"image image-bottom image-bottom-left",src:e.home.photos[4].url},null,8,Te)])])])]))}});const Pe=m(Ce,[["__scopeId","data-v-7aea5954"]]),Re="/bnb/icons/share.svg",je="/bnb/icons/save.svg",Oe={class:"mb-8"},Me={class:"row justify-between items-center"},Le={class:"row items-center gap-4 wrap"},Fe=s("img",{src:N},null,-1),qe={class:"subtitle"},Ue=s("div",{class:"bold"},"\xB7",-1),ze=s("div",{class:"bold"},"\xB7",-1),Ve={class:"subtitle underline"},Ge=$('<div class="row items-center gt-sm"><div class="row items-center gap-8 mr-12"><img src="'+Re+'"><div class="subtitle underline">Partager</div></div><div class="row items-center gap-8"><img src="'+je+'"><div class="subtitle underline">Enregistrer</div></div></div>',1),Ye=h({__name:"BnbTitle",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();return c(t.home),(u,l)=>{const r=b("bnb-link");return o(),a(A,null,[s("h1",Oe,[s("span",null,i(e.home.title),1)]),s("div",Me,[s("div",Le,[Fe,s("div",qe,i(w(C)(e.home.reviews).toFixed(1)),1),Ue,n(r,{class:"subtitle",label:`${e.home.reviews.length} commentaires`,onClick:l[0]||(l[0]=v=>w(d)("comment-popup")),outlined:""},null,8,["label"]),ze,s("div",Ve,i(e.home.location.city)+", "+i(e.home.location.region)+", "+i(e.home.location.country),1)]),Ge])],64)}}}),S=e=>(E("data-v-145bf753"),e=e(),y(),e),Ke={class:"mt-24 row items-center justify-between mb-8"},We={style:{"margin-right":"120px"}},Je={class:"row items-center gap-4 wrap gt-sm"},Qe=S(()=>s("div",null,"\xB7",-1)),Ze=S(()=>s("div",null,"\xB7",-1)),Xe=S(()=>s("div",null,"\xB7",-1)),He=["src"],es={class:"row items-center gap-4 wrap lt-md"},ss=S(()=>s("div",null,"\xB7",-1)),ts=S(()=>s("div",null,"\xB7",-1)),is=S(()=>s("div",null,"\xB7",-1)),os=h({__name:"BnbSubtitle",props:{home:null},setup(e){return(t,d)=>(o(),a(A,null,[s("div",Ke,[s("div",We,[s("h2",null,[s("div",null,i(e.home.homeCategory),1),s("div",null,"\xB7 Chez "+i(e.home.owner.firstName),1)]),s("div",Je,[s("div",null,i(e.home.capacity)+" voyageurs",1),Qe,s("div",null,i(e.home.nbRooms)+" chambre",1),Ze,s("div",null,i(e.home.nbBeds)+" lit",1),Xe,s("div",null,i(e.home.nbBathrooms)+" salle de bain",1)])]),s("img",{class:"profile-picture",src:e.home.owner.profilePicture},null,8,He)]),s("div",es,[s("div",null,i(e.home.capacity)+" voyageurs",1),ss,s("div",null,i(e.home.nbRooms)+" chambre",1),ts,s("div",null,i(e.home.nbBeds)+" lit",1),is,s("div",null,i(e.home.nbBathrooms)+" salle de bain",1)])],64))}});const ns=m(os,[["__scopeId","data-v-145bf753"]]),as="/bnb/icons/pet.svg",cs="/bnb/icons/calendar.svg",ls={},ds=$('<div class="row items-center mb-24"><img class="mr-18" src="'+as+'"><div><div class="bold">Amis \xE0 quatre pattes ou plus bienvenus</div><div class="subtitle text-dark-grey"> Emmenez vos animaux de compagnie avec vous. </div></div></div><div class="row items-center"><img class="mr-18" src="'+cs+'"><div><div class="bold">Annulation gratuite pendant 48 heures.</div></div></div>',2),rs=[ds];function vs(e,t){return o(),a("div",null,rs)}const ms=m(ls,[["render",vs]]),us="/bnb/aircover.png",_s={},bs=s("img",{class:"mb-16",src:us},null,-1),hs=s("div",{class:"subtitle mb-16"}," Chaque r\xE9servation comprend une protection gratuite en cas d'annulation par l'h\xF4te, d'inexactitudes dans la description du logement, ainsi que d'autres probl\xE8mes comme les difficult\xE9s d'acc\xE8s au logement. ",-1),ps=s("div",{class:"subtitle bold underline"},"En savoir plus",-1),gs=[bs,hs,ps];function fs(e,t){return o(),a("div",null,gs)}const xs=m(_s,[["render",fs]]),ws={class:"mb-16",style:{"text-overflow":"ellipsis",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":"6","-webkit-box-orient":"vertical"}},$s=s("div",{class:"row items-center"},[s("div",{class:"subtitle bold underline mr-4"},"En savoir plus"),s("img",{src:g,style:{height:"12px",width:"12px"}})],-1),Es=h({__name:"BnbDescription",props:{home:null},setup(e){return(t,d)=>(o(),a("div",null,[s("div",ws,i(e.home.description),1),$s]))}}),ys=e=>(E("data-v-a7640d18"),e=e(),y(),e),As=ys(()=>s("h2",{class:"mb-24"},"O\xF9 vous dormirez",-1)),Bs=["src"],ks={class:"bold mb-4"},Is={class:"subtitle"},Ns=h({__name:"BnbRooms",props:{home:null},setup(e){const t=d=>{const c=[];return d.forEach(u=>{const l=c.find(r=>r.type===u);l?c[c.indexOf(l)].nb++:c.push({nb:1,type:u})}),c};return(d,c)=>(o(),a("div",null,[As,(o(!0),a(A,null,T(e.home.bedrooms,(u,l)=>(o(),a("div",{key:l},[u.imageUrl?(o(),a("img",{key:0,class:"bed-picture rounded mb-16",src:u.imageUrl},null,8,Bs)):x("",!0),s("div",ks,"Chambre "+i(l+1),1),s("div",Is,[(o(!0),a(A,null,T(t(u.beds),(r,v)=>(o(),a("span",{key:v},i(r.nb)+" "+i(r.type),1))),128))])]))),128))]))}});const Ss=m(Ns,[["__scopeId","data-v-a7640d18"]]),Ds=e=>(E("data-v-0a8ab917"),e=e(),y(),e),Ts=Ds(()=>s("h2",{class:"mb-24"},"Ce que propose ce logement",-1)),Cs={class:"row items-center wrap"},Ps={class:"col row justify-between items-center"},Rs=h({__name:"BnbEquipment",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();return c(t.home),(u,l)=>{const r=b("bnb-ref-image"),v=b("bnb-button");return o(),a("div",null,[Ts,s("div",Cs,[(o(!0),a(A,null,T(e.home.amenities.filter(p=>p.isAvailable===!0).filter((p,D)=>D<5),p=>(o(),a("div",{class:"col col-xl-6 row items-center mb-14",key:p.name},[n(r,{class:"gt-sm mr-18",src:`/icons/${p.icons}.svg`},null,8,["src"]),s("div",Ps,[s("div",null,i(p.name),1),n(r,{class:"lt-md mr-18",src:`/icons/${p.icons}.svg`},null,8,["src"])])]))),128))]),n(v,{class:"mt-10 equipment-btn",label:`Afficher les ${e.home.amenities.length} \xE9quipements`,border:"dark",onClick:l[0]||(l[0]=p=>w(d)("bnb-equipment-popup"))},null,8,["label"])])}}});const js=m(Rs,[["__scopeId","data-v-0a8ab917"]]);const Os={},Ms=$('<h2 class="mb-24" data-v-569c86a4>O\xF9 se situe le logement</h2><div id="map" class="map mb-24" data-v-569c86a4></div><div class="bold mb-16" data-v-569c86a4>Cristal temple, Beach city, Terre</div><div class="mb-16" style="text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;" data-v-569c86a4> Le Crystal Temple est un endroit sacr\xE9 o\xF9 les gemmes de cristal vivent. C&#39;est leur base depuis laquel elle prot\xE8ge l&#39;humanit\xE9. Dans le temple, il y a plusieurs caverne qui sont connect\xE9 par le coeur de cristal. </div><div class="row items-center" data-v-569c86a4><div class="subtitle bold underline mr-4" data-v-569c86a4>En savoir plus</div><img src="'+g+'" style="height:12px;width:12px;" data-v-569c86a4></div>',5),Ls=[Ms];function Fs(e,t){return o(),a("div",null,Ls)}const O=m(Os,[["render",Fs],["__scopeId","data-v-569c86a4"]]),qs={class:"comment-list"},Us={class:"row items-center mb-12"},zs=["src"],Vs={class:"bold"},Gs={class:"subtitle text-dark+grey"},Ys={class:"mb-8 text"},Ks=h({__name:"MobileComment",props:{review:null},setup(e){return(t,d)=>{const c=b("bnb-link");return o(),a("div",qs,[s("div",Us,[s("img",{class:"mr-12 profile-picture",src:e.review.author.profilePicture},null,8,zs),s("div",null,[s("div",Vs,i(e.review.author.firstName),1),s("div",Gs,i(e.review.createdAt),1)])]),s("div",Ys,i(e.review.message),1),e.review.message.length>200?(o(),k(c,{key:0,class:"bold",label:"En savoir plus",outlined:"",arrow:""})):x("",!0)])}}});const Ws=m(Ks,[["__scopeId","data-v-e927e8ac"]]),Js=e=>(E("data-v-c7557feb"),e=e(),y(),e),Qs={class:"row items-center mb-32"},Zs=Js(()=>s("div",{class:"mr-8 row items-center"},[s("img",{src:N,style:{width:"16px",height:"16px"}})],-1)),Xs={class:"mb-24"},Hs={class:"carousel"},et={class:"slide"},st={class:"end row items-center justify-center bold underline"},tt=h({__name:"MobileCommentSection",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();return c(t.home),(u,l)=>{const r=b("bnb-button");return o(),a("div",null,[s("div",Qs,[Zs,s("h2",null,i(w(C)(e.home.reviews))+" \xB7 "+i(e.home.reviews.length)+" commentaires ",1)]),s("div",Xs,[s("div",Hs,[s("div",et,[(o(!0),a(A,null,T(e.home.reviews,v=>(o(),k(Ws,{key:v.author.firstName,review:v},null,8,["review"]))),128)),s("div",st,[s("div",null,"Afficher les "+i(e.home.reviews.length)+" commentaires",1)])])])]),n(r,{style:{width:"100%"},label:`Afficher les ${e.home.reviews.length} commentaires`,border:"dark",onClick:l[0]||(l[0]=v=>w(d)("comment-popup"))},null,8,["label"])])}}});const it=m(tt,[["__scopeId","data-v-c7557feb"]]),V=e=>(E("data-v-4dc509a6"),e=e(),y(),e),ot={class:"row items-center gap-8 mb-4"},nt=V(()=>s("img",{src:N,width:"16"},null,-1)),at=V(()=>s("div",{class:"row items-center gap-4 text-dark-grey subtitle mb-32"},[s("div",null,"D\xE9couvrez comment fonctionnent les commentaires"),s("img",{src:J})],-1)),ct={class:"row items-center justify-between wrap"},lt=h({__name:"LaptopCommentSection",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();return c(t.home),(u,l)=>{const r=b("bnb-button");return o(),a("div",null,[s("div",ot,[nt,s("h2",null,i(w(C)(e.home.reviews).toFixed(2))+" \xB7 "+i(e.home.reviews.length)+" commentaires ",1)]),at,n(K,{home:e.home},null,8,["home"]),s("div",ct,[(o(!0),a(A,null,T(e.home.reviews,v=>(o(),k(W,{class:"col-xl-6 mb-40",key:v.author.firstName,review:v},null,8,["review"]))),128))]),n(r,{class:"review-btn",label:`Afficher les ${e.home.reviews.length} commentaires`,border:"dark",onClick:l[0]||(l[0]=v=>w(d)("comment-popup"))},null,8,["label"])])}}});const dt=m(lt,[["__scopeId","data-v-4dc509a6"]]),rt="/bnb/icons/identity-verified.svg",M="/bnb/icons/bnb-warning.svg",P=e=>(E("data-v-18eccd38"),e=e(),y(),e),vt={class:"lt-md row items-center justify-between mb-24"},mt={class:"mb-8"},ut={class:"subtitle text-dark-grey"},_t=P(()=>s("div",{class:"subtitle text-dark-grey"},"Particulier",-1)),bt=["src"],ht={class:"gt-sm row items-center mb-24"},pt=["src"],gt={class:"mb-2"},ft={class:"subtitle text-dark-grey"},xt={class:"row wrap",style:{gap:"0 60px"}},wt={class:"col col-md-6"},$t={class:"row items-center mb-16"},Et=P(()=>s("div",{class:"mr-8 row items-center"},[s("img",{src:N,style:{width:"16px",height:"16px"}})],-1)),yt={key:0,class:"row items-center mb-24"},At=P(()=>s("div",{class:"mr-8 row items-center"},[s("img",{src:rt,style:{width:"16px",height:"16px"}})],-1)),Bt=P(()=>s("div",null,"Identit\xE9 v\xE9rifi\xE9e",-1)),kt=[At,Bt],It={class:"mb-24"},Nt=P(()=>s("div",{class:"bold mb-8"},"Pendant votre s\xE9jour",-1)),St={class:"mb-24"},Dt={class:"col col-md-6"},Tt={class:"mb-8"},Ct={class:"mb-8"},Pt={class:"mb-24"},Rt=$('<div class="row items-center" data-v-18eccd38><div class="gt-sm mr-16" data-v-18eccd38><img src="'+M+'" data-v-18eccd38></div><div class="caption mr-16" data-v-18eccd38> Pour prot\xE9ger votre paiement, ne transf\xE9rez jamais d&#39;argent et ne communiquez pas en dehors du site ou de l&#39;application Airbnb. </div><div class="lt-md" data-v-18eccd38><img src="'+M+'" data-v-18eccd38></div></div>',1),jt=h({__name:"BnbInformations",props:{home:null},setup(e){return(t,d)=>{const c=b("bnb-button");return o(),a("div",null,[s("div",vt,[s("div",null,[s("h2",mt,"Propos\xE9 par "+i(e.home.owner.firstName),1),s("div",ut," Membre depuis mars "+i(e.home.owner.createdAt.getFullYear()),1),_t]),s("img",{class:"profile-picture",src:e.home.owner.profilePicture},null,8,bt)]),s("div",ht,[s("img",{class:"profile-picture mr-16",src:e.home.owner.profilePicture},null,8,pt),s("div",null,[s("h2",gt,"Propos\xE9 par "+i(e.home.owner.firstName),1),s("div",ft," Membre depuis mars "+i(e.home.owner.createdAt.getFullYear())+" \xB7 "+i(e.home.owner.isProfessional?"Professionel":"Particulier"),1)])]),s("div",xt,[s("div",wt,[s("div",$t,[Et,s("div",null,i(e.home.owner.reviews.length)+" commentaires",1)]),e.home.owner.identityVerified?(o(),a("div",yt,kt)):x("",!0),s("div",It,i(e.home.owner.description),1),s("div",null,[Nt,s("div",St,i(e.home.ownerDescription)+" ",1)])]),s("div",Dt,[s("div",Tt,"Langue : "+i(e.home.owner.languages.join(", ")),1),s("div",Ct," Taux de r\xE9ponse : "+i(e.home.owner.responseRate*100)+"% ",1),s("div",Pt," D\xE9lai de r\xE9ponse : Dans la "+i(e.home.owner.responseTime),1),n(c,{class:"mb-24 contact-btn",label:"Contacter l\u2019h\xF4te",border:"dark"}),Rt])])])}}});const Ot=m(jt,[["__scopeId","data-v-18eccd38"]]),Mt={},Lt=$('<div class="row items-center justify-between"><div class="mr-12"><h2 class="mb-8">R\xE8glement int\xE9rieur</h2><div class="subtitle text-dark-grey">Arriv\xE9e : 16:00 - 22:00</div></div><img src="'+g+'"></div><div class="separator mt-24 mb-24"></div><div class="row items-center justify-between"><div class="mr-12"><h2 class="mb-8">Sant\xE9 et s\xE9curit\xE9</h2><div class="subtitle text-dark-grey">...</div></div><img src="'+g+'"></div><div class="separator mt-24 mb-24"></div><div class="row items-center justify-between"><div class="mr-12"><h2 class="mb-8">Conditions d\u2019annulation</h2><div class="subtitle text-dark-grey mb-8"> Annulation gratuite pendant 48 heures. </div></div><img src="'+g+'"></div><div class="separator mt-24 mb-24"></div><div class="row"><div class="mr-16"><img src="'+z+'"></div><div class="bold underline">Signaler cette annonce</div></div>',7),Ft=[Lt];function qt(e,t){return o(),a("div",null,Ft)}const Ut=m(Mt,[["render",qt]]),L="/bnb/icons/clock.svg",zt="/bnb/icons/no-baby.svg",Vt="/bnb/icons/no-smoker.svg",Gt="/bnb/icons/no-party.svg",Yt="/bnb/icons/yes-pet.svg",Kt="/bnb/icons/carbon-detector.svg",F="/bnb/icons/smoking-detector.svg",Wt={},Jt=$('<h2 class="mb-24">\xC0 savoir</h2><div class="row justify-between"><div class="col-3"><div class="bold mb-12">R\xE8glement int\xE9rieur</div><div class="row items-center mb-8"><img class="mr-12" src="'+L+'"><div>Arriv\xE9e : 16:00 - 22:00</div></div><div class="row items-center mb-8"><img class="mr-12" src="'+L+'"><div>D\xE9part : 10:00</div></div><div class="row items-center mb-8"><img class="mr-12" src="'+zt+'"><div>Ne convient pas aux b\xE9b\xE9s (moins de 2 ans sauf gemmes)</div></div><div class="row items-center mb-8"><img class="mr-12" src="'+Vt+'"><div>Non fumeurs</div></div><div class="row items-center mb-8"><img class="mr-12" src="'+Gt+'"><div>Pas de f\xEAte ni de soir\xE9e</div></div><div class="row items-center mb-24"><img class="mr-12" src="'+Yt+'"><div>Animaux de compagnie accept\xE9s</div></div><div class="row items-center"><div class="subtitle bold underline mr-4">En savoir plus</div><img src="'+g+'" style="height:12px;width:12px;"></div></div><div class="col-3"><div class="bold mb-12">Sant\xE9 et s\xE9curit\xE9</div><div class="row items-center mb-8"><img class="mr-12" src="'+Kt+'"><div>D\xE9tecteur de monoxyde de carbone</div></div><div class="row items-center mb-8"><img class="mr-12" src="'+F+'"><div>D\xE9tecteur de fum\xE9e</div></div><div class="row items-center mb-24"><img class="mr-12" src="'+F+'"><div>Lion garde du corps</div></div><div class="row items-center"><div class="subtitle bold underline mr-4">En savoir plus</div><img src="'+g+'" style="height:12px;width:12px;"></div></div><div class="col-3"><div class="bold mb-12">Conditions d\u2019annulation</div><div class="mb-8">Annulation gratuite pendant 48 heures</div><div class="mb-24"> Consultez les conditions d&#39;annulation compl\xE8tes de l&#39;h\xF4te. </div><div class="row items-center"><div class="subtitle bold underline mr-4">En savoir plus</div><img src="'+g+'" style="height:12px;width:12px;"></div></div></div>',2),Qt=[Jt];function Zt(e,t){return o(),a("div",null,Qt)}const Xt=m(Wt,[["render",Zt]]),Ht={},ei=$('<h2 class="mb-32"> D\xE9couvrez d&#39;autres possibilit\xE9s d&#39;h\xE9bergement \xB7 Beach City et ses environs </h2><div class="row subtitle text-dark-grey wrap gap-16 mb-32"><div class="col-6 col-xl-3">Scottish-Highlands</div><div class="col-6 col-xl-3">Inverness</div><div class="col-6 col-xl-3">Port William</div><div class="col-6 col-xl-3">Portree</div><div class="col-6 col-xl-3">Oban</div><div class="col-6 col-xl-3">Glencoe</div><div class="col-6 col-xl-3">Galway</div><div class="col-6 col-xl-3">Dublin</div><div class="col-6 col-xl-3">Liverpool</div><div class="col-6 col-xl-3">Belfast</div><div class="col-6 col-xl-3">Glasgow</div><div class="col-6 col-xl-3">Newcastle upon Tyne</div></div><div class="row wrap subtitle items-center gap-8"><div>Airbnb</div><div><img src="'+g+'" style="height:7px;width:7px;"></div><div>Royaume-Uni</div><div><img src="'+g+'" style="height:7px;width:7px;"></div><div>\xC9cosse</div><div><img src="'+g+'" style="height:7px;width:7px;"></div><div>Highland Council</div><div><img src="'+g+'" style="height:7px;width:7px;"></div><div>Skye</div></div>',3),si=[ei];function ti(e,t){return o(),a("div",null,si)}const q=m(Ht,[["render",ti]]),ii="/bnb/icons/language.svg",oi="/bnb/icons/facebook.svg",ni="/bnb/icons/twitter.svg",ai="/bnb/icons/instagram.svg";const ci={},li=$('<div class="footer gap-12" data-v-f97249a8><div class="col col-xl-3" data-v-f97249a8><div class="bold mb-16" data-v-f97249a8>Assistance</div><div class="row justify-between gap-12 wrap" data-v-f97249a8><div class="col col-md-3 col-xl-12" data-v-f97249a8>Centre d\u2019aide</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>AirCover</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Informations de s\xE9curit\xE9</div><div class="col col-md-3 col-xl-12" data-v-f97249a8> Soutenir les personnes en situation de handicap </div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Options d&#39;annulation</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Nos mesures face au Covid-19</div><div class="col col-md-3 col-xl-12" data-v-f97249a8> Signaler un probl\xE8me de voisinage </div></div></div><div class="mt-24 mb-24 separator lt-xl" data-v-f97249a8></div><div class="col col-xl-3" data-v-f97249a8><div class="bold mb-16" data-v-f97249a8>Communaut\xE9</div><div class="row justify-between gap-12 wrap" data-v-f97249a8><div class="col col-md-3 col-xl-12" data-v-f97249a8> Airbnb.org : r\xE9ponse aux catastrophes </div><div class="col col-md-3 col-xl-12" data-v-f97249a8> Soutenir les r\xE9fugi\xE9s afghans </div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Lutte contre la discramation</div></div></div><div class="mt-24 mb-24 separator lt-xl" data-v-f97249a8></div><div class="col col-xl-3" data-v-f97249a8><div class="bold mb-16" data-v-f97249a8>Accueil de voyageurs</div><div class="row justify-between gap-12 wrap" data-v-f97249a8><div class="col col-md-3 col-xl-12" data-v-f97249a8>Devenir h\xF4te</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>AirCover pour les h\xF4tes</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Ressources pour les h\xF4tes</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Forum de la communaut\xE9</div><div class="col col-md-3 col-xl-12" data-v-f97249a8> Accueillir de mani\xE8re responsable </div><div class="col col-md-3 col-xl-12" data-v-f97249a8></div></div></div><div class="mt-24 mb-24 separator lt-xl" data-v-f97249a8></div><div class="col col-xl-3" data-v-f97249a8><div class="bold mb-16" data-v-f97249a8>Airbnb</div><div class="row justify-between gap-12 wrap" data-v-f97249a8><div class="col col-md-3 col-xl-12" data-v-f97249a8>Newsroom</div><div class="col col-md-3 col-xl-12" data-v-f97249a8> En savoir plus sur les nouveaut\xE9s </div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Lettre de nos fondateurs</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Carri\xE8res</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Investisseurs</div><div class="col col-md-3 col-xl-12" data-v-f97249a8>Cartes cadeaux</div></div></div></div><div class="mt-24 mb-24 separator" data-v-f97249a8></div><div class="col row items-center justify-between end" data-v-f97249a8><div class="xl" data-v-f97249a8><div data-v-f97249a8>\xA9 2022 Airbnb, Inc.</div><div data-v-f97249a8> Confidentialit\xE9 \xB7 Conditions g\xE9n\xE9rales \xB7 Plan du site \xB7 Fonctionnement du site \xB7 Infos sur l\u2019entreprise </div></div><div class="row mb-16" data-v-f97249a8><img class="mr-8" src="'+ii+'" data-v-f97249a8><div class="bold mr-32" data-v-f97249a8>Fran\xE7ais (FR)</div><div class="bold" data-v-f97249a8>\u20AC EUR</div><div class="gt-sm" style="margin-left:52px;" data-v-f97249a8><img class="mr-24" src="'+oi+'" data-v-f97249a8><img class="mr-24" src="'+ni+'" data-v-f97249a8><img src="'+ai+'" data-v-f97249a8></div></div></div><div class="end lt-xl" data-v-f97249a8>\xA9 2022 Airbnb, Inc.</div><div class="lt-xl" data-v-f97249a8> Confidentialit\xE9 \xB7 Conditions g\xE9n\xE9rales \xB7 Plan du site \xB7 Fonctionnement du site \xB7 Infos sur l\u2019entreprise </div>',5),di=[li];function ri(e,t){return o(),a("div",null,di)}const vi=m(ci,[["render",ri],["__scopeId","data-v-f97249a8"]]),j=e=>(E("data-v-1abcbb56"),e=e(),y(),e),mi={key:0,class:"bnb-summary row justify-center items-center"},ui={class:"col box row justify-between"},_i=j(()=>s("div",{class:"summary row items-center"},[s("div",null,"Photos"),s("div",null,"\xC9quipements"),s("div",null,"Commentaires"),s("div",null,"Emplacement")],-1)),bi={key:0,class:"price row items-center"},hi={class:"mr-16"},pi={class:"row items-center gap-8 mb-2"},gi={class:"title"},fi=j(()=>s("div",{class:"subtitle"},"par nuit",-1)),xi={class:"row items-center gap-4 caption"},wi=j(()=>s("img",{src:N},null,-1)),$i={class:"bold"},Ei=h({__name:"BnbSummary",props:{home:null},setup(e){const t=e,{openPopup:d,setProps:c}=I();c(t.home);const u=R(!1),l=R(!1);return U(()=>{window.addEventListener("scroll",function(){window.scrollY>500?(u.value=!0,window.scrollY>2400?l.value=!0:l.value=!1):u.value=!1})}),(r,v)=>{const p=b("bnb-link"),D=b("bnb-button");return u.value?(o(),a("div",mi,[s("div",ui,[_i,l.value?(o(),a("div",bi,[s("div",hi,[s("div",pi,[s("div",gi,i(e.home.price)+" \u20AC",1),fi]),s("div",xi,[wi,s("div",$i,i(w(C)(e.home.reviews).toFixed(1))+" \xB7 ",1),n(p,{class:"bold text-dark-grey",label:`${e.home.reviews.length} commentaires`,onClick:v[0]||(v[0]=vo=>w(d)("comment-popup")),outlined:""},null,8,["label"])])]),n(D,{label:"R\xE9server","bg-color":"gradient"})])):x("",!0)])])):x("",!0)}}});const yi=m(Ei,[["__scopeId","data-v-1abcbb56"]]),Ai={},Bi=s("h2",{class:"mb-8"},"6 nuit \xE0 Badachro",-1),ki=s("div",{class:"subtitle text-dark-grey mb-24"}," 9 janv. 2023 - 14 janv. 2023 ",-1),Ii={class:"row justify-between"},Ni=s("div",{class:"caption underline bold"},"Effacer les dates",-1);function Si(e,t){const d=b("bnb-calendar");return o(),a("div",null,[Bi,ki,s("div",Ii,[n(d,{class:"col col-xl-6",month:0,year:2023,"start-date":"09-01-2023","end-date":"15-01-2023"}),n(d,{class:"col col-xl-6 gt-lg",month:1,year:2023})]),Ni])}const Di=m(Ai,[["render",Si]]);var f=(e=>(e.BATHROOM="Salle de bain",e.BEDROOM_AND_LAUNDRY="Chambre et linge",e.ENTERTAINMENT="Divertissement",e.FAMILY="Famille",e.HEATING_AND_COOLING="Chauffage et climatisation",e.HOME_SAFETY="S\xE9curite \xE0 la maison",e.INTERNET_AND_OFFICE="Internet et bureau",e.KITCHEN_AND_DINING="Cuisine et salle \xE0 manger",e.LOCATION_FEATURES="Caract\xE9ristiques de l'emplacement",e.OUTDOOR="Ext\xE9rieur",e.PARKING_AND_FACILITIES="Parking et installations",e.SERVICES="Services",e))(f||{}),G=(e=>(e.KING_BED="lit king size",e.QUEEN_BED="lit queen size",e.DOUBLE_BED="lit double",e.SINGLE_BED="lit simple",e.BUNK_BED="lit superpos\xE9",e))(G||{}),Y=(e=>(e.HOME="Maison",e.APPARTMENT="Appartement",e.BARN="Grange",e.BED_AND_BREAKFAST="Chambre d'h\xF4te",e.BOAT="Bateau",e.CABINS="Cabane",e.CAMPERVANS="Caravane",e.CASA_PARTICULAR="Casa particular",e.CASTLE="Ch\xE2teau",e.CAVES="Maison troglodyte",e.CONTAINERS="Conteneur maritime",e.CYCLADIC_HOME="Maison cycladique",e.DAMMUSO="Dammuso",e.DOME="D\xF4me",e.EARTH_HOME="Maison organique",e.FARM="Ferme",e.GUESTHOUSE="Maison d'h\xF4tes",e.HOSTEL="H\xF4tel",e.HOUSEBOATS="Logement sur l'eau",e.KEZHAN="Kezhan",e.MINSU="Minsu",e.RIAD="Riad",e.RYOKAN="Ryokan",e.SHEPERD_HUT="Cabane de berger",e.CAMPING="Tente",e.TINY_HOME="Tiny house",e.TOWER="Tour",e.TREEHOUSE="Cabane perch\xE9e",e.TRULLO="Trullo",e.WINDMILL="Moulin \xE0 vent",e.YURT="Yourte",e))(Y||{});const Ti=async e=>Promise.resolve({id:e,title:"Maison Universe",description:"Maison tr\xE8s calme (depuis que j'ai mis la paix sur la galaxy :)). Vue sur la plage. Vous pouvez vous baigner mais attention au Steven Melon qui vienne parfois bronzer lors de leur migration.",ownerDescription:"Je vous pr\xE9parerais des pancakes tout les jours, je peux vous faire visiter Beach City \xE0 dos de Lion !",location:{address1:"",city:"Beach City",country:"Terre",latitude:0,longitude:0},homeCategory:Y.HOME,capacity:2,nbRooms:1,nbBeds:1,nbBathrooms:1,price:62,aircover:!0,bedrooms:[{imageUrl:"https://i.pinimg.com/736x/16/be/73/16be733fbd0fadb0fb4007d9efaf4199.jpg",beds:[G.DOUBLE_BED]}],amenities:[{name:"Vue sur la mer",isAvailable:!0,icons:"beach",category:f.LOCATION_FEATURES},{name:"\xC9quipement de base",isAvailable:!0,icons:"base-equipment",category:f.BEDROOM_AND_LAUNDRY},{name:"Cuisine",isAvailable:!0,icons:"kitchen",category:f.KITCHEN_AND_DINING},{name:"Wifi",isAvailable:!0,icons:"wifi",category:f.INTERNET_AND_OFFICE},{name:"T\xE9l\xE9vision",isAvailable:!0,icons:"television",category:f.ENTERTAINMENT},{name:"Baignoire",isAvailable:!0,icons:"bathtub",category:f.BATHROOM},{name:"Savon pour le corps",isAvailable:!0,icons:"body-soap",category:f.BATHROOM},{name:"Eau chaude",isAvailable:!0,icons:"hot-water",category:f.BATHROOM},{name:"Console de jeu",isAvailable:!0,icons:"game",category:f.ENTERTAINMENT},{name:"Climatisation",isAvailable:!1,icons:"air-conditioner",category:f.HEATING_AND_COOLING}],photos:[{url:"https://cdn.theatlantic.com/thumbor/nuDWySQsKEjTkjxOcuB7VGWkTj0=/156x44:1920x1036/960x540/media/img/mt/2017/07/53546_steven_universe/original.jpg",index:1},{url:"https://rare-gallery.com/uploads/posts/921824-Steven-Universe-Steven-Universe-TV-Show-Cartoon-Network.jpg",index:2},{url:"https://i.pinimg.com/originals/de/8f/10/de8f1046d7b4503153857d05f7f5dc9b.jpg",index:3},{url:"https://i.pinimg.com/736x/16/be/73/16be733fbd0fadb0fb4007d9efaf4199.jpg",index:4},{url:"https://i.pinimg.com/originals/25/61/8b/25618b433796a517acb89ca026c5fc4b.png",index:5},{url:"https://64.media.tumblr.com/c296c31aead1677949a9c069262a9af3/tumblr_o1vm626Z2D1ufkj40o1_1280.png",index:6}],reviews:[{author:{firstName:"Garnet",lastName:"",profilePicture:"https://img.buzzfeed.com/buzzfeed-static/static/2016-09/19/0/asset/buzzfeed-prod-web12/sub-buzz-5097-1474261116-1.png?crop=906%3A907%3B333%2C0&downsize=900:*&output-format=auto&output-quality=auto",createdAt:new Date,identityVerified:!1},createdAt:new Date,message:"\u{1F44D}",rate:{cleanliness:5,checkIn:5,location:5,communication:5,accuracy:5,value:5}},{author:{firstName:"Amethyst",lastName:"",profilePicture:"http://pm1.narvii.com/7087/07b0813248c9ad2f89ee167177989a040d52c948r1-1308-1213v2_uhq.jpg",identityVerified:!1,createdAt:new Date},createdAt:new Date,message:"J'adoooore cette maison xoxo !!! PS: J'ai mang\xE9 les derniers cookies cat :) Bisous Steven",rate:{cleanliness:5,checkIn:5,location:5,communication:5,accuracy:5,value:5}},{author:{firstName:"Pearl",lastName:"",profilePicture:"http://pm1.narvii.com/7519/d8a4857966ee4fbcd23c74214a1b7381c3c6bab7r1-500-500v2_00.jpg",createdAt:new Date,identityVerified:!0},createdAt:new Date,message:"Cette maison correspond parfaitement \xE0 la description !. De plus l'h\xF4te est tr\xE8s agr\xE9able, il pr\xE9pare les meilleurs petits d\xE9jeuner (je ne peux pas manger donc je ne peux pas t\xE9moigner sur leur go\xFBt majestueux). La vue sur la plage est incroyable surtout depuis que les deux vaiseaux des diamants ce sont \xE9cras\xE9",rate:{cleanliness:5,checkIn:5,location:5,communication:5,accuracy:5,value:5}}],owner:{firstName:"Steven",lastName:"Universe",profilePicture:"https://cn.i.cdn.ti-platform.com/cnapac/content/762/showpage/steven-universe/in/showicon.png",createdAt:new Date,isProfessional:!1,identityVerified:!0,description:`Membre des Gemmes de Cristal.
Ma mission prot\xE9ger l'humanit\xE9 et aider les personnes qui en ont besoin, ainsi qu'aller chez le psy pour mes traumas.`,languages:["English"],responseRate:.8,responseTime:"journ\xE9e",reviews:[]}}),_=e=>(E("data-v-3fa05589"),e=e(),y(),e),Ci={key:1,class:"row justify-center"},Pi={class:"detail-page"},Ri={class:"content"},ji=_(()=>s("div",{class:"lt-md separator mt-24"},null,-1)),Oi={class:"row"},Mi={class:"container"},Li=_(()=>s("div",{class:"separator mt-24 mb-24"},null,-1)),Fi=_(()=>s("div",{class:"separator mt-24 mb-24"},null,-1)),qi=_(()=>s("div",{class:"separator mt-24 mb-24"},null,-1)),Ui=_(()=>s("div",{class:"separator mt-32 mb-32"},null,-1)),zi=_(()=>s("div",{class:"separator mt-24 mb-32"},null,-1)),Vi=_(()=>s("div",{class:"separator mt-24 mb-32"},null,-1)),Gi=_(()=>s("div",{class:"separator mt-24 mb-32 gt-md"},null,-1)),Yi={class:"content"},Ki=_(()=>s("div",{class:"separator mb-32 gt-sm"},null,-1)),Wi=_(()=>s("div",{class:"separator mt-24 mb-32 lt-xs"},null,-1)),Ji=_(()=>s("div",{class:"separator mt-24 mb-32 lt-md"},null,-1)),Qi=_(()=>s("div",{class:"separator mt-24 mb-32 lt-sm"},null,-1)),Zi=_(()=>s("div",{class:"separator mt-24 mb-24"},null,-1)),Xi=_(()=>s("div",{style:{height:"10px"},class:"separator lt-md"},null,-1)),Hi=_(()=>s("div",{class:"mt-16 separator lt-md"},null,-1)),eo=_(()=>s("div",{class:"mt-16 separator gt-sm"},null,-1)),so={class:"bg-almost-white row justify-center"},to={class:"detail-page"},io={class:"content-discover gt-sm"},oo=_(()=>s("div",{class:"separator gt-sm"},null,-1)),no={key:2,class:"price row items-center justify-between lt-md"},ao={class:"row items-end"},co={class:"title mr-4"},lo=_(()=>s("div",{class:"subtitle"},"par nuit",-1)),ro=h({__name:"DetailView",setup(e){const t=R(null),d=R(window.innerWidth>980),c=()=>{d.value=window.innerWidth>980};U(async()=>{window.addEventListener("resize",c);const l=await Ti("abcde");t.value=l,t.value.photos.sort((r,v)=>r.index-v.index)}),Q(()=>{window.removeEventListener("resize",c)});const u=l=>{console.log(l)};return(l,r)=>{const v=b("bnb-header"),p=b("bnb-button");return o(),a(A,null,[n(v,{class:"gt-sm"}),t.value?(o(),k(yi,{key:0,class:"gt-sm",home:t.value},null,8,["home"])):x("",!0),t.value?(o(),a("div",Ci,[s("div",Pi,[n($e,{class:"lt-md",home:t.value},null,8,["home"]),s("div",Ri,[s("div",null,[n(Ye,{home:t.value},null,8,["home"]),n(Pe,{class:"gt-sm",home:t.value},null,8,["home"]),ji]),s("div",Oi,[s("div",Mi,[n(ns,{home:t.value},null,8,["home"]),Li,n(ms),Fi,t.value.aircover?(o(),k(xs,{key:0})):x("",!0),qi,n(Es,{home:t.value},null,8,["home"]),Ui,n(Ss,{home:t.value},null,8,["home"]),zi,n(js,{home:t.value},null,8,["home"]),Vi,d.value?(o(),k(O,{key:1})):x("",!0),Gi,n(Di)]),n(be,{class:"gt-sm",home:t.value},null,8,["home"])])]),s("div",Yi,[Ki,n(dt,{class:"gt-sm",home:t.value},null,8,["home"]),Wi,d.value?x("",!0):(o(),k(O,{key:0})),Ji,n(it,{class:"lt-md",home:t.value},null,8,["home"]),Qi,n(Ot,{home:t.value},null,8,["home"]),Zi,n(Ut,{class:"lt-md"}),n(Xt,{class:"gt-sm"})]),Xi,n(q,{class:"content lt-md"}),Hi])])):x("",!0),eo,s("div",so,[s("div",to,[s("div",io,[n(q)]),oo,n(vi,{class:"content subtitle footer"})])]),t.value?(o(),a("div",no,[s("div",null,[s("div",ao,[s("div",co,i(t.value.price)+" \u20AC",1),lo]),s("div",{class:"subtitle underline",onClick:r[0]||(r[0]=D=>u("Open dates popup"))}," 19-25 nov. ")]),n(p,{label:"R\xE9server","bg-color":"gradient",onClick:r[1]||(r[1]=D=>u("Open reservation popup"))})])):x("",!0)],64)}}});const uo=m(ro,[["__scopeId","data-v-3fa05589"]]);export{uo as default};