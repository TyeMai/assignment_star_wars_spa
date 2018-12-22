import React from 'react';

const SearchHelper = (props) => {
  const {searchTerm, entries } = props

  return entries.filter(entry => {
    if(entry.Object.key.includes(searchTerm) || entry.Object.value.includes(searchTerm)){
      return entry
    }
  })


}
