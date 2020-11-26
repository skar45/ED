import React,{useEffect, useState} from 'react'
import Table from './components/Table'
import ListContext from './components/utils/GlobalState'
import NavBar from './components/NavBar'

function App() {
  // Sajal: declaring it in here so we adjust teh whole object on changes
  const [userList, setUserList] = useState({
    list: [],
    saveList: function( newList ){ setUserList({ ...userList, list: newList }) }
  })

  // Sajal: useEffect is passed a *FUNCTION*
  useEffect( function(){
   getUserList()
  } ,[])
  

  
  async function getUserList() {
    const res = await fetch('https://randomuser.me/api/?results=30').then(r=>r.json())
    console.log( `[getUserList]`, res.results )
    // we want to keep the saveList() function so let's spread previous ojbect & update list
    userList.saveList( res.results );
  };
  
 


  return (
    <ListContext.Provider value={userList}>
    <NavBar></NavBar>
    <Table></Table>
    </ListContext.Provider>
  );
}




export default App;
