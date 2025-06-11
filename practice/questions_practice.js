
const questions = {
  q1: {
    title: "Swap Numbers",
    description: `Given two numbers <b>a</b> and <b>b</b>, swap their values without using a temporary variable. This is a fundamental operation that tests your understanding of variable assignment in Python.
   <br> Sample input:  <br>
Enter the value of a: 5 <br>
Enter the value of b: 10 <br>
 <br> Sample Output:<br>
Before swapping: a = 5, b = 10 <br>
After swapping: a = 10, b = 5 <br>
`,

code: `a = int(input("Enter the value of a: "))
b = int(input("Enter the value of b: "))
print(f"Before swapping: a = {a}, b = {b}")
a, b = b, a

print(f"After swapping: a = {a}, b = {b}")`
  },
  q2: {
    title: "Even or Odd",
    description: `Check if a number is even or odd. This basic challenge tests your understanding of conditional statements and arithmetic operations.`,
    gh: `# Check if number is even or odd
n = int(input("Enter a number: "))

# Your condition here


`,
code: `n = int(input("Enter a number: "))
if n % 2 == 0:
    print("Even")
else:
    print("Odd")`
  },
  q3: {
    title: "Status Check",
    description: `Check if a boolean variable is True or False and print the appropriate status message. This helps you understand boolean logic in Python.`,
    gh: `# Check boolean status
status = True  # Try changing this to False

# Your condition here


`,
code: `status = True
if status:
    print("Active")
else:
    print("Inactive")`
  },
  q4: {
    title: "Multiplication Table",
    description: `Print the multiplication table of a given number from 1 to 10. This challenge helps you practice loops and string formatting.`,
    gh: `# Print multiplication table
n = int(input("Enter number: "))

# Your loop here


`,
code: `n = int(input("Enter number: "))
for i in range(1, 11):
    print(f"{n} x {i} = {n*i}")`
  },
  q5: {
    title: "Characters at Even Indices",
    description: `Print characters at even indices from a string. Remember that Python uses 0-based indexing. This tests your string slicing skills.`,
    gh: `# Print even index characters
s = input("Enter string: ")

# Your slicing here


`,
code: `s = input("Enter string: ")
print(s[::2])`
  },
  q6: {
    title: "While Loop Squares",
    description: `Print squares of numbers from 1 to 5 using a while loop. This helps you understand while loops and basic arithmetic operations.`,
    gh: `# Print squares with while loop
i = 1

# Your while loop here


`,
code: `i = 1
while i <= 5:
    print(i*i)
    i += 1`
  },
  q7: {
    title: "Zero Converter",
    description: `Convert any negative number to zero while leaving positive numbers unchanged. This tests your conditional logic skills.`,
    gh: `# Convert negatives to zero
n = int(input("Enter a number: "))

# Your condition here


print(n)`,
code: `n = int(input("Enter a number: "))
if n < 0:
    n = 0
print(n)`
  },
  q8: {
    title: "Cat and Hat Count",
    description: `Calculate number of hats needed for given number of cats (each cat needs 2 hats). This simple problem tests basic arithmetic.`,
    gh: `# Calculate hats for cats
cats = 5

# Your calculation here


print("Total hats:", hats)`,
code: `cats = 5
hats = cats * 2
print("Total hats:", hats)`
  },
  q9: {
    title: "Else Statement",
    description: `Write a program that checks if a number is positive or non-positive using if-else statement. This reinforces basic conditional logic.`,
    gh: `# Check if number is positive
x = int(input("Enter number: "))

# Your if-else here


`,
code: `x = int(input("Enter number: "))
if x > 0:
    print("Positive")
else:
    print("Non-positive")`
  },
  q10: {
    title: "FizzBuzz",
    description: `The classic FizzBuzz problem: Print numbers from 1 to 15, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz". This tests your understanding of conditionals and loops.`,
  
code: `for i in range(1, 16):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`
  },
q11: {
  title: "Even Odd Game",
  description: `<p><strong>🎯 Problem Statement:</strong> You and your friend pick apples one by one from a bag. You always start first.</p>
                <p>The one who picks the <strong>last apple wins</strong>.</p>
                <p><strong>🍏 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 5 → Output: You</li>
                  <li>Input: 8 → Output: Friend</li>
                </ul>`,
  code: `
n = int(input("Enter number of apples: "))
if n % 2 != 0:
    print("You")
else:
    print("Friend")`
},


q12: {
  title: "Greatest of Three",
  description: `<p><strong>🎯 Problem Statement:</strong> Given three numbers, print the greatest one.</p>
                <p><strong>🔍 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 10, 25, 15 → Output: 25</li>
                  <li>Input: 7, 3, 9 → Output: 9</li>
                </ul>`,
  code: `
a = int(input("Enter first number (a): "))
b = int(input("Enter second number (b): "))
c = int(input("Enter third number (c): "))

if a >= b and a >= c:
    print(a)
elif b >= a and b >= c:
    print(b)
else:
    print(c)`
},

q13: {
  title: "Leap Year",
  description: `<p><strong>🎯 Problem Statement:</strong> Check whether the entered year is a leap year.</p>
                <p><strong>📅 Rule:</strong> Divisible by 4, but not by 100 unless also divisible by 400.</p>
                <p><strong>📥 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 2020 → Output: True</li>
                  <li>Input: 1900 → Output: False</li>
                </ul>`,
  code: `
year = int(input("Enter a year: "))
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("True")
else:
    print("False")`
},

q14: {
  title: "Simple Calculator",
  description: `<p><strong>🎯 Problem Statement:</strong> Perform addition, subtraction or multiplication based on user's choice.</p>
                <p><strong>📌 Operators:</strong> 1 → Add, 2 → Subtract, 3 → Multiply</p>
                <p><strong>📥 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 10, 5, 1 → Output: 15</li>
                  <li>Input: 10, 5, 4 → Output: Invalid Input</li>
                </ul>`,
  code: `
a = int(input("Enter the first number (a): "))
b = int(input("Enter the second number (b): "))
operator = int(input("Enter the operator (1 for addition, 2 for subtraction, 3 for multiplication): "))

if operator == 1:
    print(a + b)
elif operator == 2:
    print(a - b)
elif operator == 3:
    print(a * b)
else:
    print("Invalid Input")`
},

q15: {
  title: "Sum of Natural Numbers",
  description: `<p><strong>🎯 Problem Statement:</strong> Calculate the sum of first <code>n</code> natural numbers.</p>
                <p><strong>📥 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 5 → Output: 15</li>
                  <li>Input: 10 → Output: 55</li>
                </ul>`,
  code: `
n = int(input("Enter a number: "))
sum_of_numbers = n * (n + 1) // 2
print(sum_of_numbers)`
},

q16: {
  title: "Closest Number Divisible by m",
  description: `<p><strong>🎯 Problem Statement:</strong> Find the number closest to <code>n</code> that is divisible by <code>m</code>.</p>
                <p>If both are equally close, choose the one with the higher absolute value.</p>
                <p><strong>📥 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 15, 4 → Output: 16</li>
                  <li>Input: 20, 6 → Output: 18</li>
                  <li>Input: 7, 5 → Output: 10</li>
                </ul>`,
  code: `
n = int(input("Enter the first number (n): "))
m = int(input("Enter the second number (m): "))

lower_multiple = (n // m) * m
upper_multiple = (n // m + 1) * m

lower_distance = abs(n - lower_multiple)
upper_distance = abs(n - upper_multiple)

if lower_distance < upper_distance:
    print(lower_multiple)
elif upper_distance < lower_distance:
    print(upper_multiple)
else:
    print(max(lower_multiple, upper_multiple, key=abs))`
},

q17: {
  title: "Dice Opposite Face",
  description: `<p><strong>🎯 Problem Statement:</strong> You are given the face number (1-6) of a dice. Find the opposite face number.</p>
                <p><strong>🎲 Rule:</strong> Opposite faces on a die always sum up to 7.</p>
                <p><strong>📥 Sample Input/Output:</strong></p>
                <ul>
                  <li>Input: 1 → Output: 6</li>
                  <li>Input: 3 → Output: 4</li>
                </ul>`,
  code: `
face = int(input("Enter the number on the face of the dice (1 to 6): "))
if 1 <= face <= 6:
    opposite_face = 7 - face
    print("The number on the opposite face is:", opposite_face)
else:
    print("Invalid input! The number must be between 1 and 6.")`
},
q18: {
  title: "Voting Eligibility Checker",
  description: `<p><strong>🎯 Problem Statement:</strong> A system to check if a person is eligible to vote:</p>
                <ul>
                  <li>Must be 18 or older</li>
                  <li>Must be a citizen</li>
                  <li>If age is above 60, they get a priority pass</li>
                </ul>`,
  code: `
age = int(input("Enter your age: "))
citizen = input("Are you a citizen? (yes/no): ")

if age >= 18:
    if citizen.lower() == "yes":
        if age >= 60:
            print("Eligible to Vote with Priority Pass")
        else:
            print("Eligible to Vote")
    else:
        print("Not Eligible (Non-Citizen)")
else:
    print("Not Eligible (Underage)")`
},

q19: {
  title: "Last Digit of a Number",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print its last digit.</p>`,
  code: `
n = int(input("Enter an integer: "))
print(abs(n) % 10)`
},

q20: {
  title: "Int Str Formatter",
  description: `<p><strong>🎯 Problem Statement:</strong> Print <code>a</code> repeated <code>a</code> times, and <code>b</code> repeated <code>b</code> times, separated by <code>c</code>.</p>`,
  code: `
a = int(input("Enter the value of a: "))
b = int(input("Enter the value of b: "))
c = input("Enter the separator character (c): ")
print(str(a) * a + c + str(b) * b)`
},

q21: {
  title: "Check the Status",
  description: `<p><strong>🎯 Problem Statement:</strong> Return True if:
                <ul>
                  <li>Either a or b (but not both) is non-negative and flag is False</li>
                  <li>Both a and b are negative and flag is True</li>
                </ul>
                Otherwise, return False.</p>`,
  code: `
a = int(input("Enter value for a: "))
b = int(input("Enter value for b: "))
flag = input("Enter value for flag (True/False): ").strip() == "True"

if flag:
    result = a < 0 and b < 0
else:
    result = (a >= 0) != (b >= 0)

print(result)`
},

q22: {
  title: "Type Conversion",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a float <code>d</code>, convert it to int and print.</p>`,
  code: `
d = float(input("Enter a double value: "))
i = int(d)
print(i)`
},

q23: {
  title: "Bitwise Operator Challenge",
  description: `<p><strong>🎯 Problem Statement:</strong> Perform and print these operations:</p>
                <ul>
                  <li>d = a ^ a</li>
                  <li>e = ~ (c ^ b)</li>
                  <li>f = a & b</li>
                  <li>g = c | (a ^ a)</li>
                </ul>`,
  code: `
a = int(input("Enter value for a: "))
b = int(input("Enter value for b: "))
c = int(input("Enter value for c: "))

d = a ^ a
e = c ^ b
f = a & b
g = c | (a ^ a)
e = ~e

print(d, e, f, g)`
},

q24: {
  title: "Multi Printing",
  description: `<p><strong>🎯 Problem Statement:</strong> Print character <code>a</code> <code>n</code> times in a single line.</p>`,
  code: `
a = input("Enter value for a: ")
n = int(input("Enter value for n: "))
print(a * n)`
},

q25: {
  title: "Arithmetic Operations",
  description: `<p><strong>🎯 Problem Statement:</strong> Given x and y, perform +, -, *, /, % and print results.</p>`,
  code: `
x = int(input("Enter value for x: "))
y = int(input("Enter value for y: "))

p = x + y
q = x - y
r = x * y

if y != 0:
    s = x / y
    t = x % y
else:
    s = "Undefined (division by zero)"
    t = "Undefined (modulo by zero)"

print(p, q, r, s, t)`
},

q26: {
  title: "Modulo Task",
  description: `<p><strong>🎯 Problem Statement:</strong> Given <code>N</code>, find integer <code>K</code> such that <code>N % K</code> is maximum (1 ≤ K &lt; N).</p>`,
  code: `
N = int(input("Enter a value for N: "))
K = N // 2 + 1
print(K)`
},
q27: {
  title: "For Loop-1",
  description: `<p><strong>🎯 Problem Statement:</strong> You are given a number <code>n</code>, you need to print its multiplication table in a single line using for loop.</p>`,
  code: `
# Input
n = int(input("Enter a number: "))

# Print multiplication table in one line
for i in range(1, 11):
    print(n * i, end=' ')`
},

q28: {
  title: "While Loop",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a number <code>x</code>, print the numbers from <code>x</code> to <code>0</code> in decreasing order in a single line.</p>`,
  code: `
# Input
x = int(input("Enter a number: "))

# Print from x to 0 in decreasing order
for i in range(x, -1, -1):
    print(i, end=' ')`
},

q29: {
  title: "Table Difference",
  description: `<p><strong>🎯 Problem Statement:</strong> Given two numbers <code>n1</code> and <code>n2</code> (<code>n1 > n2</code>), find the differences between their mathematical tables and print them in a single line.</p>`,
  code: `
# Input
n1 = int(input("Enter n1: "))
n2 = int(input("Enter n2: "))

# Print differences in a single line
for i in range(1, 11):
    print((n1 - n2) * i, end=' ')`
},

q30: {
  title: "Print Square Wall Using Nested Loop",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print a square wall of size <code>n</code> using nested loops (without string multiplication).</p>`,
  code: `
# Input
n = int(input("Enter the size of the square wall: "))

# Nested loops to print the square
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()  # Move to next line after each row`
},

q31: {
  title: "Right Angle Triangle",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print a right-angled triangle with perpendicular and base of length <code>n</code> (using string multiplication).</p>`,
  code: `
# Input
n = int(input("Enter the size of the triangle: "))

# Single loop and string multiplication to print the triangle
for i in range(1, n + 1):
    print(("* " * i).rstrip())`
},

q32: {
  title: "Right Angle Triangle - 2",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print a special right-angled triangle with hollow interior and a solid base.</p>`,
  code: `
# Input
n = int(input("Enter the size of the triangle: "))

# Print triangle using a loop
for i in range(1, n + 1):
    if i == 1:
        print("*")
    elif i == n:
        print("* " * n)
    else:
        print("*" + " " * (2 * (i - 2) + 1) + "*")`
},

q33: {
  title: "Inverted Right Angle Triangle",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print an inverted right-angled triangle with perpendicular and base of length <code>n</code>.</p>`,
  code: `
# Input
n = int(input("Enter the size of the triangle: "))

# Print inverted triangle using string multiplication
for i in range(n, 0, -1):
    print("* " * i)`
},

q34: {
  title: "Sum of N Numbers",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, find the sum of the first <code>n</code> natural numbers.</p>`,
  code: `
# Input
n = int(input("Enter a number: "))

# Calculate sum using formula
sum_n = n * (n + 1) // 2

# Output
print(sum_n)`
},

q35: {
  title: "Factorial",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, return the factorial of <code>n</code> (the product of all numbers from 1 to <code>n</code>).</p>`,
  code: `
# Input
n = int(input("Enter a number: "))

# Initialize result
fact = 1

# Calculate factorial using loop
for i in range(1, n + 1):
    fact *= i

# Output
print(fact)`
},

q36: {
  title: "Divisor",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, print all its divisors in a single line.</p>`,
  code: `
# Input
n = int(input("Enter a number: "))

# Print all divisors
for i in range(1, n + 1):
    if n % i == 0:
        print(i, end=' ')`
},

q37: {
  title: "Check Prime",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, check if it is a prime number (divisible only by 1 and itself).</p>`,
  code: `
# Input
n = int(input("Enter a number: "))
# Check for prime
if n <= 1:
    print("False")
else:
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            print("False")
            break
    else:
        print("True")`
},

q38: {
  title: "Next Prime Number",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, find the first prime number greater than <code>n</code>.</p>`,
  code: `
# Input
n = int(input("Enter a number: "))

# Function to check if a number is prime
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

# Find the first prime greater than n
next_num = n + 1
while True:
    if is_prime(next_num):
        print(next_num)
        break
    next_num += 1`
},

q39: {
  title: "Fibonacci Number",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, find the <code>n</code>-th Fibonacci number.</p>`,
  code: `
# Input
n = int(input("Enter the value of n: "))

# Base cases
if n == 0:
    print(0)
elif n == 1:
    print(1)
else:
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    print(b)`
},

q40: {
  title: "GCD",
  description: `<p><strong>🎯 Problem Statement:</strong> Given two numbers <code>a</code> and <code>b</code>, find their Greatest Common Divisor (GCD).</p>`,
  code: `
# Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

# Find GCD using Euclidean Algorithm
while b != 0:
    a, b = b, a % b

# Output
print(a)`
},

q41: {
  title: "LCM",
  description: `<p><strong>🎯 Problem Statement:</strong> Given two numbers <code>a</code> and <code>b</code>, find their Least Common Multiple (LCM).</p>`,
  code: `
# Input
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

# Function to find GCD (using Euclidean algorithm)
def gcd(x, y):
    while y != 0:
        x, y = y, x % y
    return x

# Calculate LCM using the formula: LCM = (a * b) // GCD
lcm = (a * b) // gcd(a, b)
# Output
print(lcm)`
},

q42: {
  title: "Pattern 10",
  description: `<p><strong>🎯 Problem Statement:</strong> Given an integer <code>n</code>, build a pattern that first increases and then decreases in a triangular shape.</p>`,
  code: `
# Input
n = int(input("Enter the value of n: "))

# Increasing part
for i in range(1, n + 1):
    print("* " * i)

# Decreasing part
for i in range(n - 1, 0, -1):
    print("* " * i)`
},
q420: {
  title: "Armstrong Numbers",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a 3-digit number <code>n</code>, check if it is an Armstrong number (sum of cubes of its digits equals the number itself).</p>`,
  code: `
# Input
n = int(input("Enter a 3-digit number: "))

# Store original number
original = n

# Calculate the sum of cubes of digits
sum_of_cubes = 0
while n > 0:
    digit = n % 10
    sum_of_cubes += digit ** 3
    n //= 10

# Check if Armstrong number
print(str(sum_of_cubes == original).lower())`
},

q43: {
  title: "Number of 1 Bits",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a positive integer <code>n</code>, return the count of set bits in its binary representation.</p>`,
  code: `
# Input
n = int(input("Enter a positive integer: "))

# Count set bits using bin() and count()
count = bin(n).count('1')

# Output
print(count)`
},

q44: {
  title: "Perfect Numbers",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a number <code>n</code>, check if it is a perfect number (sum of its proper divisors equals the number).</p>`,
  code: `
# Input
n = int(input("Enter a number: "))
# Find sum of proper divisors
sum_of_divisors = 0
for i in range(1, n):
    if n % i == 0:
        sum_of_divisors += i
# Check if it's a perfect number
print(str(sum_of_divisors == n).lower())`
},

q45: {
  title: "Evaluate Formulae",
  description: `<p><strong>🎯 Problem Statement:</strong> Given four variables <code>a, b, c, d</code>, compute the result of <code>(a + b) // c + d</code> using integer division.</p>`,
  code: `
# Take input values
a = int(input("Enter value of a: "))
b = int(input("Enter value of b: "))
c = int(input("Enter value of c: "))
d = int(input("Enter value of d: "))

# Compute the result using integer division
result = (a + b) // c + d

# Print the result
print("Result:", result)`
},

q46: {
  title: "Arithmetic Progression (AP)",
  description: `<p><strong>🎯 Problem Statement:</strong> Given first term <code>a</code>, common difference <code>d</code>, and term number <code>n</code>, calculate the nth term of AP.</p>`,
  code: `
# Input values
a = int(input("Enter the first term (a): "))
d = int(input("Enter the common difference (d): "))
n = int(input("Enter the term number (n): "))

# Calculate nth term
an = a + (n - 1) * d

# Print the result
print(an)`
},

q47: {
  title: "Geometric Progression Term",
  description: `<p><strong>🎯 Problem Statement:</strong> Given first term <code>a</code> and term number <code>n</code> (with fixed common ratio <code>r=2</code>), calculate the nth term of GP.</p>`,
  code: `
# Input values
a = int(input("Enter the first term (a): "))
n = int(input("Enter the term number (n): "))

# Common ratio is fixed
r = 2

# Calculate nth term
an = a * (r ** (n - 1))

# Print the result
print(an)`
},

q48: {
  title: "Celsius to Fahrenheit Conversion",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a temperature in Celsius <code>C</code>, convert it to Fahrenheit.</p>`,
  code: `
# Input Celsius temperature
C = float(input("Enter temperature in Celsius: "))

# Convert to Fahrenheit
F = (9 / 5) * C + 32

# Print result with 2 decimal places
print(f"{F:.2f}")`
},

q49: {
  title: "Sum of AP Series",
  description: `<p><strong>🎯 Problem Statement:</strong> Given first term <code>a</code>, common difference <code>d</code>, and term count <code>n</code>, calculate the sum of the AP series.</p>`,
  code: `
# Input values
a = int(input("Enter the first term (a): "))
d = int(input("Enter the common difference (d): "))
n = int(input("Enter the number of terms (n): "))

# Calculate the sum of the series
Sn = (n * (2 * a + (n - 1) * d)) // 2

# Print the result
print(Sn)`
},

q50: {
  title: "Adam Number",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a number <code>N</code>, check if it is an Adam number (square of N and square of reversed N are reverses of each other).</p>`,
  code: `
def reverse_num(n):
    return int(str(n)[::-1])

def checkAdamOrNot(N):
    rev_N = reverse_num(N)
    N_squared = N * N
    rev_N_squared = rev_N * rev_N

    if reverse_num(N_squared) == rev_N_squared:
        return "YES"
    else:
        return "NO"

# Example usage:
N = int(input("Enter a number: "))
print(checkAdamOrNot(N))`
},

q51: {
  title: "Subtract 1 using Bitwise Operators",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a number <code>n</code>, subtract 1 using bitwise operations.</p>`,
  code: `
def subtractOne(n):
    return n + ~0

# Example usage
n = int(input("Enter a number: "))
print(subtractOne(n))`
},

q52: {
  title: "Decimal to Binary",
  description: `<p><strong>🎯 Problem Statement:</strong> Given a decimal number <code>n</code>, return its binary representation.</p>`,
  code: `
def decimal_to_binary(n):
    binary = ''
    if n == 0:
        return '0'
    while n > 0:
        binary = str(n % 2) + binary
        n = n // 2
    return binary

# Example usage
n = int(input("Enter a decimal number: "))
print(decimal_to_binary(n))`
},

q53: {
  title: "LCM and GCD",
  description: `<p><strong>🎯 Problem Statement:</strong> Given two integers <code>a</code> and <code>b</code>, compute their LCM and GCD.</p>`,
  code: `
def compute_lcm_gcd(a, b):
    # Compute GCD using Euclidean algorithm
    def gcd(x, y):
        while y:
            x, y = y, x % y
        return x

    # Compute LCM using formula: LCM(a, b) = (a * b) // GCD(a, b)
    gcd_val = gcd(a, b)
    lcm_val = (a * b) // gcd_val

    return [lcm_val, gcd_val]

# Example usage
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
print(compute_lcm_gcd(a, b))`
},
    q54: {
        title: "String Duplicate Removal",
        description: `Given a string which may contain lowercase and uppercase characters. The task is to remove all duplicate characters from the string and find the resultant string. The order of remaining characters in the output should be same as in the original string.`,
        code: `def remove_duplicates(s):
    seen = set()
    result = ''
    
    for char in s:
        if char not in seen:
            seen.add(char)
            result += char
    
    return result`
    },
    q55: {
        title: "Union of Arrays With Duplicates",
        description: `Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays. The Union of the two arrays can be defined as the set containing distinct elements from both arrays.`,
        code: `# Read first array
a = list(map(int, input("Enter elements of first array separated by space: ").split()))

# Read second array
b = list(map(int, input("Enter elements of second array separated by space: ").split()))

# Create a set to store union
union_set = set()

# Add elements from both arrays
for i in a:
    union_set.add(i)
for i in b:
    union_set.add(i)

# Print the number of distinct elements
print(len(union_set))`
},

  q56: {
    title: "Acronym Generator",
    description: `Generates a short form (acronym) from a given sentence by taking the first letter of each word and capitalizing it. This program splits the input string into words and combines their first letters.`,
    code: `
    user_input = str(input("Enter a Phrase: "))
text = user_input.split()
a = " "
for i in text:
    a = a+str(i[0]).upper()
print(a)`
},

  q57: {
    title: "Anagram Checker",
    description: `Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different.`,
    code: `# Take input
s1 = input("Enter first string: ")
s2 = input("Enter second string: ")

# Check lengths first
if len(s1) != len(s2):
    print("false")
else:
    count = [0] * 26  # For 26 lowercase letters

    for i in range(len(s1)):
        count[ord(s1[i]) - ord('a')] += 1
        count[ord(s2[i]) - ord('a')] -= 1

    is_anagram = True
    for i in range(26):
        if count[i] != 0:
            is_anagram = False
            break

    if is_anagram:
        print("true")
    else:
        print("false")`,
  
},
  q58: {
    title: "Type of IP Address Using Regex",
    description: `Given an IP address as input, write a program to find the type of IP address i.e. either IPv4 or IPv6. If the given is neither of them then print neither.`,
    code: `# Python program to find the type of Ip address

# re module provides support 
# for regular expressions
import re

# Make a regular expression 
# for validating an Ipv4
ipv4 = '''^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\\.( 
			25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\\.( 
			25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\\\.( 
			25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$'''

# Make a regular expression 
# for validating an Ipv6
ipv6 = '''(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|
		([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:)
		{1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1
		,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}
		:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{
		1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA
		-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a
		-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0
		-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,
		4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}
		:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9
		])\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0
		-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]
		|1{0,1}[0-9]){0,1}[0-9])\\\.){3,3}(25[0-5]|(2[0-4]
		|1{0,1}[0-9]){0,1}[0-9]))'''

# Define a function for finding 
# the type of Ip address 
def find(Ip): 

	# pass the regular expression 
	# and the string in search() method
	if re.search(ipv4, Ip):
		print("IPv4")
	elif re.search(ipv6, Ip):
		print("IPv6")
	else:
		print("Neither")

# Driver Code 
if __name__ == '__main__' : 
	
	# Enter the Ip address 
	Ip = "192.0.2.126"
	
	# calling run function 
	find(Ip) 

	Ip = "3001:0da8:75a3:0000:0000:8a2e:0370:7334"
	find(Ip) 

	Ip = "36.12.08.20.52"
	find(Ip)`,
    
  }
};