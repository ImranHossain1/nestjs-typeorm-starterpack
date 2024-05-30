FROM node:22-alpine

# Create app directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Debug: List files to verify COPY step
RUN ls -la /usr/src/app

# Install app dependencies
RUN npm install

# Copy remaining app source
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD [ "node", "dist/main" ]
