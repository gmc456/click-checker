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
