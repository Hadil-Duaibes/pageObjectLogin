describe('API test', () => {
    it('GET - read',() => {  
        Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')      
        cy.request('/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })
    })
    it('Post - create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create' , item)
        
    })  

    it.only("POST", () => {
     cy.request({
        method: "POST",
        url: "https://api.realworld.io/api/articles",
        body: {article: 
            {title: "y",
             description:"hh",
             body:"ff",
             tagList:[] } },
        headers: {
            authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmFoZGFpYmVzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWFyYWgtZGFpYmVzIiwiaWF0IjoxNjc0MDU1NjQ2LCJleHAiOjE2NzkyMzk2NDZ9._NIPm-50TkJrJB_MCWFhHp1GTzzbcFNNc3sim1m0WcA"
        }

     }).then((response) => {
        expect(response).to.have.property('status',200)
     })
     failOnStatusCode: false
    })

})