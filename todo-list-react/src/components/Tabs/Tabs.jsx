import React, {useState} from 'react';
import './style.css';

const TabItems = [
  {
    id: "active",
    label: 'Active'
  },
  {
    id: "done",
    label: 'Done'
  },
  {
    id: "deleted",
    label: 'Deleted'
  }
]

export function Tabs({setTab, activeTab}) {
  
  return(
    <div className='btns'>
      {TabItems.map(item => (
          <button 
            className={activeTab === item.id ? 'btn-app-selected' : "btn-app" }
            key={item.id}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
    </div>  
  )
}