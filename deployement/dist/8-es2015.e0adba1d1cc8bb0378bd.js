(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"H++W":function(b,i,a){!function(b){"use strict";function i(b){var i,a,e={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||(i=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(i()+i()),this._chart.canvas.id=a,a))+"-tooltip"},t=document.getElementById(e.TOOLTIP);if(t||((t=document.createElement("div")).id=e.TOOLTIP,t.className="chartjs-tooltip",this._chart.canvas.parentNode.appendChild(t)),0!==b.opacity){if(t.classList.remove("above","below","no-transform"),t.classList.add(b.yAlign?b.yAlign:"no-transform"),b.body){var r=b.title||[],d=document.createElement(e.DIV);d.className="tooltip-header",r.forEach(function(b){var i=document.createElement(e.DIV);i.className="tooltip-header-item",i.innerHTML=b,d.appendChild(i)});var o=document.createElement(e.DIV);o.className="tooltip-body",b.body.map(function(b){return b.lines}).forEach(function(i,a){var t=document.createElement(e.DIV);t.className="tooltip-body-item";var r=b.labelColors[a],d=document.createElement(e.SPAN);if(d.className="tooltip-body-item-color",d.style.backgroundColor=r.backgroundColor,t.appendChild(d),i[0].split(":").length>1){var s=document.createElement(e.SPAN);s.className="tooltip-body-item-label",s.innerHTML=i[0].split(": ")[0],t.appendChild(s);var n=document.createElement(e.SPAN);n.className="tooltip-body-item-value",n.innerHTML=i[0].split(": ").pop(),t.appendChild(n)}else{var l=document.createElement(e.SPAN);l.className="tooltip-body-item-value",l.innerHTML=i[0],t.appendChild(l)}o.appendChild(t)}),t.innerHTML="",t.appendChild(d),t.appendChild(o)}var s=this._chart.canvas.getBoundingClientRect(),n=this._chart.canvas.offsetLeft+b.caretX,l=this._chart.canvas.offsetTop+b.caretY,c=b.width/2;n+c>s.width?n-=c:n<c&&(n+=c),t.style.opacity=1,t.style.left=n+"px",t.style.top=l+"px"}else t.style.opacity=0}var a=i;b.CustomTooltips=i,b.customTooltips=a,Object.defineProperty(b,"__esModule",{value:!0})}(i)},XVX6:function(b,i,a){"use strict";a.r(i),a.d(i,"WidgetsModule",function(){return R});var e=a("hrfs"),t=a("FE24"),r=a("iInd"),d=a("NuRj"),o=a("H++W"),s=a("8Y7J");function n(b,i){1&b&&(s.Sb(0,"div",93),s.Sb(1,"a",94),s.xc(2,"Action"),s.Rb(),s.Sb(3,"a",94),s.xc(4,"Another action"),s.Rb(),s.Sb(5,"a",94),s.xc(6,"Something else here"),s.Rb(),s.Sb(7,"a",94),s.xc(8,"Something else here"),s.Rb(),s.Rb())}function l(b,i){1&b&&(s.Sb(0,"div",93),s.Sb(1,"a",94),s.xc(2,"Action"),s.Rb(),s.Sb(3,"a",94),s.xc(4,"Another action"),s.Rb(),s.Sb(5,"a",94),s.xc(6,"Something else here"),s.Rb(),s.Rb())}function c(b,i){1&b&&(s.Sb(0,"div",93),s.Sb(1,"a",94),s.xc(2,"Action"),s.Rb(),s.Sb(3,"a",94),s.xc(4,"Another action"),s.Rb(),s.Sb(5,"a",94),s.xc(6,"Something else here"),s.Rb(),s.Rb())}const S=[{path:"",component:(()=>{class b{constructor(){this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(d.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(d.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.lineChart4Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.lineChart4Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.lineChart4Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart4Colours=[{backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",borderWidth:2}],this.lineChart4Legend=!1,this.lineChart4Type="line",this.barChart2Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A",barPercentage:.6}],this.barChart2Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart2Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0}}]},legend:{display:!1}},this.barChart2Colours=[{backgroundColor:"rgba(0,0,0,.2)",borderWidth:0}],this.barChart2Legend=!1,this.barChart2Type="bar",this.barChart3Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.barChart3Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart3Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart3Primary=[{backgroundColor:Object(d.getStyle)("--primary"),borderColor:"transparent",borderWidth:1}],this.barChart3Danger=[{backgroundColor:Object(d.getStyle)("--danger"),borderColor:"transparent",borderWidth:1}],this.barChart3Success=[{backgroundColor:Object(d.getStyle)("--success"),borderColor:"transparent",borderWidth:1}],this.barChart3Legend=!1,this.barChart3Type="bar",this.lineChart5Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart5Labels=["January","February","March","April","May","June","July"],this.lineChart5Options={tooltips:{enabled:!1,custom:o.CustomTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart5Info=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--info"),borderWidth:2}],this.lineChart5Success=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--info"),borderWidth:2}],this.lineChart5Warning=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--warning"),borderWidth:2}],this.lineChart5Legend=!1,this.lineChart5Type="line"}}return b.\u0275fac=function(i){return new(i||b)},b.\u0275cmp=s.Gb({type:b,selectors:[["ng-component"]],decls:666,vars:108,consts:[[1,"animated","fadeIn"],[1,"row"],[1,"col-sm-6","col-lg-3"],[1,"card","text-white","bg-primary"],[1,"card-body","pb-0"],["dropdown","",1,"btn-group","float-right"],["type","button","dropdownToggle","",1,"btn","btn-transparent","dropdown-toggle","p-0"],[1,"icon-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],[1,"text-value"],[1,"chart-wrapper","mt-3","mx-3",2,"height","70px"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],[1,"card","text-white","bg-info"],["type","button",1,"btn","btn-transparent","p-0","float-right"],[1,"icon-location-pin"],[1,"card","text-white","bg-warning"],[1,"chart-wrapper","mt-3",2,"height","70px"],[1,"card","text-white","bg-danger"],[1,"card"],[1,"card-header","bg-primary"],[1,"font-weight-bold"],[1,"float-right"],[1,"chart-wrapper",2,"height","38px"],[1,"card-header","bg-danger"],[1,"card-header","bg-success"],[1,"card-header","bg-warning"],[1,"card-body"],[1,"h4","m-0"],[1,"progress","progress-xs","my-3"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-success",2,"width","25%"],[1,"text-muted"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-info",2,"width","25%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-warning",2,"width","25%"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bg-danger",2,"width","25%"],[1,"progress","progress-white","progress-xs","my-3"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","25%"],[1,"col-md-2","col-sm-4"],[1,"card-body","text-center"],[1,"text-muted","small","text-uppercase","font-weight-bold"],[1,"h2","py-3"],[1,"chart-wrapper","mx-auto",2,"height","40px","width","80px"],[1,"col-6","col-lg-3"],[1,"card-body","p-3","clearfix"],[1,"fa","fa-cogs","bg-primary","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-primary","mb-0","mt-2"],[1,"text-muted","text-uppercase","font-weight-bold","font-xs"],[1,"fa","fa-laptop","bg-info","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-info","mb-0","mt-2"],[1,"fa","fa-moon-o","bg-warning","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-warning","mb-0","mt-2"],[1,"fa","fa-bell","bg-danger","p-3","font-2xl","mr-3","float-left"],[1,"h5","text-danger","mb-0","mt-2"],[1,"card-footer","px-3","py-2"],["href","#",1,"font-weight-bold","font-xs","btn-block","text-muted"],[1,"fa","fa-angle-right","float-right","font-lg"],[1,"card-body","p-0","clearfix"],[1,"fa","fa-cogs","bg-primary","p-4","font-2xl","mr-3","float-left"],[1,"h5","text-primary","mb-0","pt-3"],[1,"fa","fa-laptop","bg-info","p-4","font-2xl","mr-3","float-left"],[1,"h5","text-info","mb-0","pt-3"],[1,"fa","fa-moon-o","bg-warning","p-4","font-2xl","mr-3","float-left"],[1,"h5","text-warning","mb-0","pt-3"],[1,"fa","fa-bell","bg-danger","p-4","font-2xl","mr-3","float-left"],[1,"h5","text-danger","mb-0","pt-3"],[1,"fa","fa-cogs","bg-primary","p-4","px-5","font-2xl","mr-3","float-left"],[1,"fa","fa-laptop","bg-info","p-4","px-5","font-2xl","mr-3","float-left"],[1,"fa","fa-moon-o","bg-warning","p-4","px-5","font-2xl","mr-3","float-left"],[1,"fa","fa-bell","bg-danger","p-4","px-5","font-2xl","mr-3","float-left"],[1,"brand-card"],[1,"brand-card-header","bg-facebook"],[1,"fa","fa-facebook"],[1,"brand-card-body"],[1,"text-uppercase","text-muted","small"],[1,"brand-card-header","bg-twitter"],[1,"fa","fa-twitter"],[1,"brand-card-header","bg-linkedin"],[1,"fa","fa-linkedin"],[1,"brand-card-header","bg-google-plus"],[1,"fa","fa-google-plus"],[1,"card-group","mb-4"],[1,"h1","text-muted","text-right","mb-4"],[1,"icon-people"],[1,"h4","mb-0"],[1,"text-muted","text-uppercase","font-weight-bold"],[1,"progress","progress-xs","mt-3","mb-0"],[1,"icon-user-follow"],[1,"icon-basket-loaded"],[1,"icon-pie-chart"],[1,"icon-speedometer"],[1,"col-sm-6","col-md-2"],[1,"icon-speech"],[1,"progress","progress-white","progress-xs","mt-3"],[1,"card","text-white","bg-success"],[1,"dropdown-menu","dropdown-menu-right"],["href","#",1,"dropdown-item"]],template:function(b,i){if(1&b){s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"div",3),s.Sb(4,"div",4),s.Sb(5,"div",5),s.Sb(6,"button",6),s.Nb(7,"i",7),s.Rb(),s.vc(8,n,9,0,"div",8),s.Rb(),s.Sb(9,"div",9),s.xc(10,"9.823"),s.Rb(),s.Sb(11,"div"),s.xc(12,"Members online"),s.Rb(),s.Rb(),s.Sb(13,"div",10),s.Nb(14,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Sb(15,"div",2),s.Sb(16,"div",12),s.Sb(17,"div",4),s.Sb(18,"button",13),s.Nb(19,"i",14),s.Rb(),s.Sb(20,"div",9),s.xc(21,"9.823"),s.Rb(),s.Sb(22,"div"),s.xc(23,"Members online"),s.Rb(),s.Rb(),s.Sb(24,"div",10),s.Nb(25,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Sb(26,"div",2),s.Sb(27,"div",15),s.Sb(28,"div",4),s.Sb(29,"div",5),s.Sb(30,"button",6),s.Nb(31,"i",7),s.Rb(),s.vc(32,l,7,0,"div",8),s.Rb(),s.Sb(33,"div",9),s.xc(34,"9.823"),s.Rb(),s.Sb(35,"div"),s.xc(36,"Members online"),s.Rb(),s.Rb(),s.Sb(37,"div",16),s.Nb(38,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Sb(39,"div",2),s.Sb(40,"div",17),s.Sb(41,"div",4),s.Sb(42,"div",5),s.Sb(43,"button",6),s.Nb(44,"i",7),s.Rb(),s.vc(45,c,7,0,"div",8),s.Rb(),s.Sb(46,"div",9),s.xc(47,"9.823"),s.Rb(),s.Sb(48,"div"),s.xc(49,"Members online"),s.Rb(),s.Rb(),s.Sb(50,"div",10),s.Nb(51,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(52,"div",1),s.Sb(53,"div",2),s.Sb(54,"div",18),s.Sb(55,"div",19),s.Sb(56,"div",20),s.Sb(57,"span"),s.xc(58,"SALE"),s.Rb(),s.Sb(59,"span",21),s.xc(60,"$1.890,65"),s.Rb(),s.Rb(),s.Sb(61,"div"),s.Sb(62,"span"),s.Sb(63,"small"),s.xc(64,"Today 6:43 AM"),s.Rb(),s.Rb(),s.Sb(65,"span",21),s.Sb(66,"small"),s.xc(67,"+432,50 (15,78%)"),s.Rb(),s.Rb(),s.Rb(),s.Sb(68,"div",22),s.Nb(69,"canvas",11),s.Rb(),s.Sb(70,"div",22),s.Nb(71,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(72,"div",2),s.Sb(73,"div",18),s.Sb(74,"div",23),s.Sb(75,"div",20),s.Sb(76,"span"),s.xc(77,"SALE"),s.Rb(),s.Sb(78,"span",21),s.xc(79,"$1.890,65"),s.Rb(),s.Rb(),s.Sb(80,"div"),s.Sb(81,"span"),s.Sb(82,"small"),s.xc(83,"Today 6:43 AM"),s.Rb(),s.Rb(),s.Sb(84,"span",21),s.Sb(85,"small"),s.xc(86,"+432,50 (15,78%)"),s.Rb(),s.Rb(),s.Rb(),s.Sb(87,"div",22),s.Nb(88,"canvas",11),s.Rb(),s.Sb(89,"div",22),s.Nb(90,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(91,"div",2),s.Sb(92,"div",18),s.Sb(93,"div",24),s.Sb(94,"div",20),s.Sb(95,"span"),s.xc(96,"SALE"),s.Rb(),s.Sb(97,"span",21),s.xc(98,"$1.890,65"),s.Rb(),s.Rb(),s.Sb(99,"div"),s.Sb(100,"span"),s.Sb(101,"small"),s.xc(102,"Today 6:43 AM"),s.Rb(),s.Rb(),s.Sb(103,"span",21),s.Sb(104,"small"),s.xc(105,"+432,50 (15,78%)"),s.Rb(),s.Rb(),s.Rb(),s.Sb(106,"div",22),s.Nb(107,"canvas",11),s.Rb(),s.Sb(108,"div",22),s.Nb(109,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(110,"div",2),s.Sb(111,"div",18),s.Sb(112,"div",25),s.Sb(113,"div",20),s.Sb(114,"span"),s.xc(115,"SALE"),s.Rb(),s.Sb(116,"span",21),s.xc(117,"$1.890,65"),s.Rb(),s.Rb(),s.Sb(118,"div"),s.Sb(119,"span"),s.Sb(120,"small"),s.xc(121,"Today 6:43 AM"),s.Rb(),s.Rb(),s.Sb(122,"span",21),s.Sb(123,"small"),s.xc(124,"+432,50 (15,78%)"),s.Rb(),s.Rb(),s.Rb(),s.Sb(125,"div",22),s.Nb(126,"canvas",11),s.Rb(),s.Sb(127,"div",22),s.Nb(128,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(129,"div",1),s.Sb(130,"div",2),s.Sb(131,"div",18),s.Sb(132,"div",26),s.Sb(133,"div",27),s.xc(134,"89.9%"),s.Rb(),s.Sb(135,"div"),s.xc(136,"Lorem ipsum..."),s.Rb(),s.Sb(137,"div",28),s.Nb(138,"div",29),s.Rb(),s.Sb(139,"small",30),s.xc(140,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(141,"div",2),s.Sb(142,"div",18),s.Sb(143,"div",26),s.Sb(144,"div",27),s.xc(145,"12.124"),s.Rb(),s.Sb(146,"div"),s.xc(147,"Lorem ipsum..."),s.Rb(),s.Sb(148,"div",28),s.Nb(149,"div",31),s.Rb(),s.Sb(150,"small",30),s.xc(151,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(152,"div",2),s.Sb(153,"div",18),s.Sb(154,"div",26),s.Sb(155,"div",27),s.xc(156,"$98.111,00"),s.Rb(),s.Sb(157,"div"),s.xc(158,"Lorem ipsum..."),s.Rb(),s.Sb(159,"div",28),s.Nb(160,"div",32),s.Rb(),s.Sb(161,"small",30),s.xc(162,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(163,"div",2),s.Sb(164,"div",18),s.Sb(165,"div",26),s.Sb(166,"div",27),s.xc(167,"2 TB"),s.Rb(),s.Sb(168,"div"),s.xc(169,"Lorem ipsum..."),s.Rb(),s.Sb(170,"div",28),s.Nb(171,"div",33),s.Rb(),s.Sb(172,"small",30),s.xc(173,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(174,"div",1),s.Sb(175,"div",2),s.Sb(176,"div",3),s.Sb(177,"div",26),s.Sb(178,"div",27),s.xc(179,"89.9%"),s.Rb(),s.Sb(180,"div"),s.xc(181,"Lorem ipsum..."),s.Rb(),s.Sb(182,"div",34),s.Nb(183,"div",35),s.Rb(),s.Sb(184,"small",30),s.xc(185,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(186,"div",2),s.Sb(187,"div",15),s.Sb(188,"div",26),s.Sb(189,"div",27),s.xc(190,"12.124"),s.Rb(),s.Sb(191,"div"),s.xc(192,"Lorem ipsum..."),s.Rb(),s.Sb(193,"div",34),s.Nb(194,"div",35),s.Rb(),s.Sb(195,"small",30),s.xc(196,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(197,"div",2),s.Sb(198,"div",17),s.Sb(199,"div",26),s.Sb(200,"div",27),s.xc(201,"$98.111,00"),s.Rb(),s.Sb(202,"div"),s.xc(203,"Lorem ipsum..."),s.Rb(),s.Sb(204,"div",34),s.Nb(205,"div",35),s.Rb(),s.Sb(206,"small",30),s.xc(207,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(208,"div",2),s.Sb(209,"div",12),s.Sb(210,"div",26),s.Sb(211,"div",27),s.xc(212,"2 TB"),s.Rb(),s.Sb(213,"div"),s.xc(214,"Lorem ipsum..."),s.Rb(),s.Sb(215,"div",34),s.Nb(216,"div",35),s.Rb(),s.Sb(217,"small",30),s.xc(218,"Lorem ipsum dolor sit amet enim."),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(219,"div",1),s.Sb(220,"div",36),s.Sb(221,"div",18),s.Sb(222,"div",37),s.Sb(223,"div",38),s.xc(224,"Title"),s.Rb(),s.Sb(225,"div",39),s.xc(226,"1,123"),s.Rb(),s.Sb(227,"div",40),s.Nb(228,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(229,"div",36),s.Sb(230,"div",18),s.Sb(231,"div",37),s.Sb(232,"div",38),s.xc(233,"Title"),s.Rb(),s.Sb(234,"div",39),s.xc(235,"1,123"),s.Rb(),s.Sb(236,"div",40),s.Nb(237,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(238,"div",36),s.Sb(239,"div",18),s.Sb(240,"div",37),s.Sb(241,"div",38),s.xc(242,"Title"),s.Rb(),s.Sb(243,"div",39),s.xc(244,"1,123"),s.Rb(),s.Sb(245,"div",40),s.Nb(246,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(247,"div",36),s.Sb(248,"div",18),s.Sb(249,"div",37),s.Sb(250,"div",38),s.xc(251,"Title"),s.Rb(),s.Sb(252,"div",39),s.xc(253,"1,123"),s.Rb(),s.Sb(254,"div",40),s.Nb(255,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(256,"div",36),s.Sb(257,"div",18),s.Sb(258,"div",37),s.Sb(259,"div",38),s.xc(260,"Title"),s.Rb(),s.Sb(261,"div",39),s.xc(262,"1,123"),s.Rb(),s.Sb(263,"div",40),s.Nb(264,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(265,"div",36),s.Sb(266,"div",18),s.Sb(267,"div",37),s.Sb(268,"div",38),s.xc(269,"Title"),s.Rb(),s.Sb(270,"div",39),s.xc(271,"1,123"),s.Rb(),s.Sb(272,"div",40),s.Nb(273,"canvas",11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(274,"div",1),s.Sb(275,"div",41),s.Sb(276,"div",18),s.Sb(277,"div",42),s.Nb(278,"i",43),s.Sb(279,"div",44),s.xc(280,"$1.999,50"),s.Rb(),s.Sb(281,"div",45),s.xc(282,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(283,"div",41),s.Sb(284,"div",18),s.Sb(285,"div",42),s.Nb(286,"i",46),s.Sb(287,"div",47),s.xc(288,"$1.999,50"),s.Rb(),s.Sb(289,"div",45),s.xc(290,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(291,"div",41),s.Sb(292,"div",18),s.Sb(293,"div",42),s.Nb(294,"i",48),s.Sb(295,"div",49),s.xc(296,"$1.999,50"),s.Rb(),s.Sb(297,"div",45),s.xc(298,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(299,"div",41),s.Sb(300,"div",18),s.Sb(301,"div",42),s.Nb(302,"i",50),s.Sb(303,"div",51),s.xc(304,"$1.999,50"),s.Rb(),s.Sb(305,"div",45),s.xc(306,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(307,"div",41),s.Sb(308,"div",18),s.Sb(309,"div",42),s.Nb(310,"i",43),s.Sb(311,"div",44),s.xc(312,"$1.999,50"),s.Rb(),s.Sb(313,"div",45),s.xc(314,"Income"),s.Rb(),s.Rb(),s.Sb(315,"div",52),s.Sb(316,"a",53),s.xc(317,"View More "),s.Nb(318,"i",54),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(319,"div",41),s.Sb(320,"div",18),s.Sb(321,"div",42),s.Nb(322,"i",46),s.Sb(323,"div",47),s.xc(324,"$1.999,50"),s.Rb(),s.Sb(325,"div",45),s.xc(326,"Income"),s.Rb(),s.Rb(),s.Sb(327,"div",52),s.Sb(328,"a",53),s.xc(329,"View More "),s.Nb(330,"i",54),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(331,"div",41),s.Sb(332,"div",18),s.Sb(333,"div",42),s.Nb(334,"i",48),s.Sb(335,"div",49),s.xc(336,"$1.999,50"),s.Rb(),s.Sb(337,"div",45),s.xc(338,"Income"),s.Rb(),s.Rb(),s.Sb(339,"div",52),s.Sb(340,"a",53),s.xc(341,"View More "),s.Nb(342,"i",54),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(343,"div",41),s.Sb(344,"div",18),s.Sb(345,"div",42),s.Nb(346,"i",50),s.Sb(347,"div",51),s.xc(348,"$1.999,50"),s.Rb(),s.Sb(349,"div",45),s.xc(350,"Income"),s.Rb(),s.Rb(),s.Sb(351,"div",52),s.Sb(352,"a",53),s.xc(353,"View More "),s.Nb(354,"i",54),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(355,"div",1),s.Sb(356,"div",41),s.Sb(357,"div",18),s.Sb(358,"div",55),s.Nb(359,"i",56),s.Sb(360,"div",57),s.xc(361,"$1.999,50"),s.Rb(),s.Sb(362,"div",45),s.xc(363,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(364,"div",41),s.Sb(365,"div",18),s.Sb(366,"div",55),s.Nb(367,"i",58),s.Sb(368,"div",59),s.xc(369,"$1.999,50"),s.Rb(),s.Sb(370,"div",45),s.xc(371,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(372,"div",41),s.Sb(373,"div",18),s.Sb(374,"div",55),s.Nb(375,"i",60),s.Sb(376,"div",61),s.xc(377,"$1.999,50"),s.Rb(),s.Sb(378,"div",45),s.xc(379,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(380,"div",41),s.Sb(381,"div",18),s.Sb(382,"div",55),s.Nb(383,"i",62),s.Sb(384,"div",63),s.xc(385,"$1.999,50"),s.Rb(),s.Sb(386,"div",45),s.xc(387,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(388,"div",41),s.Sb(389,"div",18),s.Sb(390,"div",55),s.Nb(391,"i",64),s.Sb(392,"div",57),s.xc(393,"$1.999,50"),s.Rb(),s.Sb(394,"div",45),s.xc(395,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(396,"div",41),s.Sb(397,"div",18),s.Sb(398,"div",55),s.Nb(399,"i",65),s.Sb(400,"div",59),s.xc(401,"$1.999,50"),s.Rb(),s.Sb(402,"div",45),s.xc(403,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(404,"div",41),s.Sb(405,"div",18),s.Sb(406,"div",55),s.Nb(407,"i",66),s.Sb(408,"div",61),s.xc(409,"$1.999,50"),s.Rb(),s.Sb(410,"div",45),s.xc(411,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(412,"div",41),s.Sb(413,"div",18),s.Sb(414,"div",55),s.Nb(415,"i",67),s.Sb(416,"div",63),s.xc(417,"$1.999,50"),s.Rb(),s.Sb(418,"div",45),s.xc(419,"Income"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(420,"div",1),s.Sb(421,"div",2),s.Sb(422,"div",68),s.Sb(423,"div",69),s.Nb(424,"i",70),s.Rb(),s.Sb(425,"div",71),s.Sb(426,"div"),s.Sb(427,"div",9),s.xc(428,"89k"),s.Rb(),s.Sb(429,"div",72),s.xc(430,"friends"),s.Rb(),s.Rb(),s.Sb(431,"div"),s.Sb(432,"div",9),s.xc(433,"459"),s.Rb(),s.Sb(434,"div",72),s.xc(435,"feeds"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(436,"div",2),s.Sb(437,"div",68),s.Sb(438,"div",73),s.Nb(439,"i",74),s.Rb(),s.Sb(440,"div",71),s.Sb(441,"div"),s.Sb(442,"div",9),s.xc(443,"973k"),s.Rb(),s.Sb(444,"div",72),s.xc(445,"followers"),s.Rb(),s.Rb(),s.Sb(446,"div"),s.Sb(447,"div",9),s.xc(448,"1.792"),s.Rb(),s.Sb(449,"div",72),s.xc(450,"tweets"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(451,"div",2),s.Sb(452,"div",68),s.Sb(453,"div",75),s.Nb(454,"i",76),s.Rb(),s.Sb(455,"div",71),s.Sb(456,"div"),s.Sb(457,"div",9),s.xc(458,"500+"),s.Rb(),s.Sb(459,"div",72),s.xc(460,"contacts"),s.Rb(),s.Rb(),s.Sb(461,"div"),s.Sb(462,"div",9),s.xc(463,"292"),s.Rb(),s.Sb(464,"div",72),s.xc(465,"feeds"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(466,"div",2),s.Sb(467,"div",68),s.Sb(468,"div",77),s.Nb(469,"i",78),s.Rb(),s.Sb(470,"div",71),s.Sb(471,"div"),s.Sb(472,"div",9),s.xc(473,"894"),s.Rb(),s.Sb(474,"div",72),s.xc(475,"followers"),s.Rb(),s.Rb(),s.Sb(476,"div"),s.Sb(477,"div",9),s.xc(478,"92"),s.Rb(),s.Sb(479,"div",72),s.xc(480,"circles"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(481,"div",79),s.Sb(482,"div",18),s.Sb(483,"div",26),s.Sb(484,"div",80),s.Nb(485,"i",81),s.Rb(),s.Sb(486,"div",82),s.xc(487,"87.500");s.Rb(),s.Sb(488,"small",83),s.xc(489,"Visitors"),s.Rb(),s.Sb(490,"div",84),s.Nb(491,"div",31),s.Rb(),s.Rb(),s.Rb(),s.Sb(492,"div",18),s.Sb(493,"div",26),s.Sb(494,"div",80),s.Nb(495,"i",85),s.Rb(),s.Sb(496,"div",82),s.xc(497,"385"),s.Rb(),s.Sb(498,"small",83),s.xc(499,"New Clients"),s.Rb(),s.Sb(500,"div",84),s.Nb(501,"div",29),s.Rb(),s.Rb(),s.Rb(),s.Sb(502,"div",18),s.Sb(503,"div",26),s.Sb(504,"div",80),s.Nb(505,"i",86),s.Rb(),s.Sb(506,"div",82),s.xc(507,"1238"),s.Rb(),s.Sb(508,"small",83),s.xc(509,"Products sold"),s.Rb(),s.Sb(510,"div",84),s.Nb(511,"div",32),s.Rb(),s.Rb(),s.Rb(),s.Sb(512,"div",18),s.Sb(513,"div",26),s.Sb(514,"div",80),s.Nb(515,"i",87),s.Rb(),s.Sb(516,"div",82),s.xc(517,"28%"),s.Rb(),s.Sb(518,"small",83),s.xc(519,"Returning Visitors"),s.Rb(),s.Sb(520,"div",84),s.Nb(521,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Sb(522,"div",18),s.Sb(523,"div",26),s.Sb(524,"div",80),s.Nb(525,"i",88),s.Rb(),s.Sb(526,"div",82),s.xc(527,"5:34:11"),s.Rb(),s.Sb(528,"small",83),s.xc(529,"Avg. Time"),s.Rb(),s.Sb(530,"div",84),s.Nb(531,"div",33),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(532,"div",1),s.Sb(533,"div",89),s.Sb(534,"div",18),s.Sb(535,"div",26),s.Sb(536,"div",80),s.Nb(537,"i",81),s.Rb(),s.Sb(538,"div",82),s.xc(539,"87.500"),s.Rb(),s.Sb(540,"small",83),s.xc(541,"Visitors"),s.Rb(),s.Sb(542,"div",84),s.Nb(543,"div",31),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(544,"div",89),s.Sb(545,"div",18),s.Sb(546,"div",26),s.Sb(547,"div",80),s.Nb(548,"i",85),s.Rb(),s.Sb(549,"div",82),s.xc(550,"385"),s.Rb(),s.Sb(551,"small",83),s.xc(552,"New Clients"),s.Rb(),s.Sb(553,"div",84),s.Nb(554,"div",29),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(555,"div",89),s.Sb(556,"div",18),s.Sb(557,"div",26),s.Sb(558,"div",80),s.Nb(559,"i",86),s.Rb(),s.Sb(560,"div",82),s.xc(561,"1238"),s.Rb(),s.Sb(562,"small",83),s.xc(563,"Products sold"),s.Rb(),s.Sb(564,"div",84),s.Nb(565,"div",32),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(566,"div",89),s.Sb(567,"div",18),s.Sb(568,"div",26),s.Sb(569,"div",80),s.Nb(570,"i",87),s.Rb(),s.Sb(571,"div",82),s.xc(572,"28%"),s.Rb(),s.Sb(573,"small",83),s.xc(574,"Returning Visitors"),s.Rb(),s.Sb(575,"div",84),s.Nb(576,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(577,"div",89),s.Sb(578,"div",18),s.Sb(579,"div",26),s.Sb(580,"div",80),s.Nb(581,"i",88),s.Rb(),s.Sb(582,"div",82),s.xc(583,"5:34:11"),s.Rb(),s.Sb(584,"small",83),s.xc(585,"Avg. Time"),s.Rb(),s.Sb(586,"div",84),s.Nb(587,"div",33),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(588,"div",89),s.Sb(589,"div",18),s.Sb(590,"div",26),s.Sb(591,"div",80),s.Nb(592,"i",90),s.Rb(),s.Sb(593,"div",82),s.xc(594,"972"),s.Rb(),s.Sb(595,"small",83),s.xc(596,"Comments"),s.Rb(),s.Sb(597,"div",84),s.Nb(598,"div",31),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(599,"div",1),s.Sb(600,"div",89),s.Sb(601,"div",12),s.Sb(602,"div",26),s.Sb(603,"div",80),s.Nb(604,"i",81),s.Rb(),s.Sb(605,"div",82),s.xc(606,"87.500"),s.Rb(),s.Sb(607,"small",83),s.xc(608,"Visitors"),s.Rb(),s.Sb(609,"div",91),s.Nb(610,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(611,"div",89),s.Sb(612,"div",92),s.Sb(613,"div",26),s.Sb(614,"div",80),s.Nb(615,"i",85),s.Rb(),s.Sb(616,"div",82),s.xc(617,"385"),s.Rb(),s.Sb(618,"small",83),s.xc(619,"New Clients"),s.Rb(),s.Sb(620,"div",91),s.Nb(621,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(622,"div",89),s.Sb(623,"div",15),s.Sb(624,"div",26),s.Sb(625,"div",80),s.Nb(626,"i",86),s.Rb(),s.Sb(627,"div",82),s.xc(628,"1238"),s.Rb(),s.Sb(629,"small",83),s.xc(630,"Products sold"),s.Rb(),s.Sb(631,"div",91),s.Nb(632,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(633,"div",89),s.Sb(634,"div",3),s.Sb(635,"div",26),s.Sb(636,"div",80),s.Nb(637,"i",87),s.Rb(),s.Sb(638,"div",82),s.xc(639,"28%"),s.Rb(),s.Sb(640,"small",83),s.xc(641,"Returning Visitors"),s.Rb(),s.Sb(642,"div",91),s.Nb(643,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(644,"div",89),s.Sb(645,"div",17),s.Sb(646,"div",26),s.Sb(647,"div",80),s.Nb(648,"i",88),s.Rb(),s.Sb(649,"div",82),s.xc(650,"5:34:11"),s.Rb(),s.Sb(651,"small",83),s.xc(652,"Avg. Time"),s.Rb(),s.Sb(653,"div",91),s.Nb(654,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(655,"div",89),s.Sb(656,"div",12),s.Sb(657,"div",26),s.Sb(658,"div",80),s.Nb(659,"i",90),s.Rb(),s.Sb(660,"div",82),s.xc(661,"972"),s.Rb(),s.Sb(662,"small",83),s.xc(663,"Comments"),s.Rb(),s.Sb(664,"div",91),s.Nb(665,"div",35),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}2&b&&(s.Ab(14),s.hc("datasets",i.lineChart1Data)("labels",i.lineChart1Labels)("options",i.lineChart1Options)("colors",i.lineChart1Colours)("legend",i.lineChart1Legend)("chartType",i.lineChart1Type),s.Ab(11),s.hc("datasets",i.lineChart2Data)("labels",i.lineChart2Labels)("options",i.lineChart2Options)("colors",i.lineChart2Colours)("legend",i.lineChart2Legend)("chartType",i.lineChart2Type),s.Ab(13),s.hc("datasets",i.lineChart3Data)("labels",i.lineChart3Labels)("options",i.lineChart3Options)("colors",i.lineChart3Colours)("legend",i.lineChart3Legend)("chartType",i.lineChart3Type),s.Ab(13),s.hc("datasets",i.barChart1Data)("labels",i.barChart1Labels)("options",i.barChart1Options)("colors",i.barChart1Colours)("legend",i.barChart1Legend)("chartType",i.barChart1Type),s.Ab(18),s.hc("datasets",i.lineChart4Data)("labels",i.lineChart4Labels)("options",i.lineChart4Options)("colors",i.lineChart4Colours)("legend",i.lineChart4Legend)("chartType",i.lineChart4Type),s.Ab(2),s.hc("datasets",i.barChart2Data)("labels",i.barChart2Labels)("options",i.barChart2Options)("colors",i.barChart2Colours)("legend",i.barChart2Legend)("chartType",i.barChart2Type),s.Ab(17),s.hc("datasets",i.lineChart4Data)("labels",i.lineChart4Labels)("options",i.lineChart4Options)("colors",i.lineChart4Colours)("legend",i.lineChart4Legend)("chartType",i.lineChart4Type),s.Ab(2),s.hc("datasets",i.barChart2Data)("labels",i.barChart2Labels)("options",i.barChart2Options)("colors",i.barChart2Colours)("legend",i.barChart2Legend)("chartType",i.barChart2Type),s.Ab(17),s.hc("datasets",i.lineChart4Data)("labels",i.lineChart4Labels)("options",i.lineChart4Options)("colors",i.lineChart4Colours)("legend",i.lineChart4Legend)("chartType",i.lineChart4Type),s.Ab(2),s.hc("datasets",i.barChart2Data)("labels",i.barChart2Labels)("options",i.barChart2Options)("colors",i.barChart2Colours)("legend",i.barChart2Legend)("chartType",i.barChart2Type),s.Ab(17),s.hc("datasets",i.lineChart4Data)("labels",i.lineChart4Labels)("options",i.lineChart4Options)("colors",i.lineChart4Colours)("legend",i.lineChart4Legend)("chartType",i.lineChart4Type),s.Ab(2),s.hc("datasets",i.barChart2Data)("labels",i.barChart2Labels)("options",i.barChart2Options)("colors",i.barChart2Colours)("legend",i.barChart2Legend)("chartType",i.barChart2Type),s.Ab(100),s.hc("datasets",i.barChart3Data)("labels",i.barChart3Labels)("options",i.barChart3Options)("colors",i.barChart3Primary)("legend",i.barChart3Legend)("chartType",i.barChart3Type),s.Ab(9),s.hc("datasets",i.barChart3Data)("labels",i.barChart3Labels)("options",i.barChart3Options)("colors",i.barChart3Danger)("legend",i.barChart3Legend)("chartType",i.barChart3Type),s.Ab(9),s.hc("datasets",i.barChart3Data)("labels",i.barChart3Labels)("options",i.barChart3Options)("colors",i.barChart3Success)("legend",i.barChart3Legend)("chartType",i.barChart3Type),s.Ab(9),s.hc("datasets",i.lineChart5Data)("labels",i.lineChart5Labels)("options",i.lineChart5Options)("colors",i.lineChart5Info)("legend",i.lineChart5Legend)("chartType",i.lineChart5Type),s.Ab(9),s.hc("datasets",i.lineChart5Data)("labels",i.lineChart5Labels)("options",i.lineChart5Options)("colors",i.lineChart5Success)("legend",i.lineChart5Legend)("chartType",i.lineChart5Type),s.Ab(9),s.hc("datasets",i.lineChart5Data)("labels",i.lineChart5Labels)("options",i.lineChart5Options)("colors",i.lineChart5Warning)("legend",i.lineChart5Legend)("chartType",i.lineChart5Type))},directives:[t.a,t.d,t.b,e.a],encapsulation:2}),b})(),data:{title:"Widgets"}}];let v=(()=>{class b{}return b.\u0275fac=function(i){return new(i||b)},b.\u0275mod=s.Kb({type:b}),b.\u0275inj=s.Jb({imports:[[r.g.forChild(S)],r.g]}),b})(),R=(()=>{class b{}return b.\u0275fac=function(i){return new(i||b)},b.\u0275mod=s.Kb({type:b}),b.\u0275inj=s.Jb({imports:[[v,e.b,t.c]]}),b})()}}]);