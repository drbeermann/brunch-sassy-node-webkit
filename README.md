# Why

[node-webkit-hipster-seed](https://github.com/Anonyfox/node-webkit-hipster-seed) is a great start but I don't want Cofeescript or Jade and I want SASS.

# TODO

* Real README file, not this one generated by brunch.

* Initial compile is not getting SASS files. If you edit the .scss file it works right away.

* Templating. I don't see the need for Jade. I'll likely add content as partials that are pulled and stored as scripts with ids in the DOM, which can be pulled out and referenced with jQuery.

* Actual app structure, like https://github.com/scotch/angular-brunch-seed

* Testing

* ?

# Notes

Look at package.json for node dependencies.

Look at bower.json for bower dependencies.




# Brunch app

This is HTML5 application, built with [Brunch](http://brunch.io).

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install & bower install`.
* Run:
    * npm run compiler — watches the project with continuous rebuild.
    * npm run app - launches the app itself.
    * TODO `brunch build --production` — builds minified project for production
* Learn:
    * `_public/` dir is fully auto-generated and is the directory node-webkit runs out of.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `_public/`.
