# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- Incorrectly using github api, and extracting values from the pasted url.


> What changes/additions would you make to the design?

- I think design wise it's already clean and well thought out. maybe i can add a little animation so that it would look interactive.

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- I would add a feature that when user click one of the issue i'll have a pop-up modal that will contain that issue details.

- I'll put a favorite icon in each issue and would have another tab that has all my favorite issue.

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- Essentially, what is the best way to build/architect this application provided a set of features that you have to build. File Structure is the major decision that i made. I broke down the app by having Routes, Components, Global State(Redux), Assets, Constants. I created a scss file on each one of the Routes and Components so that it would be easy for me to change/add new style to those elements because they're isolated in their own folder. 
- I Created Global Styles that can be imported so that scss file would have the same exact values (e.g. Colors, Dimensions)
- I used Redux so that i wouldn't need to pass down props from parents to children. I love to use Redux because i can access state in any file. just connect your file and you can already interact with your state.
- I created important element of the routes as a Component (e.g. Input, Issue, header) this way my app would look clean and scalable.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- Reading the API documentation took me 1 hour. i made sure that i understand how to use it properly.
- I'm coding every after work when i have time so i would say i did 3-4 hours in total.
- Debugging, took me approximately 30 mins. to polish and debug my app.

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Not necessarily advice but i asked myself some questions like, 
- what is the best way to handle state for this project?
- do i need specific middleware (e.g. Redux-thunk) that would allow me to react to my API calls
- how should i handle errors
- how should i handle css

> Did you learn anything new?

- Not really because i already have a knowledge of all these technologies gained from my current job. I did look up on Styled Components and i think it's pretty awesome to use at this project and learned basic of it. but i ended up not using it because i saw in the requirements that i should use css preprocessor.

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- yes, Since this is a Frontend Role and front end is all about fetching data and displaying it to the front end and make everything pretty.

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- Node.js, express, Mlab.
