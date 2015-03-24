## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

## My Solution

Here's a description of the things I changed in order to get this solution

### CSS Optimization

CSS files where minified and parts of them inlined in the main HTML file in order to make rendering faster. Here's what was done to each:

* css/print.css: minified into css/print.min.css (from 741B -> 382B)
* css/style.css: parts of this file are inlined in index.html. The rest was minified in css/style.min.css (from 1.5kb -> 273B)

Each file included is the minified version, named <original>.min.css

### Image Optimization

All images were optimized for web. Here's what was done for each them:

* img/2048.png: From ~64Kb -> 17Kb. Optimizations with compression for PNG format.
* img/cam_be_like.jpg: ~262Kb -> 34Kb. Optimizations with compression for JPG format.
* img/mobilewebdev.jpg: 186Kb -> 23Kb. Optimizations with compression for JPG format.
* img/profilepic.jpg: 14Kb -> 1.3Kb. Optimizations with compression for JPG format.
* views/images/pizzeria.jpg: 2.3Mb -> 24Kb. Optimization with compression for JPG format.
* views/images/pizzeria-small.jpg: This image was created. Is used in the homepage with the required size, instead of the original image (which has larger than needed)
* views/images/pizza.jpg:

### JavaScript Optimization

JavaScript files were linted, minified and mangled. Each file included is the minified version, named <original>.min.js. Here's what was done for each of them:

* js/perfmatters.js: Linted, minified and mangled. From 513B -> 261B. Also, this script is loaded async inside index.html
* js/style.js: This new file was created. It loads the styles that are not needed for rendering the page.
* views/js/main.js: Some changes in this file to improve FPS: a) Instead of creating 200 pizzas, only 30 are created now. Why? on a large display (1920x1080) only 30 pizzas are displayed at the same time, so I think that should be enought for most displays; b) also, the query for .mover elements is only made once, not for every event trigered. This was accomplished with a global variable that works as a cache. Having global variables may not be the best thing, but here it pays by increasing a lot the performance; and c) Finally, the values of the rotation of each pizza are cached too in each invocation of the function. This will reduce the amount of calculations by over 80%, which will be really noticeable in the performance and FPS of the page; d) A refactoring was performed on function resizePizzas(): the computations of sizes are the same for all images, so they were removed from the for loop and only done once before running the loop.

### HTML Optimization

HTML files were optimized by inlining some CSS, adding async to JS files, and loading other styles async too. Also, the img-responsive class was added to the images in order to make the site mobile friendly.

## How to run

NodeJS was added. First start by installing dependencies by running:

```bash
  $> npm install
```

Then you can generate the minified files by running:

```bash
  $> npm run minify
```

Finally, you can start serving the files by running:

```bash
  $> npm start
```

After this you can just go to http://localhost:8080 and you will have access to the site. ngrok is also included in case you need to analyze this site from the web. After running node, you can just run:

```bash
  $> ngrok
```

And use the provided url from your browser.
