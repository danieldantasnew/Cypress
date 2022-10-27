describe('teste', () => {
  it('Deve visitar a página de login do youtube', () => {
    cy.visit('https://www.tudogostoso.com.br/')
  });

  it('Deve clicar em criar conta para uso pessoal e realizar cadastro', () =>{
    cy.get('[jsname="WjL7X"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();

    cy.get('[jsname="RZzeR"] > .VfPpkd-StrnGf-rymPhb-b9t22c').click();

    cy.get('[jsname="Odb2Kd"] > .rFrNMe').type('Daniel');
    cy.get('[jsname="qlx7ve"] > .rFrNMe').type('Dantas');
    cy.get('[jsname="JIbuQc"] > .FliLIb > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
    cy.get('[jsname="JIbuQc"] > .FliLIb > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click().type('testedeumnovato@gmail.com');

    cy.get('#passwd').type('D#fksnmflksdnfjnsdkfjdn456645');
    cy.get('#confirm-passwd').type('D#fksnmflksdnfjnsdkfjdn456645');
    cy.get('#accountDetailsNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
    cy.get('#phoneNumberId', {timeout: 400}).type('oi');
  })
})