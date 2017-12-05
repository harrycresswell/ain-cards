# ain-cards

This is the source code for card prototypes built for AIN.

It uses my `gulp-hugo` starter project as it is the quickest way (for me!) to get an `scss` workflow set up with a templating.

_Note: this is only a front-end prototype which is intended to display the look and responsive functionality only._

### Install pre-requisites

- Xcode command line utilities `xcode-select --install`
- [Homebrew](http://brew.sh/)
- [Node.js](http://nodejs.org/) `brew install node`
- [Gulp](http://gulpjs.com/) `npm install -g gulp`
- [Hugo](https://gohugo.io/) `brew install hugo`

## Usage

```
git clone https://github.com/harrycresswell/ain-cards.git
cd ain-cards
```
- Then run `npm install` to install node dependencies
- Run `gulp` to start a local server and build `_site` in development mode
- for a production ready build run `gulp prod`
the site is now ready for deployment

### Adding content
- `hugo new articles/ARTICLE-NAME.md`

### Compile the site
- run `hugo --verbose`

### Start the server
- run `hugo server --watch --verbose` or `hugo server -wv` to start the server, then navigate to http://localhost:1313/

### Compile assets
- open a second tab on the CL and run `gulp`

### production ready build for deployment
```
rm -rf public
hugo
gulp
```
