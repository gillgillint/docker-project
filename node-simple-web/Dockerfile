# Specify a base image
FROM node:18-alpine

# Install some dependencies
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY . .

# Default command
CMD [ "npm", "start" ]