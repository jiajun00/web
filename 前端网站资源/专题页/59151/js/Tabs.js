// JavaScript Document

function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}


$(document).ready(function () {
	
	var colour = $("#overlay1");
	var content = $("#hover8_1");
	
	content.hide();
	colour.hide();	
		
	$("#container8_1").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 233);
		colour.stop().fadeTo(233, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 233);
		colour.stop().fadeTo(233, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay2");
	var content = $("#hover8_2");
	
	content.hide();
	colour.hide();	
		
	$("#container8_2").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 233);
		colour.stop().fadeTo(233, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 233);
		colour.stop().fadeTo(233, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay3");
	var content = $("#hover8_3");
	
	content.hide();
	colour.hide();	
		
	$("#container8_3").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 233);
		colour.stop().fadeTo(233, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 233);
		colour.stop().fadeTo(233, 0)
	});
});
$(document).ready(function () {
	
	var colour = $("#overlay4");
	var content = $("#hover8_4");
	
	content.hide();
	colour.hide();	
		
	$("#container8_4").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 233);
		colour.stop().fadeTo(233, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 233);
		colour.stop().fadeTo(233, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay5");
	var content = $("#hover8_5");
	
	content.hide();
	colour.hide();	
		
	$("#container8_5").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 286);
		colour.stop().fadeTo(286, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 286);
		colour.stop().fadeTo(286, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay6");
	var content = $("#hover8_6");
	
	content.hide();
	colour.hide();	
		
	$("#container8_6").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 139);
		colour.stop().fadeTo(139, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 139);
		colour.stop().fadeTo(139, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay7");
	var content = $("#hover8_7");
	
	content.hide();
	colour.hide();	
		
	$("#container8_7").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 139);
		colour.stop().fadeTo(139, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 139);
		colour.stop().fadeTo(139, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay8");
	var content = $("#hover8_8");
	
	content.hide();
	colour.hide();	
		
	$("#container8_8").hover(function() {
		content.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 309);
		colour.stop().fadeTo(309, .7)
	}
	,function() {
		content.stop().animate({bottom : -30}, 309);
		colour.stop().fadeTo(309, 0)
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay9");
	var content1 = $("#syh_1");
	var content2 = $("#syh_2");
	var xs = $("#sy_1");
	
	
	
	content1.hide();
	
	colour.hide();	
		
	$("#sy1").hover(function() {
		content1.stop().show().css({ "top" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content1.stop().animate({top : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
		$("#sy1").hover(function() {
		content2.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content2.stop().animate({bottom : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
			$("#sy1").hover(function() {
		xs.css({ "display" : "none" });
		
	}
	,function() {
		xs.css({ "display" : "block" });		
	});
});

$(document).ready(function () {
	
	var colour = $("#overlay10");
	var content1 = $("#syh_3");
	var content2 = $("#syh_4");
	var xs = $("#sy_2");
	
	
	
	content1.hide();
	
	colour.hide();	
		
	$("#sy2").hover(function() {
		content1.stop().show().css({ "top" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content1.stop().animate({top : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
		$("#sy2").hover(function() {
		content2.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content2.stop().animate({bottom : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
			$("#sy2").hover(function() {
		xs.css({ "display" : "none" });
		
	}
	,function() {
		xs.css({ "display" : "block" });		
	});
});


$(document).ready(function () {
	
	var colour = $("#overlay9");
	var content1 = $("#syh_5");
	var content2 = $("#syh_6");
	var xs = $("#sy_3");
	
	
	
	content1.hide();
	
	colour.hide();	
		
	$("#sy3").hover(function() {
		content1.stop().show().css({ "top" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content1.stop().animate({top : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
		$("#sy3").hover(function() {
		content2.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content2.stop().animate({bottom : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
			$("#sy3").hover(function() {
		xs.css({ "display" : "none" });
		
	}
	,function() {
		xs.css({ "display" : "block" });		
	});
});


$(document).ready(function () {
	
	var colour = $("#overlay9");
	var content1 = $("#syh_7");
	var content2 = $("#syh_8");
	var xs = $("#sy_4");
	
	
	
	content1.hide();
	
	colour.hide();	
		
	$("#sy4").hover(function() {
		content1.stop().show().css({ "top" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content1.stop().animate({top : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
		$("#sy4").hover(function() {
		content2.stop().show().css({ "bottom" : "0px" }).animate({bottom : 0}, 609);
		colour.stop().fadeTo(609, .7)
	}
	,function() {
		content2.stop().animate({bottom : -96}, 609);
		colour.stop().fadeTo(609, 0)
	});
			$("#sy4").hover(function() {
		xs.css({ "display" : "none" });
		
	}
	,function() {
		xs.css({ "display" : "block" });		
	});
});
