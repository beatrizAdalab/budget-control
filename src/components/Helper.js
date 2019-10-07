
const Helper =(budget, remainder)=>{

    let classColor;

    if((budget / 4 ) > remainder){
        classColor='text-white bg-danger'
    } else if((budget / 2 ) > remainder){
        classColor='text-white bg-warning'

    } else{
        classColor= 'text-white bg-success'
    }

    return classColor

}

export default Helper