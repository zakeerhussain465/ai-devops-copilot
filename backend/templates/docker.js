const dockerTemplate = `
INSTALL DOCKER

sudo apt update

sudo apt install docker.io -y

CHECK VERSION

docker --version

RUN NGINX CONTAINER

docker run -d -p 80:80 nginx
`;

module.exports = dockerTemplate;