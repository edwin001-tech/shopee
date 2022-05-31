FROM node:16
# create app directory
WORKDIR /src/app
# Install app dependencies
COPY package*.json ./
# Bundle app source code
COPY . .
EXPOSE 3000
CMD [ "nodemon", "app.js" ]
