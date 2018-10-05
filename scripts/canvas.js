'use strict';

Pts.quickStart( "#pt", "transparent" );

(function() {
  let pts = new Group();

  space.add({ 
    start:( bound ) => {
      // create a random distribution of points
      pts = Create.distributeRandom( space.innerBound, 50 );
      // add a brightness value to each point
      pts.forEach(pt => pt.brightness = 0.1);
    }, 

    animate: (time, ftime) => {
      // make a line off-screen and turn it into an "Op" to get perpendiculars
      let perpend = new Group( new Pt([space.innerBound[1][0],1]), new Pt([space.innerBound[1][0]-2,0]) ).op( Line.perpendicularFromPt );
      pts.rotate2D( 0.0005, space.center );

      pts.forEach( (p, i) => {
        // find the point's perpendicular intersection with the off-screen "Op"
        let lp = perpend( p );

        // get perpendicular distance from mouse to this point's line
        let ln = new Group( p, lp ).op( Line.perpendicularFromPt );
        let dist = ln(space.pointer).$subtract(space.pointer).magnitudeSq();

        // adjust line brightness by proximity to pointer
        if (dist < 1000 && p.brightness < 0.5) {
          p.brightness += 0.015;
        } else if (p.brightness > 0.1) {
          p.brightness -= 0.01;
        }

        form.stroke(`rgba(255,255,255,${p.brightness})`).line( [ p, lp ] );
        form.fillOnly( ["#D4625E"][i%3] ).point( p, 1 );
      });
    },

  });

  space.bindMouse().bindTouch().play();

})();
