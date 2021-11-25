import React from 'react';

const Categories = ({filterItem,category}) => {

  return (
    <div className="btn-container">
          {category.map((cat,index)=>{
    
            return <button
                      type="button"
                      className="filter-btn"
                      onClick={()=>filterItem(cat)}
                      key={index}
                      >{cat}
                  </button> 
          })}
    </div>
  );
};

export default Categories; 



























