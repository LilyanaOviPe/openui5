/* eslint-disable */


//@ui5-bundle cards/performance/Component-preload.js
sap.ui.require.preload({
	"cards/performance/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(e){"use strict";var n=e.extend("cards.performance.Component");return n});
},
	"cards/performance/controller/Main.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/integration/library","sap/ui/integration/widgets/Card","sap/f/GridContainerItemLayoutData","../manifests/objectCardSimpleTemplate","../manifests/objectCardInputsTemplate","../manifests/objectCardAdditionalDetailsTemplate","../manifests/listCardBarChartTemplate","../manifests/listBulletChartTemplate","../manifests/listCardQuickActionsTemplate","../manifests/analyticalLineTemplate","../manifests/analyticalDonutTemplate","../manifests/timelineTemplate","../manifests/calendarTemplate","../manifests/tableTemplate","../manifests/extensionFormattersTemplate","../manifests/adaptiveMarkdownTemplate","../manifests/adaptiveTemplatingTemplate","../manifests/filterSelectTemplate","../manifests/filterMultipleTemplate"],function(a,t,e,n,s,i,m,o,l,r,u,f,c,d,p,y,w,R,T,C){"use strict";var h=50;var v=t.CardDataMode;var g=sap.ui.require.toUrl("cards/performance/manifests/");var b=[{manifest:s,layout:{columns:8,minRows:3}},{manifest:m,layout:{columns:4,minRows:5}},{manifest:r,layout:{columns:4,minRows:5}},{manifest:o,layout:{columns:4,minRows:5}},{manifest:l,layout:{columns:4,minRows:5}},{manifest:u,layout:{columns:4,minRows:4}},{manifest:i,layout:{columns:4,minRows:7}},{manifest:f,layout:{columns:4,minRows:3}},{manifest:d,layout:{columns:8,minRows:6}},{manifest:p,layout:{columns:8,minRows:4}},{manifest:c,layout:{columns:4,minRows:5}},{manifest:y,layout:{columns:4,minRows:5}},{manifest:w,layout:{columns:4,minRows:4}},{manifest:R,layout:{columns:4,minRows:4}},{manifest:T,layout:{columns:4,minRows:5}},{manifest:C,layout:{columns:4,minRows:5}}];return a.extend("cards.performance.controller.Main",{onInit:function(){var a=[];var t=0;while(a.length<h){var e=b[t];e.manifest["sap.app"].id="cards.performance.manifests.generatedCard-"+a.length;a.push(e);t=(t+1)%b.length}this._createCards(a)},_createCards:function(a){var t=this._getDataMode();var s=this.byId("cardsContainer");a.forEach(function(a){s.addItem(new e({manifest:a.manifest,layoutData:new n(a.layout),baseUrl:g,dataMode:t}))})},_getDataMode:function(){if(new URLSearchParams(document.location.search).get("lazy-loading")==="true"){return v.Auto}return v.Active}})});
},
	"cards/performance/manifest.json":'{"sap.app":{"id":"cards.performance","applicationVersion":{"version":"1.0.0"}},"sap.ui5":{"rootView":{"viewName":"cards.performance.view.Main","type":"XML","async":true},"dependencies":{"libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.integration":{},"sap.f":{}}}}}',
	"cards/performance/manifests/adaptiveMarkdownTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.17.0","sap.app":{id:"",type:"card",title:"Sample of an Adaptive Card with formatted text",subTitle:"Sample of an Adaptive with formatted text",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Adaptive","Card","Formatted","Markdown","Sample"]}},"sap.card":{configuration:{enableMarkdown:true},header:{title:"Markdown support",subTitle:"This is a sample of the markdown feature of MS Adaptive Cards.",icon:{src:"sap-icon://text-formatting"}},type:"AdaptiveCard",content:{$schema:"http://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",version:"1.2",body:[{type:"TextBlock",text:"This is some **bold** text"},{type:"TextBlock",text:"This is some _italic_ text"},{type:"TextBlock",text:"- Bullet \r- List \r",wrap:true},{type:"TextBlock",text:"1. Numbered\r2. List\r",wrap:true},{type:"TextBlock",text:"Check out [Adaptive Cards](http://adaptivecards.io)"}]}}}});
},
	"cards/performance/manifests/adaptiveTemplatingTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.17.0","sap.app":{id:"",type:"card",title:"Sample of an Adaptive Card",subTitle:"Sample of an Adaptive Card",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Adaptive","Card","Sample"]}},"sap.card":{type:"AdaptiveCard",data:{json:{firstName:"Donna",lastName:"Moore",position:"Sales Executive",description:"Lorem ipsum dolor st amet, consetetur sadipscing elitr",company:{name:"Robert Brown Entertainment",address:"481 West Street, Anytown OH 45066, USA"}}},header:{title:"{firstName} {lastName}",subTitle:"{position}"},content:{$schema:"http://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",version:"1.0",body:[{type:"TextBlock",text:"${description}",wrap:true},{type:"FactSet",facts:[{title:"First Name:",value:"${firstName}"},{title:"Last Name:",value:"${lastName}"},{title:"Company:",value:"${company.name}"},{title:"Address:",value:"${company.address}"}]}]}}}});
},
	"cards/performance/manifests/analyticalDonutTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.14.0","sap.app":{id:"",type:"card",title:"Sample of a Donut Chart",subTitle:"Sample of a Donut Chart",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Analytical","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://donut-chart"}},"sap.card":{type:"Analytical",header:{title:"January"},content:{chartType:"Donut",chartProperties:{legend:{visible:false},plotArea:{dataLabel:{visible:true,showTotal:true}},title:{visible:false}},data:{json:{milk:[{"Store Name":"24-Seven",Revenue:345292.06,"Fat Percentage":"2 Percent"},{"Store Name":"A&A",Revenue:1564235.29,"Fat Percentage":"2 Percent"},{"Store Name":"Alexei's Specialities",Revenue:1085567.22,"Fat Percentage":"2 Percent"},{"Store Name":"24-Seven",Revenue:82922.07,"Fat Percentage":"1 Percent"},{"Store Name":"A&A",Revenue:157913.07,"Fat Percentage":"1 Percent"},{"Store Name":"Alexei's Specialities",Revenue:245609.486884,"Fat Percentage":"1 Percent"}]},path:"/milk"},dimensions:[{name:"Store Name",value:"{Store Name}"}],measures:[{name:"Revenue",value:"{Revenue}"}],feeds:[{type:"Dimension",uid:"color",values:["Store Name"]},{type:"Measure",uid:"size",values:["Revenue"]}]}}}});
},
	"cards/performance/manifests/analyticalLineTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.14.0","sap.app":{id:"",type:"card",title:"Sample of a Line Chart",subTitle:"Sample of a Line Chart",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Analytical","Card","Line","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://line-chart"}},"sap.card":{type:"Analytical",header:{type:"Numeric",data:{json:{number:"65.34",unit:"K",trend:"Down",state:"Error",target:{number:100,unit:"K"},deviation:{number:34.7,state:"Critical"},details:"Q1, 2018"}},title:"Project Cloud Transformation",subTitle:"Revenue",unitOfMeasurement:"EUR",mainIndicator:{number:"{number}",unit:"{unit}",trend:"{trend}",state:"{state}"},details:"{details}",sideIndicators:[{title:"Target",number:"{target/number}",unit:"{target/unit}"},{title:"Deviation",number:"{deviation/number}",unit:"%",state:"{deviation/state}"}]},content:{chartType:"Line",chartProperties:{title:{text:"Line chart",visible:true,alignment:"left"},legend:{visible:"{legend/visible}"},legendGroup:{layout:{position:"{legend/position}",alignment:"{legend/alignment}"}},plotArea:{dataLabel:{visible:true}},categoryAxis:{title:{visible:false}},valueAxis:{title:{visible:false}}},data:{json:{dimensions:{weekLabel:"Weeks"},measures:{revenueLabel:"Revenue",costLabel:"Costs"},legend:{visible:true,position:"bottom",alignment:"topLeft"},list:[{Week:"CW14",Revenue:431000.22,Cost:23e4,Cost1:24800.63,Cost2:205199.37,Cost3:199999.37,Target:5e5,Budget:21e4},{Week:"CW15",Revenue:494000.3,Cost:238e3,Cost1:99200.39,Cost2:138799.61,Cost3:200199.37,Target:5e5,Budget:224e3},{Week:"CW16",Revenue:491000.17,Cost:221e3,Cost1:70200.54,Cost2:150799.46,Cost3:80799.46,Target:5e5,Budget:238e3},{Week:"CW17",Revenue:536000.34,Cost:28e4,Cost1:158800.73,Cost2:121199.27,Cost3:108800.46,Target:5e5,Budget:252e3},{Week:"CW18",Revenue:675e3,Cost:23e4,Cost1:140000.91,Cost2:89999.09,Cost3:100099.09,Target:6e5,Budget:266e3},{Week:"CW19",Revenue:68e4,Cost:25e4,Cost1:172800.15,Cost2:77199.85,Cost3:57199.85,Target:6e5,Budget:28e4},{Week:"CW20",Revenue:659000.14,Cost:325e3,Cost1:237200.74,Cost2:87799.26,Cost3:187799.26,Target:6e5,Budget:294e3}]},path:"/list"},dimensions:[{name:"{dimensions/weekLabel}",value:"{Week}"}],measures:[{name:"{measures/revenueLabel}",value:"{Revenue}"},{name:"{measures/costLabel}",value:"{Cost}"}],feeds:[{uid:"valueAxis",type:"Measure",values:["{measures/revenueLabel}","{measures/costLabel}"]},{uid:"categoryAxis",type:"Dimension",values:["{dimensions/weekLabel}"]}]}}}});
},
	"cards/performance/manifests/calendarTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.14.0","sap.app":{id:"",type:"card",title:"Sample of a List with Highlight",subTitle:"Sample of a Calendar with Highlight",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Calendar","Highlight","Card","Sample"]}},"sap.card":{type:"Calendar",data:{json:{item:[{start:"2020-09-18T09:00",end:"2020-09-18T10:00",title:"Payment reminder",icon:"sap-icon://desktop-mobile",type:"Type06",url:"http://sap.com"},{start:"2020-09-18T17:00",end:"2020-09-18T17:30",title:"Private appointment",icon:"sap-icon://desktop-mobile",type:"Type07"},{start:"2020-09-18T12:00",end:"2020-09-18T13:00",title:"Lunch",text:"working",icon:"sap-icon://desktop-mobile",type:"Type03",url:"http://sap.com"},{start:"2020-09-16T08:30",end:"2020-09-18T17:30",title:"Workshop",text:"Out of office",icon:"sap-icon://sap-ui5",type:"Type07"},{start:"2020-09-18T14:00",end:"2020-09-18T16:30",title:"Discussion with clients",text:"working",icon:"sap-icon://desktop-mobile",url:"http://sap.com"},{start:"2020-09-18T01:00",end:"2020-09-18T02:00",title:"Team meeting",text:"online meeting",icon:"sap-icon://sap-ui5",type:"Type04"},{start:"2020-09-18T04:00",end:"2020-09-18T06:30",title:"Discussion with clients",text:"working",icon:"sap-icon://desktop-mobile",url:"http://sap.com"},{start:"2020-09-18T01:00",end:"2020-09-18T02:00",title:"Team meeting",text:"online meeting",icon:"sap-icon://sap-ui5",type:"Type04"}],specialDate:[{start:"2020-09-13",end:"2020-09-14",type:"Type08"},{start:"2020-09-24",end:"2020-09-24",type:"Type13"}],legendItem:[{category:"calendar",text:"Team building",type:"Type08"},{category:"calendar",text:"Public holiday",type:"Type13"},{category:"appointment",text:"Reminder",type:"Type06"},{category:"appointment",text:"Private appointment",type:"Type07"},{category:"appointment",text:"Out of office",type:"Type03"},{category:"appointment",text:"Collaboration with other team members",type:"Type07"}]}},header:{title:"My calendar",subTitle:"Team Balkan",status:{text:{format:{translationKey:"i18n>CARD.COUNT_X_OF_Y",parts:["parameters>/visibleItems","parameters>/allItems"]}}}},content:{date:"2020-09-18",maxItems:5,maxLegendItems:5,noItemsText:"You have nothing planned for this day",item:{template:{startDate:"{start}",endDate:"{end}",title:"{title}",text:"{text}",icon:{src:"{icon}",visible:true},type:"{type}",actions:[{type:"Navigation",enabled:"{= ${url}}",parameters:{url:"{url}"}}]},path:"/item"},specialDate:{template:{startDate:"{start}",endDate:"{end}",type:"{type}"},path:"/specialDate"},legendItem:{template:{category:"{category}",text:"{text}",type:"{type}"},path:"/legendItem"},moreItems:{actions:[{type:"Navigation",enabled:true,parameters:{url:"http://sap.com"}}]}}}}});
},
	"cards/performance/manifests/extensionFormattersTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{type:"card",id:""},"sap.card":{extension:"./extensions/CustomFormattersExtension",configuration:{parameters:{suffix:{value:"{{parameters.TODAY_ISO}}"}}},data:{json:[{training:"Scrum",location:"Online"},{training:"Quality Management",location:"Classroom Attendance"},{training:"Test Driven Development",location:"Classroom Attendance"},{training:"Integration Cards Training",location:"Online"}]},type:"List",header:{title:"Available Trainings",icon:{src:"sap-icon://activities"}},content:{item:{title:"{= extension.formatters.toUpperCase(${training}) }",description:"{= extension.formatters.appendSuffix(${location}) }"}}}}});
},
	"cards/performance/manifests/extensions/CustomFormattersExtension.js":function(){
sap.ui.define(["sap/ui/integration/Extension"],function(t){"use strict";var e=t.extend("cards.performance.manifests.extensions.CustomFormattersExtension");e.prototype.init=function(){t.prototype.init.apply(this,arguments);this.setFormatters({toUpperCase:function(t){return t.toUpperCase()},appendSuffix:function(t){var e=this.getCard().getCombinedParameters();return t+". Available since: "+e.suffix}.bind(this)})};return e});
},
	"cards/performance/manifests/extensions/FilterExtension.js":function(){
sap.ui.define(["sap/ui/integration/Extension"],function(e){"use strict";var i=e.extend("cards.performance.manifests.extensions.FilterExtension");i.prototype.getData=function(){return Promise.resolve([{OrderID:10248,CustomerID:"VINET",EmployeeID:5,OrderDate:"1996-07-04T00:00:00Z",RequiredDate:"1996-08-01T00:00:00Z",ShippedDate:"1996-07-16T00:00:00Z",ShipVia:3,Freight:32.38,ShipName:"Vins et alcools Chevalier",ShipAddress:"59 rue de l'Abbaye",ShipCity:"Reims",ShipRegion:null,ShipPostalCode:"51100",ShipCountry:"France"},{OrderID:10311,CustomerID:"DUMON",EmployeeID:1,OrderDate:"1996-09-20T00:00:00Z",RequiredDate:"1996-10-04T00:00:00Z",ShippedDate:"1996-09-26T00:00:00Z",ShipVia:3,Freight:24.69,ShipName:"Du monde entier",ShipAddress:"67, rue des Cinquante Otages",ShipCity:"Nantes",ShipRegion:null,ShipPostalCode:"44000",ShipCountry:"France"},{OrderID:10340,CustomerID:"BONAP",EmployeeID:1,OrderDate:"1996-10-29T00:00:00Z",RequiredDate:"1996-11-26T00:00:00Z",ShippedDate:"1996-11-08T00:00:00Z",ShipVia:3,Freight:166.31,ShipName:"Bon app'",ShipAddress:"12, rue des Bouchers",ShipCity:"Marseille",ShipRegion:null,ShipPostalCode:"13008",ShipCountry:"France"}])};return i});
},
	"cards/performance/manifests/extensions/QuickActionsExtension.js":function(){
sap.ui.define(["sap/ui/integration/Extension"],function(e){"use strict";var o={products:[{Id:"HT-1000",Name:"Notebook Basic 15",Description:'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',CurrencyCode:"USD",Price:"956.00"},{Id:"HT-1001",Name:"Notebook Basic 17",Description:'Notebook Basic 17 with 2,80 GHz quad core, 17" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',CurrencyCode:"USD",Price:"1249.00"},{Id:"HT-1002",Name:"Notebook Basic 18",Description:'Notebook Basic 18 with 2,80 GHz quad core, 18" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',CurrencyCode:"USD",Price:"1570.00"},{Id:"HT-1003",Name:"Notebook Basic 19",Description:'Notebook Basic 19 with 2,80 GHz quad core, 19" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',CurrencyCode:"USD",Price:"1650.00"},{Id:"HT-1004",Name:"ITelO Vault",Description:"Digital Organizer with State-of-the-Art Storage Encryption",CurrencyCode:"USD",Price:"299.00"},{Id:"HT-1005",Name:"Notebook Professional 15",Description:'Notebook Professional 15 with 2,80 GHz quad core, 15" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',CurrencyCode:"USD",Price:"1999.00"},{Id:"HT-1006",Name:"Notebook Professional 17",Description:'Notebook Professional 17 with 2,80 GHz quad core, 17" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',CurrencyCode:"USD",Price:"2299.00"}],count:7};return e.extend("cards.performance.manifests.extensions.QuickActionsExtension",{init:function(){e.prototype.init.apply(this,arguments);this.attachAction(this._handleAction.bind(this))},getData:function(){return Promise.resolve(o)},_handleAction:function(e){var o=this.getCard(),i=e.getParameter("parameters");if(i.method==="remove"){this._removeItem(i.id).then(function(){o.refreshData()})}},_removeItem:function(e){return new Promise(function(i,t){var r=o.products.findIndex(function(o){return o.Id===e});if(r!==-1){o.products.splice(r,1);o.count--;i()}else{t()}})}})});
},
	"cards/performance/manifests/filterMultipleTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card",title:"Sample of a Card with filters"},"sap.card":{extension:"./extensions/FilterExtension",configuration:{filters:{shipper:{value:"Federal Shipping",type:"Select",label:"Shipper",items:[{title:"Federal Shipping",key:"1"},{title:"Speedy Express",key:"2"}]},country:{type:"Search",label:"Country",value:"France",placeholder:"Enter a country"}}},data:{extension:{method:"getData"}},type:"List",header:{title:"Orders by shipper 'Federal Shipping'",icon:{src:"sap-icon://product"}},content:{item:{title:"{ShipName}",description:"{ShipAddress}",info:{value:"{ShipCountry}"}},maxItems:"3"}}}});
},
	"cards/performance/manifests/filterSelectTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card"},"sap.card":{data:{json:[{Name:"Notebook Basic 15",Description:'Notebook Basic 15 with 2,80 GHz quad core, 15" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',Id:"HT-1000",SubCategoryId:"Notebooks",icon:"./images/DonnaMoore.png",state:"Information",info:"27.45 EUR",infoState:"Success"},{Name:"Notebook Basic 17",Description:'Notebook Basic 17 with 2,80 GHz quad core, 17" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro',Id:"HT-1001",SubCategoryId:"Notebooks",icon:"./images/DonnaMoore.png",state:"Success",info:"27.45 EUR",infoState:"Success"},{Name:"Notebook Basic 18",Description:'Notebook Basic 18 with 2,80 GHz quad core, 18" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',Id:"HT-1002",SubCategoryId:"Notebooks",icon:"./images/DonnaMoore.png",state:"Warning",info:"9.45 EUR",infoState:"Error"},{Name:"Notebook Basic 19",Description:'Notebook Basic 19 with 2,80 GHz quad core, 19" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro',Id:"HT-1003",SubCategoryId:"Notebooks",icon:"./images/DonnaMoore.png",state:"Error",info:"9.45 EUR",infoState:"Error"},{Name:"ITelO Vault",Description:"Digital Organizer with State-of-the-Art Storage Encryption",Id:"HT-1007",SubCategoryId:"PDAs & Organizers",icon:"./images/DonnaMoore.png",state:"Success",info:"29.45 EUR",infoState:"Success"},{Name:"Notebook Professional 15",Description:'Notebook Professional 15 with 2,80 GHz quad core, 15" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro',Id:"HT-1010",SubCategoryId:"Notebooks",icon:"./images/DonnaMoore.png",state:"Success",info:"29.45 EUR",infoState:"Success"}]},configuration:{filters:{f:{value:1,items:[{key:1,title:"Option 1"},{key:2,title:"Option 2"},{key:3,title:"Option 3"},{key:4,title:"Option 4"}]}}},type:"List",header:{title:"Card with a Filter",icon:{src:"sap-icon://filter"}},content:{maxItems:4,item:{icon:{src:"{icon}"},title:"{Name}",description:"{Description}"}}}}});
},
	"cards/performance/manifests/listBulletChartTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card",title:"Sample of a List with Bullet Chart",subTitle:"Sample of a List with Bullet Chart",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["List","Chart","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://list"}},"sap.card":{type:"List",header:{title:"Actual income from products",icon:{src:"sap-icon://product"},status:{text:"5 of 20"}},content:{data:{json:[{Name:"Comfort Easy",Description:"32 GB Digital Assistant",Highlight:"Success",Expected:3e5,Actual:33e4,Target:28e4,ChartColor:"Good"},{Name:"ITelO Vault",Description:"Digital Organizer",Highlight:"Success",Expected:3e5,Actual:225e3,Target:21e4,ChartColor:"Good"},{Name:"Notebook Professional 15",Description:"Multitouch LCD",Highlight:"Success",Expected:3e5,Actual:15e4,Target:149e3,ChartColor:"Good"},{Name:"Ergo Screen E-I",Description:"Optimum Hi-Resolution max.",Highlight:"Warning",Expected:3e5,Actual:1e5,Target:1e5,ChartColor:"Neutral"},{Name:"Laser Professional Eco",Description:"Powerful 500 MHz processor",Highlight:"Error",Expected:3e5,Actual:6e4,Target:75e3,ChartColor:"Error"}]},maxItems:4,item:{title:"{Name}",description:"{Description}",info:{value:"{= format.currency(${Actual} - ${Target}, 'EUR', {currencyCode:false})} {= ${Actual} - ${Target} >= 0 ? 'Profit' : 'Loss' }",state:"{Highlight}"},chart:{type:"Bullet",minValue:0,maxValue:"{Expected}",target:"{Target}",value:"{Actual}",scale:"€",displayValue:"{= format.currency(${Actual}, 'EUR', {currencyCode:false})}",color:"{ChartColor}"}}}}}});
},
	"cards/performance/manifests/listCardBarChartTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card",title:"Sample of a List with StackedBar Chart",subTitle:"Sample of a List with StackedBar chart",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["List","Chart","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://list"}},"sap.card":{type:"List",header:{title:"Notebooks Distribution",subTitle:"by years",status:{text:"3 of 11"}},content:{data:{json:{legend:{items:{Notebook13:"Notebook 13",Notebook17:"Notebook 17"}},maxOverYears:700,Notebooks:[{Year:2017,Category:"Computer system accessories",Notebook13:200,Notebook17:500},{Year:2018,Category:"Computer system accessories",Notebook13:300,Notebook17:320},{Year:2019,Category:"Computer system accessories",Notebook13:140,Notebook17:255}]},path:"/Notebooks"},maxItems:3,item:{title:"{Year}",description:"{Category}",chart:{type:"StackedBar",displayValue:"{= ${Notebook13} + ${Notebook17}}K",maxValue:"{/maxOverYears}",bars:[{value:"{Notebook13}",displayValue:"{/legend/items/Notebook13}: {Notebook13}K",legendTitle:"{/legend/items/Notebook13}"},{value:"{Notebook17}",displayValue:"{/legend/items/Notebook17}: {Notebook17}K",legendTitle:"{/legend/items/Notebook17}"}]}}}}}});
},
	"cards/performance/manifests/listCardQuickActionsTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{type:"card",id:""},"sap.card":{extension:"./extensions/QuickActionsExtension",type:"List",data:{extension:{method:"getData"}},header:{title:"List Card with Products",subTitle:"The Top Sellers This Month",status:{text:{format:{translationKey:"i18n>CARD.COUNT_X_OF_Y",parts:["parameters>/visibleItems","/count"]}}},icon:{src:"sap-icon://desktop-mobile"}},content:{data:{path:"/products"},item:{title:"{Name}",description:"{Description}",info:{value:"{= format.currency(${Price}, ${CurrencyCode})}"},actionsStrip:[{text:"Add to Favorites",actions:[{type:"Custom",parameters:{method:"addToFavorites",id:"{Id}"}}]},{buttonType:"Transparent",text:"Remove",actions:[{type:"Custom",parameters:{method:"remove",id:"{Id}"}}]}]},maxItems:3}}}});
},
	"cards/performance/manifests/objectCardAdditionalDetailsTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card",title:"Sample of an Object Card",subTitle:"Sample of an Object Card",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Object","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://switch-classes"}},"sap.card":{type:"Object",header:{icon:{src:"sap-icon://building",shape:"Square"},title:"ACME Consulting",subTitle:"Overdue Billing"},content:{data:{json:{contacts:[{name:"Alain Chevalier",photo:"./images/AlainChevalier.png"},{name:"Donna Moore",photo:"./images/DonnaMoore.png"}]}},groups:[{alignment:"Stretch",items:[{value:"Overdue by 20 days",type:"Status",state:"Error",showStateIcon:true},{value:"USD 10,000.00 was to be billed on 23rd August, 2021."}]},{items:[{label:"Billing Element",value:"RN47565.0.1"},{label:"Customer",value:"Domestic US Customer 1"}]},{items:[{label:"Project",value:"RN4765"},{label:"Contacts",type:"IconGroup",path:"contacts",template:{icon:{src:"{photo}",initials:"{= format.initials(${name})}"},actions:[{type:"Navigation",parameters:{url:"/contacts-service?name={= encodeURIComponent(${name}) }"}}]}}]}]},footer:{actionsStrip:[{text:"Pay Bill",buttonType:"Accept"},{text:"Block Payment",buttonType:"Reject"}]}}}});
},
	"cards/performance/manifests/objectCardInputsTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{"sap.app":{id:"",type:"card",title:"Sample of an Object Card",subTitle:"Sample of an Object Card",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Object","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://switch-classes"}},"sap.card":{type:"Object",configuration:{actionHandlers:{submit:{url:"./MOCK.json",method:"GET",parameters:{status:"approved",reason:"{form>/reason/key}",reasonText:"{form>/reason/value}",comment:"{form>/comment}"}}}},data:{json:{reasons:[{id:"reason1",title:"Reason 1"},{id:"reason2",title:"Reason 2"}]}},header:{icon:{initials:"JN"},title:"Julia Neil",subTitle:"Purchase Requisition"},content:{groups:[{alignment:"Stretch",items:[{value:"15,000.00 EUR",type:"Status",state:"Information",showStateIcon:true},{value:"For Ultra Jet Super Highspeed"}]},{alignment:"Stretch",items:[{value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus ex nunc. Nunc quis mattis augue. Phasellus eu mollis ligula, eleifend hendrerit neque. "}]},{alignment:"Stretch",items:[{id:"reason",label:"Reason",type:"ComboBox",placeholder:"Select",item:{path:"/reasons",template:{key:"{id}",title:"{title}"}},validations:[{required:true},{restrictToPredefinedOptions:true,message:"Only listed values are allowed"}]},{id:"comment",label:"Comment",type:"TextArea",rows:4,placeholder:"Comment",validations:[{required:true},{minLength:10,maxLength:200,message:"Your comment should be between 10 and 200 characters.",type:"Warning"}]},{id:"e-mail",label:"E-mail",type:"TextArea",rows:1,placeholder:"e-mail",validations:[{required:true},{pattern:"^\\w+[\\w-+\\.]*\\@\\w+([-\\.]\\w+)*\\.[a-zA-Z]{2,}+$",message:"You should enter a valid e-mail."}]}]}]},footer:{actionsStrip:[{text:"Submit",buttonType:"Accept",actions:[{enabled:"{= !${messages>/hasErrors}}",type:"Submit"}]}]}}}});
},
	"cards/performance/manifests/objectCardSimpleTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.15.0","sap.app":{id:"",type:"card",title:"Sample of an Object Card",subTitle:"Sample of an Object Card",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Object","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://switch-classes"}},"sap.card":{type:"Object",data:{json:{firstName:"Donna",lastName:"Moore",position:"Sales Executive",phone:"+1 202 555 5555",email:"my@mymail.com",phoneTooltip:"Make a call",emailTooltip:"Write an e-mail",agendaTooltip:"Open a calendar",photo:"./images/DonnaMoore.png",agendaUrl:"/agenda",manager:{firstName:"Alain",lastName:"Chevalier",photo:"./images/AlainChevalier.png"},company:{name:"Robert Brown Entertainment",address:"481 West Street, Anytown OH 45066, USA",email:"mail@mycompany.com",emailTooltip:"Write an e-mail",websiteTooltip:"Visit website",emailSubject:"Subject",website:"www.company_a.example.com",url:"https://www.company_a.example.com"}}},header:{icon:{src:"{photo}"},title:"{firstName} {lastName}",subTitle:"{position}"},content:{groups:[{title:"Contact Details",items:[{label:"Name",value:"{firstName} {lastName}"},{label:"Phone",value:"{phone}",tooltip:"{phoneTooltip}",actions:[{type:"Navigation",parameters:{url:"tel:{phone}"}}]}]},{title:"Company Details",items:[{label:"Company Name",value:"{company/name}"},{label:"Email",value:"{company/email}",tooltip:"{company/emailTooltip}",actions:[{type:"Navigation",parameters:{url:"mailto:{company/email}?subject={company/emailSubject}"}}]}]},{title:"Organizational Details",items:[{label:"Direct Manager",value:"{manager/firstName} {manager/lastName}",icon:{src:"{manager/photo}"}}]}]}}}});
},
	"cards/performance/manifests/tableTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.15.0","sap.app":{id:"",type:"card",title:"Sample of a Table Card",subTitle:"Sample of a Table Card",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Table","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://table-view"}},"sap.card":{type:"Table",data:{json:[{salesOrder:"5000010050",customerName:"Robert Brown Entertainment",netAmount:"2K USD",status:"Delivered",statusState:"Success",deliveryProgress:100},{salesOrder:"5000010051",customerName:"Entertainment Argentinia",netAmount:"127k USD",status:"Canceled",statusState:"Error",deliveryProgress:0},{salesOrder:"5000010052",customerName:"Brazil Technologies",netAmount:"8K USD",status:"In Progress",statusState:"Warning",deliveryProgress:33},{salesOrder:"5000010053",customerName:"Quimica Madrilenos",netAmount:"25K USD",status:"Delivered",statusState:"Success",deliveryProgress:100}]},header:{title:"Sales Orders for Key Accounts",subTitle:"Today"},content:{maxItems:4,row:{columns:[{title:"Sales Order",value:"{salesOrder}",identifier:true},{title:"Customer",value:"{customerName}"},{title:"Net Amount",value:"{netAmount}",hAlign:"End"},{title:"Status",value:"{status}",state:"{statusState}"},{title:"Delivery Progress",progressIndicator:{percent:"{deliveryProgress}",text:"{= format.percent(${deliveryProgress} / 100)}",state:"{statusState}"}}]}}}}});
},
	"cards/performance/manifests/timelineTemplate.js":function(){
sap.ui.define([],function(){"use strict";return{_version:"1.15.0","sap.app":{id:"",type:"card",title:"Sample of a Activities Timeline",subTitle:"Sample of a Activities Timeline",applicationVersion:{version:"1.0.0"},shortTitle:"A short title for this Card",info:"Additional information about this Card",description:"A long description for this Card",tags:{keywords:["Timeline","Card","Sample"]}},"sap.ui":{technology:"UI5",icons:{icon:"sap-icon://activity-items"}},"sap.card":{type:"Timeline",header:{title:"Past Activities",subTitle:"For October"},content:{maxItems:3,data:{json:[{Title:"Weekly sync: Marketplace / Design Stream",Description:"MRR WDF18 C3.2(GLASSBOX)",Icon:"sap-icon://appointment-2",Time:"2021-10-25T10:00:00.000Z",Url:"/activity1"},{Title:"Video Conference for FLP@SF, S4,Hybris",Icon:"sap-icon://my-view",Time:"2021-10-25T14:00:00.000Z",Url:"/activity2"},{Title:"Call 'Project Nimbus'",Icon:"sap-icon://outgoing-call",Time:"2021-10-25T16:00:00.000Z",Url:"/activity3"}]},item:{dateTime:{value:"{Time}"},description:{value:"{Description}"},title:{value:"{Title}"},icon:{src:"{Icon}"},actions:[{type:"Navigation",parameters:{url:"{Url}"}}]}}}}});
},
	"cards/performance/view/Main.view.xml":'<mvc:View\n\tcontrollerName="cards.performance.controller.Main"\n\txmlns ="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:f="sap.f"\n\tdisplayBlock="true"><App><ScrollContainer height="100%" vertical="true"><f:GridContainer id="cardsContainer" class="sapUiSmallMargin" snapToRow="true"></f:GridContainer></ScrollContainer></App></mvc:View>'
});