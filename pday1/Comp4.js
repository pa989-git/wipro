const users =
[
     {name :"user1", id :101},
     {name :"user2", id :102},
     {name :"user3", id :103},
     {name :"user4", id :104}
];


function Comp4()
{
    const listUsers = users.map(user=>
          <li key={user.id}>
                {user.name}
            </li>
        
        );
    return(
        <>  <h1> List of users </h1>
          <ul> {listUsers} </ul>
        </>
    )
}

export default Comp4;
