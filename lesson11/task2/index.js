const sortContacts = (contacts, isAsc = true) => {
    if (!Array.isArray(contacts)) return null;
    return contacts.sort((a, b) => {
        if (isAsc) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
};


// const sortContacts =(contacts,boolen) =>{
    
//     if(!Array.isArray(contacts)){
//         return null;
//     }

//     const result= contacts 
//       .sort((a,b) => {
//           if(boolen ===true || boolen ===undefined){

//             return a.name.localeCompare(b.name);
//           } else {
//          return b.name.localeCompare(a.name);
//           }
      
//        } ) ;
//        return result;
// };