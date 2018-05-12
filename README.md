# Mithril-TypeScript-Polythene

Converted [Mithril's](https://mithril.js.org) [simple application example, v1.1.6](https://mithril.js.org/simple-application.html) to TypeScript, and added the Polythene materialize theme.

If you are only interested in the Mithril-TypeScript version, check out the tag mithril-typescript.

In addition, I've also added the Delete and Create pages, where the Create page reuses most of the Edit page.

Please note that, when creating new users, the REST backend  only shows the first 10 entries by default, which I've increased to 50. But still, it may be that your new user is not visible in the first 50 items.

# Development

The Parcel bundler is setup to compile the TypeScript code, and is using PostCSS to include vendor prefixes, etc. So all you need to do is install all dependencies and run it.

```console
npm install
npm run start
```

Now you should be able to visit [http://localhost:1234](http://localhost:1234) to see the result.