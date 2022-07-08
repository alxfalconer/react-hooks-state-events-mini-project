import React from "react";

function CategoryFilter() {
  const buttons = categories.map((category) =>{
 
      <button
        key={category}
        className={className}
        onClick={() => onHandleCategory(category)}
      >{category}</button>}
    );
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    </div>
  );

export default CategoryFilter;
