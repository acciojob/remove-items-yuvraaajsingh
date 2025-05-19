//your JS code here. If required.
function remove(){
	let color= document.getElementById("colorSelect");
	let selectedIndex= color.selectedIndex;

	if(selectedIndex>=0)
	{
			color.remove(selectedIndex);
	}
}
