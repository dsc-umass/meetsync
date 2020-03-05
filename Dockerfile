FROM node:12

# Expose the running port
EXPOSE 8080

# Declare entrypoint / default run command
# use "dev" rather than start for development build
ENTRYPOINT [ "/usr/bin/env", "npm", "run" ]
CMD [ "start" ]

# Start everything in /app
WORKDIR /app

# Copy our required dependencies
COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

# Add the rest of our source code
COPY . .

# Build files
RUN npm run build
