
class POappointment {

   loadPage() {
       //Page Object
       cy.visit("http://localhost:3000/");

       this.appNamelbl.contains('APPOINTMENT MANAGEMENT', {
           matchCase: false
       }).should('be.visible');
   }

   get appNamelbl() {
       return cy.get('[data-testid="app-name"]');
   }

   get titlelbl() {
       return cy.get('[data-testid="Title"]');
   }

   get petNametb() {
       return cy.get('[data-testid="pet"]');
   }
   get ownerNametb() {
       return cy.get('[data-testid="owner"]');
   }
   get datetb() {
       return cy.get('[data-testid="date"]');
   }
   get timetb() {
       return cy.get('[data-testid="time"]');
   }
   get symptomstb() {
       return cy.get('[data-testid="symptoms"]');
   }
   get addAppoinmentbtn() {
       return cy.get('[data-testid="btn-submit"]');
   }

   get dynamictitlelbl() {
       return cy.get('[data-testid="dynamic-title"]');
   }

   get appointmentCreated() {
       return cy.get('[data-testid="appointment"]');
   }

   get deletebtn() {
       return cy.get('[data-testid="btn-delete"]');
   }

   get alert(){
       return cy.get('[data-testid="alert"]');
   }

   

   validateAppointment(jsondata) {
    this.appointmentCreated.each(($appointmentCreated,$index) => {
   
               console.log ($appointmentCreated.text());


               if($appointmentCreated.text().includes('Pet: '+jsondata.pet)
               &&$appointmentCreated.text().includes('Owner: '+jsondata.owner)
               &&$appointmentCreated.text().includes('Date: '+jsondata.date)
               &&$appointmentCreated.text().includes('Time: '+jsondata.time)
               &&$appointmentCreated.text().includes('Symptoms: '+jsondata.symptoms)){
                   
                this.deletebtn.eq($index).should('be.enabled');
                return false;

               }




   
                  })
          }
      
/*

   validateAppointment1(jsondata) {  
        this.appointmentCreated.each(($appointmentCreated,$i) => {

            if(!this.dataset($appointmentCreated,jsondata)){
                this.deletebtn.eq($i).should('be.enabled');
                return false;
            }

          })
    
}

    dataset(appointmentCreated,jsondata){
        for (const [key, value] of Object.entries(jsondata)) {
            
            let count = Object.keys(jsondata).length;
            
            if(!this.item(appointmentCreated,count,key,value) ){
                continue;
            }else{
                return false;
            }

        }
    }

    item(appointmentCreated,count,key,value){
        let s = key + ": " + value;
        let acc=0;
        
        cy.get(appointmentCreated).find('p').each(($p) => {
            console.log("acumalador" + acc);

            acc = ++acc;
            if (acc <= count) {
                if (s.includes($p.text())) {
                 
                    console.log("Comparado " + $p.text() + " " + s);
                    acc = ++acc;                 
                    return false;

                }
            }else{
                
                return true;}
        })
    }
   */
    


}
export default new POappointment()