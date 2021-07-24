<div align="center">
  <h1>:camera: node-upload-example</h1>
  <p>Minimal application developed with Node.js and TypeScript used to upload images to Amazon S3</p>
</div>

## Tech

- [Node.js][nodejs] - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript][typescript] - TypeScript is a superset of JavaScript that compiles to clean JavaScript output
- [Express][express] - Fast, unopinionated, minimalist web framework for Node.js
- [Amazon S3][s3] - Object storage built to store and retrieve any amount of data from anywhere
- [MongoDB][mongo] - Document-oriented NoSQL database used for high volume data storage

## Getting started

The application supports uploading images to both local storage and Amazon S3. By default it'll be storing the images locally for simplicity, but if you want to test it using S3 you'll need to setup an AWS account.

In order to run the project you'll need to have [Node.js][nodejs] and [Yarn][yarn] installed in your machine. The posts are stored on a [MongoDB][mongo] database, so you also need a MongoDB instance configured locally or in the cloud.

```sh
# Clone repository
$ git clone https://github.com/danielccunha/node-upload-example.git
$ cd node-upload-example

# Populate environment variables
$ cp .env.example .env
$ nano .env

# Install dependencies
$ yarn

# Start the project in development mode
$ yarn dev
```

The only required environment variable is the `MONGO_URL` used to connect to MongoDB. If you want to use Amazon S3 you'll also need to populate the `AWS_*` variables and change the `STORAGE_TYPE` to `s3`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[nodejs]: https://nodejs.org/en/
[typescript]: https://github.com/microsoft/TypeScript
[express]: https://expressjs.com/
[s3]: https://aws.amazon.com/s3/
[mongo]: https://www.mongodb.com/
[yarn]: https://yarnpkg.com/
