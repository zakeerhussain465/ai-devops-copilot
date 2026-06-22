const ec2Template = `
AWS EC2 DEPLOYMENT

1. Launch Ubuntu EC2

2. Open Security Groups:
   - SSH (22)
   - HTTP (80)
   - HTTPS (443)

3. Connect:

ssh -i key.pem ubuntu@public-ip

4. Update Server

sudo apt update

5. Deploy Application
`;

module.exports = ec2Template;