# codigomx-app

Simple blogging site that allows users to submit blog posts and reply to exsisting posts.

## Getting Started

Clone or download this repository and follow the subsequent instructions in order to get the project up and running

### Prerequisites

In order to run this project the most recent version of nodejs and npm must be installed.

Node.js and npm packages are available from the Ubuntu 18.04 distribution repository
```
sudo apt install nodejs npm
```

You can check if you have nodejs and npm instaleld by issuing the following commands:
```
nodejs -v
npm -v
```

### Running

Here are the steps to get a development env running

1.First the backend must be running. To do so navigate into the backend folder, install the dependencies, and execute the start script

```
cd backend
npm install
npm start
```
This script will execute nodemon with the env variables set in the nodemon.json file(PORT by default is 5000). This makes for easier deployment which is mentioned later on.

2.In order to run the development server navigate into the client folder, install the dependencies, and excute the start script

```
cd client
npm install
npm start
```
This script will start the development server on the default port(PORT 3000)

Now you can interact with the client by navigating onto localhost:3000 and interact with the backend by navigating onto localhost:5000

## Deployment

In order to deploy the backend to a server set the following environment variables:

```
PORT:<PORTNUMBER>
MONGO_ADMIN_PW: <MONGO ADMINISTRATOR PASSWORD>
```

## Built With

* [REACT](https://reactjs.org/) - The front-end framework used
* [REDUX](https://redux.js.org/) - Framework used to manage state
* [NODE](https://nodejs.org/) -  Run-time environment used for the backend
* [MONGO ATLAS](https://www.mongodb.com/) - Used to generate our database (DaaS)


## Authors

* **Andres Galindo** - *Initial work* - [ANDRESGALINDO](https://github.com/agalin920


