const jenkinsTemplate = `
STEP 1: Update Packages

sudo apt update

STEP 2: Install Java

sudo apt install openjdk-17-jdk -y

STEP 3: Install Jenkins

sudo apt install jenkins -y

STEP 4: Start Jenkins

sudo systemctl start jenkins

STEP 5: Enable Jenkins

sudo systemctl enable jenkins
`;

module.exports = jenkinsTemplate;