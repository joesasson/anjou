# Project Notes / Objective List

Generate random pairs from a list of people in a room

User Stories:
- Many users can add their name to a room (potentially via disposable url)
- When room is full, user can generate pairs of users in groups of 2 or more

Components:
  - App Skeleton
  - Nav/Header
  - NameContainer
    - NameInput
    - NameList
  - PairContainer
    - PairItem

Plan:
  - Initialize project skeleton, dependencies, and github repo
  - create folder structure for components
  - initialize redux store

Next Step:
  - Write functions that will do pairing procedure and add pairs to PairContainer in a PairItem

Step by Step:
  - take names state and randomly pair up one name with a different one
  - Add each pair to state in an array of arrays
  - each pair should be an array of 2 names
  - PairContainer should map through the pairs state and render a PairItem for each pair array element
  - That's it

3/2

  - Finish up pair actions
  - map the dispatch
  - map state to props on the paircontainer
  - pass props to PairItem


3/7

Today is the day for styling.

I want the styling to be amazing. Every single thing should be animated in some way, and the color scheme and sizing should look and feel comfortable.

Things I need to work on:
  - Fonts
  - Color Scheme
  - Wireframe for Mobile & Desktop
  - Animations
  - Learn how to integrate a third party react component library
  - Use material design concepts without making it look defaulty

Google Fonts - change all displays to the word that you want to see

- $$('gf-content-editable') will return all of the displays

SVG's

Making an SVG from a png is pretty simple with Illustrator as long as the image is fairly simple. Just place the image in a new illustrator document and click Image Trace on top with the 3 color setting and your image will be converted to illustrator paths, which you can save as an svg.

Including the svg - add the svg file to the project folder and use an import statement to define a variable which will be a path of the file which you can use as the src of a tag.

Making SVG scalable

Wrap it with a prebuilt responsive class from [tachyons](http://tachyons.io/)

Sticky Footer:

It's as simple as setting the body to 100% height and then setting padding on bottom equal to the height of the footer. As long as the content is not pushing it down it will stick to the bottom of the page.

html { height: 100%; }
body {
    min-height:100%;
    position:relative;
    padding-bottom: 20px;
    background-color: #3e514b;
}
.footer {
    position: absolute;
    left: 0 ; right: 0; bottom: 0;
    height: 20px;
}

Fancy inputs:

https://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/

follow the tutorial and summarize. Never mind, I'll do it myself.

- So I want the top and bottom border to be thick
- on focus the borders should expand away from the text
- The text should keep aspect ratio
- There should be no default focus highlight
- The placeholder text should be clearer
- The expansion should push the button down or the button should be placed further away
- Enter should cause the input to lose focus

Use Tachyons for all elements grow is an animation there must be others that can be triggered on load.

I should add some more features
- Button to reset state
- Only shuffle new names
- Group people in groups of 3
- Better styling - using flex/grid
