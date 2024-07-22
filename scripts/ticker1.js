/*
  This script is part of dimX, the Web-CMS from adera (http://adera.de)
  dimX was developed by Wolfgang Modrow
  @author Wolfgang Modrow
  @copyright Wolfgang Modrow
*/
var sizeup=[]var tickerElems=[]var currentStops=[]var topPos=[]function initTickers(){if(document.getElementById&&sspeed.length>0){for(var a in sspeed){var b=document.getElementById("tickerDiv_"+a);if(b){sizeup[a]=b.offsetHeight;topPos[a]=parseInt(b.style.top);tickerElems[a]=b;b.style.visibility="visible"}}tickerScroll()}}function tickerScroll(){for(var b in tickerElems){if(!isNaN(b)){var c=tickerElems[b];if(currentStops[b]&&(currentStops[b]<0||--currentStops[b]>0)){continue}var d=topPos[b];newpos=sheight[b];if(tick_direction[b]==0){if(topPos[b]>=sizeup[b]*(-1)){newpos=d-sspeed[b];for(var a=0;a<stops[b].length;a++){if(stops[b][a]>(sheight[b]-d)&&stops[b][a]<=(sheight[b]-newpos)){currentStops[b]=stops2[b][a];newpos=sheight[b]-stops[b][a];break}}}}else{newpos=sizeup[b]*-1;if(topPos[b]<=sheight[b]){newpos=d+sspeed[b];for(var a=0;a<stops[b].length;a++){if(stops[b][a]<(sheight[b]-d)&&stops[b][a]>=(sheight[b]-newpos)){currentStops[b]=stops2[b][a];newpos=sheight[b]-stops[b][a];break}}}}c.style.top=newpos+"px";topPos[b]=newpos}}setTimeout("tickerScroll()",100)};
