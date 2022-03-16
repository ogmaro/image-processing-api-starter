# image-processing-api-starter

<!--
formatting and lint done
project setupdone


-->

## Project Description

#### As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

### Project tools and frameworks

This api was built using **TypeScript** & **NodeJS** & **ExpressJS** & **Sharp** & **got**

### Instructions

To run the site you need to run it on your localhost server by downloading node.js and you need to write on terminal the following codes:

### installation and running

to install the dependencies and devdependencies npm install

to transpile the typeScript codes into JavaScript codes and save them in the ./build folder. npm run build

to start the server running on port 3000. npm run start

Testing, Linting and prettier
to lint you need to write the following code : npm run lint

to run prettier you need to write the following code : npm run prettier

to test you will need to write the following code : npm run test

### API Documentation
_https://documenter.getpostman.com/view/11537019/UVsMtQcF#69e1d102-68d8-4bf1-a96d-228fb29c1db4_

project End Points
/api/v1/conveter: home page endpoint

HTTP Method: Get
/api/v1/image?filename=fjord&type=jpeg&width=300&height=400: image processing endpoint

HTTP Method: GET
Query Param: width, height, filename.
filename: the specific image you are requesting.

width and height: dimension of the image in pixel

Available images
encenadaport
fjord
icelandwaterfall
palmtunnel
santamonica

### Functionality
you can change the query parameters with width, height  and quality as long as it is from the above listed images
images that got processed will be saved on your localdisk.

any processed image will be cached and it wont be reprocessed to the same parameters again
