'use strict';

const countryList = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya'
];


const countryListLong = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombi',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo',
	'Costa Rica',
	'Cote d\'Ivoire',
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor (Timor Timur)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia, The',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Korea, North',
	'Korea, South',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia and Montenegro',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
];


const shoppingCart = [
	'Milk',
	'Coffee',
	'Tea',
	'Honey'
];


const techList = [
	'HTML',
	'CSS',
	'JS',
	'React',
	'Redux',
	'Node',
	'MongoDB'
];


const hexUppercase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
];


const hexLowercase = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
];


const mernStack = [
	'MongoDB',
	'Express',
	'React',
	'Node',
];


const fruitList = [
	'banana',
	'orange',
	'mango',
	'lemon'
];


const fullstack = [
	[
		'HTML',
		'CSS',
		'JS',
		'React'
	],
	[
		'Node',
		'Express',
		'MongoDB'
	],
];


const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];


const daysTurkish = [
	'Pazar',
	'Pazartesi',
	'Sal\u{131}',
	'\u{C7}ar\u{15F}amba',
	'Per\u{15F}embe',
	'Cuma',
	'Cumartesi'
];


const monthsTurkish = [
	'Ocak',
	'\u{15E}ubat',
	'Mart',
	'Nisan',
	'May\u{131}s',
	'Haziran',
	'Temmuz',
	'A\u{11F}ustos',
	'Eyl\u{FC}l',
	'Ekim',
	'Kas\u{131}m',
	'Aral\u{131}k'
];


const alphanumeric = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
	'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
	'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
	'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
	's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
	'3', '4', '5', '6', '7', '8', '9'
];


const randomIntegerList = [
	381, 361, 851, 516, 805, 634, 683, 878, 679, 50,
	621, 796, 860, 6, 401, 144, 247, 985, 635, 508,
	916, 576, 467, 456, 946, 610, 770, 693, 695, 636,
	769, 490, 167, 93, 75, 362, 480, 973, 832, 529,
	998, 91, 542, 461, 150, 72, 905, 503, 413, 900,
	952, 378, 288, 899, 702, 611, 131, 522, 895, 110,
	185, 854, 97, 329, 703, 717, 117, 42, 169, 2, 84,
	363, 230, 74, 991, 487, 553, 31, 145, 586, 657,
	938, 331, 301, 274, 262, 759, 154, 308, 794, 588,
	349, 999, 200, 33, 19, 839, 673, 581, 436, 745
];


const randomUniqueIntegerList = [
	801, 224, 746, 1000, 308, 710, 178, 927, 738, 972,
	409, 609, 340, 533, 828, 769, 780, 56, 252, 860,
	423, 391, 200, 180, 893, 902, 623, 160, 28, 562,
	118, 522, 203, 57, 566, 201, 421, 812, 411, 85,
	677, 116, 341, 462, 681, 641, 678, 965, 239, 573,
	369, 253, 865, 735, 387, 235, 13, 852, 445, 269,
	719, 560, 648, 113, 907, 487, 285, 514, 449, 143,
	321, 656, 272, 654, 367, 608, 458, 897, 415, 754,
	568, 131, 25, 781, 332, 473, 966, 737, 278, 905,
	291, 976, 598, 120, 26, 635, 63, 531, 132, 44
];


const signals = [
	{signal		:	'SIGABRT',		description		:	'This signal indicates an error detected by the program itself and reported by calling abort.'},
	{signal		:	'SIGALRM',		description		:	'This signal typically indicates expiration of a timer that measures real or clock time. It is used by the alarm function, for example.'},
	{signal		:	'SIGBUS',		description		:	'This signal is generated when an invalid pointer is dereferenced.'},
	{signal		:	'SIGCHLD',		description		:	'This signal is sent to a parent process whenever one of its child processes terminates or stops.'},
	{signal		:	'SIGCONT',		description		:	'You can send a SIGCONT signal to a process to make it continue. This signal is special --it always makes the process continue if it is stopped, before the signal is delivered. The default behavior is to do nothing else. You cannot block this signal. You can set a handler, but SIGCONT always makes the process continue regardless.'},
	{signal		:	'SIGFPE',		description		:	'The SIGFPE signal reports a fatal arithmetic error. Although the name is derived from "floating-point exception", this signal actually covers all arithmetic errors, including division by zero and overflow.'},
	{signal		:	'SIGHUP',		description		:	'The SIGHUP ("hang-up") signal is used to report that the user\'s terminal is disconnected, perhaps because a network or telephone connection was broken.'},
	{signal		:	'SIGILL',		description		:	'The name of this signal is derived from "illegal instruction"; it usually means your program is trying to execute garbage or a privileged instruction. Since the C compiler generates only valid instructions, SIGILL typically indicates that the executable file is corrupted, or that you are trying to execute data.'},
	{signal		:	'SIGINT',		description		:	'The SIGINT ("program interrupt") signal is sent when the user types the INTR character (normally C-c).'},
	{signal		:	'SIGIO',		description		:	'This signal is sent when a file descriptor is ready to perform input or output.'},
	{signal		:	'SIGIOT',		description		:	'Generated by the PDP-11 "iot" instruction. On most machines, this is just another name for SIGABRT.'},
	{signal		:	'SIGKILL',		description		:	'The SIGKILL signal is used to cause immediate program termination. It cannot be handled or ignored, and is therefore always fatal. It is also not possible to block this signal.'},
	{signal		:	'SIGPIPE',		description		:	'Broken pipe. If you use pipes or FIFOs, you have to design your application so that one process opens the pipe for reading before another starts writing. If the reading process never starts, or terminates unexpectedly, writing to the pipe or FIFO raises a SIGPIPE signal. If SIGPIPE is blocked, handled or ignored, the offending call fails with EPIPE instead.'},
	{signal		:	'SIGPOLL',		description		:	'This is a System V signal name, more or less similar to SIGIO. It is defined only for compatibility.'},
	{signal		:	'SIGPROF',		description		:	'This signal typically indicates expiration of a timer that measures both CPU time used by the current process, and CPU time expended on behalf of the process by the system. Such a timer is used to implement code profiling facilities, hence the name of this signal.'},
	{signal		:	'SIGPWR',		description		:	'The SIGPWR signal is sent to a process when the system experiences a power failure.'},
	{signal		:	'SIGQUIT',		description		:	'The SIGQUIT signal is similar to SIGINT, except that it\'s controlled by a different key—the QUIT character, usually C-\\--and produces a core dump when it terminates the process, just like a program error signal. You can think of this as a program error condition "detected" by the user.'},
	{signal		:	'SIGSEGV',		description		:	'This signal is generated when a program tries to read or write outside the memory that is allocated for it, or to write memory that can only be read. The name is an abbreviation for "segmentation violation".'},
	{signal		:	'SIGSTKFLT',	description		:	'The SIGSTKFLT signal is sent to a process when the coprocessor experiences a stack fault (i.e. popping when the stack is empty or pushing when it is full).[23] It is defined by, but not used on Linux, where a x87 coprocessor stack fault will generate SIGFPE instead.'},
	{signal		:	'SIGSTOP',		description		:	'The SIGSTOP signal stops the process. It cannot be handled, ignored, or blocked.'},
	{signal		:	'SIGSYS',		description		:	'Bad system call; that is to say, the instruction to trap to the operating system was executed, but the code number for the system call to perform was invalid.'},
	{signal		:	'SIGTERM',		description		:	'The SIGTERM signal is sent to a process to request its termination. Unlike the SIGKILL signal, it can be caught and interpreted or ignored by the process.'},
	{signal		:	'SIGTRAP',		description		:	'Generated by the machine\'s breakpoint instruction, and possibly other trap instructions. This signal is used by debuggers. Your program will probably only see SIGTRAP if it is somehow executing bad instructions.'},
	{signal		:	'SIGTSTP',		description		:	'The SIGTSTP signal is an interactive stop signal. Unlike SIGSTOP, this signal can be handled and ignored.'},
	{signal		:	'SIGTTIN',		description		:	'A process cannot read from the user\'s terminal while it is running as a background job. When any process in a background job tries to read from the terminal, all of the processes in the job are sent a SIGTTIN signal.'},
	{signal		:	'SIGTTOU',		description		:	'This is similar to SIGTTIN, but is generated when a process in a background job attempts to write to the terminal or set its modes. Again, the default action is to stop the process. SIGTTOU is only generated for an attempt to write to the terminal if the TOSTOP output mode is set.'},
	{signal		:	'SIGUNUSED',	description		:	'The SIGUNUSED signal is sent to a process when a system call with an unused system call number is made. It is synonymous with SIGSYS on most architectures.'},
	{signal		:	'SIGURG',		description		:	'The SIGURG signal is sent to a process when a socket has urgent or out-of-band data available to read.'},
	{signal		:	'SIGUSR1',		description		:	'The SIGUSR1 and SIGUSR2 signals are sent to a process to indicate user-defined conditions.'},
	{signal		:	'SIGUSR2',		description		:	'The SIGUSR1 and SIGUSR2 signals are sent to a process to indicate user-defined conditions.'},
	{signal		:	'SIGVTALRM',	description		:	'This signal typically indicates expiration of a timer that measures CPU time used by the current process. The name is an abbreviation for "virtual time alarm".'},
	{signal		:	'SIGWINCH',		description		:	'Window size change. This is generated on some systems (including GNU) when the terminal driver\'s record of the number of rows and columns on the screen is changed.'},
	{signal		:	'SIGXCPU',		description		:	'CPU time limit exceeded. This signal is generated when the process exceeds its soft resource limit on CPU time.'},
	{signal		:	'SIGXFSZ',		description		:	'File size limit exceeded. This signal is generated when the process attempts to extend a file so it exceeds the process\'s soft resource limit on file size.'},
	{signal		:	'SIGBREAK',		description		:	'Send signal to process by PID in Windows, like POSIX kill.'},
	{signal		:	'SIGLOST',		description		:	'Resource lost. This signal is generated when you have an advisory lock on an NFS file, and the NFS server reboots and forgets about your lock.'},
	{signal		:	'SIGINFO',		description		:	'Information request. On 4.4 BSD and GNU/Hurd systems, this signal is sent to all the processes in the foreground process group of the controlling terminal when the user types the STATUS character in canonical mode.'},
];

const specialCharacters = [
	'~',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'_',
	'-',
	'+',
	'=',
	'`',
	'|',
	'\\',
	'(',
	')',
	'{',
	'}',
	'[',
	']',
	':',
	';',
	'"',
	'\'',
	'<',
	'>',
	',',
	'.',
	'?',
	'/',
];


const digits = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
];


const users = [
	{
		_id			:	'ab12ex',
		username	:	'Alex',
		email		:	'alex@alex.com',
		password	:	'123123',
		createdAt	:	'08/01/2020 9:00 AM',
		isLoggedIn	:	false
	},
	{
		_id			:	'fg12cy',
		username	:	'Asab',
		email		:	'asab@asab.com',
		password	:	'123456',
		createdAt	:	'08/01/2020 9:30 AM',
		isLoggedIn	:	true
	},
	{
		_id			:	'zwf8md',
		username	:	'Brook',
		email		:	'brook@brook.com',
		password	:	'123111',
		createdAt	:	'08/01/2020 9:45 AM',
		isLoggedIn	:	true
	},
	{
		_id			:	'eefamr',
		username	:	'Martha',
		email		:	'martha@martha.com',
		password	:	'123222',
		createdAt	:	'08/01/2020 9:50 AM',
		isLoggedIn	:	false
	},
	{
		_id			:	'ghderc',
		username	:	'Thomas',
		email		:	'thomas@thomas.com',
		password	:	'123333',
		createdAt	:	'08/01/2020 10:00 AM',
		isLoggedIn	:	false
	}
];


const products = [
	{
		_id			:	'eedfcf',
		name		:	'mobile phone',
		description	:	'Huawei Honor',
		price		:	200,
		ratings		:
		[
			{
				userId	:	'fg12cy',
				rate	:	5
			},
			{
				userId	:	'zwf8md',
				rate	:	4.5
			}
		],
		likes		:	[]
	},
	{
		_id			:	'aegfal',
		name		:	'Laptop',
		description	:	'MacPro: System Darwin',
		price		:	2500,
		ratings		:	[],
		likes		:	['fg12cy']
	},
	{
		_id			:	'hedfcg',
		name		:	'TV',
		description	:	'Smart TV:Procaster',
		price		:	400,
		ratings		:
		[
			{
				userId	:	'fg12cy',
				rate	:	5
			}
		],
		likes		:	['fg12cy']
	}
];



module.exports =
{
	countryList,
	countryListLong,
	shoppingCart,
	techList,
	hexLowercase,
	hexUppercase,
	mernStack,
	fruitList,
	fullstack,
	months,
	daysTurkish,
	monthsTurkish,
	alphanumeric,
	signals,
	randomIntegerList,
	randomUniqueIntegerList,
	specialCharacters,
	digits,
	users,
	products
};

// Last Edit : 2023-02-24 17:40:02
