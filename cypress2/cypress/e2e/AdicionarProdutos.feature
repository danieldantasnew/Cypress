@create_quotation

Cenário:
	Dado que estou na tela principal
	Quando clico em 'Add to cart'
	Então o produto é adicionado ao carrinho
	Dado que estou no carrinho
	Quando clico em ':nth-child(2)'
	Então é adicionado em mais um na quantidade dos produtos