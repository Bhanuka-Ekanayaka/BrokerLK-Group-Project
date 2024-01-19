# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the entire application code to the working directory
COPY models/ ./models/
COPY routes/ ./routes/
COPY .env/ ./.env/
COPY .gitignore/ ./.gitignore/
COPY db.js/ ./db.js/
COPY Dockerfile/ ./Dockerfile/
COPY server.js/ ./server.js/

# Expose the port that the Express server will run on
EXPOSE 5001

# Specify the command to run your backend application
CMD ["npm", "start"]
