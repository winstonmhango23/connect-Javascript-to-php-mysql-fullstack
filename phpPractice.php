<?php

$string = "Hello, PHP!";
$number = 42;
$float = 3.14;
$boolean = true;

echo $string; // Outputs: Hello, PHP!
echo $number; // Outputs: 42


function greet($name)
{
    return "Hello, " . $name . "!";
}

echo greet("Alice"); // Outputs: Hello, Alice!



// $number = 10;

if ($number > 5) {
    echo "$number is greater than 5"; // Outputs: 10 is greater than 5
} else {
    echo "$number is not greater than 5";
}

for ($i = 0; $i < 5; $i++) {
    echo $i; // Outputs: 01234
}