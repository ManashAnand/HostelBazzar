# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /container

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json /container/

# Install dependencies
RUN npm install

# Copy the Prisma schema and generate the Prisma client
COPY prisma ./prisma/
RUN npx prisma generate


# Copy the rest of the application code to the working directory
COPY . /container/

# Build the Next.js application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
