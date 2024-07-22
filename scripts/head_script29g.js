/*
  This script is part of dimX, the Web-CMS from adera (http://adera.de)
  dimX was developed by Wolfgang Modrow
  @author Wolfgang Modrow
  @copyright Wolfgang Modrow
*/
function checkGbForm(){var b=document.gb_form;if(!b){return false}var a="";if(b.gb_name.value==""){a+=gbErr1}if(b.gb_email.value!=""&&!checkEmail(b.gb_email.value)){a+=gbErr3}if(b.gb_text.value==""){a+=gbErr4}if(b.gb_code.value==""||b.gb_code.value.length!=4){a+=gbErr5}if(a!=""){alert(a);return false}return true}function checkEmail(b){var a=new RegExp("^([a-zA-Z0-9\\-\\.\\_]+)(\\@)([������a-zA-Z0-9\\-\\.]+)(\\.)([a-zA-Z]{2,4})$");return a.test(b)}function dimx_checkFormFileTypes(l){if(!l||!dimx_fileFields){return false}var c=false;var m=false;for(var e in dimx_fileFields){var b=l.elements[e];if(b&&b.value!=""){found=false;var a=b.value.lastIndexOf(".");if(a>0){var o=b.value.substring(a+1).toLowerCase();var g=dimx_fileFields[e].split("|");for(var d=0;d<g.length;d++){if(g[d]==o){found=true;break}}}if(!found){c=true}if(b.parentNode){b.parentNode.style.border=found?"0px solid black":"1px solid red"}}}for(var e in dimx_codeFields){var b=l.elements[e];if(b){var k=0;for(var d=0;d<b.value.length;d++){k+=b.value.charCodeAt(d)}m=k!=dimx_codeFields[e];if(m&&b.parentNode){b.parentNode.style.border="1px solid red"}}}if(c||m){var n=c?dimx_fileTypeErrorString:"";n=n?n+"\n\n":n;n+=m?dimx_codeErrorString:"";alert(n);return false}return true}var w,h;var currentImg=-1;function showImg(j){var a=document.images.album_img;a.src="gfx/clearpixel.gif";a.width=1;a.height=1;w=album_imgs[j][1];h=album_imgs[j][2];var f=album_imgs[j][6];var e=f?f:"Detail";currentImg=j;var g="<html><head><title>"+e+"<"+pageMediaDir+"/"+album_imgs[j][0]+"title></head><body><img src='/' border=0 title='"+f+"'></body></html>";a.onclick=album_imgs[j][3]?function(){win=window.open("","_blank","menubar=yes,scrollbars=yes,resizable=yes,width="+(album_imgs[j][4]+40)+",height="+(album_imgs[j][5]+50));win.document.write(g);win.document.close()}:"";a.style.cursor=album_imgs[j][3]?"pointer":"default";var c=document.getElementById("album_headRow");var d=Math.round(album_imgs[j][1]/album_imgs[j][4]*100);if(c){var b=album_imgs[j][3]?albumStr1+d+"%)<br>":"";if(f){b="<b>"+f+"</b><br>"+b}c.innerHTML=b+"<br>"}a.onload=function(){var k=document.images.album_img;k.width=w;k.height=h;k.title=f};a.src=pageMediaDir+"/"+album_imgs[j][0]}function showNextImg(){currentImg=currentImg==album_imgs.length-1?0:currentImg+1;showImg(currentImg)}function showPrevImg(){currentImg=currentImg==0?album_imgs.length-1:currentImg-1;showImg(currentImg)}var curr=false;var currId=0;var fsize=0;var targetSize=subFontSize;var dx_vis=[]var hideAll=false;var showTimer=null;var hideTimer=null;var dx_unBlockTimer=null;var dx_blockedId=0;function showSubFor(a){if(showTimer){window.clearTimeout(showTimer)}if(hideTimer){window.clearTimeout(hideTimer)}if(currId==a){return}showTimer=window.setTimeout("showSubFor_now("+a+")",menuDelay)}function showSubFor_now(e){if(showTimer){window.clearTimeout(showTimer)}hideAll=false;if(currId==e){if(hideTimer){window.clearTimeout(hideTimer)}return}var d=document.getElementById("sub_"+e);if(!d){hideSubsBeyond(0);dx_vis=[]dx_blockedId=0;return}fsize=targetSize;anim();var b=0,a=0,g;if(!mPath[e]){hideSubsBeyond(0);aId="area_"+e;var c=document.getElementById(aId);g=new Array(10,20,12,22);if(c.coords){g=c.coords.split(",");cont=document.getElementById("menubar");var f=getOffsetPos(cont)}else{var f=getOffsetPos(c)}b=f[0]+parseInt(g[0]);a=f[1]+parseInt(g[1]);if(subMode=="top"){a+=(parseInt(g[3]-parseInt(g[1])-5));b+=borderL}else{b+=(parseInt(g[2])-margLeft);a+=-1}}else{var j=document.getElementById("td_"+e);var f=getOffsetPos(j);b=f[0]+j.offsetWidth;a=f[1]}d.style.top=(a+4)+"px";d.style.left=(b-2)+"px";fsize=0;curr=d;currId=e;dx_vis[dx_vis.length]=d;anim()}function getOffsetPos(c){var b=0,a=0;while(c){b+=c.offsetLeft?c.offsetLeft:0;a+=c.offsetTop?c.offsetTop:0;c=c.offsetParent}return new Array(b,a)}function hideSubsBeyond(c){if(showTimer){window.clearTimeout(showTimer)}if(hideTimer){window.clearTimeout(hideTimer)}hideAll=false;fsize=targetSize;anim();curr=false;currId=0;for(var a=dx_vis.length-1;a>=0;a--){var b=dx_vis[a];if(b.id=="sub_"+c){return}dx_vis.pop();b.style.left="-9000px";b.style.top="-1000px"}}function checkHideAll(){if(hideAll){hideSubsBeyond(0);currId=0;curr=false;dx_vis=[];dx_blockedId=0}}function prepHideAll(){if(showTimer){window.clearTimeout(showTimer)}hideAll=true;hideTimer=window.setTimeout("checkHideAll()",dx_subHideTime)}function anim(){if(!dx_useSubAnim){return}if(curr&&fsize<=targetSize){for(var a=0;a<mCont[currId].length;a++){document.getElementById("td_"+mCont[currId][a]).style.fontSize=fsize+"px"}fsize+=targetSize/2;if(fsize<=targetSize){window.setTimeout("anim()",50)}}}var dx_subHideTime=500;var dx_subCls=new Array("n","hi","ho","n2","hi2","ho2");function dx_sout(b,a){b.className="sub_"+dx_subCls[a];prepHideAll()}function dx_sov(c,a,b,d){hideSubsBeyond(b);if(a>-1){c.className="sub_"+dx_subCls[a]}if(d){showSubFor_now(d)}}function dx_ststart(c,a,b,d){dx_tstart(d,1);if(d>0){dx_sov(c,a,b,d)}}function dx_stend(b,a){dx_unBlockTimer=window.setTimeout("dx_unblock()",50);dx_sout(b,a)}function dx_sclk(a){if(dx_blockedId==0){if(isNaN(a)){location.href=a+sessionString1}else{location.href="/index.php?id="+a+sessionString1}}}function dx_clk(a){dx_sclk(a);return dx_blockedId==0}function dx_tstart(a,d){dx_subHideTime=dx_hideSubTimeTouch;if(dx_unBlockTimer){window.clearTimeout(dx_unBlockTimer)}dx_blockedId=0;var e=false;if(a>0){for(var b=0;b<dx_vis.length;b++){var c=dx_vis[b];if(c.id=="sub_"+a){e=true;break}}}if(!e&&a>0){dx_blockedId=a}}function dx_tend(){dx_unBlockTimer=window.setTimeout("dx_unblock()",100);prepHideAll()}function dx_unblock(){dx_blockedId=0}function dx_sout3(d,a,b,c){d.className="nav3_sub"+b+"_"+dx_subCls[a]+c;prepHideAll()}function dx_sov3(e,a,c,f,b,d){hideSubsBeyond(c);if(a>-1){e.className="nav3_sub"+b+"_"+dx_subCls[a]+d}if(f){showSubFor3(f)}}function dx_ststart3(e,a,c,f,b,d){dx_tstart(f,1);if(f>0){dx_sov3(e,a,c,f,b,d)}}function dx_stend3(d,a,b,c){dx_unBlockTimer=window.setTimeout("dx_unblock()",50);dx_sout3(d,a,b,c)}function showSubFor3(m){if(showTimer){window.clearTimeout(showTimer)}hideAll=false;if(currId==m){if(hideTimer){window.clearTimeout(hideTimer)}return}var b=document.getElementById("sub_"+m);if(!b){hideSubsBeyond(0);dx_vis=[]dx_blockedId=0;return}var g=0,f=0,l;if(!mPath[m]){hideSubsBeyond(0);aId="area_"+m;var d=document.getElementById(aId);var c=getOffsetPos(d);g=c[0];f=c[1]+d.offsetHeight}else{var k=mPath[m][mPath[m].length-1];var e=document.getElementById("sub_"+k);var j=document.getElementById("td_"+m);var c=getOffsetPos(j);var a=getOffsetPos(e);g=a[0]+e.offsetWidth;f=c[1]}b.style.top=(f+0)+"px";b.style.left=(g-0)+"px";curr=b;currId=m;dx_vis[dx_vis.length]=b}function dimx_switchBlock(a){var c=document.getElementsByTagName("tr");for(var b=0;b<c.length;b++){if(c[b].id&&c[b].id.indexOf("blk_")==0&&c[b].id.indexOf(a)!=-1){var d=document.all?"block":"table-row";c[b].style.display=c[b].style.display=="none"?d:"none";break}}}function dimx_switchBlock2(a,e){var d=document.getElementsByTagName("tr");for(var c=0;c<d.length;c++){if(d[c].id&&d[c].id.indexOf("blk_"+a+"_")==0){var j=document.all?"block":"table-row";d[c].style.display=d[c].style.display=="none"?j:"none";if(e==1){var f=d[c].style.display=="none"?"absatzlink_dimx":"absatzlink2_dimx";var b=document.getElementById("blk_headl_"+a);if(b){b.className=f}}else{if(e&&isNaN(e)&&e.indexOf(",")!=-1){var b=document.getElementById("blk_hlSymb_"+a);e=e.split(",");var g=d[c].style.display=="none"?0:1;if(b){b.innerHTML=e[g]}}}break}}}function dimx_showAndHide(e,c){var k=dimx_isMbl?"div":"tr";var g=(dimx_isMbl||document.all)?"block":"table-row";c=","+c+",";var b=document.getElementsByTagName(k);var f="";for(var d=0;d<b.length;d++){if(!b[d].id){continue}var a=new RegExp("blk_[0-9]+_"+e);if(b[d].id.search(a)==0){if(e!=""){b[d].style.display=g}}else{a=""+/blk_[0-9]+_/.exec(b[d].id);if(a&&a!="null"&&b[d].id.length>a.length){var j=b[d].id.substr(a.length);if(c.indexOf(j)>-1){b[d].style.display="none"}}}}}function dimx_switchDisplay(a){var b=document.getElementById(a);if(b&&b.style){b.style.display=b.style.display=="none"?"block":"none"}}function arrangeTitle(){return}function verschicken(){email()}function toBlock(b){var a=document.getElementById("blk_"+b);if(a){a.scrollIntoView()}else{window.scrollTo(0,0)}}function dimx_hideRedirLink(){var b=document.getElementById("dimx_redirLinkTable");if(b){b.style.display="none";var a=new Image();a.src="/cmd.php?cmd=hrl"+sessionString}}function nav2_go(a){if(isNaN(a)){location.href=a+sessionString1}else{location.href="index.php?id="+a+sessionString1}}function nav2_cls(d,e,a,c){var b=e?"nav2_h":"nav2_n";b=a?b+"2":b;d.className=b;if(a){d.style.paddingLeft=c}}function writeTx(a){document.write(a)}function dimx_setImgSrc(a,b){a.src=b}function dimx_popup(c,a,d){var b=window.open(c,a,d);b.focus()}var dimx_exNavPar=[];function dimx_extraNav2(k,j,f,e,c){var l=document.getElementById("blk_"+k+"_"+j);if(l){ex_els=l.getElementsByTagName("A");var d=location.protocol+"//"+location.host+location.pathname;var b=location.protocol+"//"+location.host;for(i=0;i<ex_els.length;i++){var m=false;var g="";var a="xnav_link_dimx";if(ex_els[i].href){if(ex_els[i].href.indexOf(d)==0&&location.pathname!="/"){ex_els[i].className="xnav_aktiv_dimx";if(c){ex_els[i].style.color=c}}else{if(ex_els[i].href.indexOf(b)==0){ex_els[i].className="xnav_link_dimx";m=true;if(f){ex_els[i].style.color=f;g=f}}}if(m){if(!ex_els[i].id){ex_els[i].id="dimx_xnav_lnk"+i}dimx_exNavPar[ex_els[i].id]=[ex_els[i],e,g,a];ex_els[i].onmouseover=dimx_extraNav2In;ex_els[i].onmouseout=dimx_extraNav2Out}}}}}function dimx_extraNav2In(b){var a;if(!b){var b=window.event}if(b.target){a=b.target}else{if(b.srcElement){a=b.srcElement}}if(a.nodeType==3){a=a.parentNode}if(a.id&&dimx_exNavPar[a.id]){a.className="xnav_hover_dimx";a.style.color=dimx_exNavPar[a.id][1]}}function dimx_extraNav2Out(b){var a;if(!b){var b=window.event}if(b.target){a=b.target}else{if(b.srcElement){a=b.srcElement}}if(a.nodeType==3){a=a.parentNode}if(a.id&&dimx_exNavPar[a.id]){a.className=dimx_exNavPar[a.id][3];a.style.color=dimx_exNavPar[a.id][2]}};
