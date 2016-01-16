/*!
 * Angular CreateSVG Directive Plugin v0.0
 * https://github.com/
 *
 * Copyright 2015, 2016 Krijesh PV
 * Created Date: 29-12-2015
 */

 //This plugin creates the different SVG shapes based on the user choice.
(function(angular) {
  'use strict';
angular.module('createSVG', [])
	//Main Controller
	.controller("MainCtrl",function($rootScope,$scope){ 
	   //empty filter object
	   $scope.filters={};
	   // list of svg element fields.
	   $scope.circleFields=["id","cx","cy","r","fill","stroke","stroke-width"];
	   $scope.rectFields=["id","x","y","height","width","fill","stroke","stroke-width"];
	   $scope.lineFields=["id","x1","y1","x2","y2","stroke","stroke-width"];
	   $scope.ellipseFields=["typeId","cx","cy","rx","ry","stroke","stroke-width"];
	   $scope.polygonFields=["typeId","points","fill","stroke","stroke-width"];
	   $scope.polylineFields=["typeId","points","fill","stroke","stroke-width"];
	   $scope.pathFields=["id","d","fill","stroke","stroke-width"];
	   $scope.textFields=["typeId","x","y","fill","text"];
	   //Differnt svg elements.
	   $scope.svgType = ['rect','circle','line','ellipse','polygon','polyline','path','text']; 	
		})
	//Custom Directive which takes the view values and draw the svg.	
  .directive('mySvg',['$document', function($document) {
    return {
		link: function(scope, element, attr) {
		scope.createSVG= function() {
		var svgNS = "http://www.w3.org/2000/svg";  
		var myElement = document.createElementNS(svgNS,scope.currentItems);	
		for (var prop in scope.filters) {			
			myElement.setAttributeNS(null,prop,scope.filters[prop]);
			document.getElementById("d").appendChild(myElement); 
		}
		var textNode = document.createTextNode(scope.filters[prop]);
		myElement.appendChild(textNode);
		document.getElementById("d").appendChild(myElement); 		
		} 	
		}
		
    };
  }]);
})(window.angular);

