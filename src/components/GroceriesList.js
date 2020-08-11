import React from "react"
import { Label, Checkbox } from "@marigold/components"

const GroceriesList = props => {
  const listItems = props.items.map(item => (
    <Label htmlFor={item.id}>
      <Checkbox
        id={item.id}
        value={item.id}
        checked={item.checked}
        onClick={() => {
          props.handleItemInput(item)
        }}
      />
      {item.name}
      <br />
    </Label>
  ))
  return <div>{listItems}</div>
}

export default GroceriesList
