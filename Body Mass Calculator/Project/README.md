# Body Mass Index
#### Video Demo:  <URL https://www.youtube.com/shorts/QXv0y4IrG0A>
#### Description:
My name is Giuliana Ambrosino, the code I created is a little different than usual, since it is for a medical study that I will explain below.

BMI description:
BMI is a number calculated from a person's weight and height. BMI provides a fairly reliable indicator of body fatness for most people and is used to screen for weight categories that may lead to health problems.
Calculating the body mass index is a task that is done using a mathematical equation, This consists of dividing the height by the weight, It is a calculation that is used in many fields and most people do not know how to do it. for this code I thought:

how to make this calculation more efficient?

I created a web application that manages to streamline all this calculation process to achieve better results, i made this determining functions that by just only modifying the name and data of the person does it by itself, my program is based on calculating the body mass index of the people who are in it. Then it writes it on the main screen  of our browser with the numbers already rounded.

In the program i include the mathematical calculation that is required to achieve the result, for this I generated a function that was in charge of dividing the weight by the necessary height: (height *2). I named this function "Calcularimc" and i determinate imc as the result.

As an example I used the data of two people (Henry and Oliver).
For each of them I determined their weight. For Oliver: "pesoOliver"- "alturaOliver", and for Henry: "PesoHenry"-"alturaHenry"

Then, when you already have the information of the person whose muscle mass index you want to calculate, all that remains is to put the person's name before "imc" (acronym for "body mass index" in Spanish). Doing this the program will recognize the person and after including the data it will give us a result

In order to round the results obtained I used the function Math.round(). Round() is a built-in math function which returns the closest long to the argument. The result is rounded to an integer by adding 1/2, taking the floor of the result after adding 1/2, and casting the result to type long.

In order for the program to write the result, i generates a function that summarizes "phrase" by just printing "function imprimir(frase) {

		document.write(frase)
		saltarlinea()" . this in order to code more dynamically

To achieve the proper line breaks I wrapped "<br>" in saltarlinea(). Again, in order to code more dynamically

Finally, to differentiate the title from the other objects I highlighted it by using <b>

The functions are in spanish becose i speak that lenguaje but i made the video in english in sort of you can check my work without complications =).
