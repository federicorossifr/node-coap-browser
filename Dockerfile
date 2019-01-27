FROM node:8-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
COPY ./ ./
RUN npm --unsafe-perm install
EXPOSE 8080
CMD [ "npm", "start" ]
