describe('teste', () => {
  it('Deve visitar a página', () => {
    cy.visit('https://demoqa.com/');
    cy.scrollTo(0, 500);
  });

  it('Deve ir até elements e selecionar textbox e preenche-lo', ()=>{
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
    cy.wait(800);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').type('Daniel Dantas');
    cy.wait(200);
    cy.get('#userEmail').type('teste@gmail.com');
    cy.wait(200);
    cy.get('#currentAddress').type('Isso é apenas um teste');
    cy.wait(200);
    cy.get('#permanentAddress').type('Outro Teste');
    cy.wait(200);
    cy.get('#submit').click();
    cy.wait(800);
  });

  it('Selecionar Checkbox e verificar se funciona',()=>{
    cy.wait(500);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    cy.get('.rct-checkbox > .rct-icon').click();
  });

  it('Deve clicar em Radio Button e testar se os radios estão funcionando', ()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.wait(800);
    cy.get(':nth-child(3) > .custom-control-label').click();
  });

  
  it('Deve clicar em web tables e adicionar um novo elemento', ()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Daniel');
    cy.get('#lastName').type('Dantas');
    cy.get('#userEmail').type('teste@gmail.com');
    cy.get('#age').type('18');
    cy.get('#salary').type('1800');
    cy.get('#department').type('Desenvolvedor');
    cy.get('#submit').click();
  });


  it('Deve remover um elemnto de web tables', ()=>{
    cy.wait(800);
    cy.get('#delete-record-1 > svg > path').click();
  });

  it('Deve editar um elemnto de web tables', ()=>{
    cy.get('#edit-record-4 > svg').click();
    cy.get('#lastName').type(' Teste'); 
    cy.wait(800);  
    cy.get('#submit').click();
  });

  it('Ir para buttons e realizar o teste dos botões', ()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
    cy.get('#doubleClickBtn').dblclick();
    cy.wait(800);
    cy.get('#rightClickBtn').rightclick()
  });
  it('Ir para links e verificar se os links estão funcionando', ()=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click();
    cy.get('#simpleLink').click();
    cy.wait(600);
    cy.get('#dynamicLink').click();
    cy.wait(600);
    cy.get('#created').click();
    cy.wait(600);
    cy.get('#no-content').click();
    cy.wait(600);
    cy.get('#moved').click();
    cy.wait(600);
    cy.get('#bad-request').click();
    cy.wait(600);
    cy.get('#unauthorized').click();
    cy.wait(600);
    cy.get('#forbidden').click();
    cy.wait(600);
    cy.get('#invalid-url').click();
  });
})