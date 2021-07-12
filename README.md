# hello-world

A simple Hello World Foxx service

## License

The Apache-2.0 license. For more information, see the accompanying LICENSE file.


## how to run
`npm i -g foxx-cli`  // install the cli from here https://github.com/arangodb/foxx-cli <br>
`docker run -p 8529:8529 -e ARANGO_ROOT_PASSWORD=openSesame arangodb/arangodb:3.7.12` <br>
`echo openSesame > .password` <br>
`foxx install -p .password --server http://localhost:8529 --dev /hello`  // to install the foxx service <br>

to update the server with new changes, run  <br>
`foxx -p .password upgrade /hello`

to view the request, run postman at this url
`http://localhost:8529/_db/_system/hello`

*note you need a file containing the password of the server in plain text.* <br>
*see here for documentation. https://changelogs.md/github/arangodb/foxx-cli/* <br>

