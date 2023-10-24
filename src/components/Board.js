import "../style/board.css"
export default function Board({cat, emoji}){
    let w = true
    return(
        <div className="board" style={ {minWidth:"200px",backgroundColor:"#212121",borderRadius:"20px",padding:"10px"} }>
            <h2>{w?cat.replace("_", " "):"błąd"}</h2>
            <h1>{emoji}</h1>
        </div>
    )
}