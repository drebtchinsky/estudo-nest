FROM node:latest
LABEL author="Gabriel Drebtchinsky"
COPY . /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT ["npm", "start"]
EXPOSE 3000