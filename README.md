# Projeto de automaçao de ambiente com docker-compose

este projeto configura um ambiente de desenvolvimento utilizando docker-compose com multiplos containers, incuindo uma aplicaçao simples em node.js e um banco de dados PostgreSQL, inclui o desafio extra de uma simulação CI/CD usando o serviço Watchtower para monitoramento e atualização continua dos containers

# estrutura principal do projeto

app.js: codigo da aplicação
docker-compose.yaml: arquivo de configuração do docker-compose
Dockerfile: arquivo de configurações do ambiente para rodar a aplicação no container
package.json: dependencias do projeto
README.md: explicação e instrução do ambiente

# serviços configurados

app: configurado para rodar tres instancias e disponivel na porta 5000
db: banco de dados PostgreSQL
watchtower: monitoramento, atualizações e reinicia containers, simulando uma etapa de CI/CD

# COMO USAR

1) clone o repositorio e entre na pasta 'projeto-automacao'
2) execute o comando para construir a imagem 'docker-compose up --build'
3) execute o seguinte comando para iniciar os containers: 'docker-compose up -d'
