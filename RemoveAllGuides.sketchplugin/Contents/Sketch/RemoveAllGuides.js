function onRun(context) {
	var sketch = context.api();
	var document = sketch.selectedDocument;
	var page = document.selectedPage;
	var selection = context.selection;
	
	if(selection.count() > 0){
	for(var i = 0; i < selection.count(); i++){
	if(selection[i].class() == "MSArtboardGroup"){
		var artboard = selection[i];
		var horizontalGuideCount = [[artboard verticalRulerData] numberOfGuides];
		var verticalGuideCount = [[artboard horizontalRulerData] numberOfGuides];
		while (horizontalGuideCount > 0) {
				[[artboard verticalRulerData] removeGuideAtIndex:0];
				horizontalGuideCount = [[artboard verticalRulerData] numberOfGuides];
		};				
		while (verticalGuideCount > 0) {
			[[artboard horizontalRulerData] removeGuideAtIndex:0];	
			verticalGuideCount = [[artboard horizontalRulerData] numberOfGuides];				
		};
	};
};
};
};
