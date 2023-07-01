# Get Movies App

The Get Movies App is a web application that allows users to explore and search
for movies. It provides various features such as displaying trending movies,
searching movies by keyword, and viewing movie details including cast and
reviews.

## Screenshots

![Screenshot 1](/assets/hero.jpg) _hero_

![Screenshot 2](/assets/pop-up.jpg) _pop-up_

![Screenshot 3](/assets/search.jpg) _search_

![Screenshot 4](/assets/details.jpg) _details_

![Screenshot 5](/assets/movies.jpg) _movies_

![Screenshot 6](/assets/cast.jpg) _cast_

![Screenshot 7](/assets/reviews.jpg) _reviews_

## Features

- Home Page: Displays a hero section with a randomly selected trending movie of
  the week and a list of trending movies of the day.
- Movies Page: Allows users to search for movies by entering keywords in the
  search box. The page displays a list of movies matching the search query.
- Movie Details Page: Shows detailed information about a specific movie,
  including the movie title, genres, rating, overview, and additional
  information tabs for cast and reviews.
- Cast: Displays the cast members of the selected movie, including their names
  and characters.
- Reviews: Shows user reviews for the selected movie.

## Installation

To run the Get Movies App locally, follow these steps:

1. Clone the repository: Copy code git clone:
   `https://github.com/<your-username>/goit-react-hw-05-movies.git`

2. Navigate to the project directory: `cd goit-react-hw-05-movies`

3. Install the dependencies: `npm install`

4. Create a file named .env in the root directory and add the following
   environment variable: `REACT_APP_API_KEY=<your-tmdb-api-key>` Replace
   <your-tmdb-api-key> with your actual TMDb API key. You can obtain an API key
   by creating an account on the TMDb website and generating an API key from
   your account settings.

5. Start the development server: `npm start`

6. Open your browser and navigate to http://localhost:3000 to access the app.

## Deployment

The app can be deployed to platforms like GitHub Pages, Netlify, or Vercel. To
deploy the app, follow the platform-specific instructions for the chosen hosting
service. Ensure that the homepage field in the package.json file is updated with
the appropriate URL for your deployment.
`"homepage": "https://<your-username>.github.io/goit-react-hw-05-movies/"`

## Credits

- React.js for building the user interface.
- React Router for handling navigation and routing.
- Emotion for styling the components.
- Axios for making API requests.
- The Movie Database (TMDb) API for movie data.

## Dependencies

List the dependencies used in your app and their versions.

## Contributing

Provide guidelines on how others can contribute to your project.

## License

SThis project is licensed under the MIT License. See the LICENSE file for more
information.
