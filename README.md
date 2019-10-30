# Eat-Da-Burger

#

## Getting Started

On the console, type 'npm install' and press enter\
Copy the contents of schema.sql and run them in sql to create the database and the table\
Copy the contents of seeds.sql and run them in sql to fill the table with initial values

#

## User Options

There are a few different things the user may do by clicking buttons and inputting data. We will go over each one by the "section" they are in\
If you forget how it works or don't like readmes there are some basic instructions on the page. Enjoy!

#

### Burgers Ready to Eat

Shows all the burgers ready to be eaten (or thrown in the trash can, if the user so chooses)

#

### Add a Burger

Here the user may create whichever burger they desire, and choose whether they want to "Eat here" or order "To go"\
If they choose to "Eat here" the burger will be ready to eat right away (note that this is the default option)\
If they choose to order "To go" the burger will be displayed in the "Ready for Pick Up" section. Speaking of which...

#

### Ready for Pick Up

Shows all the burgers that are ready to be picked up a.k.a. the ones that were created "To go"\
When "picked up" they will be moved to "Burgers Ready to Eat". You know how it works from there

#

### Eaten Burgers

All the burgers that have ever been eaten. After the last database purge, anyway\
Note that you can make orders from here too if you wish to get the same as someone else did and don't feel like typing\
Also note that it will still look at the "To go"/ "Eat here" checkbox and behave accordingly. Pretty cool, huh?

#
