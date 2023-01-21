# S&M Garage

S&M Garage is a learning experience for the developers (Shaked & Michael), as they approached this challenge with little knowledge about a fullstack applications.

## Installation

First clone the repository containing both the server & client folders.
```bash
git clone https://github.com/ShakedSa/FullstackFinalProject.git
```
#
After you have cloned the repository you will need to install all the dependencies, as they don't go into the repository for preformance issues of git.

For installing the client dependencies you should first change to the client subfolder.
```bash
cd .\client\
```

Then install the dependencies through the command:
```bash
npm install
```

Should your client still be missing dependencies also run the commands:
```bash
npm install react-icons
npm install axios
npm install react-router-dom
```

Now we need to set our env variables as our client is depending on them.

First create in the root of the client folder a file .env, then you should add 3 variables:

```javascript
REACT_APP_SITE_KEY = Your site key
REACT_APP_SERVER_API = https://snmgarage-api-v8lq.onrender.com/api
REACT_APP_SITE_NAME = SnM Garage
```

#### NOTE
The site key will be given in private, so feel free to ask. 

# 

Installing the server dependencies are going to be a similar steps.

First go back to the root of the project.
```bash
cd ..
```

Then change to the server subfolder
```bash
cd .\server\
```

And again use the command:
```bash
npm install
```

Should your server still be missing dependencies also run the commands:
```bash
npm install nodemailer
npm install mongoose
npm install cors
```

Similarly to the client, the server is also depending on env variables. So once again you should create a file .env in the root of the server subfolder and add 2 variables:

```javascript
SECRET_KEY = Your site secret key
MONGO_DB_URL = Your mongo data base url
```

#### NOTE
Since both the keys contains private information, they will be given in private, and again feel free to ask.

## Usage

After all our dependencies are in place we can now start the application.

To start the client, we need to travel back to the client subfolder. Onces we got there type
```bash
npm start
```

and you will find that the client side is running on localhost:3000.
#

To start the server, we need to again travel to the server subfolder. Onces we got there type
```bash
node server.js
```
the server will be running by default on localhost:3232. 
To change it for development process navigate to the 'server.js' file, and change the port on line 44.

```javascript
app.listen(3232, () => console.log('Server Started'))
```

And now you if all went well, you should see in the console those lines.
```bash
Server Started
Connected to Database
```

## Contributing

As this is a learning project, we will probably won't expand it. Pull requests are always welcome.

## License

[Braude](https://www.braude.ac.il/)
