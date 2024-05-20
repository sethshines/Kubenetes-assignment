# Dockerfile used for creating mongoDb Image.
# Use the official MongoDB image from Docker Hub
FROM mongo:latest

# Expose the MongoDB port
EXPOSE 27017

# Copy the MongoDB initialization script
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Optionally, add a volume for persistent data storage
VOLUME /data/db

# Set the default command to run when the container starts
CMD ["mongod"]