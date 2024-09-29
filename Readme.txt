
Objective:
Display one image at a time.
Provide a way to navigate between images (forward/backward).
Highlight the current slide and provide dot indicators for jumping to specific slides.

Step 1: Basic Structure in HTML
To set up the basic structure for the carousel:

WSA icon and project title: This is typically placed at the top, representing the branding of the project or site.
Container for images: A dedicated space to hold the slides (images).
Navigation buttons: Buttons like "Next" and "Previous" for moving between slides.
Dot indicators: Small dots for showing which slide is currently active and allowing the user to jump directly to any slide.
Footer: Any additional information at the bottom of the carousel, if required.
Step 2: Styling the Carousel with CSS
The core CSS styling should focus on the following:

Container and image display: Style the container to ensure only one image is visible at a time.
Navigation buttons: Style the "Next" and "Previous" buttons to appear on the sides of the image.
Dot indicators: Style the dot indicators, ensuring they reflect the active slide by changing color or size.
Responsive design: The carousel should be able to adjust to different screen sizes.
Step 3: JavaScript Logic for Slide Navigation
Key Variables:
currentSlideIndex: Tracks which slide is currently displayed.
Functions:
Show and Hide Image Logic:

Function Name: showSlide()
Step 1: Retrieve all the slides using document.getElementsByClassName("carousel-slide").
Step 2: Loop through all the slides and set display: none to hide them.
Step 3: Display the current slide using display: block for the slide at currentSlideIndex.
Handling Dot Indicators:

Step 4: Retrieve all dot elements and remove the active class from all of them.
Step 5: Add the dot-active class to the dot corresponding to the current slide to highlight it.
Handling Navigation:

Logic: To move forward or backward between slides, we need a function that changes the currentSlideIndex based on the user's action.
Function Name: changeSlide(n)
Modify the Slide Index: Update currentSlideIndex by adding n, where n = +1 for the next slide and n = -1 for the previous slide.
Ensure the slide index stays within bounds (i.e., not exceeding the total number of slides).
Jumping to a Specific Slide:

Function Name: currentSlide(n)
This function should directly set currentSlideIndex to the clicked dot's index.
Step 4: Initial Setup
Upon loading the page, call showSlide(currentSlideIndex) to ensure the first slide and corresponding dot are visible.
Attach event listeners to the navigation buttons and dots to trigger the appropriate functions when clicked.