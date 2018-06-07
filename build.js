require('dotenv').config()
const glob = require('glob')
const Metalsmith = require('metalsmith')
const env = require('metalsmith-env');
// const layouts = require('metalsmith-layouts')
const inPlace = require('metalsmith-in-place')
const discoverPartials = require('metalsmith-discover-partials')
const discoverHelpers = require('metalsmith-discover-helpers')
const assets = require('metalsmith-assets')
// const sass = require('metalsmith-sass')
const markdown = require('metalsmith-markdown')
const dataMarkdown = require('metalsmith-data-markdown')
const contentful = require('contentful-metalsmith')
const debugUI = require('metalsmith-debug-ui')

Metalsmith(__dirname)
  .source('src')
  .destination('build')
  .use(env({
    variables: {
      DDG_DYNAMIC_CSS_FILE: '/style.css',
      DDG_DYNAMIC_CSS_2_FILE: '/static.css',
      DDG_DYNAMIC_CSS_3_FILE: '/serp.css'
    }
  }))
  .use(contentful({
    space_id: process.env.CONTENTFUL_SPACE_ID,
    // TODO: use Preview API Token when needed
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN
  }))
  .use(debugUI.report('contentful'))
  // .use(layouts())
  // .use(discoverPartials())
  .use(inPlace({
    engine: 'nunjucks',
    pattern: '**/*.njk'
  }))
  .use(debugUI.report('inPlace'))
  .use(discoverHelpers())
  .use(assets({
    source: 'assets/',
    destination: 'assets/'
  }))
  // .use(sass({
  //   outputStyle: 'compressed'
  // }))
  // .use(markdown())
  .use(dataMarkdown({
    marked: {
      gfm: true,
      breaks: true
    },
    removeAttributeAfterwards: true
  }))
  .use(debugUI.report('markdown'))
  .build(function (err) {
    if (err) throw err

    console.log('Successfully build metalsmith')
  })
