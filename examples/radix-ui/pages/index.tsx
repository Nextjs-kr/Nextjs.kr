import { useState } from 'react'
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

function RightSlot({ children }) {
  return (
    <div className="ml-auto pl-4 text-gray-500 group-hover:text-gray-200">
      {children}
    </div>
  )
}

function DropdownMenuItem({ children, ...props }) {
  return (
    <DropdownMenu.Item
      {...props}
      className={
        'group relative flex h-6 select-none items-center rounded bg-white px-1 pl-6 text-xs hover:bg-gray-700 hover:text-gray-200' +
        (props.disabled ? ' text-gray-500' : '')
      }
    >
      {children}
    </DropdownMenu.Item>
  )
}

function DropdownMenuCheckboxItem({ children, ...props }) {
  return (
    <DropdownMenu.CheckboxItem
      {...props}
      className="group relative flex h-6 select-none items-center rounded bg-white px-1 pl-6 text-xs hover:bg-gray-700 hover:text-gray-200"
    >
      {children}
    </DropdownMenu.CheckboxItem>
  )
}

function DropdownMenuItemIndicator({ children, ...props }) {
  return (
    <DropdownMenu.ItemIndicator
      {...props}
      className="absolute left-0 inline-flex w-6 items-center justify-center"
    >
      {children}
    </DropdownMenu.ItemIndicator>
  )
}

function Separator() {
  return <DropdownMenu.Separator className="m-1 h-[1px] bg-gray-300" />
}

function DropdownMenuRadioItem({
  children,
  ...props
}: {
  children: React.ReactNode
  value: string
}) {
  return (
    <DropdownMenu.RadioItem
      {...props}
      className="relative flex h-6 select-none items-center rounded bg-white px-1 pl-6 text-xs hover:bg-gray-700 hover:text-gray-200"
    >
      {children}
    </DropdownMenu.RadioItem>
  )
}

export default function Home() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-6xl font-semibold text-white">
        Radix UI + Tailwind CSS
      </h1>
      <h1 className="text-4xl font-semibold text-white">Click me!</h1>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger
          asChild
          className="relative flex h-8 select-none items-center rounded-3xl bg-white px-2 text-xs"
        >
          <button
            aria-label="Customise options"
            className="inline-flex h-8 w-8 items-center justify-center shadow-lg"
          >
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          sideOffset={5}
          className="rounded bg-white p-1 shadow-lg"
        >
          <DropdownMenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="group relative flex h-6 select-none items-center rounded bg-white px-1 pl-6 text-xs hover:border-0 hover:bg-gray-700 hover:text-gray-200">
              More Tools
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent
              sideOffset={2}
              alignOffset={-5}
              className="rounded bg-white p-1 shadow-lg"
            >
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
          <Separator />
          <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuItemIndicator>
              <CheckIcon />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <Separator />
          <DropdownMenu.Label className="pl-6 text-xs leading-6 text-gray-700">
            Contributors
          </DropdownMenu.Label>

          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pedro Sanchez
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="pablo">
              <DropdownMenuItemIndicator>
                <DotFilledIcon />
              </DropdownMenuItemIndicator>
              Pablo Sanchez
            </DropdownMenuRadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
