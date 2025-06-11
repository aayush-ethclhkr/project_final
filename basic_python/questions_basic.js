const questions = {
t1: {
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
    print("Not Eligible (Underage)")`,
        
    },
    t2:{
        title:"Student Grading System",
        description:`<p><strong>🎯 Problem Statement:</strong> A student's grade is calculated based on marks and attendance:</p>
                <ul>
                    <li>Marks ≥ 90 and Attendance ≥ 85% → Grade A+ with Scholarship</li>
                    <li>Marks ≥ 90 but Attendance < 85% → Grade A</li>
                    <li>Marks between 80-89 → Grade B</li>
                    <li>Marks between 70-79 → Grade C</li>
                    <li>Marks between 60-69 → Grade D</li>
                    <li>Marks < 60 → Fail</li>
                </ul>`,
        code:`
marks = int(input("Enter your marks: "))
attendance = int(input("Enter your attendance percentage: "))

if marks >= 90:
    if attendance >= 85:
        print("Grade: A+ with Scholarship")
    else:
        print("Grade: A")
elif 80 <= marks <= 89:
    print("Grade: B")
elif 70 <= marks <= 79:
    print("Grade: C")
elif 60 <= marks <= 69:
    print("Grade: D")
else:
    print("Fail")`,
        
    },
    t3:{
        title:"Bank Loan Approval",
        description:`<p><strong>🎯 Problem Statement:</strong> A bank approves loans based on:</p>
                <ul>
                    <li>Income ≥ $60,000 and Credit Score ≥ 700 → Loan Approved</li>
                    <li>Income between $40,000-$59,999 with Credit Score ≥ 650 → Conditional Approval</li>
                    <li>Income < $40,000 or Credit Score < 650 → Loan Rejected</li>
                </ul>`,
        code:`
income = int(input("Enter your annual income: "))
credit_score = int(input("Enter your credit score: "))

if income >= 60000:
    if credit_score >= 700:
        print("Loan Approved")
    else:
        print("Loan Rejected (Low Credit Score)")
elif 40000 <= income < 60000:
    if credit_score >= 650:
        print("Conditional Loan Approval")
    else:
        print("Loan Rejected (Low Credit Score)")
else:
    print("Loan Rejected (Low Income)")`,
        
    },
    t4: {
        title:"E-commerce Shipping",
        description:` <p><strong>🎯 Problem Statement:</strong> Shipping costs based on order value and location:</p>
                <ul>
                    <li>Order ≥ $100 and local → Free Shipping</li>
                    <li>Order $50-$99 → $5 Shipping</li>
                    <li>Order $20-$49 → $10 Shipping</li>
                    <li>Order < $20 → $15 Shipping</li>
                    <li>International → Additional $20</li>
                </ul>`,
        code:`
order_value = float(input("Enter your order value: $"))
location = input("Is the location Local or International? ").lower()

if order_value >= 100:
    shipping = 0
elif 50 <= order_value < 100:
    shipping = 5
elif 20 <= order_value < 50:
    shipping = 10
else:
    shipping = 15

if location == "international":
    shipping += 20

print(f"Total Shipping Cost: \${shipping}")`,
        
    },
    t5:{
        title:"Password Strength Checker",
        description:`<p><strong>🎯 Problem Statement:</strong> A system to check password strength:</p>
                <ul>
                    <li>Length ≥ 12 and contains special chars → Strong Password</li>
                    <li>Length between 8-11 → Medium Password</li>
                    <li>Length < 8 → Weak Password</li>
                </ul>`,
        code:`
password = input("Enter your password: ")

if len(password) >= 12:
    if any(char in "!@#$%^&*()-_+=<>?/|{}[]" for char in password):
        print("Strong Password")
    else:
        print("Medium Password")
elif 8 <= len(password) <= 11:
    print("Medium Password")
else:
    print("Weak Password")`,
        
    },
    t6:{
        title:"Remove All Spaces",
        description:`<p><strong>🎯 Problem Statement:</strong> Create a program to remove all spaces from the input string.</p>`,
        code:`
# Remove spaces using replace()
text = input("Enter your text: ")
no_space = text.replace(" ", "")

print("String without spaces:", no_space)`,
        
    },
    t7:{
        title:"Convert to Title Case",
        description:`
        <p><strong>🎯 Problem Statement:</strong> Write a program to capitalize the first letter of each word in a string (like a title).</p>
`,
        code:`
text = input("Enter a string: ")

# Convert to title case using title()
title_case = text.title()

print("Title Case String:", title_case)`,
        
    },
    t8:{
        title:"First & Last Character",
        description:`
        <p><strong>🎯 Problem Statement:</strong> Write a program to display the first and last character of a string.</p>`,
        code:`
text = input("Enter a string: ")

# Accessing first and last character
if len(text) > 0:
    first_char = text[0]
    last_char = text[-1]
    print("First Character:", first_char)
    print("Last Character:", last_char)
else:
    print("Empty String")`,
        
    },
    t9:{
        title:"Check for Digits Only",
        description:`
         <p><strong>🎯 Problem Statement:</strong> Write a program to check if the input string contains only numeric digits (0-9).</p>
            
`,
        code:`
text = input("Enter a string: ")

# Check if string is numeric
if text.isdigit():
    print("The string contains only digits.")
else:
    print("The string contains other characters.")`,
        
    },
    t10:{
        title:"Count Character Occurrences",
        description:`
         <p><strong>🎯 Problem Statement:</strong> Write a program to count how many times a specific character appears in a string.</p>`,
        code:`
text = input("Enter a string: ")
char = input("Enter the character to count: ")

# Count the character
count = text.count(char)

print(f"'{char}' appears {count} times in the string.")`,
        
    },
  t11: {
    title: "Basic List Operations (Beginner)",
    description: `<p><strong>🎯 Objective:</strong> Create a list of numbers, add elements, remove elements, and access elements.</p>`,
    code: `
# Create a list of integers
numbers = [1, 2, 3, 4, 5]

# Add elements
numbers.append(6)
numbers.insert(2, 10)  # Insert 10 at index 2

# Remove elements
numbers.remove(4)
numbers.pop(3)  # Pop element at index 3

# Access elements
print("First element:", numbers[0])  # Output: 1
print("Last element:", numbers[-1])  # Output: 6

print("Updated list:", numbers)`
  },

  t12: {
    title: "List Slicing and Looping (Beginner to Intermediate)",
    description: `<p><strong>🎯 Objective:</strong> Extract sublists using slicing and loop through the list to process elements.</p>`,
    code: `
# Original list of names
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Slice the list to get a sublist
sublist = names[1:4]  # Get elements from index 1 to 3 (exclusive of 4)
print("Sliced list:", sublist)

# Loop through the list and print each name
for name in names:
    print("Hello, " + name)`
  },

  t13: {
    title: "List Comprehensions (Intermediate)",
    description: `<p><strong>🎯 Objective:</strong> Use list comprehensions to create a new list based on a condition or transformation.</p>`,
    code: `
# Create a list of squares for even numbers in the range 1 to 10
squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print("Squares of even numbers:", squares)

# Create a list of uppercased names
names = ["alice", "bob", "charlie", "david"]
upper_names = [name.upper() for name in names]
print("Uppercased names:", upper_names)`
  },

  t14: {
    title: "List of Lists (Intermediate to Advanced)",
    description: `<p><strong>🎯 Objective:</strong> Work with a list of lists and perform operations like flattening the list and calculating sums.</p>`,
    code: `
# List of lists representing a 2D matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Flatten the matrix into a single list
flattened = [item for row in matrix for item in row]
print("Flattened list:", flattened)

# Calculate the sum of each row
row_sums = [sum(row) for row in matrix]
print("Row sums:", row_sums)

# Calculate the sum of all elements in the matrix
total_sum = sum(flattened)
print("Total sum of matrix:", total_sum)`
  },

  t15: {
    title: "List Manipulation with Sorting and Searching (Advanced)",
    description: `<p><strong>🎯 Objective:</strong> Sort a list, use binary search for efficient lookups, and apply advanced list operations.</p>`,
    code: `
import bisect

# Create a sorted list of numbers
numbers = [1, 3, 5, 7, 9, 11, 13]

# Insert an element while maintaining the sorted order
bisect.insort(numbers, 6)
print("List after insertion:", numbers)

# Binary search: find index of an element (if it exists)
index = bisect.bisect_left(numbers, 7)
print("Index of 7:", index)

# Sorting a list of dictionaries by a specific key
people = [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 35},
    {"name": "Charlie", "age": 23},
]

# Sort people by age
sorted_people = sorted(people, key=lambda person: person['age'])
print("Sorted by age:", sorted_people)

# Find the person with the minimum age
youngest_person = min(people, key=lambda person: person['age'])
print("Youngest person:", youngest_person)`
  },



t16: {
  title: "Beginner: Creating and Accessing Tuples",
  description: `<p><strong>🎯 Objective:</strong> Demonstrate how to create a tuple, access its elements, and showcase immutability.</p>
                <ul>
                    <li>Create a tuple</li>
                    <li>Access elements using indexing</li>
                    <li>Attempt to modify to show immutability</li>
                </ul>`,
  code: `# Create a tuple of fruits
fruits = ("apple", "banana", "cherry")

# Access elements
print(fruits[0])  # First element
print(fruits[-1])  # Last element
print(len(fruits))  # Length of tuple

# Attempt to modify (will raise an error)
try:
    fruits[0] = "orange"
except TypeError as e:
    print(f"Error: {e}")`
},

t17: {
  title: "Intermediate: Tuple Packing and Unpacking",
  description: `<p><strong>🎯 Objective:</strong> Show tuple packing, unpacking, and value swapping.</p>
                <ul>
                    <li>Tuple creation without parentheses</li>
                    <li>Assign elements to variables</li>
                    <li>Swap variable values</li>
                </ul>`,
  code: `# Tuple packing
coordinates = 3.14, 2.71, 1.41

# Tuple unpacking
x, y, z = coordinates

print(f"Coordinates: {coordinates}")
print(f"x = {x}, y = {y}, z = {z}")

# Swapping values
a, b = 10, 20
print(f"Before swap: a = {a}, b = {b}")
a, b = b, a
print(f"After swap: a = {a}, b = {b}")`
},

t18: {
  title: "Advanced: Named Tuples",
  description: `<p><strong>🎯 Objective:</strong> Use named tuples to access elements with readability and calculate distance.</p>
                <ul>
                    <li>Define a namedtuple</li>
                    <li>Access by name and index</li>
                    <li>Unpack and perform calculations</li>
                </ul>`,
  code: `from collections import namedtuple

# Define a named tuple
Point = namedtuple('Point', ['x', 'y', 'z'])

# Create instances
p1 = Point(1, 2, 3)
p2 = Point(4, 5, 6)

# Access by name or index
print(f"p1: x={p1.x}, y={p1.y}, z={p1.z}")
print(f"p2: x={p2[0]}, y={p2[1]}, z={p2[2]}")

# Unpack and perform operations
x1, y1, z1 = p1
x2, y2, z2 = p2
distance = ((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2) ** 0.5
print(f"Distance between p1 and p2: {distance:.2f}")`
},
t19: {
  title: "Beginner: Creating and Modifying Sets",
  description: `<p><strong>🎯 Objective:</strong> Understand basic operations on sets like creation, addition, removal, and membership testing.</p>
                <ul>
                    <li>Create a set with unique elements</li>
                    <li>Add and remove elements</li>
                    <li>Test for membership</li>
                </ul>`,
  code: `# Create a set
fruits = {"apple", "banana", "cherry"}
print(f"Original set: {fruits}")

# Add an element
fruits.add("date")
print(f"After adding 'date': {fruits}")

# Remove an element
fruits.remove("banana")
print(f"After removing 'banana': {fruits}")

# Check membership
print(f"Is 'apple' in the set? {'apple' in fruits}")
print(f"Is 'banana' in the set? {'banana' in fruits}")`
},

t20: {
  title: "Intermediate: Set Operations",
  description: `<p><strong>🎯 Objective:</strong> Perform and understand union, intersection, difference, and symmetric difference operations.</p>
                <ul>
                    <li>Work with two sets</li>
                    <li>Apply basic set operations</li>
                </ul>`,
  code: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print(f"Set 1: {set1}")
print(f"Set 2: {set2}")

# Union
print(f"Union: {set1 | set2}")

# Intersection
print(f"Intersection: {set1 & set2}")

# Difference
print(f"Difference (set1 - set2): {set1 - set2}")
print(f"Difference (set2 - set1): {set2 - set1}")

# Symmetric difference
print(f"Symmetric difference: {set1 ^ set2}")`
},

t21: {
  title: "Advanced: Set Comprehensions",
  description: `<p><strong>🎯 Objective:</strong> Use set comprehensions for creating filtered sets and finding common elements in collections.</p>
                <ul>
                    <li>Generate prime numbers with set comprehension</li>
                    <li>Find common characters between two strings</li>
                </ul>`,
  code: `# Generate prime numbers up to 50 using set comprehension
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

primes = {x for x in range(2, 51) if is_prime(x)}
print(f"Prime numbers up to 50: {primes}")

# Find common characters in two strings using set intersection
str1 = "hello world"
str2 = "goodbye world"
common_chars = set(str1) & set(str2)
print(f"Common characters in '{str1}' and '{str2}': {common_chars}")`
},
t22: {
  title: "Beginner: Creating and Accessing Dictionaries",
  description: `<p><strong>🎯 Objective:</strong> Learn to create dictionaries, access and modify data, and use the <code>get()</code> method with a default.</p>
                <ul>
                    <li>Create a dictionary</li>
                    <li>Access and update values</li>
                    <li>Add new key-value pairs</li>
                    <li>Use <code>get()</code> with a default value</li>
                </ul>`,
  code: `# Create a dictionary
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# Access values
print(f"Name: {student['name']}")
print(f"Age: {student['age']}")

# Modify a value
student['age'] = 21
print(f"Updated age: {student['age']}")

# Add a new key-value pair
student['gpa'] = 3.8
print(f"Updated dictionary: {student}")

# Get a value with a default
print(f"Graduation year: {student.get('graduation_year', 'Not specified')}")`
},

t23: {
  title: "Intermediate: Dictionary Comprehension",
  description: `<p><strong>🎯 Objective:</strong> Practice dictionary comprehensions for creating, filtering, and transforming dictionaries.</p>
                <ul>
                    <li>Create dictionary using comprehension</li>
                    <li>Filter items based on a condition</li>
                    <li>Swap keys and values</li>
                </ul>`,
  code: `# Create a dictionary of squares
squares = {x: x**2 for x in range(1, 6)}
print(f"Squares: {squares}")

# Filter a dictionary
original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
filtered = {k: v for k, v in original.items() if v % 2 == 0}
print(f"Original: {original}")
print(f"Filtered (even values): {filtered}")

# Swap keys and values
swapped = {v: k for k, v in original.items()}
print(f"Swapped: {swapped}")`
},

t24: {
  title: "Advanced: Nested Dictionaries and Deep Copy",
  description: `<p><strong>🎯 Objective:</strong> Explore nested dictionaries and understand the difference between shallow and deep copies.</p>
                <ul>
                    <li>Access nested values</li>
                    <li>Create shallow and deep copies</li>
                    <li>Compare how changes affect them</li>
                </ul>`,
  code: `import copy

# Nested dictionary
university = {
    "Computer Science": {
        "Alice": {"age": 20, "gpa": 3.8},
        "Bob": {"age": 22, "gpa": 3.5}
    },
    "Physics": {
        "Charlie": {"age": 21, "gpa": 3.9},
        "David": {"age": 20, "gpa": 3.7}
    }
}

# Accessing nested values
print(f"Alice's GPA: {university['Computer Science']['Alice']['gpa']}")

# Shallow copy vs Deep copy
shallow_copy = university.copy()
deep_copy = copy.deepcopy(university)

# Modify a nested value
university["Computer Science"]["Alice"]["gpa"] = 4.0

print(f"Original: {university['Computer Science']['Alice']['gpa']}")
print(f"Shallow copy: {shallow_copy['Computer Science']['Alice']['gpa']}")
print(f"Deep copy: {deep_copy['Computer Science']['Alice']['gpa']}")`
},

  t25: {
    title: "Beginner: Prime Number Checker",
    description: "A beginner example demonstrating a `while` loop to check if a number is prime, including a helper function and range checking.",
    code: `def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

number = 17
divisor = 2
is_prime_flag = True

while divisor * divisor <= number:
    if number % divisor == 0:
        is_prime_flag = False
        print(f"{number} is divisible by {divisor}")
        break
    print(f"Checked {divisor}, {number} is not divisible")
    divisor += 1

if is_prime_flag:
    print(f"{number} is prime")
else:
    print(f"{number} is not prime")

print("\\nChecking numbers from 10 to 20:")
for num in range(10, 21):
    if is_prime(num):
        print(f"{num} is prime")
    else:
        print(f"{num} is not prime")`
  },



  t27: {
    title: "Upper Intermediate: Fibonacci Sequence Generator with Break",
    description: "A loop-based Fibonacci generator using `while True` and `break`, capable of stopping early when a limit or threshold is reached.",
    code: `def fibonacci_generator(limit):
    a, b = 0, 1
    count = 0

    print("Generating Fibonacci sequence up to", limit, "terms:")

    while True:
        if count >= limit:
            break

        print(f"Term {count + 1}: {a}")
        a, b = b, a + b
        count += 1

        if a > 100:
            print("Value exceeded 100, stopping early.")
            break

    return count

terms_generated = fibonacci_generator(10)
print(f"Generated {terms_generated} terms in total.")`
  },

  t28: {
    title: "Advanced: Nested While Loops for Pattern Printing",
    description: "An advanced pattern-printing example using nested `while` loops to build and print number-based patterns row by row.",
    code: `def print_number_pattern(rows):
    curr_row = 0

    while curr_row < rows:
        s = ""
        column = 0
        while column < rows:
            s += str((curr_row + column) % 10)
            column += 1
        print(s)
        curr_row += 1

print("Number Pattern with 5 rows:")
print_number_pattern(5)

print("\\nNumber Pattern with 8 rows:")
print_number_pattern(8)`
  },

  t29: {
    title: "Beginner: Function to Find Maximum of Two Numbers",
    description: "A simple function that returns the greater of two input numbers using a basic if-else condition.",
    code: `
def find_max():
    a = int(input("Enter first number: "))
    b = int(input("Enter second number: "))
    if a > b:
        return a
    else:
        return b

# Call the function
print("Maximum is:", find_max())
   `
},

t30: {
    title: "Beginner: Check Even or Odd",
    description: "This function checks whether a number is even or odd using the modulo operator.",
    code: `def is_even_or_odd():
    num = int(input())    
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"
print(is_even_or_odd())`
},




t33: {
    title: "Advanced: Fibonacci Using Memoization",
    description: "Generates Fibonacci numbers efficiently using a memoization dictionary to store previously computed values.",
    code: `fib_cache = {}
def fibonacci(n):
    if n in fib_cache:
        return fib_cache[n]
    if n <= 1:
        result = n
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
    fib_cache[n] = result
    return result
print(fibonacci(9))`
},
t34: {
  title: "Basic Pattern Matching",
  description: "This example searches for the word 'Python' in the text and returns all occurrences as a list using `re.findall()`.",
  code: `import re
text = "Python is fun and Python is powerful"
pattern = r"Python"
matches = re.findall(pattern, text)
print(f"Found {len(matches)} matches: {matches}")`,
  output: `Found 2 matches: ['Python', 'Python']`
},

t35: {
  title: "Matching Digits",
  description: "The pattern `\\d+` matches one or more digits. `findall()` returns all occurrences of numbers in the text.",
  code: `import re
text = "I have 2 apples and 3 oranges, that's 5 fruits total"
pattern = r"\\d+"
matches = re.findall(pattern, text)
print(f"Numbers found: {matches}")`,
  output: `Numbers found: ['2', '3', '5']`
},

t36: {
  title: "Email Validation",
  description: "This pattern validates email addresses using `re.match()` by checking for username, domain name, and top-level domain format.",
  code: `import re
def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
    return bool(re.match(pattern, email))

emails = ["user@example.com", "invalid_email", "another.user@domain.co.uk", "no@domain"]
for email in emails:
    print(f"{email}: {'Valid' if is_valid_email(email) else 'Invalid'}")`,
  output: `user@example.com: Valid
invalid_email: Invalid
another.user@domain.co.uk: Valid
no@domain: Invalid`
},

t37: {
  title: "Phone Number Extraction",
  description: "This pattern matches phone numbers in two formats: `123-456-7890` or `9876543210` using alternation and word boundaries.",
  code: `import re
text = "Contact us at 123-456-7890 or 9876543210 for assistance."
pattern = r"\\b\\d{3}-\\d{3}-\\d{4}\\b|\\b\\d{10}\\b"
phone_numbers = re.findall(pattern, text)
print(f"Phone numbers found: {phone_numbers}")`,
  output: `Phone numbers found: ['123-456-7890', '9876543210']`
},t38: {
  title: "Splitting Text",
  description: "Split text on whitespace using `re.split()` and show limited splits.",
  code: `import re
text = "The rain in Spain falls mainly in the plain"
pattern = r"\\s+"
words = re.split(pattern, text)
print(f"Words: {words}")
limited_split = re.split(pattern, text, count=3)
print(f"Limited split: {limited_split}")`
},

t39: {
  title: "Text Substitution",
  description: "Replace 'fox' or 'dog' with 'animal' using `re.sub()`, with optional limit.",
  code: `import re
text = "The quick brown fox jumps over the lazy dog"
pattern = r"fox|dog"
replacement = "animal"
new_text = re.sub(pattern, replacement, text)
limited_sub = re.sub(pattern, replacement, text, count=1)
print(f"Original: {text}")
print(f"Modified: {new_text}")
print(f"Limited substitution: {limited_sub}")`
},

t40: {
  title: "Extracting HTML Tags",
  description: "Find all HTML tags using pattern `<[^>]+>` with `re.findall()`.",
  code: `import re
html = "<div><p>Hello <b>World</b></p><a href='https://example.com'>Link</a></div>"
pattern = r"<[^>]+>"
tags = re.findall(pattern, html)
print(f"HTML tags found: {tags}")`
},

t41: {
  title: "Capturing Groups",
  description: "Use capturing groups `()` to extract name and phone from text.",
  code: `import re
text = "John Smith: 555-1234, Mary Johnson: 555-5678"
pattern = r"(\\w+ \\w+): (\\d{3}-\\d{4})"
matches = re.findall(pattern, text)
for name, phone in matches:
    print(f"Name: {name}, Phone: {phone}")`
},

t42: {
  title: "Greedy vs. Non‑Greedy Matching",
  description: "Compare greedy `.*` vs non‑greedy `.*?` match behavior.",
  code: `import re
text = "<div>Content 1</div><div>Content 2</div>"
greedy = re.findall(r"<div>.*</div>", text)
non_greedy = re.findall(r"<div>.*?</div>", text)
print(f"Greedy match: {greedy}")
print(f"Non-greedy match: {non_greedy}")`
},

t43: {
  title: "Password Validation",
  description: "Validate password by checking multiple criteria: length, uppercase, lowercase, digit, special-char.",
  code: `import re
def validate_password(password):
    patterns = [r".{8,}", r"[A-Z]", r"[a-z]", r"\\d", r"[!@#$%^&*(),.?\\":{}|<>]"]
    results = [bool(re.search(p, password)) for p in patterns]
    return all(results), results

passwords = ["Weak", "stronger", "Str0ng", "Str0ng!", "Str0ng!Pass"]
criteria = ["Length ≥8", "Uppercase", "Lowercase", "Digit", "Special char"]
for pw in passwords:
    valid, checks = validate_password(pw)
    print(f"Password: {pw}, Valid: {valid}")
    for c, ok in zip(criteria, checks):
        print(f"  {c}: {'✓' if ok else '✗'}")
    print()`
},



};







