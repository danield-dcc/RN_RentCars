quick fix for react-calendars today
https://github.com/wix/react-native-calendars/issues/1652

json server dev ser instalado globalmente
npm install -g json-server
json-server ./src/service/server.json

para acessar pelo dispositivo físico
evitar usar localhost para testar no celuluar, pois ele está sempre apontando para a máquina
json-server ./src/service/server.json --host 192.168.0.249(end ip do pc) --port 3333 --delay 700

pasta dtos
interface relacionadas aos dados da api
para pegar estes dados basta pegar os dados brutos do JSON que retornam no browser
