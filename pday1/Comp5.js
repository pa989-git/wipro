function Hello()
{
    console.log("Button has been clicked");
} 
export default function Comp5()
{
    return(
         <button onClick={Hello}> Click this button </button>
    )
}
