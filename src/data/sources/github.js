export const github = {
	title: 'Github',
	icon: 'https://github.com/fluidicon.png',
	sections: [
		{
			name: 'Site wide shortcuts',
			shortcuts: [
				{
					description: 'Focus the search bar',
					keys: ['S'],
				},
				{
					description: 'Go to your notifications',
					keys: ['G', 'N'],
				},
				{
					description: 'Opens and focuses on a user, issue, or pull request hovercard',
					keys: ['H'],
				},
				{
					description: 'When focused on above, closes hovercard',
					keys: ['Esc'],
				},
			],
		},
		{
			name: 'Repositories',
			shortcuts: [
				{
					description: 'Go to the Code tab',
					keys: ['G', 'C'],
				},
				{
					description: 'Go to the Issues tab',
					keys: ['G', 'I'],
				},
				{
					description: 'Go to the Pull requests tab',
					keys: ['G', 'P'],
				},
				{
					description: 'Go to the Projects tab',
					keys: ['G', 'B'],
				},
				{
					description: 'Go to the Wiki tab',
					keys: ['G', 'W'],
				},
			],
		},
		{
			name: 'Source code editing',
			shortcuts: [
				{
					description: 'Start searching in file editor',
					keys: ['Ctrl', 'F'],
				},
				{
					description: 'Find next',
					keys: ['Ctrl', 'G'],
				},
				{
					description: 'Find previous',
					keys: ['Ctrl', 'Shift', 'G'],
				},
				{
					description: 'Replace',
					keys: ['Ctrl', 'Shift', 'F'],
				},
				{
					description: 'Replace all',
					keys: ['Ctrl', 'Shift', 'R'],
				},
				{
					description: 'Jump to line',
					keys: ['Alt', 'G'],
				},
				{
					description: 'Undo',
					keys: ['Ctrl', 'Z'],
				},
				{
					description: 'Redo',
					keys: ['Ctrl', 'Y'],
				},
			],
		},
		{
			name: 'Source code browsing',
			shortcuts: [
				{
					description: 'Activates the file finder',
					keys: ['T'],
				},
				{
					description: 'Jump to a line in your code',
					keys: ['L'],
				},
				{
					description: 'Switch to a new branch or tag',
					keys: ['W'],
				},
				{
					description: 'Expand a URL to its canonical form',
					keys: ['Y'],
				},
				{
					description: 'Show or hide comments on diffs',
					keys: ['I'],
				},
				{
					description: 'Open blame view',
					keys: ['B'],
				},
			],
		},
		{
			name: 'Comments',
			shortcuts: [
				{
					description: 'Inserts Markdown formatting for bolding text',
					keys: ['Ctrl', 'B'],
				},
				{
					description: 'Inserts Markdown formatting for italicizing text',
					keys: ['Ctrl', 'I'],
				},
				{
					description: 'Inserts Markdown formatting for creating a link',
					keys: ['Ctrl', 'K'],
				},
				{
					description: 'Toggles between the Write and Preview comment tabs',
					keys: ['Ctrl', 'Shift', 'P'],
				},
				{
					description: 'Submits a comment',
					keys: ['Ctrl', 'Enter'],
				},
				{
					description:
						'Opens saved replies menu and then autofills comment field with a saved reply',
					keys: ['Ctrl', '.'],
				},
				{
					description: 'Inserts a suggestions',
					keys: ['Ctrl', 'G'],
				},
				{
					description: 'Quote the selected text in your reply',
					keys: ['R'],
				},
			],
		},
		{
			name: 'Issue and pull request lists',
			shortcuts: [
				{
					description: 'Create an issue',
					keys: ['C'],
				},
				{
					description: 'Focus your cursor on the issues or pull requests search bar',
					keys: ['Ctrl', '/'],
				},
				{
					description: 'Filter by author',
					keys: ['U'],
				},
				{
					description: 'Filter by or edit labels',
					keys: ['L'],
				},
				{
					description: 'Filter by or edit milestones',
					keys: ['M'],
				},
				{
					description: 'Filter by or edit assignee',
					keys: ['A'],
				},
				{
					description: 'Open issue',
					keys: ['O'],
				},
			],
		},
		{
			name: 'Issues and pull requests',
			shortcuts: [
				{
					description: 'Request a reviewer',
					keys: ['Q'],
				},
				{
					description: 'Set a milestone',
					keys: ['M'],
				},
				{
					description: 'Apply a label',
					keys: ['L'],
				},
				{
					description: 'Set an assignee',
					keys: ['A'],
				},
			],
		},
		{
			name: 'Changes in pull requests',
			shortcuts: [
				{
					description: 'Open the list of commits in the pull request',
					keys: ['C'],
				},
				{
					description: 'Open the list of changed files in the pull request',
					keys: ['T'],
				},
				{
					description: 'Move selection down in the list',
					keys: ['J'],
				},
				{
					description: 'Move selection up in the list',
					keys: ['K'],
				},
				{
					description: 'Add a single comment on a pull request diff',
					keys: ['Ctrl', 'Shift', 'Enter'],
				},
				{
					description:
						'Toggle between collapsing and expanding all outdated review comments in a pull request',
					keys: ['Alt', '(click)'],
				},
			],
		},
		{
			name: 'Project boards',
			shortcuts: [
				{
					description: 'Start moving the focused column',
					keys: ['Enter/Space'],
				},
				{
					description: 'Cancel the move in progress',
					keys: ['Esc'],
				},
				{
					description: 'Complete the move in progress',
					keys: ['Enter'],
				},
				{
					description: 'Move column to the left',
					keys: ['Left/H'],
				},
				{
					description: 'Move column to the leftmost position',
					keys: ['Ctrl', 'Left/H'],
				},
				{
					description: 'Move column to the right',
					keys: ['Right/L'],
				},
				{
					description: 'Move column to the rightmost position',
					keys: ['Ctrl', 'Right/L'],
				},
				{
					description: 'Start moving the focused card',
					keys: ['Enter/Space'],
				},
				{
					description: 'Cancel the move in progress',
					keys: ['Esc'],
				},
				{
					description: 'Complete the move in progress',
					keys: ['Enter'],
				},
				{
					description: 'Move card down',
					keys: ['Down/J'],
				},
				{
					description: 'Move card to the bottom of the column',
					keys: ['Ctrl', 'Down/J'],
				},
				{
					description: 'Move card up',
					keys: ['Up/K'],
				},
				{
					description: 'Move card to the top of the column',
					keys: ['Ctrl', 'Up/K'],
				},
				{
					description: 'Move card to the bottom of the column on the left',
					keys: ['Left/H'],
				},
				{
					description: 'Move card to the top of the column on the left',
					keys: ['Shift', 'Left/H'],
				},
				{
					description: 'Move card to the bottom of the leftmost column',
					keys: ['Ctrl', 'Left/H'],
				},
				{
					description: 'Move card to the top of the leftmost column',
					keys: ['Ctrl', 'Shift', 'Left/H'],
				},
				{
					description: 'Move card to the bottom of the column on the right',
					keys: ['Right'],
				},
				{
					description: 'Move card to the top of the column on the right',
					keys: ['Shift', 'Right/L'],
				},
				{
					description: 'Move card to the bottom of the rightmost column',
					keys: ['Ctrl', 'Right/L'],
				},
				{
					description: 'Move card to the top of the rightmost column',
					keys: ['Ctrl', 'Shift', 'Right/L'],
				},
			],
		},
		{
			name: 'Notifications',
			shortcuts: [
				{
					description: 'Mark as read',
					keys: ['E/L/Y'],
				},
				{
					description: 'Mute thread',
					keys: ['Shift', 'M'],
				},
			],
		},
		{
			name: 'Network graph',
			shortcuts: [
				{
					description: 'Scroll left',
					keys: ['Left/H'],
				},
				{
					description: 'Scroll right',
					keys: ['Right/L'],
				},
				{
					description: 'Scroll up',
					keys: ['Up/K'],
				},
				{
					description: 'Scroll down',
					keys: ['Down/J'],
				},
				{
					description: 'Scroll all the way left',
					keys: ['Shift', 'Left/H'],
				},
				{
					description: 'Scroll all the way right',
					keys: ['Shift', 'Right/L'],
				},
				{
					description: 'Scroll all the way up',
					keys: ['Shift', 'Up/K'],
				},
				{
					description: 'Scroll all the way down',
					keys: ['Shift', 'Down/J'],
				},
			],
		},
	],
}
