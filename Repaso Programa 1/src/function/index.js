function Function () {
    return(
        <form>
        <label> "Hello World"</label>
        </form>
    )
}
 function FunctionP (props){
     return (
        <form>
        <label> "Hello {props.value}"</label>
            <div>
            <input type="text" name="name" />
            <input type="submit" value= "submit" />
            </div>
        </form>
     )
 }
export {Function, FunctionP}
