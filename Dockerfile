FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

RUN ls -ltrh

RUN npm run build

EXPOSE 3000

CMD [ "node", "./dist/Server.js" ]