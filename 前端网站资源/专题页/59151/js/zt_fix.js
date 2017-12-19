// JavaScript Document
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}


document.writeln("<style>.clear{ clear:both;}");
document.writeln("*{margin:0; padding:0;}");
document.writeln("a{ text-decoration:none; color:#F00;}");

document.writeln("ul{ list-style:none;}");
document.writeln("img{ border:none;}");
document.writeln(".fl{ float:left;}");
document.writeln(".fr{ float:right;}");
document.writeln(".red{ color:#red;}");
document.writeln("p{");
document.writeln(" padding: 0;");
document.writeln(" margin: 0;");
document.writeln("}");
document.writeln("#zt_fix{ width:100px; height:335px; border-top:2px #ee4176 solid; position:fixed; _position:absolute;bottom:10%;__top: expression(offsetParent.scrollTop+document.documentElement.clientHeight-this.offsetHeight);_margin-top:-5%;  overflow:hidden; right:10px;display: block; z-index: 11;}");
document.writeln("#to_top2 { width:100px; height:52px; overflow:hidden;}");
document.writeln("#to_top2 a{font-size:60px; font-weight:800; color:#ee4176; text-align:center; width:100px; height:52px; display:block; line-height: 65px;}");
document.writeln("#to_top2 a:hover{ color:#616161;}");
document.writeln("#zt_fix ul{ width:100px; overflow:hidden;}");
document.writeln("#zt_fix ul li{ width:100px; height:26px; float:left; margin-bottom:4px;}");
document.writeln("#zt_fix ul li a{ width:100px; height:26px; text-align:center; display:block; font-size:14px; color:#f3f3f3; background:#ee4176;line-height:26px;}");
document.writeln("#zt_fix ul li a.hover{ background:#616161;}");
document.writeln("</style>");
document.writeln("");
document.writeln("<div id=\"zt_fix\">");
document.writeln("<div id=\"to_top2\"><a onclick=\"window.scrollTo(0,0)\" href=\"javascript:;\" target=\"_self\">^</a></div>");
document.writeln("<ul>");
document.writeln("	<li><a href=\"/\" onclick=\"window.scrollTo(0,0)\"  target=\"_self\">首页</a></li>");
document.writeln("	<li><a href=\"#zt_1\" id=\"zt1\" onclick=\"setTab(\'zt\',1,5)\"  target=\"_self\">技术诠释</a></li>");
document.writeln("    <li><a href=\"#zt_2\" id=\"zt2\" onclick=\"setTab(\'zt\',2,5)\"  target=\"_self\">个性定制</a></li>");
document.writeln("    <li><a href=\"#zt_3\" id=\"zt3\" onclick=\"setTab(\'zt\',3,5)\"  target=\"_self\">6大标准</a></li>");
document.writeln("    <li><a href=\"#zt_4\" id=\"zt4\" onclick=\"setTab(\'zt\',4,5)\" target=\"_self\">权威专家团队</a></li>");
document.writeln("    <li><a href=\"#zt_5\" id=\"zt5\" onclick=\"setTab(\'zt\',5,5)\"  target=\"_self\">PAC术后康复</a></li>");
document.writeln("</ul>");

document.writeln("<ul style=\"display:none;\">");
document.writeln("	<li id=\"con_zt_1\" style=\"display:block\"></li>");
document.writeln("    <li id=\"con_zt_2\" style=\"display:none\"></li>");
document.writeln("    <li id=\"con_zt_3\" style=\"display:none\"></li>");
document.writeln("    <li id=\"con_zt_4\" style=\"display:none\"></li>");
document.writeln("    <li id=\"con_zt_5\" style=\"display:none\"></li>");
document.writeln("</ul>");
document.writeln("</div>");
