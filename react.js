/* Students: Please use this week's project for Week 16: Assignment 14: Your Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
'use strict';

    // define a react page component using traditional pure JS
    function ProjectList(props) {
      // return some output for the component using JSX
      return <div className="holder">
          <ol>
            {
              // use map() to loop thru array passed in props.list, creating new element for each array value
              props.list.map( 
                // copy current array value into item and pass to arrow function
                (item,index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> <br />
										<p>{item.description}</p> <br />
										<strong>{item.date}</strong> <br />
                    <img src={item.image} alt={item.title} /> <br /><br />
										<a href={item.urlLink} target={item.target}> Click Here To See This Project </a>
                  </li>
                )
              )
            }
          </ol>
        </div>;
    }


    // use jQuery to load JSON
    jQuery.getJSON(
      'data.json', 
      function(jsonFromJquery) {
        // after JSON loaded, call react render() to output component into existing element
        // pass properties as attributes: list passes array stored in var jsonFromJquery
        ReactDOM.render(
          <ProjectList list={jsonFromJquery} />,
          document.getElementById('myApp')
        );

        // attach gesture: swipe
        const mc = new Hammer( document.getElementById('myApp') );
        mc.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });
        mc.on(
          "swipe", 
          function(ev) {
            console.log("swipe " + ev.direction);
            if (ev.direction == 2) {
              jQuery('.holder ol').css('left','+=300px');
            } else if (ev.direction == 4) {
              jQuery('.holder ol').css('left','-=300px');
            }
          }
        );
      }
    );