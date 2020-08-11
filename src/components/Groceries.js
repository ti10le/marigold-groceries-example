import React, { useState } from "react"
import GroceriesList from "./GroceriesList"
import { Button, TextInput } from "@marigold/components"
import { Add } from "@marigold/icons"

const Groceries = props => {
  const [name, setName] = useState("")

  const handleOnChange = event => {
    setName(event.target.value)
  }

  const handleOnClick = event => {
    event.preventDefault()
    if (name !== "") {
      props.addItem(name)
      setName("")
    }
  }

  return (
    <div>
      <br />
      <form onSubmit={props.addItem}>
        <TextInput
          id="addGrocery"
          placeholder="enter grocery"
          value={name}
          onChange={handleOnChange}
        />
        <br />
        <Button variant="primary.small" type="submit" onClick={handleOnClick}>
          <Add /> new Item
        </Button>
        <br />
        <br />
        <GroceriesList
          handleItemInput={props.handleItemInput}
          items={props.items}
        />
      </form>
    </div>
  )
}

export default Groceries
