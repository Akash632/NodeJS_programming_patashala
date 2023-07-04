const updateController = (req,res)=>{
    const {firstName,lastName} = req.body;

    if(!firstName || !lastName) {
        res.send({message:"enter correct details"})
    }else{
    let updateUser = userData.filter(({id})=>id===req.params.id);

    if(updateUser){
        updateUser['firstName']=firstName;
        updateUser['lastName']=lastName;
    }

    const finalUsers = [...userData.users,updateUserUser];

    userData.setUsers(finalUsers);
    

    res.json(finalUsers);
    }
}