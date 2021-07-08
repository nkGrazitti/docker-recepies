#basic alpine image stored in SU harbor
FROM cr.searchunify.com/base-images/node:latest
WORKDIR /home/docker-restart
COPY package*.json ./

# RUN npm install
RUN npm install

COPY . .
EXPOSE 5000
CMD [ "node", "test.js" ]