
# CRUD Task RESTAPI

It's a crud api using NodeJS v18.11.0 




## Requirements

- Node.js v18.11.0 and npm

## Getting started

Run the following command on your local environment:

```
git clone https://github.com/Carvajalo/task-restapi-crud.git
cd task-restapi-crud
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000/ with your favorite browser to see your project.

You can also run this project by using
```
npm start
```

```bash
├── README.md                   # README file
├── .babelrc                    # File-relative configuration
│  └───src
│   ├───controllers             # Methods and DB actions
│   ├───libs                    # Libs configuration (pagination)
│   ├───models                  # Schema deffinition 
│   ├───requests                # Endpoint request (Extension: REST Client)
│   └───routes                  # Routes deffinition
├── app.js                      # App configuration: Port - middlewares - Routes
├── config.js                   # Env configuration
├── database.js                 # Database connection
├── index.js                    # Server connection (initialization)

```

## Authors

- [@Carvajalo](https://github.com/Carvajalo)

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carvajalo/)





## Libs

```
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"mongoose": "^6.7.3",
"mongoose-paginate-v2": "^1.7.1",
"morgan": "^1.10.0"

```
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.



## Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

## Libs

```
"cors": "^2.8.5",
"dotenv": "^16.0.3",
"express": "^4.18.2",
"mongoose": "^6.7.3",
"mongoose-paginate-v2": "^1.7.1",
"morgan": "^1.10.0"

```
## API USE


### Local USE 

#### GET TASKS

```
GET http://localhost:3000/api/tasks?size={size}&&page={#page}
```
You can also filter task by title 
```
GET http://localhost:3000/api/tasks?size={size}&&page={#page}&&title={title}
```

#### CREATE TASK
```
POST http://localhost:3000/api/tasks

{
    "title": "Angular",
    "description": "Angular"
}
```
You can also put done attribute with this structure:  
```
POST http://localhost:3000/api/tasks

{
    "title": "Tarea en true",
    "description": "Mi primera descripción true",
    "done": true
}
```


#### GET TASK
```
GET http://localhost:3000/api/tasks/:Task_id
```

#### DELETE TASK
```
DELETE http://localhost:3000/api/tasks/:Task_id
```


#### GET DONE TASK
```
GET http://localhost:3000/api/tasks/done
```

####GET NOT DONE TASK
```
GET http://localhost:3000/api/tasks/notdone
```

#### UPDATE TRUETASKS
```
PUT http://localhost:3000/api/tasks/:Task_id

{
    "description": "new description",
    "done": true
}
```


## VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.


