const Card = ({nombreProyecto}) => {

  return(
        <div class="max-w-xs py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
            <img class="w-20 h-20 object-cover rounded-full border-2 border-green-200" src="https://media.istockphoto.com/id/1182692386/vector/a-traffic-light-in-a-flat-style-cartoon-style.jpg?b=1&s=170667a&w=0&k=20&c=wY2-GPjtGK95DS21HhuRawpwq2YxYC_Zn3Z6jiUwfxE="/>
            </div>
            <div>
            <h2 class="text-gray-800 text-3xl font-semibold">{nombreProyecto}</h2>
            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            </div>
            <div class="flex justify-end mt-4">
            <button class="py-2 px-4 shadow-md no-underline rounded-full bg-green-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Ver mas</button>  
            </div>
        </div>
  )
}

export default Card