
@target illustrator
var lays=activeDocument.layers;
for(l=0;l<lays.length;l++){app.activeDocument.activeLayer=lays[l];
while (app.activeDocument.activeLayer.pathItems.length !=0) {try{
activeDocument.selection=app.activeDocument.activeLayer.pathItems[0];
app.executeMenuCommand("Find Fill & Stroke menu item"); 
app.executeMenuCommand ("compoundPath");}catch(e){continue;}
};
}
