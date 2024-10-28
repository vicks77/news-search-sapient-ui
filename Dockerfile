# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React application using Nginx
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx HTTP port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
