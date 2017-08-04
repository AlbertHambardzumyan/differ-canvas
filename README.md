# README #

This README would document whatever steps are necessary to get the application up and running.

* Node.js Canvas Integration API (API)
* 1.0.0

### How to Configure and Run
#### Dependencies
    * Node.js (8.2.1)
    * npm (5.3.0)
    * Mongodb (3.4.6)
#### Configuration
    Make configuration changes in app/config/config.js (development, production)
        HOST
        PORT
        WEBSITE_URL
#### Setup
    Environment variables:
        NODE_ENV (development*, production)
        HOST
        PORT
    
        Note, * marks as default.
    
    
    Available commands
        npm install - in the project directory to set up dependencies.
        npm start (node ./bin/www) - run the node server.
    
        *Command example to run: NODE_ENV=production node ./bin/www

### Development
#### Local .env file
    .env file is used to keep local environmental variables specific to each user.
    Used in dev mode by different developers. It helps to specify your own env variables without 
     changing config dev env. Please, create .env file under projects root directory with the example content:
     - developer should define his/her own .env with specific env variables.
    
    module.exports = {
        HOST: '185.13.197.228',
        PORT: '443',
        ....
    };
    
### Swagger 
#### Endpoint
    Protocol://Ip:Port/api-docs. (ex. - http://146.185.149.49:3000/api-docs). This will load the default example.
    Loaded page should have an input filed. Use Protocol://Ip:Port/api/v1/swagger.json to get the API's.
    (ex. http://146.185.149.49:3000/api/v1/swagger.json)
        
### Resources 
#### Default
    POST              /api/v1/link-account
    POST              /api/v1/import
    Get               /api/v1/courses