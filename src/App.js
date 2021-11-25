import React, {useState} from 'react'
import menuList from './data';
import Menus from './Menu';
import Category from './Categories';



function App() {
  const newCat = ['all',...new Set(menuList.map(list =>list.category))];

  const [menu,setMenu] = useState(menuList);
  const [category] = useState(newCat)

 

  /* Filter catgory based on the argument recieved when the function is fired */
  const filterCategory = category =>{
    if (category === 'all'){
      setMenu(menuList);
      return;// Return nothing inorder to skip the rest code
    }

    const newCat = menuList.filter(cat => cat.category === category);
    setMenu(newCat);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItem={filterCategory} category={category} />
         <Menus  menu={menu} />
      </section>
    </main>
  );
}

export default App;
