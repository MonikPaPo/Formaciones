function clickButton(){
	var element =document.getElementById('myc');
	element.style.backgroundColor='#A5F49E';

	var texto=document.getElementById('myt');
	texto.style.color="#ffffff";

	var imagen ='<img src="img/cat.jpg" alt=""/>'
		document.getElementById('imagenc').innerHTML=imagen;

	var presen = '<p>Hola mi nombre es Monica, un gusto en conocerte.</p>'
		document.getElementById('presentacion').innerHTML=presen;

	var mas = '<a href="\presentacion.html">Ver mas</a>'
		document.getElementById('vermas').innerHTML=mas;
}


