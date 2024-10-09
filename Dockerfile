# Use an official Node.js runtime as the base image
FROM node:20.17.0

# Set the working directory to /usr/app
WORKDIR /usr/app


# Copy the entire project into the container's working directory
COPY ./ /usr/app

RUN npm run clear

# Clear npm cache and install dependencies
RUN npm cache clean --force && npm install

# Run frontend and backend setup
WORKDIR /usr/app
RUN npm run setup:frontend && npm run setup:backend

# Change to the backend directory
WORKDIR /usr/app/backend

RUN npm rebuild --verbose sharp

# Change to the backend directory
WORKDIR /usr/app



# Start the app
CMD ["npm", "run", "dev"]
