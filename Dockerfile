FROM node:8-alpine

COPY ./ ./
RUN npm --unsafe-perm install
EXPOSE 8080
CMD [ "npm", "start" ]
