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

  it('Selecionar a opção forms e preencher os dados', ()=>{
    cy.get(':nth-child(2) > .group-header > .header-wrapper').click();
    cy.wait(200);
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('#firstName').type('Daniel Teste 1');
    cy.get('#lastName').type('Dantass');
    cy.get('#userEmail').type('teste@hotmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get('#userNumber').type('8399999999');
    cy.get('.subjects-auto-complete__value-container').type('testestestsetes');
    cy.get('.subjects-auto-complete__value-container').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click();
    cy.get('#currentAddress').type('Algum texto para não ficar em branco');
    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-4-option-0').click();
  });

  it('Selecionar Alerts, Frame & Windows e testar se o Browser Windows está funcionando', ()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('#tabButton').click();
    cy.get('#windowButton').click();
    cy.get('#messageWindowButton').click();
  });

  it('Verifica se o botão Frames está funcionando', ()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
	  cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click();
  });

  it('Verifica se o botão Nest Frames está funcionando', ()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
	  cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click();
  });

  // it('Selecionar Alerts, Frame & Windows e testar se o Alerts está funcionando', ()=>{
  //   cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
  //   cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click();
  //   cy.get('#alertButton').click();
  //   cy.get('#alertButton').click();
  //   cy.get('#confirmButton').click();
  //   cy.get('#promtButton').click();
  // });DEIXAR COMO ÚLTIMOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  it('Selecionar Alerts, Frame & Windows e testar se o Modal Dialogs está funcionando', ()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click();
    cy.get('#showSmallModal').click();
    cy.get('#closeSmallModal').click();
    cy.get('#showLargeModal').click();
    cy.get('#closeLargeModal').click();
  });

  it('Selecionar Widgets e testar se Accordian está funcionando', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-0').click();
    cy.get('#section1Heading').click();
    cy.get('#section2Heading').click();
    cy.get('#section3Heading').click();
  });

  it('Selecionar Widgets e testar se Data Picker está mostrando a data e horário atual a partir do click', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-2').click();
  });

  it('Selecionar Widgets e testar se Progress Bar está funcionando a barra a partir do click no start e stop', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click();
    cy.get('#startStopButton').click();
    cy.wait(3000);
    cy.get('#startStopButton').click();
  });

  it('Selecionar Widgets e testar se funciona todas as opções de Tabs', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-5').click();
    cy.get('#demo-tab-what').click();
    cy.get('#demo-tab-origin').click();
    cy.get('#demo-tab-use').click();
  });

  it('Selecionar Widgets e testar se o Hover da Tool tips está funcionando', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-6').click();
    cy.get('#toolTipButton').trigger('mouseover');
    cy.wait(600);
    cy.get('#toolTipTextField').trigger('mouseover');
  });

  it('Selecionar Widgets e testar se o hover dos Menus está funcionando', ()=>{
    cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
    cy.get(':nth-child(4) > .element-list > .menu-list > #item-7').click();
    cy.get('#nav > :nth-child(1) > a').trigger('mouseover');
    cy.get('#nav > :nth-child(2) > :nth-child(1)').trigger('mouseover');
    cy.wait(600);
    cy.get('#nav > :nth-child(3) > a').trigger('mouseover');
  });

  // it('Selecionar Widgets e depois em Select Menu e testar se a opção Select value funciona', ()=>{
  //   cy.get(':nth-child(4) > .group-header > .header-wrapper').click();
  //   cy.get(':nth-child(4) > .element-list > .menu-list > #item-8').click();
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-0-0').click();
  //   cy.wait(600);
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-0-1').click();
  //   cy.wait(600);
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-1-0').click();
  //   cy.wait(600);
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-1-1').click();
  //   cy.wait(600);
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-2').click();
  //   cy.wait(600);
  //   cy.get('#withOptGroup > .css-yk16xz-control > .css-1hwfws3').click();
  //   cy.get('#react-select-5-option-3').click();
  // });
})