/*
 Find same color path and make compound path.jsx for Adobe Illustrator
  Description: Find same color path and make compound path
  Date: 13/01/2022
  Author: Abdul karim mia
  Mail: akmia51@gmail.com
  Based on script by Abdul karim mia (http://www.abdulkarimmia.com/)
  Installation: https://github.com/creold/illustrator-scripts#how-to-run-scripts
  Release notes:
  0.1 Initial version
  Donate (optional):
  If you find this script helpful, you can buy me a coffee

  - via PayPal https://paypal.me/akmia51
  NOTICE:
  Tested with Adobe Illustrator CC 2018-2021 (Mac, Win).
  This script is provided "as is" without warranty of any kind.
  Free to use, not for sale
  Released under the MIT license
  http://opensource.org/licenses/mit-license.php
  Check other author's scripts: https://github.com/abdul-karim-mia
*/

var lays=activeDocument.layers;
for(l=0;l<lays.length;l++){app.activeDocument.activeLayer=lays[l];
while (app.activeDocument.activeLayer.pathItems.length !=0) {try{
activeDocument.selection=app.activeDocument.activeLayer.pathItems[0];
app.executeMenuCommand("Find Fill & Stroke menu item"); 
app.executeMenuCommand ("compoundPath");}catch(e){continue;}
};
}
