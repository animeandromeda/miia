FROM node:14
VOLUME /anime
WORKDIR /usr/src/app/miia-stub
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm i
COPY . .
EXPOSE 5055
CMD [ "node" , "./app.js" ]
