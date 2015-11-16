var stringArray = ['license','License','LICENSE','licence','MIT','Copying','COPYING','Apache 2.0','Licensed','licensed','BSD','GNU','GPL'];

function replaceLicense(tagContainer, license)
{
	if(tagContainer.length > 0){
    //var span = tagContainer.html().replace(license,'<span class="highlight-license">'+license+'</span>');
    //var n = tagContainer.html(span);
	//tagContainer.css( "text-decoration", "underline" );
	tagContainer.forEach(function(nCon)){
	nCon.css("color", "red");
	nCon.css( "background", "blue" )
	}
  }
}
stringArray.forEach(function(license){

  var td = $('td.content:contains('+license+')');//Sets td to equal the td element that contains the license [and has a class of content]
  td.css( "background", "yellow" );
  
  var p = $('p:contains('+license+')');
  p.css( "background", "yellow" );
  
  var header = $('*:header:contains('+license+')');
  header.css( "background", "yellow" );

  replaceLicense(p, license);
  }
);
