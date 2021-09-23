This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Before you begin, install dependencies as you normally would using your favorite package manager:

```bash
$ npm install
# or
$ yarn
```

Then, [generate an OMDb api-key](http://www.omdbapi.com/apikey.aspx).  
The key is personal and without it, the app won't work; and no results will be displayed.

You'll also need to create a new file (`.env.local`) in the root of the project, and add the newly generated api-key to the file in the format below:

```bash
API_KEY=replacewithyourapikey
```

Now you're ready to run the development server:

```bash
$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There's only one [API route](https://nextjs.org/docs/api-routes/introduction) available, which can be accessed on [http://localhost:3000/api/movies](http://localhost:3000/api/movies). Note that this route require a `term`-query string parameter. This endpoint can be edited in `pages/api/movies.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Notes

Only the 10 first results returned from the api is displayed. There is no pagination/way of loading more results.
