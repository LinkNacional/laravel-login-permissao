# nomenclatura

## laravel/banco

-   No banco de dados e nomes que referenciam tabelas usar a snake case (nome_exemplo)
-   No laravel sem contato com o banco usar Camel case (nomeExemplo)
-   todos os nomes de variáveis/tabelas/classes/funções devem seguir os padrões estabelecidos pelo laravel,como nesse exemplo de tabelas com relacionamento muitos para muitos https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-table-structure

## quasar

-   sempre usar Camel case (nomeExemplo)

# arquitetura

## laravel/banco

-   as rotas devem ficar em routes/web.php(por questão de sessão autenticada não é possível usar o api.php para rotas sem causar bugs)

-   as rotas devem apontar sempre que possível para um controler respectivo a rota, para scripts que se encaixam em uma linha isso é opcional(sempre manter uma linha para cada rota)

-   manter um padrão nos midwares de primeiro os get que acessam as paginas do quasar,a requisição inicial para cada pagina retornando todas as informações para mostrar a pagina que iniciada com `/myapi` e terminam com `/request`,as rotas de comunicação com o banco com a rota iniciada com `/myapi`

-   sempre usar os http methods como recomendados sempre que possivel(GET,POST,PUT,DELETE).

-   para criar os midwares para verificar se o usuário tem autorização para aquele acesso use os `Gates` e `Polices` como exemplificado na documentação https://laravel.com/docs/8.x/authorization

-   sempre que finalizar um código criar testes unitários do código concluído https://laravel.com/docs/8.x/testing

-   o banco de dados está em `cloud.linknacional.com.br:3306` com o nome de linknac_laravel

## websocket

-   o websocket esta configurado para ser emitido por um evento, se for preciso trocar mais informações via websocket criar outro evento como o Hello(web.php:202) e receber as informações como no componente logUser.vue (https://beyondco.de/docs/laravel-websockets)

## quasar

-   sempre que for usar um estilo de componente(botão,card,header,footer,input) em mais de uma pagina criar um componente respectivo e reutilizar

-   nas tabelas sempre utilizar a logica de requisições do componente TableUsers para otimização do carregamento das paginas

-   ferramenta que são usadas mais de uma vez devem ser salvar em `src/boot` (ex.:axios)

-   analisar como salvar informações para todas as paginas, assim com a primeira requisição se pode salvar e usar as permissões do usuário em todas as paginas https://stackoverflow.com/questions/40896261/apply-global-variable-to-vuejs

# comandos

## laravel

-   `npm run dev` = builda o quasar e inicia o laravel
-   `npm run serve` = inicia o laravel
-   `npm run test` = inicia os testes
-   `npm run websockets` = inicia o websocket (sempre iniciar junto com o npm `npm run dev`)

## quasar

-   `npm run serve` = builda o quasar
-   `npm run lint` = corige o codigo de acordo com o es-lint
