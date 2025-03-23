import{h as t,i as e,k as a}from"./af8ca8e3.js";import"./265704a6.js";class o{constructor(){this.resizeTimer=null,this.layouts={1:{columnLayout:"1: full width",xs:["100%"],sm:["100%"],md:["100%"],lg:["100%"],xl:["100%"]},"1-1":{columnLayout:"2: equal width",xs:["100%","100%"],sm:["50%","50%"],md:["50%","50%"],lg:["50%","50%"],xl:["50%","50%"]},"2-1":{columnLayout:"2: wide & narrow",xs:["100%","100%"],sm:["50%","50%"],md:["66.6666667%","33.3333337%"],lg:["66.6666667%","33.3333337%"],xl:["66.6666667%","33.3333337%"]},"1-2":{columnLayout:"2: narrow & wide",xs:["100%","100%"],sm:["50%","50%"],md:["33.3333333%","66.6666667%"],lg:["33.3333333%","66.6666667%"],xl:["33.3333333%","66.6666667%"]},"3-1":{columnLayout:"2: wider & narrower",xs:["100%","100%"],sm:["50%","50%"],md:["75%","25%"],lg:["75%","25%"],xl:["75%","25%"]},"1-3":{columnLayout:"2: narrower & wider",xs:["100%","100%"],sm:["50%","50%"],md:["25%","75%"],lg:["25%","75%"],xl:["25%","75%"]},"1-1-1":{columnLayout:"3: equal width",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["33.3333333%","33.3333333%","33.3333333%"],lg:["33.3333333%","33.3333333%","33.3333333%"],xl:["33.3333333%","33.3333333%","33.3333333%"]},"2-1-1":{columnLayout:"3: wide, narrow, and narrow",xs:["100%","100%","100%"],sm:["100%","50%","50%"],md:["50%","25%","25%"],lg:["50%","25%","25%"],xl:["50%","25%","25%"]},"1-2-1":{columnLayout:"3: narrow, wide, and narrow",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["25%","50%","25%"],lg:["25%","50%","25%"],xl:["25%","50%","25%"]},"1-1-2":{columnLayout:"3: narrow, narrow, and wide",xs:["100%","100%","100%"],sm:["50%","50%","100%"],md:["25%","25%","50%"],lg:["25%","25%","50%"],xl:["25%","25%","50%"]},"1-1-1-1":{columnLayout:"4: equal width",xs:["100%","100%","100%","100%"],sm:["50%","50%","50%","50%"],md:["25%","25%","25%","25%"],lg:["25%","25%","25%","25%"],xl:["25%","25%","25%","25%"]}},this.options={};let t=Object.keys(this.layouts);for(let e=0;e<t.length;e++)this.options[t[e]]=this.layouts[t[e]].columnLayout}}class i extends t{static get styles(){return[e`:host{display:block;--hax-layout-container-outline-width:1px;--hax-layout-container-hover-outline-width:1px}:host .row{width:100%;overflow-wrap:break-word;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:stretch;margin:var(--grid-plate-row-margin,0);padding:var(--grid-plate-row-padding,0)}:host([disable-responsive]) .column{overflow:hidden}:host .column{width:100%;flex:0 0 auto;min-height:50px}:host([layout="1-1"]) #col1{width:50%}:host([layout="1-1-1"]) #col1{width:33.33%}:host([layout="1-1-1-1"]) #col1{width:25%}:host([layout="1-1-1-1-1"]) #col1{width:20%}:host([layout="1-1-1-1-1-1"]) #col1{width:16.66%}.column.not-shown{min-height:unset}:host([data-hax-ray]) .column ::slotted([contenteditable][data-hax-ray]:empty)::before{content:attr(data-hax-ray);opacity:.2;transition:.2s opacity ease-in-out;margin:0}:host .column ::slotted(*){margin:var(--grid-plate-item-margin,16px);padding:var(--grid-plate-item-padding,16px);max-width:calc(100% - 60px);max-width:-webkit-fill-available}:host([data-hax-ray]) .column ::slotted(*){margin:var(--grid-plate-item-margin,16px);padding:var(--grid-plate-item-padding,16px)}:host([ready][data-hax-ray]) [data-layout-slotname]{transition:var(--hax-layout-container-transition,.5s width ease-in-out,.5s padding ease-in-out,.5s margin ease-in-out)}:host([data-hax-ray]) div ::slotted(*){border:var(---hax-body-editable-outline,1px solid var(--hax-ui-disabled-color,#ddd))}:host([data-hax-ray]) div ::slotted(:hover){border:var(--hax-body-active-outline-hover,1px solid var(--hax-ui-color-faded,#444))}:host([data-hax-ray]) div ::slotted([data-hax-active]){border:var(--hax-body-active-outline,1px solid var(--hax-ui-color-focus,#000))}:host([data-hax-ray]) div ::slotted([data-hax-active]:hover){border:var(--hax-body-active-drag-outline,1px solid var(--hax-ui-color-accent,#009dc7))}:host([data-hax-ray]) [data-layout-slotname]{outline:var(---hax-body-editable-outline,1px solid var(--hax-ui-disabled-color,#ddd));outline-style:dotted;outline-offset:var(--hax-layout-container-outline-offset,0)}:host([data-hax-ray]) [data-layout-slotname]:hover{outline-style:solid}:host([data-hax-ray].hax-hovered) [data-layout-slotname].active{outline:var(--hax-body-active-drag-outline,1px solid var(--hax-ui-color-accent,#009dc7));outline-width:2px}:host([data-hax-ray]) div ::slotted(.active):before,:host([data-hax-ray]) div ::slotted(img.active){background-color:var(--hax-layout-slotted-active-outline-color,var(--hax-layout-accent-color,#009dc7))!important;outline:var(--hax-body-active-outline,1px solid var(--hax-ui-color-focus,#000));outline-style:dotted}:host([data-hax-ray]) .column ::slotted(.hax-hovered)::before{content:" ";width:calc(100% + 32px);display:block;position:relative;margin:-28px -16px 12px;z-index:2;height:12px;border:none!important;transition:.3s all ease-in-out;background-color:var(--hax-body-target-background-color)!important}:host([data-hax-ray]) .column ::slotted(img.hax-hovered){outline:var(---hax-body-editable-outline,1px solid var(--hax-ui-disabled-color,#ddd));border-top:8px var(--hax-contextual-action-hover-color,var(--hax-ui-color-accent));margin-top:-8px}@media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0){:host([data-hax-ray]) div ::slotted(.active){background-color:var(--hax-layout-slotted-active-outline-color,var(--hax-layout-accent-color,#009dc7))!important;outline:var(--hax-layout-slotted-active-outline-width,1px) var(--hax-layout-slotted-active-outline-style,solid) var(--hax-layout-slotted-active-outline-color,var(--hax-layout-accent-color,#009dc7))}:host .column ::slotted(*){outline:var(--hax-body-editable-outline);background-color:var(--hax-body-possible-target-background-color)}:host .column ::slotted(.hax-hovered){background-color:var(--hax-body-target-background-color)!important;outline:var(--hax-body-active-outline)}}`]}constructor(){super(),this.itemMargin=null,this.itemPadding=null,this.ready=!1,this.breakpointSm=900,this.breakpointMd=1200,this.breakpointLg=1500,this.breakpointXl=1800,this.columns=4,this.disableResponsive=!1,this.layout="1-1",this.layouts=(new o).layouts,this.responsiveSize="xs",globalThis.ResponsiveUtility.requestAvailability()}render(){return a` <div class="row"> ${[1,2,3,4,5,6].map((t=>a` <div class="column ${this.columns<t?"not-shown":"drag-enabled"}" id="col${t}" data-label="column ${t}" data-layout-slotname="col-${t}" part="layout-container" .style="${this._getColumnWidth(t-1,this.__columnWidths)}" @drop="${this._drop}" @dragenter="${this._dragEnter}" @dragleave="${this._dragleave}"> <slot name="col-${t}"></slot> </div> `))} </div> `}_drop(t){this.dataHaxRay&&(this.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})),this.shadowRoot.querySelectorAll(".active").forEach((t=>{t.classList.remove("active")})))}_dragEnter(t){this.dataHaxRay&&t.target.classList.add("active")}_dragleave(t){this.dataHaxRay&&t.target.classList.remove("active")}static get tag(){return"grid-plate"}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),setTimeout((()=>{this.ready=!0}),100),this.resize(),globalThis.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"responsive-size",relativeToParent:!1,sm:this.breakpointSm,md:this.breakpointMd,lg:this.breakpointLg,xl:this.breakpointXl}})),this.__columnWidths=this._getColumnWidths(this.responsiveSize,this.layout,this.layouts,this.disableResponsive)}static get haxProperties(){return{type:"grid",canScale:!0,designSystem:{card:!0,accent:!0,primary:!0},canEditSource:!0,contentEditable:!1,gizmo:{title:"Column layout",description:"Layout material in simple columns",icon:"hax:3-3-3-3",color:"grey",tags:["Layout","content","grid"],handles:[],meta:{author:"HAXTheWeb core team",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"layout",title:"Column Layout",description:"Style to present these items (may change for small screens)",inputMethod:"select",options:(new o).options},{property:"disableResponsive",title:"Disable responsive",description:"Check box to force layout to stick regardless of screen size",inputMethod:"boolean"},{property:"itemPadding",title:"Item Padding",description:"Padding inside each item",step:4,max:120,min:0,inputMethod:"slider",suffix:"px"},{property:"itemMargin",title:"Item margins",description:"Margin between items",step:4,max:120,min:0,inputMethod:"slider",suffix:"px"}],advanced:[],developer:[]},saveOptions:{unsetAttributes:["ready","layouts","columns","options","responsive-width","responsive-size","breakpoint-sm","breakpoint-md","breakpoint-lg","breakpoint-xl"]},demoSchema:[{tag:"grid-plate",properties:{itemMargin:16,itemPadding:16},content:'<p slot="col-1">Column one content to replace</p><p slot="col-2">Column two content to replace</p>'}]}}static get properties(){return{itemPadding:{type:Number,reflect:!0,attribute:"item-padding"},itemMargin:{type:Number,reflect:!0,attribute:"item-margin"},breakpointSm:{type:Number,attribute:"breakpoint-sm"},breakpointMd:{type:Number,attribute:"breakpoint-md"},breakpointLg:{type:Number,attribute:"breakpoint-lg"},breakpointXl:{type:Number,attribute:"breakpoint-xl"},columns:{type:Number,reflect:!0},dataHaxRay:{type:String,attribute:"data-hax-ray",reflect:!0},disableResponsive:{type:Boolean,reflect:!0,attribute:"disable-responsive"},layout:{type:String,reflect:!0},layouts:{type:Object},ready:{type:Boolean,reflect:!0},responsiveSize:{type:String,reflect:!0,attribute:"responsive-size"},__columnWidths:{type:String}}}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{switch(["responsiveSize","layout","layouts","disableResponsive","itemPadding","itemMargin"].includes(e)&&(clearTimeout(this.__calcWidthLock),this.__calcWidthLock=setTimeout((()=>{this.__columnWidths=this._getColumnWidths(this.responsiveSize,this.layout,this.layouts,this.disableResponsive)}),0)),e){case"itemMargin":this[e]&&16!==this[e]?this.style.setProperty("--grid-plate-item-margin",this[e]+"px"):this.style.removeProperty("--grid-plate-item-margin");break;case"itemPadding":this[e]&&16!==this[e]?this.style.setProperty("--grid-plate-item-padding",this[e]+"px"):this.style.removeProperty("--grid-plate-item-padding");break;case"__columnWidths":this.resize();break;case"disableResponsive":this.dispatchEvent(new CustomEvent("disable-responsive-changed",{detail:this[e]}))}}))}resize(){globalThis.dispatchEvent(new Event("resize"))}_getColumnWidths(t="sm",e="1-1",a,o){if(a){let i=a[e],r=!1!==o?"xl":t,s={12:"1","8/4":"2-1","6/6":"1-1","4/8":"1-2","4/4/4":"1-1-1","3/3/3/3":"1-1-1-1"}[e];if(void 0!==i&&void 0!==i[r])return a[e][r];if(void 0!==a[s]&&void 0!==a[s][r])return a[s][r];if(void 0!==a["1-1"])return a["1-1"][r]}}_getColumnWidth(t,e){return void 0!==e&&void 0!==e[t]?"width:"+e[t]:"min-height: unset"}_getColumns(t){return t.length}haxactiveElementChanged(t,e){}}customElements.define(i.tag,i);export{i as GridPlate};
