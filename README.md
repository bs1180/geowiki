This is a quick revamp of the [IIASA GeoWiki](http://www.geo-wiki.org) website.

## [Visit](https://geowiki.netlify.com)

![Screenshot](/screenshot.png?raw=true)

### Technical Details
Everything is written by hand, using:
- The [React JS](https://www.reactjs.org) framework, with [Next JS](https://github.com/zeit/next.js)
- The CSS is written in [Emotion](https://emotion.sh/) and completely custom, with no external CSS frameworks. This reduces the size of the assets needed to be downloaded when visiting the site (therefore increasing the speed) as well as improving the maintainability of the site.
- SVG icons from [Iconmonstr](https://iconmonstr.com/).
- Images and text from IIASA.
- Since the site is so simple, it's been statically compiled for hosting on [Netlify](http://www.netlify.org).


### Design Considerations
- Color scheme uses the existing dark blue (extracted from the logo), and a harmonic earthy brown for principle colours, along with subtle borders and shadows to add depth and visual interest to the page.
- The font is serif, at a reasonably large size (16px base) to maximise legibility.
- In the absence of any user research, I assumed that the site would be visited by both newcomers and those familar with the projects already, with a wide range of intentions. I tried to balance their different needs by displaying both recent news (which shows freshness and innovation) and snippets about the existing projects. 
- The prominent menu at the top aids navigation into the rest of the site, and the slanted edges on the left hand side both add visual interest and act as "leading lines", drawing the user down the page.
- It's fully accessible for mobile visitors.


### Limitations
- Not widely tested on different browsers
- Text and navigation labels was reused unchanged from existing site
