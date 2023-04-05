import TwitterFollowCard from "./TwitterFollowCard"

const App =() =>{
  
  return(
    <div>
      <TwitterFollowCard seguir nombreUsuario="midudev">
        MiduGod Level
      </TwitterFollowCard>
      <TwitterFollowCard seguir={false} nombreUsuario="pheralb">
        PerxitaPay
      </TwitterFollowCard>

    </div>
  )
}

export default App