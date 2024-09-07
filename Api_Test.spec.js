describe('api_tests', () => {

    const baseURL = "https://jsonplaceholder.typicode.com";
    it('GET', () => {

         cy.request({
                
                method:'GET',
                url:baseURL + '/posts',
                headers:{
                    'Content-Type':'application/json'
                },
                timeout:120000
            }).then((response)=>{
                expect(response.status).to.eq(200)
            })
        
    });

    it('POST', () => {

        cy.request({
            
            method:'POST',
            url:baseURL + '/posts',
            body:{
                "title": "New Post",
                "body": "This is the body of new post",
                "userId": 1
            },
            headers:{
                'Content-Type':'application/json'
            },
            timeout:120000
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body));
            
        });

    });

    it('PUT', () => {

        cy.request({
            
            method:'PUT',
            url:baseURL + '/posts/1',
            body:{
                "title": "Update Post",
                "body": "This is the update body of the post",
                "userId": 1
            },
            headers:{
                'Content-Type':'application/json'
            },
            timeout:120000
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
            
        });

    });

    it('DELETE', () => {

        cy.request({
            
            method:'DELETE',
            url:baseURL + '/posts/1',
           
            headers:{
                'Content-Type':'application/json'
            },
            timeout:120000
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
            
        });

    });

});