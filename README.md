## Instalação

- Instale o NodeJS, MongoDB
- Instale `npm` ou` yarn`
- Renomeie `.env.example` para` .env`
- Cumprir dados `.env`
- Criar collection `enjoying`
- Inicie o MongoDB
- Execute `yarn run dev` ou` npm run dev`
- Verifique `http: // localhost: 3000 / api / status` para ver se funciona

## Com Docker
- Basta executar `docker-compose up` para iniciar o servidor

## Observe ao definir transportador em `.env`

- TRANSPORTER_SERVICE pode ser, por exemplo, `gmail`, mas também SMTP do seu servidor
- TRANSPORTER_EMAIL é um email do qual os emails serão enviados
- TRANSPORTER_PASSWORD é a senha do e-mail acima


