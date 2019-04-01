"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class CircularList{constructor(){this.elements=new Array,this.currentIndex=0}size(){return this.elements.length}clear(){this.elements=new Array,this.currentIndex=0}currentElement(){return this.elements.length>0?this.elements[this.currentIndex]:null}indexOf(e){return this.elements.indexOf(e)}add(e){this.elements.push(e)}remove(e){e<this.elements.length&&this.elements.splice(e,1)}getElement(e){return e<this.elements.length?this.elements[e]:null}has(e){return this.elements.includes(e)}next(){return this.elements.length>0?(this.currentIndex=this.currentIndex+1<this.elements.length?this.currentIndex+1:0,this.elements[this.currentIndex]):null}prev(){return this.elements.length>0?(this.currentIndex=this.currentIndex-1>0?this.currentIndex-1:this.elements.length-1,this.elements[this.currentIndex]):null}getCurrentIndex(){return this.currentIndex}setCurrentIndex(e){e>=0&&e<this.elements.length&&(this.currentIndex=e)}}exports.default=CircularList;