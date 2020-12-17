



$(function() {

  $(".button").click(function(){

    let goghs = ["gogh1", "gogh2", "gogh3", "gogh4", 
    			"gogh5", "gogh6", "gogh7",  "gogh8",
    			"gogh9", "gogh10", "gogh11", "gogh12", "gogh13", "gogh14", 
    			"gogh15", "gogh16", "gogh17",  "gogh18",
    			"gogh19", "gogh20", "gogh21"]
    let i = Math.floor(Math.random()* goghs.length - Math.random() + 2 );
    $("body").removeClass();
$("body").addClass(goghs[i]);
  });
});