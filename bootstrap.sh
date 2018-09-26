docker build -f ./Dockerfile server .
docker run -e MONGO_URL=mongodb://login:password@ds115533.mlab.com:15533/bot -p 80:3000 meteor
