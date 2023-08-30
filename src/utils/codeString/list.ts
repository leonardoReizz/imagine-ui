export const listCodeString = `import { List, ListItem } from "@imagine-io/react"

function ListExample() {
  return (
    <List className="w-80">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  )
}`;

export const listWithIconCodeString = `function ListWithIcon() {
  return (
    <List className="w-80 shadow-md rounded-md">
      <ListItem>
        Notifications <BellIcon className="h-5 w-5 ml-auto " />
      </ListItem>
      <ListItem>
        Trash
        <TrashIcon className="h-5 w-5  ml-auto text-red-500" />
      </ListItem>
      <ListItem>
        Logout
        <ArrowRightOnRectangleIcon className="h-5 w-5  ml-auto text-blue-700" />
      </ListItem>
    </List>
  )
}`;

export const listWithItemDisabledCodeString = `function ListWithDisabled() {
  return (
    <List className="w-80 shadow-md rounded-md">
      <ListItem disabled>Disabled</ListItem>
      <ListItem>Trash</ListItem>
      <ListItem>Logout</ListItem>
    </List>
  )
}`;

export const listCustomStyleCodeString = `function ListCustomStyle() {
  return (
    <List className="w-60">
      <ListItem
        className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
        ripple={false}
      >
        <UserIcon className="h-4 w-4 mr-2" />
        Users
      </ListItem>
      <ListItem
        className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
        ripple={false}
      >
        <DevicePhoneMobileIcon className="h-4 w-4  mr-2" />
        Products
      </ListItem>
      <ListItem
        className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
        ripple={false}
      >
        <ArchiveBoxIcon className="h-4 w-4  mr-2" />
        Inventory
      </ListItem>
      <ListItem
        className="hover:bg-transparent hover:text-green-500 border-b rounded-none"
        ripple={false}
      >
        <Cog6ToothIcon className="h-4 w-4  mr-2" />
        Settings
      </ListItem>
    </List>
  )
}`;

export const listImportCodeString = `import { List } from "@imagine-io/react"`;
export const listItemImportCodeString = `import { ListItem } from "@imagine-io/react"`;
