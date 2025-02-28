import './Comp3.css';
const user =
{ 
   name :'Ajay Sood',
   imageUrl :"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   imageSize : 100
}
export function Comp3 ()
{
     return(
        <>
        <h1> Heading in Comp3 </h1>
        <button> This is a button </button>
       <b> <h1> {user.name} </h1>
       <img src={user.imageUrl}
       style={{
         width:user.imageSize,
         height:user.imageSize
         }}/> </b>
        <br/>
        </>
     )
}
