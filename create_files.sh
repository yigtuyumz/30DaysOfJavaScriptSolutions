#!/usr/bin/bash

day="${1}"
part1_question_amount=${2}
part2_question_amount=${3}
part3_question_amount=${4}

# checking the positional parameters
if [ -z "${1}" ] || [ -z "${2}" ] || [ -z "${3}" ] || [ -z "${4}" ]; then
	echo "Usage"
	echo "\$1 -> day{n} : n = day number"
	echo "\$2 -> part1 {question amount}"
	echo "\$3 -> part2 {question amount}"
	echo "\$4 -> part3 {question amount}"
	echo -e "\$5 -> 'strict' adds 'use strict;' at the beginning in each JS file \x1b[32m[ \x1b[4mOPTIONAL\x1b[0m \x1b[32m]\x1b[0m"
	exit 1
fi;
# END


file_ext="js"


# enabling strict mode via fifth positional parameter (${5})
if [ "${5}" = "strict" ]; then
	strict_mode=1
else
	strict_mode=0
fi
# END


# checking the "./day{n}" directory.
if [ ! -d "./${day}" ]; then
	mkdir "./${day}"
else
	echo "./${day} directory already exists!"
fi
# END

# checking the "./day/exercises" directory.
if [ ! -d "./${day}/exercises" ]; then
	mkdir "./${day}/exercises"
else
	echo "./${day}/exercises directory already exists!"
fi
# END

# checking the "./day/exercises/part[1,2,3]" directories
if [ ! -d "./${day}/exercises/part1" ]; then
	mkdir "./${day}/exercises/part1"
else
	echo "./${day}/exercises/part1 directory already exists!"
fi

if [ ! -d "./${day}/exercises/part2" ]; then
	mkdir "./${day}/exercises/part2"
else
	echo "./${day}/exercises/part2 directory already exists!"
fi

if [ ! -d "./${day}/exercises/part3" ]; then
	mkdir "./${day}/exercises/part3"
else
	echo "./${day}/exercises/part3 directory already exists!"
fi
# END


# creating the JS files
counter=1

while [ "${counter}" -le "${part1_question_amount}" ]; do
	if [ -f "./${day}/exercises/part1/${counter}.${file_ext}" ]; then
		echo "./${day}/exercises/part1/${counter}.${file_ext} exists, skipping."
	else
		if [ "${strict_mode}" -eq 1 ]; then
			touch "./${day}/exercises/part1/${counter}.${file_ext}" && echo "'use strict';" > "./${day}/exercises/part1/${counter}.${file_ext}"
		else
			touch "./${day}/exercises/part1/${counter}.${file_ext}"
		fi
	fi
	((counter+=1))
done;

counter=1

while [ "${counter}" -le "${part2_question_amount}" ]; do
	if [ -f "./${day}/exercises/part2/${counter}.${file_ext}" ]; then
		echo "./${day}/exercises/part2/${counter}.${file_ext} exists, skipping."
	else
		if [ "${strict_mode}" -eq 1 ]; then
			touch "./${day}/exercises/part2/${counter}.${file_ext}" && echo "'use strict';" > "./${day}/exercises/part2/${counter}.${file_ext}"
		else
			touch "./${day}/exercises/part2/${counter}.${file_ext}"
		fi
	fi
	((counter+=1))
done

counter=1

while [ "${counter}" -le "${part3_question_amount}" ]; do
	if [ -f "./${day}/exercises/part3/${counter}.${file_ext}" ]; then
		echo "./${day}/exercises/part3/${counter}.${file_ext} exists, skipping."
	else
		if [ "${strict_mode}" -eq 1 ]; then
			touch "./${day}/exercises/part3/${counter}.${file_ext}" && echo "'use strict';" > "./${day}/exercises/part3/${counter}.${file_ext}"
		else
			touch "./${day}/exercises/part3/${counter}.${file_ext}"
		fi
	fi
	((counter+=1))
done
# END


# exit message
sleep 0.5 && clear
echo "Done.."
# END
