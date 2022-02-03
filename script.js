var sections = document.getElementsByClassName("section");
var tooltips = document.getElementsByClassName('nav-head');
var projet = document.querySelector('.projet');
var about = document.querySelector('.about');
var contact = document.querySelector('.contact');
var intro = document.querySelector('.intro');
var a = document.querySelector('.a');

function makeNewPosition(){
    
  // Get viewport dimensions (remove the dimension of the div)
  var h = intro.height - 50;
  var w = intro.width - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  myclass.animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });
  
};

animateDiv(a);

if(screen.width > 1000){
  for (var i = 0; i < tooltips.length; i++) {
    TweenMax.set( tooltips[i] , { autoAlpha: 0 } );
  }
  
  
  for (var i = 0; i < sections.length; i++) {
    
    sections[i].onmouseout = function(){
      tooltip = this.querySelector('.nav-head');
      TweenMax.to( tooltip , .75 , { autoAlpha: 0 } );
    }
    
    sections[i].onmouseover = function(e) {
      tooltip = this.querySelector('.nav-head');
      TweenMax.to( tooltip , .75 , { autoAlpha: 1 } );
    }
    
     sections[i].onmousemove = function(e) {
        var x = e.clientX,
            y = e.clientY,
            elCoords = this.getBoundingClientRect(),
            xOffset = x - elCoords.left + 20,
            yOffset = y - elCoords.top + 20,
            tooltip = this.querySelector('.nav-head');
            tooltip.style.transform = "translate( "+xOffset+"px, "+yOffset+"px )";
      }
  }

}
