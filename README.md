[![Vote for me on ProductHunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=176424&amp;theme=light)](https://www.producthunt.com/posts/css-layout?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-css-layout)

# CSS Layout

A collection of popular layouts and patterns made with CSS:

* 🎉Zero dependencies
* 🎉No frameworks
* 🎉No CSS hacks
* 🎉Real use cases
* Good practices (coming soon)
* Accessibility (coming soon)

![CSS Layout](/public/assets/screenshot.png)

## Why

Being a front-end engineer, I have to deal with a lot of layouts and components.
There are a lot of CSS frameworks out there that provide popular layouts/components but 
I usually don't want to include all of them in my project.

So I collect most popular layouts and components that can be built with pure CSS.
They are powered by modern CSS features such as flexbox and grid.

They are great starting points to be picked and customized easily for each specific need.
By composing them, you can have any possible layout that exists in the real life.

The entire website is powered by

~~~ javascript
this
    .madeWith([react,typescript])
    .then(r => lint(tslint))
    .then(r => lazyLoad(@loadable/component))
    .then(r => optimizeAndBundle(webpack))
    .then(r => exportHtml(react-snap))
    .then(r => deploy(Netlify))
    .then(r => {
        expect(r).is(scalableCode);
        expect(r).is(superFastWebsite);
        expect(r).is(seoFriendly);
    })
    .finally(() => {/* Give me 1 star */}) 🎉
~~~

## Running it on local

- Clone the project:

~~~
$ git clone https://github.com/phuoc-ng/csslayout
~~~

- Install the dependencies:

~~~
$ cd csslayout
$ npm install
~~~

- Run it on the local:

~~~
$ npm run dev-server
~~~

Visit http://localhost:1234 to see it in action.

## Contributing

PRs are welcomed. If you thing there are any missing useful layouts or patterns, please create an issue or submit a PR.

It's important to note that you should run the following command to lint the code:

~~~
$ npm run lint
~~~

If there is any issue, it will be logged in the `tslint.log` file.

## About

This project is developed by [Nguyen Huu Phuoc](https://twitter.com/nghuuphuoc).
You might be interesting in my projects:
* [FormValidation](https://formvalidation.io)
* [BlurPage](https://blur.page)
* [React PDF Viewer](https://react-pdf-viewer.dev)
