FROM node:16.16.0

WORKDIR /app

COPY package* ./
COPY ./imagine-ui-react-0.3.4-beta.tgz ./
RUN npm i ./imagine-ui-react-0.3.4-beta.tgz

RUN npm install 

COPY . .

ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

RUN npm run build

EXPOSE 3000

CMD [ "npm","run", "start" ]
