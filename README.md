# ses-barebones

A barebones feature app of [see-eat-sleep](https://github.com/thlorenz/see-eat-sleep), an example of building a larger app with multiple smaller
feature apps using npm and browserify.

Use it to build more features for see-eat-sleep

## Initialize and install deps
    
    npm install

## Launching app

    npm start

## Running tests

    npm test

## How to proceed

Fork this repository. Replace all `--id--` references in `package.json` with the name of your feature and rename/edit
several files to make them specific to your feature.

Then add functionality.

## Structure

Below is the structure of the initial barebones app. Files with a `*` need to be edited/renamed.

```
├── LICENSE
├── README.md
├── app
│   ├── api
│   │   ├── index.js*             -- entry point to your api server, exposes all needed init functions
│   │   ├── routes                -- add api routes here
│   │   │   └── sample.js
│   │   └── test
│   │       └── index.js
│   ├── index.js                  -- main server side entry point which in turn intializes pages and api
│   └── pages
│       ├── index.js*             -- entry point to your pages server, exposes all needed init functions
│       ├── middleware
│       │   └── css.js*           -- serves the css files defined in ./client/css
│       ├── routes                -- add pages routes here
│       └── test                  -- tests related to the pages server
│           └── index.js*
├── client
│   ├── css                       -- style sheets served via ./middleware/css.js 
│   │   └── index.css*
│   ├── id.js*                    -- the entry point to the client side part of your feature
│   ├── init.js*                  -- init file that is used when app is run standalone
│   ├── lib 
│   ├── models
│   ├── test                      -- client side tests
│   │   ├── sample.js*
│   │   └── views
│   │       └── view-sample.js*
│   └── views                     -- add your Backbone views here
├── config
│   └── directories.js            -- exposes common directory paths for convenience
├── package.json*                 -- defines name, repo, dependencies, scripts and more related to this feature
├── templates
│   ├── index.hbs*                -- used to render your page when this feature is run standalone
│   └── partials
│       ├── head.hbs*             -- gets loaded into the head of your page
│       ├── main.hbs*             -- the main content of your feature
│       └── scripts-head-css.hbs* -- css scripts that should get loaded into the page head
├── appup-dev-config.js*          -- config used by npm start to configure this feature as a standalone app
└── zuul-test-config.js           -- config for the zuul test runner used by npm test-client
```

## License

MIT
