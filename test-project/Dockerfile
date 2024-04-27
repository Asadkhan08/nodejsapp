FROM node

WORKDIR usr/src/test-app

COPY package*.json ./

RUN npm install

copy . . 

EXPOSE 3000

CMD ["node", "server.js"]
