FROM node:16
# create app directory/working directory
WORKDIR /src/app
# Install app dependencies
COPY package*.json ./
# Bundle app source code inside a docker image
COPY . .
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000
CMD [ "npm", "start" ]
