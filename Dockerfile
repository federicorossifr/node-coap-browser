FROM node:8

COPY ./ ./
RUN npm --unsafe-perm install
EXPOSE 8080
CMD [ "npm", "start" ]