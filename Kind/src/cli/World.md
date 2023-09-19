# Hello World!

At this point, Kind should already be installed on your machine. If not, please go back to the installation and follow the instructions.

In this guide, we will be using command lines and text editors, so make sure your terminal is open to proceed with the steps.

### Creating the Files

First of all, create a directory to store the Kind files. It is recommended to use a dedicated directory to keep all exercises and examples, but feel free to do as you please. The three commands below will create a directory named 'KindExamples' and a file named 'hello_world.kind2' inside the project directory. Use them in order:

```diff
// Linux, Mac or WSL
mkdir KindExamples
cd    KindExamples
touch hello_world.kind2
```

The .kind2 extension is what makes it a Kind file. For example, a file that ends with .exe is an executable; .js is a JavaScript file; .rs is a Rust file, etc.

If the commands were used correctly, the hello_world.kind2 file should be inside the KindExamples folder. So let's have some fun, CODING!

### Hello World

Open the hello_world.kind2 file in your text editor, it will be empty, but don't worry. From now on, there will be some advanced concepts. Everything will make sense in the future, and pertinent concepts will be explained in due time. It is recommended that you manually type the codes, instead of copying and pasting them into your file.

Let's write your first code in the hello_world.kind2 file:

``` Rust
Main {
  "Hello, Kind!"
}
```

### Type Checking

With the code ready, you should use Type Checking to check if everything is in order. The type checker is still unknown in this guide, but it will be explained in more detail later. For now, just understand it as a checker that verifies if the file is correctly "typed".

To check the type of a Kind file, simply use the command `kind2 check fileName.kind2`. For the hello_world.kind2 file, it would be:

```
kind2 check hello_world.kind2
```

The message ``All terms check.`` means your file is ready!

```
All terms check.
```

Is the type checking correct? Then let's run the code.

### Running the code

To run a file in Kind, use the command `kind2 run fileName.kind2`. It should look like this:

```
kind2 run hello_world.kind2
```

And there you go! Your terminal should print "Hello, Kind!" back to you.

#### Remember to do all the steps above, check the type, and then run

Great, now that you have your first Kind program running, you can start exploring more about the language and its features. Congratulations on your progress!

If you have any questions or need help, don't hesitate to ask. We are always available to help!
