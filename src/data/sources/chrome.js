export const chrome = {
	title: 'Chrome',
	icon: 'https://www.google.com/chrome/static/images/favicons/favicon-16x16.png',
	sections: [
		{
			name: 'Tab and window',
			shortcuts: [
				{
					description: 'Open a new window',
					keys: ['Ctrl', 'N'],
				},
				{
					description: 'Open a new window in Incognito mode',
					keys: ['Ctrl', 'Shift', 'N'],
				},
				{
					description: 'Open a new tab, and jump to it',
					keys: ['Ctrl', 'T'],
				},
				{
					description: 'Reopen the last closed tab, and jump to it',
					keys: ['Ctrl', 'Shift', 'T'],
				},
				{
					description: 'Jump to the next open tab',
					keys: ['Ctrl', 'Tab'],
				},
				{
					description: 'Jump to the previous open tab',
					keys: ['Ctrl', 'Shift', 'Tab'],
				},
				{
					description: 'Jump to a specific tab',
					keys: ['Ctrl', '1-8'],
				},
				{
					description: 'Jump to the last tab',
					keys: ['Ctrl', '9'],
				},
				{
					description: 'Open your home page in the current tab',
					keys: ['Alt', 'Home'],
				},
				{
					description: 'Open the previous page from your history in the current tab',
					keys: ['Alt', 'Left'],
				},
				{
					description: 'Open the next page from your history in the current tab',
					keys: ['Alt', 'Right'],
				},
				{
					description: 'Close the current tab',
					keys: ['Ctrl', 'W'],
				},
				{
					description: 'Close the current window',
					keys: ['Ctrl', 'Shift', 'W'],
				},
				{
					description: 'Minimize the current window',
					keys: ['Alt', 'Space', 'N'],
				},
				{
					description: 'Maximize the current window',
					keys: ['Alt', 'Space', 'X'],
				},
				{
					description: 'Close the current window',
					keys: ['Alt', 'F4'],
				},
				{
					description: 'Quite Google Chrome',
					keys: ['Ctrl', 'Shift', 'Q'],
				},
			],
		},
		{
			name: 'Google Chrome features',
			shortcuts: [
				{
					description: 'Open the Chrome menu',
					keys: ['Alt', 'F'],
				},
				{
					description: 'Show or hide the Bookmarks bar',
					keys: ['Ctrl', 'Shift', 'B'],
				},
				{
					description: 'Open the Bookmarks manager',
					keys: ['Ctrl', 'Shift', 'O'],
				},
				{
					description: 'Open the History page in a new tab',
					keys: ['Ctrl', 'H'],
				},
				{
					description: 'Open the Downloads page in a new tab',
					keys: ['Ctrl', 'J'],
				},
				{
					description: 'Open the Chrome Task Manager',
					keys: ['Shift', 'Esc'],
				},
				{
					description: 'Set focus on the first item in the Chrome toolbar',
					keys: ['Shift', 'Alt', 'T'],
				},
				{
					description: 'Set focus on the last item in the Chrome toolbar',
					keys: ['F10'],
				},
				{
					description: 'Switch focus to unfocused dialog (if showing)',
					keys: ['F6'],
				},
				{
					description: 'Open the Find Bar to search the current page',
					keys: ['Ctrl', 'F'],
				},
				{
					description: 'Jump to the next match to your Find Bar search',
					keys: ['Ctrl', 'G'],
				},
				{
					description: 'Jump to the previous match to your Find Bar search',
					keys: ['Ctrl', 'Shift', 'G'],
				},
				{
					description: 'Open Developer Tools',
					keys: ['F12'],
				},
				{
					description: 'Open the Clear Browsing Data options',
					keys: ['Ctrl', 'Shift', 'Delete'],
				},
				{
					description: 'Open the Chrome Help Center in a new tab',
					keys: ['F1'],
				},
				{
					description: 'Log in a different user or browse as a Guest',
					keys: ['Ctrl', 'Shift', 'M'],
				},
				{
					description: 'Open a feedback form',
					keys: ['Alt', 'Shift', 'I'],
				},
			],
		},
		{
			name: 'Address bar',
			shortcuts: [
				{
					description: 'Search with your default search engine',
					keys: ['(type)', 'Enter'],
				},
				{
					description: 'Search using a different search engine',
					keys: ['(type)', 'Tab'],
				},
				{
					description: 'Add www. and .com to a site name, and open in the current tab',
					keys: ['Ctrl', 'Enter'],
				},
				{
					description: 'Open a new tab and perform a Google search',
					keys: ['Alt', 'Enter'],
				},
				{
					description: 'Jump to the address bar',
					keys: ['Ctrl', 'L'],
				},
				{
					description: 'Search from anywhere on the page',
					keys: ['Ctrl', 'K'],
				},
				{
					description: 'Remove predictions from your address bar',
					keys: ['Shift', 'Delete'],
				},
			],
		},
		{
			name: 'Webpage shortcuts',
			shortcuts: [
				{
					description: 'Open options to print the current page',
					keys: ['Ctrl', 'P'],
				},
				{
					description: 'Open options to save the current page',
					keys: ['Ctrl', 'S'],
				},
				{
					description: 'Reload the current page',
					keys: ['Ctrl', 'R'],
				},
				{
					description: 'Reload the current page, ignoring cached content',
					keys: ['Ctrl', 'Shift', 'R'],
				},
				{
					description: 'Stop the page loading',
					keys: ['Esc'],
				},
				{
					description: 'Browse clickable items moving forward',
					keys: ['Tab'],
				},
				{
					description: 'Browse clickable items moving backward',
					keys: ['Shift', 'Tab'],
				},
				{
					description: 'Open a file from your computer in Chrome',
					keys: ['Ctrl', 'O'],
				},
				{
					description: 'Display non-editable HTML source code for the current page',
					keys: ['Ctrl', 'U'],
				},
				{
					description: 'Save your current webpage as a bookmark',
					keys: ['Ctrl', 'D'],
				},
				{
					description: 'Save all open tabs as bookmarks in a new folder',
					keys: ['Ctrl', 'Shift', 'D'],
				},
				{
					description: 'Turn full-screen mode on or off',
					keys: ['F11'],
				},
				{
					description: 'Make everything on the page bigger',
					keys: ['Ctrl', '+'],
				},
				{
					description: 'Make everything on the page smaller',
					keys: ['Ctrl', '-'],
				},
				{
					description: 'Return everything on the page to default size',
					keys: ['Ctrl', '0'],
				},
				{
					description: 'Scroll down a webpage, a screen at a time',
					keys: ['Space'],
				},
				{
					description: 'Scroll up a webpage, a screen at a time',
					keys: ['Shift', 'Space'],
				},
				{
					description: 'Go to the top of the page',
					keys: ['Home'],
				},
				{
					description: 'Go to the bottom of the page',
					keys: ['End'],
				},
				{
					description: 'Scroll horizontally on the page',
					keys: ['Shift', '(scroll mouse)'],
				},
				{
					description:
						'Move your cursor to the front of the previous word in a text field',
					keys: ['Ctrl', 'Left'],
				},
				{
					description: 'Move your cursor to the back of the next word in a text field',
					keys: ['Ctrl', 'Right'],
				},
				{
					description: 'Delete the previous word in a text field',
					keys: ['Ctrl', 'Backspace'],
				},
				{
					description: 'Open the Home page in the current tab',
					keys: ['Alt', 'Home'],
				},
			],
		},
	],
}
