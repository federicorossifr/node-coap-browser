# Node Coap Browser
Node Coap Browser is a web application that lets you discover resources
over a CoAP-enabled host.<br> In addition you can issue GET,POST,PUT,DELETE
on the discovered resources and get relative response.

# Pre
Install NodeJS

# Instructions
<ul>
  <li>Clone the repository</li>
  <li> <kbd>npm install</kbd> </li>
</ul>

# Docker image
Docker image is available at: [federicorossir/coap-browser](https://cloud.docker.com/u/federicorossir/repository/docker/federicorossir/coap-browser)

'''ssh
docker run -d -p 8080:8080 federicorossir/coap-browser
'''
