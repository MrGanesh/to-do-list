import React from 'react'
import './ListItems.css'
import FlipMove from 'react-flip-move'
function ListItems(props){
 const items = props.items

 const listItems = items.map(item => (
   <div className="list" key={item.key}>
      <p>
          <input type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => props.setUpdate(e.target.value, item.key)}
            />

        <span className="deleteIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16" onClick={() => props.deleteItem(item.key)}>
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
            </svg>
        </span>
      </p>
   

   </div>
 ))
 
  return(
    <div>
    <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  )
}

export default ListItems
