# lucky-pick

**LuckPick** is a straightforward web application where users can play a simple game by guessing a correct random number between 1 and 100.

The application was developed using React.js on the frontend, with **shadcn/ui** as the component library to ensure a clean and modern user interface. On the backend, it was used Node.js with Express.js for routing and Sequelize as the ORM. For the database, it was chosen SQLite due to its simplicity and the advantage of being serverless, making it ideal for lightweight applications and rapid development.


# Considered Assumptions

During the requirements analysis, there was no doubt about the necessity of creating two basic entities:

- **Matches**  
  Represent a game where a player tries to guess the correct number.

- **Guesses**  
  Represent each attempt made by the player during a match.

From this, a question naturally arose:  
**"How can I allow a player to access an unfinished game upon returning to the website and also view their guess history during that match?"**

To address this need, I decided to implement an additional entity: **Users**.  
This entity represents each player of the application, enabling persistence of game state and guess history.

I ended up with the following database entity-relationship diagram:

![er.png](https://github.com/FernandoIbrahim/lucky-pick/blob/main/Docs/database/er.png)

# Architectural Decisions

To address these assumptions and solve the problems related to game persistence and user guess history, I made the following architectural decisions:

To manage those users above, I implemented registration, login, and authorization functionalities.

## Front-end

Focusing on core functionalities and avoiding boilerplate code, such as building login and registration modals from scratch. I chose to use **shadcn/ui** for its highly reusable and easily customizable components. Additionally, I used **Tailwind CSS**, a utility-first CSS framework, to speed up the styling process with predefined classes.

## Backend 

On the backend, I chose **Express** and **Sequelize** because they are open-source, well-documented technologies that I’m already familiar with. Allowing for faster and more efficient development.

The backend folder structure is organized by **data flow layers**, a commonly used pattern in small applications with a limited number of entities.

- **Router**: Defines the routes and handles incoming requests.
    
- **Controller**: Manages the request-response cycle, interacting with services.
    
- **Service**: Contains the business logic and coordinates the application’s operations.
    
- **Repository**: Handles data access, abstracting interactions with the database using Sequelize.
    
- **Model**: Defines the data structure and interacts with the database through Sequelize.

That sequence can be easily represented by the following sequence diagram:

![Create Match Sequence Diagram](https://github.com/FernandoIbrahim/lucky-pick/raw/main/Docs/backend/sequence-driagrams/create-match.png)

## Security
In addition to everything mentioned above, the entire guess validation process is handled by the backend, preventing any kind of undesired behavior or unauthorized data access.

To securely identify participants, a JWT token is issued upon registration. This token is required in all requests related to the game, ensuring both authentication and authorization throughout the session.

# Execution

Initially, to run any kind of JavaScript code, you need to have Node.js and a package manager (like npm or yarn) installed on your machine, and ensure you’re using a recent version, such as:

	•	Node.js: v23.9.0
	•	NPM: v10.9.2

## Front-end

To run the front-end correctly, navigate to the web folder:

```
Code
└── web
```

Then, install all required dependencies by running:

```
sudo npm install
```

Finally, start the development server with:

```
sudo npm run dev
```

This will launch the application at [http://localhost:3000](http://localhost:3000) by default.


## Backend 

To run the backend correctly, navigate to the back folder:

```
Code
└── back
```

Then, install all required dependencies by running:

```
sudo npm install
```

Finally, start the server with:

```
sudo npm start
```

This will launch the application at port 8080 by default.


## Database

No additional configuration is required to run the database, as SQLite3 is a serverless database. The Sequelize ORM handles all necessary commands automatically, including creating the database file and tables if they don’t already exist.


### Possible issue fix

During the second execution of the backend, you may encounter an error when trying to access the database file again.
This issue typically occurs because the operating system user doesn’t have the necessary permissions to access the directory created by the sqlite3 module.

To fix this, you can grant full permissions to all files and folders in the root of your project using the following command:

```
sudo chmod -R 777 .
```
