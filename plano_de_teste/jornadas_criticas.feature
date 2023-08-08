#language: pt
#coding: utf-8

# Jornadas Críticas:
# - Login: Meio de acesso dos clientes às plataformas. O seu bloqueio impossibilita todo e qualquer possibilidade do cliente consultar sua conta e realizar negociações, impactando a confiança do cliente e a entrada de dinheiro para a companhia.
# - Abertura de conta: Meio de entrada de novos clientes. Qualquer falha nesse fluxo pode impactar a confiança do cliente logo na entrada e seu bloqueio pode ser determinante para a aquisição desse cliente.
# - Negociação: Meio de faturamento da companhia. Problemas nesse fluxo podem impactar a confiança do cliente, principalmente quando se trata de inconsistências nos valores exibidos ou impossibilidade de efetivar uma ordem no momento que o cliente precisa.

Funcionalidade: Negociação de Fundos
    Como cliente da Avenue
    Gostaria de realizar negociação de Fundos de investimentos ofertados
    Para que eu possa ter o aumento da minha carteira na corretora

    Contexto: 
        Dado que estou logado no portal da Avenue

    Cenário: Consultar listagem de Fundos disponíveis para investimento
        Quando navego até a tela de Fundos de investimentos
        Então devo ver listagem de ofertas de Fundos de Investimentos

    Cenário: Realizar busca válida na listagem de Fundos
        E navego até a tela de Fundos de investimentos
        Quando realizo uma busca na listagem com dados válidos
        Então devo ver listagem exibir somente ofertas que atendam a busca realizada

    Cenário: Realizar busca inválida na listagem de Fundos
        E navego até a tela de Fundos de investimentos
        Quando realizo uma busca na listagem com dados inválidos
        Então devo ver listagem ser exibida vazia

    Cenário: Aplicar em fundo indisponível para aplicação
        E navego até a tela de Fundos de investimentos
        Quando escolho um fundo indisponível para aplicação
        E botão deve estar desabilitado para aplicação

    Cenário: Aplicar em fundo com sucesso
        E navego até a tela de Fundos de investimentos
        Quando escolho um fundo disponível para aplicação
        E solicito a aplicação informando dados válidos
        Então devo conseguir efetivar a aplicação no produto

    Cenário: Aplicar em fundo informando valor maior que o saldo disponível
        E navego até a tela de Fundos de investimentos
        Quando escolho um fundo disponível para aplicação
        E solicito a aplicação informando um valor maior que o saldo disponível
        Então devo ver mensagem de saldo insuficiente

    Cenário: Resgatar fundo informando valor maior que a posição em carteira
        E navego até a tela de Fundos de investimentos
        Quando escolho um fundo que possuo aplicado na minha carteira
        E solicito o resgate informando um valor maior que a posição em carteira
        Então devo ver mensagem de valor insuficiente para resgate

    Cenário: Resgatar fundo em carteira com sucesso
        E navego até a tela de Fundos de investimentos
        Quando escolho um fundo que possuo aplicado na minha carteira
        E solicito o resgate informando dados válidos
        Então devo conseguir efetivar o resgate da minha posição em carteira