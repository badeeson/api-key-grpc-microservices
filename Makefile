# Makefile

# Command to start both services
start-all:
	npm run start api-key-service & npm run start grpc-client
