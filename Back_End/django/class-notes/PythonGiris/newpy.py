
##! FİBONACCİ sorusu yaptım

number = int(input("Bir sayı giriniz: "))
fibo = []

for i in range(0, number):
  if i == 0:
    fibo.append(i)
  elif i == 1:
    fibo.append(i)
  else:
    nextelement = fibo[i-1] + fibo[i-2]
    print(fibo[i-1], fibo[i-2])
    fibo.append(nextelement)
print(fibo)


# bur = ["v", "a", "b", "c", "z"]
# bur = sorted(bur, reverse=True)
# burh = max(bur)
# print(bur)
# print(burh)

# def add(a, b):
#     print(a + b)
    
# add(4, 4)

# def calculator (x,y,operant):
#   if  operant == "+":
#     print(x+y)
#   elif operant =="-":
#     print(x-y)
#   elif operant=="/":
#     print(x/y)
#   elif operant == "*":
#     print(x*y)
#   else:
#     print("invalid operant")
    
# def absolute_value(x):
#   if x >= 0:
#     return x
#   else:
#     return -x
  
# value = int(input("Please enter a number : "))
# print(absolute_value(value))


# def city(capital, contained="Europa"):
#   return (capital, " in ", contained)
  
# print(city("London"))

# def fruiter(*args):
  
#   print(f"I want to get {args[0]}")
#   for i in args:
#     print("*", i)

# fruiter("orange", "banana", "lemon")

# ##  *args and **keyargs

# def slicer(*args):
#   even=[]
#   odd = []
#   for i in args:
#     if i % 2:
#       odd.append(i)
#     else:
#       even.append(i)
#   return odd, even

# odd, even = slicer(1,2,3,4,5,6,7,8,9)

# print(odd)
# print(even)


#! aynı çözümün list comrehensam
# def slicer(*args):
#     odd = [x for x in args if x % 2 == 1]
#     even = [x for x in args if x % 2 == 0]
#     return odd, even
  
# def my_function(x,y):
#   print(x+y)
  
#   def animals(**kwargs):
#     print(kwargs)
#     for key, value in kwargs.items():
#       print(key, "is", value)
      
#   animals(a="tiger", b="Elephant", c="penguin")


# def organizer(**kwargs):
#   name_list=[]
#   age_list=[]
  
#   for name, age in kwargs.items():
#     name_list.append(name)
#     age_list.append(age)
#   return name_list, age_list
# print(organizer(henry=38, Cooper=42))

# ##!!! LAMBDA FUNCTIONS
# #todo Lambda function ı genelde bir değişkene atayarak daah sonra print etemek daha güzel oluyor


# print((lambda x: x**2) (2))

# avarage = (lambda x,y: (x+y)/ 2) (2,5)
# print(avarage)

# iterable = "abcdef"

# reverse_itr = (lambda x: x[::-1])(iterable)
# print(reverse_itr)

# a_list = [1,2,3,4,5]
# for i in a_list:
#   print(i, ":", (lambda i: "odd" if i % 2 else "even")(i))
  
  
##! MAP FUNCTION

iterable = [2,5,8,9,15,25]
ussum = map(lambda x: x**2, iterable)  # direct burada da list yapabiliriz
square = list(ussum)
print(square)

##! FILTER bu FUNCTION TREU and FALSE DEĞERİ ALIR
#! filter filtreleme yapar ve bizim belirlediğimiz koşulları yapar

b_liste = [1,2,3,5,6,8]

even = list(filter(lambda x: x%2==0, b_liste))
print(even)


#! Burada bir element giriyoruz ve o verilenlerden en büyük olanı istiyor

numb = []
num = int(input("Bir sayı giriniz"))
for i in range(num):
  numbers = int(input("Enter number"))
  numb.append(numbers)
print("Maximum element in the:", max(numb))


strs = ["eat", "tea", "tan", "ate", "nat", "bat", "cat", "tac"]

result = {}
for i in strs:
    sortedItem = "".join(sorted(i))
    if sortedItem in result:
        result[sortedItem].append(i)
    else:
        result[sortedItem] = [i]
        print(result)
print(list(result.values()))
print(result)
print(result.keys())
print(result.items())

def standard_arg(arg):
  print(arg)

def pos_only_arg(arg, /):
  print(arg)

def kwd_only_arg(*, arg):
  print(arg)
 
echo_word = (lambda x,y: x * y)
print(echo_word("hello", 5))
      
      


      
  