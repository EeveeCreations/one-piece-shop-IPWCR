# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install project dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Build the Angular application (you can adjust the configuration based on your needs)
RUN ng build --prod

# Stage 2: Create a lightweight server container
FROM nginx:alpine

# Copy the built Angular app from the build stage to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the application will run on
EXPOSE 4007

# Define the command to start your Angular application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4007"]
