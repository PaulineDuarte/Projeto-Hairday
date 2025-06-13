## PROJETO DE AGENDAMENTO DE SALÃO
É um simples projeto desenvolvido com um servidor json para realizar funções básicas de um agendamento de salão de beleza, as funções que apresenta são : Marcar um horario, mostrar os horários disponíveis e os horários indisponníveis, e mostrar os horarios de datas futuras.

### Para rodar a aplicação é necessário fazer a instalação de alguns pacotes. 
1º verifique se você tem o node para conseguir instalar os pacotes. 

**utilizar o Json server**

npm i json-server@1.0.0-alpha.21

**instalar o webpack** 

 npm i webpack@5.89.0 webpack-cli@5.1.4 --save-dev

**verificar se tem algum erro no projeto**

npm run build 

**instalar o webpack server** 

npm i webpack-dev-server@4.15.1 --save-dev

**Carregar o html**

npm i html-webpack-plugin@5.6.0 --save-dev

**carregar fav icon**

npm i style-loader@3.3.3 css-loader@6.8.1 --save-dev

**Instalar plugin para copiar os ícones para aplicação** 

npm i copy-webpack-plugin@11.0.0 --save-dev

**incluir o babel**
npm i babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7 --save-dev 
