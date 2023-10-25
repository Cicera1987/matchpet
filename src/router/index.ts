export const routes = {

    regras:{
        list: '/api/rules',
        postRules: '/api/rules',
        updateRule:(id:number) =>  '/api/rules/' + id,
    },
    variaveis:{
        list: '/api/variable',
        postVariables: '/api/variable',
        addValue: '/Api/addValue',
        deleteVariable: '/api/variable/:id',
    }
    
}