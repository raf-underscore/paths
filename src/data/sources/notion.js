export const notion = {
	title: 'Notion',
	icon: 'https://www.notion.so/front-static/favicon.ico',
	sections: [
		{
			name: 'Main',
			shortcuts: [
				{
					description: 'Create a new page',
					keys: ['Ctrl', 'N'],
				},
				{
					description: 'Open a new window',
					keys: ['Ctrl', 'Shift', 'N'],
				},
				{
					description: 'Quick Find',
					keys: ['Ctrl', 'P'],
				},
				{
					description: 'Go back',
					keys: ['Ctrl', '['],
				},
				{
					description: 'Go forward',
					keys: ['Ctrl', ']'],
				},
				{
					description: 'Go up to the parent page',
					keys: ['Ctrl', 'Shift', 'U'],
				},
				{
					description: 'Toggle dark mode',
					keys: ['Ctrl', 'Shift', 'L'],
				},
				{
					description: 'Toggle the sidebar',
					keys: ['Ctrl', '\\'],
				},
			],
		},
		{
			name: 'Content Creation & Editing',
			shortcuts: [
				{
					description: 'Insert text',
					keys: ['Enter'],
				},
				{
					description: 'Create a comment',
					keys: ['Ctrl', 'Shift', 'M'],
				},
				{
					description: 'Create a divider',
					keys: ['---'],
				},
				{
					description: 'Bold selected text',
					keys: ['Ctrl', 'B'],
				},
				{
					description: 'Italicize selected text',
					keys: ['Ctrl', 'I'],
				},
				{
					description: 'Strike-through selected text',
					keys: ['Ctrl', 'Shift', 'S'],
				},
				{
					description: 'Create a link with the selected text',
					keys: ['Ctrl', 'K'],
				},
				{
					description: 'Create inline code with the selected text',
					keys: ['Ctrl', 'E'],
				},
				{
					description: 'Create text',
					keys: ['Ctrl', 'Shift', '0'],
					mac_keys: ['Cmd', 'Opt', '0'],
				},
				{
					description: 'Create a heading 1',
					keys: ['Ctrl', 'Shift', '1'],
					mac_keys: ['Cmd', 'Opt', '1'],
				},
				{
					description: 'Create a heading 2',
					keys: ['Ctrl', 'Shift', '2'],
					mac_keys: ['Cmd', 'Opt', '2'],
				},
				{
					description: 'Create a heading 3',
					keys: ['Ctrl', 'Shift', '3'],
					mac_keys: ['Cmd', 'Opt', '3'],
				},
				{
					description: 'Create a to-do',
					keys: ['Ctrl', 'Shift', '4'],
					mac_keys: ['Cmd', 'Opt', '4'],
				},
				{
					description: 'Create a bulleted list',
					keys: ['Ctrl', 'Shift', '5'],
					mac_keys: ['Cmd', 'Opt', '5'],
				},
				{
					description: 'Create a numbered list',
					keys: ['Ctrl', 'Shift', '6'],
					mac_keys: ['Cmd', 'Opt', '6'],
				},
				{
					description: 'Create a toggle list',
					keys: ['Ctrl', 'Shift', '7'],
					mac_keys: ['Cmd', 'Opt', '7'],
				},
				{
					description: 'Create a code block',
					keys: ['Ctrl', 'Shift', '8'],
					mac_keys: ['Cmd', 'Opt', '8'],
				},
				{
					description: 'Create a page block',
					keys: ['Ctrl', 'Shift', '9'],
					mac_keys: ['Cmd', 'Opt', '9'],
				},
			],
		},
		{
			name: 'While Dragging',
			shortcuts: [
				{
					description: 'Hold down these keys to duplicate',
					keys: ['Alt'],
				},
			],
		},
		{
			name: 'While Typing',
			shortcuts: [
				{
					description: 'Select the block you are editing',
					keys: ['Esc'],
				},
				{
					description: 'Indent This will insert the block into the previous block',
					keys: ['Tab'],
				},
				{
					description: 'Un-indent',
					keys: ['Shift', 'Tab'],
				},
			],
		},
		{
			name: 'While Blocks are Selected',
			shortcuts: [
				{
					description: 'Activate buttons/pages and checks/un-check checkboxes, toggle to-dos, or enter full screen on embeds/images',
					keys: ['Ctrl', 'Enter'],
				},
				{
					description: 'Expand the selection up or down',
					keys: ['Ctrl', 'Shift', 'Left/Right'],
				},
				{
					description: 'Open a page in a new tab',
					keys: ['Ctrl', 'Shift', 'Enter'],
				},
				{
					description: 'Rename the current selection',
					keys: ['Ctrl', 'Shift', 'R'],
				},
				{
					description: 'Enter fullscreen (while on an image)',
					keys: ['Space'],
				},
				{
					description: 'Change the selection',
					keys: ['Arrows'],
				},
				{
					description: 'Expand the selection up or down by one block',
					keys: ['Shift', 'Up/Down'],
				},
				{
					description: 'Select all blocks in the page',
					keys: ['Ctrl', 'A'],
				},
				{
					description: 'Toggle selection of a block',
					keys: ['Ctrl', 'Shift', '(click)'],
				},
				{
					description: 'Select another block and all blocks in-between',
					keys: ['Shift', '(click)'],
				},
				{
					description: 'Clear the selected blocks',
					keys: ['Esc'],
				},
				{
					description: 'Delete the selected blocks',
					keys: ['Del/Bksp'],
				},
				{
					description: 'Duplicate the blocks you have selected',
					keys: ['Ctrl', 'D'],
				},
				{
					description: 'Edit the block you have selected If the block has no text, something else might happen',
					keys: ['Enter'],
				},
				{
					description: 'Copy the link to the Notion page you are on (desktop apps only)',
					keys: ['Ctrl', 'L'],
				},
				{
					description: 'Select a few blocks, then edit blocks all at once',
					keys: ['Ctrl', '/'],
				},
				{
					description: 'Select multiple cards in a board view, then move or edit them all at once',
					keys: ['Ctrl', '/'],
				},
				{
					description: 'Hold, then use the arrow keys to change the position of a block',
					keys: ['Ctrl', 'Shift'],
				},
				{
					description: 'Expand/close all toggles',
					keys: ['Ctrl', 'Alt', 'T'],
				},
			],
		},
	],
}
