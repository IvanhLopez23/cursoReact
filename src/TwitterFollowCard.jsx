const TwitterFollowCard = ({children,nombreUsuario,seguir}) =>{

  const imagenSrc = `https://unavatar.io/${nombreUsuario}` 

  return(
      <article class="flex items-center text-sm justify-between mb-3">
        <header class="flex items-center gap-1">
          <img class="w-12 h-12 rounded-full" src={imagenSrc}/>
          <div class="flex-col flex">
            <strong>{children}</strong>
            <span class="opacity-10">@{nombreUsuario}</span>
          </div>
        </header>
        <aside>
          <button class="mx-6 bg-white rounded-full py-1.5 px-4 font-bold text-black shadow-md shadow-white">
            Seguir
          </button>
        </aside>
      </article>
  )
}

export default TwitterFollowCard