This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, [generate an OMDb api-key](http://www.omdbapi.com/apikey.aspx).  
The key is personal and without it, the app won't work; and no results will be displayed.

Then, create a new file (`.env.local`) in the root of the project, and add the newly generated api-key in the format below:

```bash
API_KEY=replacewithapikey
```

Now you're ready to run the development server:

```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There's only one [API route](https://nextjs.org/docs/api-routes/introduction) available, which can be accessed on [http://localhost:3000/api/movies](http://localhost:3000/api/movies). This endpoint can be edited in `pages/api/movies.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
