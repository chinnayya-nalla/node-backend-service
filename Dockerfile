FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD [ "node", "./dist/Server.js" ]