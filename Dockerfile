FROM node:12

# Start everything in /app
WORKDIR /app

# Copy our required dependencies
COPY package*.json ./

# TODO get production / dev images from Build Args
# RUN npm install
RUN npm ci --only=production

# Add the rest of our source code
COPY . .

# Expose the running port
EXPOSE 8080

# Off to the races
CMD [ "npm", "run", "start" ] 
