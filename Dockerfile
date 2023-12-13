FROM node:18.19.0-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

RUN npm install

CMD ["npm", "run", "start"]