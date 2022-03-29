///<reference types - "cypress">



import POappointment from "../PageObject/appointmentPO"

describe('Challenge',function(){

    //test case

    beforeEach(function(){
        cy.fixture('challenge/testdata').then(function (data) {
            this.data=data
            //cy.log('DATA: ',this.data.pet)
        })
         }
         )   



it('validate form fields',()=>{
    
    POappointment.loadPage()
    POappointment.appNamelbl.should('be.visible');
    POappointment.titlelbl.should('be.visible');
    POappointment.petNametb.should('be.visible');
    POappointment.ownerNametb.should('be.visible');
    POappointment.datetb.should('be.visible');
    POappointment.timetb.should('be.visible');
    POappointment.symptomstb.should('be.visible');
    POappointment.addAppoinmentbtn.should('be.visible');
    POappointment.dynamictitlelbl.should('be.visible').contains('THERE ARE NO APPOINTMENTS',{matchCase:false});
})

it('validate that appointments can be deleted',function(){

    //POappointment.loadPage()

    POappointment.petNametb.type(this.data.pet);
    POappointment.ownerNametb.type(this.data.owner);
    POappointment.datetb.type(this.data.date);
    POappointment.timetb.type(this.data.time);
    POappointment.symptomstb.type(this.data.symptoms);
    POappointment.addAppoinmentbtn.click();
    POappointment.dynamictitlelbl.should('be.visible').contains('MANAGE YOUR APPOINTMENTS',{matchCase:false});
    POappointment.deletebtn.click();
    POappointment.deletebtn.should('not.exist');
    

})

it('validate that appointments can be created',function(){



    POappointment.petNametb.type(this.data.pet);
    POappointment.ownerNametb.type(this.data.owner);
    POappointment.datetb.type(this.data.date);
    POappointment.timetb.type(this.data.time);
    POappointment.symptomstb.type(this.data.symptoms);
    POappointment.addAppoinmentbtn.click();
    POappointment.dynamictitlelbl.should('be.visible').contains('MANAGE YOUR APPOINTMENTS',{matchCase:false});
    POappointment.validateAppointment(this.data);

})

it('validate that appointments cannot be created empty',function(){

    POappointment.petNametb.clear();
    POappointment.ownerNametb.clear();
    POappointment.datetb.clear();
    POappointment.timetb.clear();
    POappointment.symptomstb.clear();
    POappointment.addAppoinmentbtn.click();
    POappointment.alert.should('be.visible').contains('ALL FIELDS ARE REQUIRED',{matchCase:false});
    

})



})