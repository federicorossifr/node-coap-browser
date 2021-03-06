# Node Coap Browser
Node Coap Browser is a web application that lets you discover resources
over a CoAP-enabled host.<br> In addition you can issue GET,POST,PUT,DELETE
on the discovered resources and get relative response.

It is based on the [coap-api](https://www.npmjs.com/package/coap-api) package (source available [here](https://github.com/federicorossifr/node-coap-api) on Github)

# Local installation
Firstly, clone the repository
```ssh
git clone https://github.com/federicorossifr/node-coap-browser.git
```
Then, if you have Node installed, you can install the dependenecies by issuing:
```ssh
npm install
```
Finally start the service by running:
```ssh
npm start
```

# Docker image
[![](https://images.microbadger.com/badges/version/federicorossir/coap-browser.svg)](https://cloud.docker.com/u/federicorossir/repository/docker/federicorossir/coap-browser)
[![](https://img.shields.io/docker/pulls/federicorossir/coap-browser.svg)](https://cloud.docker.com/u/federicorossir/repository/docker/federicorossir/coap-browser)


If you do not have Node, or for any reason you prefer a Docker deployment, you can build the Docker image directly from
project root:
```ssh
docker build . -t <image_name>
```
Then you can start the service:
```ssh
docker run -d -p 8080:8080 <image_name>
```

Anyway, there's always an updated version of the Docker image available at: [federicorossir/coap-browser](https://cloud.docker.com/u/federicorossir/repository/docker/federicorossir/coap-browser).
To run it:
```ssh
docker pull federicorossir/coap-browser
docker run -d -p 8080:8080 federicorossir/coap-browser
```


# Hands-on examples
For an in-depth example of interoperability between this software and others CoAP stacks (including IPv6 versions) look at https://github.com/federicorossifr/coap-publish-subscribe
