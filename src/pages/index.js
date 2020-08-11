import React, { useState } from "react"
import Groceries from "../components/Groceries"
import { MarigoldProvider } from "@marigold/system"
import b2bTheme from "@marigold/theme-b2b"
import { Alert, Heading, Text } from "@marigold/components"
import { Check } from "@marigold/icons"
import nextId from "react-id-generator"
import Layout from "../components/layout"
import SEO from "../components/seo"

const defaultItems = [
  { id: nextId(), name: "banana", checked: false },
  { id: nextId(), name: "apple", checked: false },
  { id: nextId(), name: "rice", checked: false },
  { id: nextId(), name: "beer", checked: false },
]

const IndexPage = () => {
  const [items, setItems] = useState(defaultItems)

  const handleItemInput = currentItem => {
    const newItem = items.map(item => {
      if (item === currentItem) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })
    setItems(newItem)
  }

  const addItem = name => {
    const newItem = { id: nextId(), name, checked: false }
    setItems([...items, newItem])
  }

  return (
    <MarigoldProvider theme={b2bTheme}>
      <Layout>
        <SEO title="Home" />
        <Heading css={{ color: "#4b4b4b" }}>Grocery List</Heading>
        <Groceries
          items={items}
          addItem={addItem}
          handleItemInput={handleItemInput}
        />
        {items.every(item => item.checked === true) ? (
          <Alert id="alert">
            <Text style={{ color: "white", display: "flex" }}>
              <Check /> All Checked
            </Text>
          </Alert>
        ) : (
          ""
        )}
      </Layout>
    </MarigoldProvider>
  )
}

export default IndexPage
