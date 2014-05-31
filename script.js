slide = 0;
WIDTH = $("#holder article").width();
function changeSlide(s){
	document.getElementById("holder").style.marginLeft = "-"+(s*WIDTH)+"px";
}
function plusSlide(){
	slide++;
	if(slide==4)slide=0;
	changeSlide(slide);
}
function minusSlide(){
	slide--;
	if(slide==-1)slide=3;
	changeSlide(slide);
}

o = $("#cl-effect-2").offset().top;

document.onscroll = function(){
	
	if($("body").scrollTop() >= o){
		$("#cl-effect-2").css("position","fixed");
		$("#cl-effect-2").css("top","0");
		$("#cl-effect-2").css("margin-top","0");
		$("#cl-effect-2").css("z-index","999999999");
		$("#cl-effect-2").css("box-shadow","0 0 5px rgba(0,0,0,0.3)");
	}else{
		$("#cl-effect-2").css("position","static");
		$("#cl-effect-2").css("top","auto");
		$("#cl-effect-2").css("margin-top","10px");
		$("#cl-effect-2").css("z-index","auto");
		$("#cl-effect-2").css("box-shadow","none");
	}
}