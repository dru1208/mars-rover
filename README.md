# mars-rover

NASA has rovers on Mars and they need YOUR help!
... to provide a text file with info about the grid plateau size and current rover positions/instructions

## Getting Started

1. Clone the files onto your computer with git clone

2. Run ```npm install``` to download all dependencies (note: if testing does not work for step 3, you may have to run "npm install -g mocha")

3. To check that all of the functions are running properly, use ```npm run test``` to go through all of the tests. Tests can be found in the ```./tests``` directory. If you want to run a test individually, run ```mocha [test-file-name]```

4. When you have the text file with information for the problem, run ```node index.js [your-text-file-name]```

5. View the current position of each rover on the console! Hurray, you've done NASA a solid!

Note: square brackets inside strings denotes the corresponding text that matches the content of the brackets


## Separate Notes

I've included an explanation of my general design decisions and assumptions in the file ```design-explanation.txt```.

If you'd like to see some more information about the classes that I've made, go ahead and pull up "class-explanation.txt". A lot of this information condenses what the class methods do, but I decided to put them in a separate file to keep the design explanation as concise as possible.

During the process of solving this problem, I used the file ```brainstorming.txt``` to jot down my thoughts or ideas when figuring out the next steps to take or little things to look out for.


Lastly, ```input.txt contains the sample input information from the problem. Go ahead and run ```node index.js input.txt``` if you'd like!