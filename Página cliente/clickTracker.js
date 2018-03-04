//Código de ejemplo sacado de StackOverflow
/*
var arrayWithElements = new Array();

function clickListener(e)
{
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);

    for(var i=0;i<tags.length;++i)
    {
      if(tags[i]==clickedElement)
      {
        arrayWithElements.push({tag:clickedElement.tagName,index:i});
        console.log(arrayWithElements);
      }
    }
}
*/

/*
Declaramos un array asociativo observedElements que funciona como un Mapa.
Las claves son los identificadores de los elementos que observamos y el valor
es el número de clics realizado sobre dicho elemento (inicializado a cero).
*/
var observedElements = {
  'web-ual' : 0,
  'web-informatica' : 0,
  'web-negocio' : 0,
  'button-login' : 0,
  'tema-nfc' : 0,
  'tema-bitcoin' : 0,
  'tema-seo' : 0,
  'video-nfc' : 0,
  'fuente-nfc' : 0,
  'fuente-bitcoin' : 0,
  'video-seo1' : 0,
  'video-seo2' : 0,
  'fuente-seo' : 0,
  'rrss-twitter' : 0,
  'rrss-facebook' : 0,
  'rrss-instagram' : 0
};

/*
La función obtiene el elemento sobre el que se ha hecho clic y, si su
identificador está en observedElements, incrementa su contador.
*/
function clickCounter(e) {
  var clickedElement=(window.event)
                      ? window.event.srcElement
                      : e.target,
      tags=document.getElementsByTagName(clickedElement.tagName);

  var elementId = clickedElement.id;

  if(elementId in observedElements) {
    observedElements[elementId]++;

    //Línea para comprobar correcto funcionamiento
    alert(elementId + " clicks: " + observedElements[elementId]);
  }
}

/*
Añadir función para enviar observedElements junto con la fecha de la sesión
al servidor.
*/

document.onclick = clickCounter;
