import React, {useState} from 'react';
import foods from '../foods.json';


export default function Food() {

  const [formState, setFormState] = useState(false)
  const [newItem, setNewItem] = useState({
    name: "",
    calories: "",
    image: "",
    quantity: 0
  })
  const [item, setItem] = useState(foods)
  const [search, setSearch] = useState(item)
  const [today, setToday] = useState([])


  function handleChange(event){
    setNewItem({
      ...newItem,
      [event.target.name]:event.target.value
    })
  }

  function form(){
    return(
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add more food</h2>
    
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Name</label>
                <input name="name" id="username" type="text"
                onChange={(e)=>handleChange(e)}
                value={newItem.name}  
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Number of calories</label>
                <input name="calories" id="emailAddress" type="number"
                onChange={(e)=>handleChange(e)}
                value={newItem.calories} 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="password">Image</label>
                <input name="image" id="password" type="text"
                onChange={(e)=>handleChange(e)}
                value={newItem.image}  
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            
        </div>

        <div class="flex justify-end mt-6">
            <button onClick={(ev)=>submitForm(ev)} class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
    </section>
    )
  }

  function addFood(){
    setFormState(true)
  }

  function submitForm(event){
    event.preventDefault()

    setItem([
      ...item,
      newItem
    ])

    setSearch([
      ...item,
      newItem
    ])

    setFormState(false)
  }

  function searchEngine(event){
    
    const searchArr = search.filter((e)=>{
        return e.name.toLowerCase().includes(event.target.value.toLowerCase())
    })

    setItem(searchArr)

  }

  function addToday(event , elemento){
      event.preventDefault()
      const {name , calories} = elemento


      setToday([
          ...today,
          {
              name:name,
              calories:calories
          }
                  
      ])
  }


    return (
        <>
            <button onClick={()=>addFood()} className="w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                Add new food
             </button>
            {formState ? form() : null}
            <input name="search" type="text"
            onChange={(e)=>searchEngine(e)}
            class="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search"/>
            <div>
                <div>
                <h2 class="text-2xl font-semibold font-display text-gray-900 sm:text-3xl">
                    Todays food
                    {
                        today.map((e,id)=>{
                            return(
                                <>
                                <p className="text-sm">{e.name} calories: {e.calories} </p>
                                
                                </>
                            )
                        })
                    }
                </h2>
                </div>

            {item.map((e,id)=>{
                return(
                    <div key={id} className="max-w-sm mt-10  bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
                <div className="flex justify-items-stretch">
                    <div className="md:flex-shrink-0">
                    <img className="h-30 w-full object-cover md:w-48" src={e.image}/>
                    </div>
                    <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{e.name}</div>
                    <p className="mt-2 text-gray-500">{e.calories}</p>
                    </div>
                    <div className="mt-8">
                        <input className="w-10" type="number" value={e.quantity} />
                        <button
                        onClick={(ev)=>addToday(ev,e)}
                        type="submit" 
                        className="ml-3 px-4 py-1 text-lg text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            +
                        </button>
                    </div>
                    </div>
                </div>
                )
            })
        }
        </div>
        </>
    )
}


