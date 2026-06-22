const nginxTemplate = `
INSTALL NGINX

sudo apt update

sudo apt install nginx -y

START NGINX

sudo systemctl start nginx

ENABLE NGINX

sudo systemctl enable nginx

CHECK STATUS

sudo systemctl status nginx
`;

module.exports = nginxTemplate;