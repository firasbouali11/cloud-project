!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6dU7":function(e,i,o){"use strict";o.r(i),o.d(i,"DashboardModule",function(){return O});var a,c,u,r,l=o("s7LF"),s=o("hrfs"),b=o("FE24"),d=o("8Y7J"),h={provide:l.d,useExisting:Object(d.T)(function(){return f}),multi:!0},f=((a=function(){function e(){t(this,e),this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return n(e,[{key:"onClick",value:function(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))}},{key:"ngOnInit",value:function(){this.toggle(this.trueValue===this.value)}},{key:"trueValue",get:function(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue}},{key:"falseValue",get:function(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse}},{key:"toggle",value:function(t){this.state=t,this.value=this.state?this.trueValue:this.falseValue}},{key:"writeValue",value:function(t){this.state=this.trueValue===t,this.value=t?this.trueValue:this.falseValue}},{key:"setDisabledState",value:function(t){this.isDisabled=t}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275dir=d.Hb({type:a,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(t,e){1&t&&d.Zb("click",function(){return e.onClick()}),2&t&&(d.Bb("aria-pressed",e.state),d.Eb("active",e.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[d.zb([h])]}),a),p={provide:l.d,useExisting:Object(d.T)(function(){return v}),multi:!0},v=((c=function(){function e(n,i,o,a){t(this,e),this.el=n,this.cdr=i,this.renderer=o,this.group=a,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}return n(e,[{key:"value",get:function(){return this.group?this.group.value:this._value},set:function(t){this.group?this.group.value=t:this._value=t}},{key:"disabled",get:function(){return this._disabled},set:function(t){this.setDisabledState(t)}},{key:"controlOrGroupDisabled",get:function(){return!!(this.disabled||this.group&&this.group.disabled)||void 0}},{key:"hasDisabledClass",get:function(){return this.controlOrGroupDisabled&&!this.isActive}},{key:"isActive",get:function(){return this.btnRadio===this.value}},{key:"tabindex",get:function(){return this.controlOrGroupDisabled?void 0:this.isActive||null==this.group?0:-1}},{key:"hasFocus",get:function(){return this._hasFocus}},{key:"toggleIfAllowed",value:function(){this.canToggle()&&(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))}},{key:"onSpacePressed",value:function(t){this.toggleIfAllowed(),t.preventDefault()}},{key:"focus",value:function(){this.el.nativeElement.focus()}},{key:"onFocus",value:function(){this._hasFocus=!0}},{key:"onBlur",value:function(){this._hasFocus=!1,this.onTouched()}},{key:"canToggle",value:function(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)}},{key:"ngOnInit",value:function(){this.uncheckable=void 0!==this.uncheckable}},{key:"_onChange",value:function(t){this.group?this.group.value=t:(this.onTouched(),this.onChange(t))}},{key:"writeValue",value:function(t){this.value=t,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this._disabled=t,t?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")}}]),e}()).\u0275fac=function(t){return new(t||c)(d.Mb(d.l),d.Mb(d.h),d.Mb(d.E),d.Mb(Object(d.T)(function(){return y}),8))},c.\u0275dir=d.Hb({type:c,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(t,e){1&t&&d.Zb("click",function(){return e.toggleIfAllowed()})("keydown.space",function(t){return e.onSpacePressed(t)})("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()}),2&t&&(d.Bb("role",e.role)("aria-disabled",e.controlOrGroupDisabled)("aria-checked",e.isActive)("tabindex",e.tabindex),d.Eb("disabled",e.hasDisabledClass)("active",e.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[d.zb([p])]}),c),g={provide:l.d,useExisting:Object(d.T)(function(){return y}),multi:!0},y=((r=function(){function e(n){t(this,e),this.cdr=n,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}return n(e,[{key:"value",get:function(){return this._value},set:function(t){this._value=t,this.onChange(t)}},{key:"tabindex",get:function(){return this._disabled?null:0}},{key:"writeValue",value:function(t){this._value=t,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this.radioButtons&&(this._disabled=t,this.radioButtons.forEach(function(e){e.setDisabledState(t)}),this.cdr.markForCheck())}},{key:"onFocus",value:function(){if(!this._disabled){var t=this.getActiveOrFocusedRadio();if(t)t.focus();else{var e=this.radioButtons.find(function(t){return!t.disabled});e&&e.focus()}}}},{key:"onBlur",value:function(){this.onTouched&&this.onTouched()}},{key:"selectNext",value:function(t){this.selectInDirection("next"),t.preventDefault()}},{key:"selectPrevious",value:function(t){this.selectInDirection("previous"),t.preventDefault()}},{key:"disabled",get:function(){return this._disabled}},{key:"selectInDirection",value:function(t){if(!this._disabled){var e=this.getActiveOrFocusedRadio();if(e)for(var n=this.radioButtons.toArray(),i=n.indexOf(e),o=a(i,n);o!==i;o=a(o,n))if(n[o].canToggle()){n[o].toggleIfAllowed(),n[o].focus();break}}function a(e,n){var i=(e+("next"===t?1:-1))%n.length;return i<0&&(i=n.length-1),i}}},{key:"getActiveOrFocusedRadio",value:function(){return this.radioButtons.find(function(t){return t.isActive})||this.radioButtons.find(function(t){return t.hasFocus})}}]),e}()).\u0275fac=function(t){return new(t||r)(d.Mb(d.h))},r.\u0275dir=d.Hb({type:r,selectors:[["","btnRadioGroup",""]],contentQueries:function(t,e,n){var i;1&t&&d.Fb(n,v,0),2&t&&d.nc(i=d.ac())&&(e.radioButtons=i)},hostVars:2,hostBindings:function(t,e){1&t&&d.Zb("focus",function(){return e.onFocus()})("blur",function(){return e.onBlur()})("keydown.ArrowRight",function(t){return e.selectNext(t)})("keydown.ArrowDown",function(t){return e.selectNext(t)})("keydown.ArrowLeft",function(t){return e.selectPrevious(t)})("keydown.ArrowUp",function(t){return e.selectPrevious(t)}),2&t&&d.Bb("role",e.role)("tabindex",e.tabindex)},features:[d.zb([g])]}),r),m=((u=function(){function e(){t(this,e)}return n(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[]}}}]),e}()).\u0275fac=function(t){return new(t||u)},u.\u0275mod=d.Kb({type:u}),u.\u0275inj=d.Jb({}),u),k=o("iInd"),S=o("IheW"),R=o("YtQK"),x=o("SVse"),C=o("LqlI"),w=["addModal"],I=["updateModal"];function E(t,e){if(1&t){var n=d.Tb();d.Sb(0,"tr"),d.Sb(1,"td"),d.xc(2),d.Rb(),d.Sb(3,"td"),d.xc(4),d.Rb(),d.Sb(5,"td"),d.xc(6),d.Rb(),d.Sb(7,"td"),d.xc(8),d.Rb(),d.Sb(9,"td"),d.xc(10),d.Rb(),d.Sb(11,"td"),d.xc(12),d.Rb(),d.Sb(13,"td"),d.Sb(14,"div",1),d.Sb(15,"button",39),d.Zb("click",function(){d.qc(n);var t=e.$implicit;return d.cc().deleteEmployee(t.id)}),d.Nb(16,"i",40),d.Rb(),d.Sb(17,"button",41),d.Zb("click",function(){d.qc(n);var t=e.$implicit;return d.cc().fillUpdateModal(t)}),d.Nb(18,"i",42),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){var i=e.$implicit;d.Ab(2),d.yc(i.id),d.Ab(2),d.yc(i.name),d.Ab(2),d.yc(i.occupation),d.Ab(2),d.yc(i.CIN),d.Ab(2),d.yc(i.created_at.split(".")[0].replace("T"," ")),d.Ab(2),d.yc(i.updated_at.split(".")[0].replace("T"," "))}}var F,A,T,B=[{path:"",component:(F=function(){function e(n,i){t(this,e),this.http=n,this.router=i,this.reponse=null;var o=this.router.getCurrentNavigation().extras.state;o&&(this.infos=o)}return n(e,[{key:"fetchData",value:function(){var t=this;return this.http.get(R.a.api,{headers:(new S.c).set("Content-Type","application/json").set("Authorization","Bearer ".concat(localStorage.getItem("t")))}).toPromise().then(function(e){t.data=e}).catch(function(t){return console.log(t)})}},{key:"addEmployee",value:function(t,e,n){var i=this;return this.http.post(R.a.api,{name:t,occupation:e,CIN:n},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("t"))}}).toPromise().then(function(t){i.addModal.hide(),i.fetchData()}).catch(function(t){return console.log(t)})}},{key:"deleteEmployee",value:function(t){var e=this;return this.http.delete(R.a.api+t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("t"))}}).toPromise().then(function(t){console.log(t),e.fetchData()}).catch(function(t){return console.log(t)})}},{key:"updateEmployee",value:function(){var t=this,e=document.getElementById("name").value,n=document.getElementById("occupation").value,i=document.getElementById("cin").value,o=document.getElementById("id").value;return this.http.put(R.a.api+o,{name:e,occupation:n,CIN:i},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("t"))}}).toPromise().then(function(e){console.log(e),t.fetchData(),t.updateModal.hide()}).catch(function(t){return console.log(t)})}},{key:"fillUpdateModal",value:function(t){this.updateModal.show(),document.getElementById("name").value=t.name,document.getElementById("occupation").value=t.occupation,document.getElementById("cin").value=t.CIN,document.getElementById("id").value=t.id}},{key:"ngOnInit",value:function(){localStorage.getItem("t")&&this.fetchData()}}]),e}(),F.\u0275fac=function(t){return new(t||F)(d.Mb(S.a),d.Mb(k.c))},F.\u0275cmp=d.Gb({type:F,selectors:[["ng-component"]],viewQuery:function(t,e){var n;1&t&&(d.Bc(w,1),d.Bc(I,1)),2&t&&(d.nc(n=d.ac())&&(e.addModal=n.first),d.nc(n=d.ac())&&(e.updateModal=n.first))},decls:92,vars:1,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"fa","fa-align-justify"],[1,"px-5"],["type","button","data-toggle","modal",1,"btn","btn-brand","btn-md","btn-spotify","mr-1",2,"margin-bottom","4px",3,"click"],[1,"fa","fa-plus","fa-lg"],[1,"card-body"],[1,"table","table-striped"],[1,"w-100"],[4,"ngFor","ngForOf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["addModal","bs-modal"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Enter the employee's name",1,"form-control"],["name",""],["for","exampleInputPassword1"],["type","text","id","exampleInputPassword1","placeholder","Occupation",1,"form-control"],["occupation",""],["id","exampleInputPassword1","placeholder","CIN",1,"form-control"],["cin",""],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["updateModal","bs-modal"],["type","text","id","name","aria-describedby","emailHelp","placeholder","Enter the employee's name",1,"form-control"],["type","text","id","occupation","placeholder","Occupation",1,"form-control"],["id","cin","placeholder","CIN",1,"form-control"],["type","hidden","id","id"],["type","button",1,"btn","btn-brand","btn-md","btn-flickr","mr-1",2,"margin-bottom","4px",3,"click"],[1,"fa","fa-trash","fa-lg"],["type","button","data-toggle","modal",1,"btn","btn-brand","btn-md","btn-twitter","mr-1",2,"margin-bottom","4px",3,"click"],[1,"fa","fa-edit","fa-lg"]],template:function(t,e){if(1&t){var n=d.Tb();d.Sb(0,"div",0),d.Sb(1,"div"),d.Sb(2,"div",0),d.Sb(3,"div",1),d.Sb(4,"div",2),d.Sb(5,"div",3),d.Sb(6,"div",4),d.Nb(7,"i",5),d.Sb(8,"span",6),d.xc(9," Employee's Table "),d.Rb(),d.Sb(10,"button",7),d.Zb("click",function(){return d.qc(n),d.oc(33).show()}),d.Nb(11,"i",8),d.Rb(),d.Rb(),d.Sb(12,"div",9),d.Sb(13,"table",10),d.Sb(14,"thead",11),d.Sb(15,"tr"),d.Sb(16,"th"),d.xc(17,"ID"),d.Rb(),d.Sb(18,"th"),d.xc(19,"Name"),d.Rb(),d.Sb(20,"th"),d.xc(21,"Occupation"),d.Rb(),d.Sb(22,"th"),d.xc(23,"CIN"),d.Rb(),d.Sb(24,"th"),d.xc(25,"Date registered"),d.Rb(),d.Sb(26,"th"),d.xc(27,"Date updated"),d.Rb(),d.Sb(28,"th"),d.xc(29,"Actions"),d.Rb(),d.Rb(),d.Rb(),d.Sb(30,"tbody"),d.vc(31,E,19,6,"tr",12),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(32,"div",13,14),d.Sb(34,"div",15),d.Sb(35,"div",16),d.Sb(36,"div",17),d.Sb(37,"h4",18),d.xc(38,"Modal title"),d.Rb(),d.Sb(39,"button",19),d.Zb("click",function(){return d.qc(n),d.oc(33).hide()}),d.Sb(40,"span",20),d.xc(41,"\xd7"),d.Rb(),d.Rb(),d.Rb(),d.Sb(42,"div",21),d.Sb(43,"div",22),d.Sb(44,"label",23),d.xc(45,"Employee's Name"),d.Rb(),d.Nb(46,"input",24,25),d.Rb(),d.Sb(48,"div",22),d.Sb(49,"label",26),d.xc(50,"Employee's Occupation"),d.Rb(),d.Nb(51,"input",27,28),d.Rb(),d.Sb(53,"div",22),d.Sb(54,"label",26),d.xc(55,"Employee's CIN"),d.Rb(),d.Nb(56,"input",29,30),d.Rb(),d.Rb(),d.Sb(58,"div",31),d.Sb(59,"button",32),d.Zb("click",function(){return d.qc(n),d.oc(33).hide()}),d.xc(60,"Close"),d.Rb(),d.Sb(61,"button",33),d.Zb("click",function(){d.qc(n);var t=d.oc(47),i=d.oc(52),o=d.oc(57);return e.addEmployee(t.value,i.value,o.value)}),d.xc(62,"Save changes"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(63,"div",13,34),d.Sb(65,"div",15),d.Sb(66,"div",16),d.Sb(67,"div",17),d.Sb(68,"h4",18),d.xc(69,"Update Employee"),d.Rb(),d.Sb(70,"button",19),d.Zb("click",function(){return d.qc(n),d.oc(64).hide()}),d.Sb(71,"span",20),d.xc(72,"\xd7"),d.Rb(),d.Rb(),d.Rb(),d.Sb(73,"div",21),d.Sb(74,"div",22),d.Sb(75,"label",23),d.xc(76,"Employee's Name"),d.Rb(),d.Nb(77,"input",35),d.Rb(),d.Sb(78,"div",22),d.Sb(79,"label",26),d.xc(80,"Employee's Occupation"),d.Rb(),d.Nb(81,"input",36),d.Rb(),d.Sb(82,"div",22),d.Sb(83,"label",26),d.xc(84,"Employee's CIN"),d.Rb(),d.Nb(85,"input",37),d.Rb(),d.Nb(86,"input",38),d.Rb(),d.Sb(87,"div",31),d.Sb(88,"button",32),d.Zb("click",function(){return d.qc(n),d.oc(64).hide()}),d.xc(89,"Close"),d.Rb(),d.Sb(90,"button",33),d.Zb("click",function(){return e.updateEmployee()}),d.xc(91,"Save changes"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}2&t&&(d.Ab(31),d.hc("ngForOf",e.data))},directives:[x.j,C.a],encapsulation:2}),F),data:{title:"Dashboard"}}],D=((T=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||T)},T.\u0275mod=d.Kb({type:T}),T.\u0275inj=d.Jb({imports:[[k.g.forChild(B)],k.g]}),T),O=((A=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||A)},A.\u0275mod=d.Kb({type:A}),A.\u0275inj=d.Jb({imports:[[l.c,D,s.b,b.c,m.forRoot(),x.c,C.b]]}),A)}}])}();