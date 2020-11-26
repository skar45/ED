import React, {useContext} from 'react';
import ListContext from './utils/GlobalState'

function Table(){
    // const [result, setResult] = useState({})
    //const [users,dispatch] = useReducer(changeState, url())
    const { list } = useContext(ListContext)
    
    console.log("loading: ", list)
    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Picture</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                </tr>
            </thead>
            
            {list.map(user=>{
                    return (<tbody>
                            <td><img src={user.picture.thumbnail}></img></td>
                            <td >{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            </tbody>
                            )
                    })} 
            
        </table>
    )
}




  


export default Table