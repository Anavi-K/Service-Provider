FROM node:18-alpine
WORKDIR /app
COPY package*.json . 
RUN npm install
COPY . .
EXPOSE 6000
ENV HOST=0.0.0.0
CMD ["node", "index.js"]
