# Use an official Node.js runtime as the base image
FROM node:16

# Install OpenJDK 11 from the official repository
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Install dos2unix and convert script files
RUN apt-get update && apt-get install -y dos2unix
COPY C:/Users/ASUS/Desktop/New folder (3)/fedelius-cli/   /app/
# RUN find /app/fidelius-cli-1.2.0 -type f -exec dos2unix {} \;

# Set the correct line endings in your script files
# ENV binPath /app/fidelius-cli-1.2.0/bin/fidelius-cli

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on
EXPOSE 8081

# Define the command to start your Node.js application
CMD [ "node", "app.js" ]
