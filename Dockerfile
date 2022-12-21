FROM node:16.3.0-alpine

WORKDIR /app
COPY . .

EXPOSE 80
CMD ["node", "src/server.js"]
