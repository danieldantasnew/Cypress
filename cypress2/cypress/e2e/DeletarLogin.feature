@create_quotation

Cenário: 
	Dado que eu estou na tela principal
	Quando preencho 'Username'
	E preencho o 'Password'
	E clico no botão 'Login'
	Então o login é realizado
	Quando clico no botão delete
	Então o usuário é deletado
	E quando clico no botão Logout
	Então o usuário faz logout
	Quando estou na tela principal novamente
	Preencho o 'Username'
	E preencho o 'Password'
	Então o login não é realizado