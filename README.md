## I. GENERATE DAYS
> To create `day{n}` folder\
> run the `./create_files.sh` in `wsl` or a `bash` environment.\
> The `./create_files.sh` script, creates the `day{x}` directory with parts.\
> User must provide the amount of questions for each part.\
> Otherwise, the script displays the `help` page to the user.

## II. TIMESTAMPS
> At the end of each file which I'm working on, I appended the current timestamp, which is the last date I edited.\
> The format is like this : `// Last Edit : 2023-03-10 21:23:24`\
> Because of this, i needed to check which files contains timestamp. So i created the `checktimestamp.sh` script, which controls the timestamp.\
> If the .js file contains the timestamp in the last 10 lines, the script informs the user that it is OK.\
> Otherwise, it adds the current timestamp to the end of that .js file.\
> NOTE: node_modules directory is excluded.

## III. MIGRATED to the ESLINT from JSHINT
> In the early days of developing this project, I was using jshint for a better experience. (syntax, specific ESVersion rules, jargon, best practice etc.)\
> But then i noticed that the jshint is deprecated. So i rearranged all of my project in accordance with eslint rules.

## IV. COLORING THE INFORMATION COMMENTS
> In some files, you will notice eslint directives.\
> I am using a VSCode extension named Better Comments (by Aaron Bond), to colorize eslint directive lines.\
> If you are using VSCode editor too, I highly recommend you to use this extension with these settings:
```json
// in your User Settings JSON file, add these settings.
{
	"better-comments.tags": [
		{
			"tag": "/* eslint-disable",
			"color": "#d100a7",	/* optional HEX color code */
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": true
		},
		{
			"tag": "/* eslint-enable",
			"color": "#d100a7",	/* optional HEX color code */
			"strikethrough": false,
			"underline": false,
			"backgroundColor": "transparent",
			"bold": false,
			"italic": true
		},
	]
}
```

## V. NOTES
> This project uses [NodeJS](https://nodejs.dev/en/)\
> Last Edit : 2023-03-13 19:11:18
