let colors = [
			'#ffffff','#badc58','#6ab04c','#7ed6df','#22a6b3',
			'#fbc531','#e1b12c','#4cd137','#44bd32','#e84118',
			'#c23616','#f5f6fa','#dcdde1','#7f8fa6','#718093',
			'#273c75','#192a56','#353b48','#2f3640','#000000',
			]; 

colors.forEach(function(item, index, array){
	item = item.replace('#', '');
	document.write("<div class='item' id='"+item+"' onClick='copyID(this)'>#"+item+"</div>");
	document.getElementById(""+item+"").style.backgroundColor = "#"+item;
});


function copyID(element){
	id = element.id;
	element.focus();
	element.select();
	document.execCommand("copy");
	console.log(id);
}

