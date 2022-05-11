sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("dzbw.terminal.control.Clock", {
		metadata : {
		},
		onAfterRendering : function () {
			this.clock();
		},
		clock : function () {
			var date = new Date();
			var hour = date.getHours();
			var minute = date.getMinutes();
			var second = date.getSeconds();
			
			var hoursdeg = (hour*360/12)+(minute*(360/60)/12)-90;
			var minutedeg = (minute*360/60)+(second*(360/60)/60)-90;
			var seconddeg = second*360/60 - 90;
			
			var hourhand = document.getElementById('hour');
			var minutehand = document.getElementById('minute');
			var secondhand = document.getElementById('second');
			
			hourhand.style.transform = 'rotate('+hoursdeg+'deg)';
			minutehand.style.transform = 'rotate('+minutedeg+'deg)';
			secondhand.style.transform = 'rotate('+seconddeg+'deg)';
  
			var self = this;
			this.intervalHandle = setInterval(function() { 
				self.clock();
			},  1000);
			
		},
		onExit:function() {
			if (this.intervalHandle) 
			   clearInterval(this.intervalHandle) ;
		 },
		renderer : function (oRM, oControl) {
			oRM.write("<div id='clock'>"); 
			oRM.write("<div id='minute'></div>");
            oRM.write("<div id='hour'></div>");
            oRM.write("<div id='second'></div>");
			oRM.write("<span id='clockface'></span>");
			oRM.write("<span id='middle'></span>");
            oRM.write("</div>");
		}
	});
});