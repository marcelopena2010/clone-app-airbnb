# clone-app-airbnb
Clonando o site da Airbnb

#INICIO PARA UTILIZAR
npm install 

npm install -g @angular/cli

npm fund

ng add @angular/material


#CRIAR UM COMPONENTE
ng generate component "nome do componente"

#O PROJETO NÂO TEM ARQUIVO "app.module.ts"
#Criar esse codigo
ng generate component "nome do componente" --standalone

#MIGRAÇÂO
dotnet ef migrations remove
dotnet ef database update
dotnet ef migrations add InitialCreate
dotnet ef database update

