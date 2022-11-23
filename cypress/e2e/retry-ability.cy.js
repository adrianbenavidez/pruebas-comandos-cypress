describe('Sesion de Retry-Ablility',function(){

    beforeEach(function(){
        cy.visit('https://demoqa.com/automation-practice-form'); //Comando
        cy.get('input#firstName')
        .type('Adrian')
    })

    it('Probando caja de texto',()=>{
        cy.get('input#firstName')
        .should('have.text','Adrian')
    });


});