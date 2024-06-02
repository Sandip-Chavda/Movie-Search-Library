
# Movie Search Library [🔗🎬](https://movie-search-library.onrender.com/)

- Welcome to the **Movie Library Web Application**. This fully-featured application provides users with an immersive movie experience, from discovering new films to curating personalized lists. Powered by the **MERN stack**, **Tailwind CSS**, andJWT authentication, users can explore a vast database of movies, create custom lists, and manage their visibility effortlessly.

## Key Features

- **User Authentication:** Utilizing MERN stack and JWT authentication, User can use features after authentication..

- **Movie Search and Details:** Users can search for movies, view detailed information with beautiful drawer ui.

- **Custom Lists:** Users have the ability to create personalized lists of movies.

- **Public and Private Lists:** Users can choose to make their lists public, allowing anyone with the link to access them, or keep them private for their personal viewing. **`in developement`**

- **Responsive Design:** The application is optimized for all devices, ensuring a seamless experience across desktops, tablets, and smartphones.


## Demo

- ## Video

- ## Images

## Tech-Stack & Tools

- **Front-End:** React.js, Tailwind CSS, JavaScript, Shadcn UI

- **Back-End:** Express.js, Node.js

- **DataBase:** MongoDB, Mongoose

- **Tools:** VS Code, Postman, MongoDB Compass 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- **`NODE_ENV = development`** `in development mode`

- **`PORT = PORT`**

- **`MONGO_DB_URI = MONGO_DB_URI`**

- **`JWT_SECRET = JWT_SECRET`**


## Run Locally

- **Clone the project**

```bash
  git clone https://github.com/Sandip-Chavda/Movie-Search-Library.git
```

- **Go to the project directory**

```bash
  cd my-project
```

- **Install dependencies** **`(Back-End)`**

```bash
  npm install
```

- **Install dependencies** **`(Fornt-End)`**

```bash
  cd frontend
  npm install
```

- **Start the server** **`Both started with one command`**

```bash
  npm run start
```

- Access the Application: Open your web browser and visit **`http://localhost:5000`** to access the Movie Library Web Application.


## API Reference

#### Get all items

```http
  https://www.omdbapi.com/?s={Query}&apikey={API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Required**. Your API key |
| `Query` | `string` | **Required**. string |


## Deployment

- **To deploy this project run**

```bash
  npm run build
```
- This website is deployed on **`Render.com`** For infomation you can visit this website :- [https://docs.render.com/](`https://docs.render.com/`)



## Documentation

- *Refer this documnetation for the good understanding of the technologies used in the project.*

- **[React.js](https://legacy.reactjs.org/docs/getting-started.html)** visit for the better understanding of the React.js.

- **[Express.js](https://expressjs.com/en/starter/installing.html)** visit for the better understanding of the Express.

- **[MongoDB DataBase](https://www.mongodb.com/docs/manual/tutorial/getting-started/)** visit for the better understanding of the React.js.

- **[Mongoose](https://mongoosejs.com/docs/)** visit for the better understanding of Schema generation..

- **[Tailwind CSS](https://tailwindcss.com/docs/installation)** visit for the better understanding of the styling and customize your website with this.

- **[Shadcn UI](https://ui.shadcn.com/docs)** visit for the better understanding of the styling and customize your website with this.





## License

[MIT](https://choosealicense.com/licenses/mit/)

