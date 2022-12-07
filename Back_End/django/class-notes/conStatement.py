##! ========= CONDITIONAL STATEMENT ===============
##! ===============================================

meat = True
bread = True
lettuce = False
grocer = True
pepper = True

hamburger = (meat and bread and grocer) and (lettuce or pepper)

if hamburger:
  print("Afiyet olsun")
else:
  print("Hamburger yapamayız malzeme yoktur.")
  
num5 = int(input("Bir sayı giriniz: "))
if num5 % 2:
  print(f'{num5} is odd.')
else:
  print('{num5} is even.')
  
num4 = int(input("Bir sayı giriniz: "))
if num4 > 0:
  print(f'{num4} is pozitiftir.')
else:
  print(f'{num4} is negatiftir.')
  
  
numm1 = int(input("Bir sayı giriniz: "))
numm2 = int(input("Bir sayı giriniz: "))
numm3 = int(input("Bir sayı giriniz: "))

if numm1 > numm2 and numm1 > numm3:
  en_buyuk_sayi = numm1
elif numm2 > numm1 and numm2 > numm3:
  en_buyuk_sayi = numm2
else:
  en_buyuk_sayi = numm3
print("en büyük sayı :", en_buyuk_sayi)


   
  

# if True:
#   print("Burhan")
  
# score = int(input("bir not giriniz"))

# if score >=90:
#   if score >=95:
#     print("A+")
#   else:
#     print("A")
# elif score >=80:
#   if score >=85:
#     print("B+")
#   else:
#     print("B")
# elif score >=70:
#   if score >=75:
#     print("C+")
#   else:
#     print("C")
# elif score >=60:
#   if score >=65:
#     print("D+")
#   else:
#     print("D")
# else:
#   print("Sınıfta kaldınız Üzgünüm :)))")
  
  
number = 0

while number < 6:
    print(number)
    number += 1
print('now, number is bigger or equal to 6')

my_list=["a", "b", "c", "d", "e"]

a = 0

while a < len(my_list):
    print('square of {} is : {}'.format(a, a**2))
    a+=1
    
age = input("Enter your age :")

while not age.isdigit():  # Girilen rakam (0-9) isnumeric de diyebiliriz.
  print("Please enter your age")
  age = input("Enter your age :")

print(f"Your age is {age}")

##----------------------------------
# a = "istanbul","ankara","muş"
# word_listg = a.split(",")

# i = 0
# longest = 0
# while i < len(word_listg):
#   if len(word_listg[i]) > longest:
#     longest = len(word_listg[i])
#   i += 1
# print(longest)
  
 
  
    
##! SAYI TAHMİN OYUNU

# answer = 44

# question = 'What number am I thinking of?  '
# print ("Let's play the guessing game!")

# while not False:
#     guess = int(input(question))

#     if guess < answer:
#         print('Little higher')
#     elif guess > answer:
#         print('Little lower')
#     else:  # guess == answer
#         print('Are you a MINDREADER!!!')
#         break

##! ========= FOR LOOPS ===========================
##! ===============================================

# --------------------------------------
input = "clarusway"
counter = 0

for i in input:
  counter += 1
  if counter < len(input):
    i += "-"
  elif input[-1] == i:
    i
  print(i, end="")
     
     
words = "clarusway"
word1 = ''

# for i, y in enumerate(words):
#   if i == 0:
#      word1 += y
#   else
     

for i in [1, 2, 3, 4, 5]:
    print(i)
    
# --------------------------------------------------
    
seasons = ['spring', 'summer', 'autumn', 'winter']

for season in seasons :
  print(season, end=", ")
    
for b in {"n1":"one", "n2":"two", "n3":"three"}:
  print(b)

# ----------------------------------------
  names = ["veli", "Ali", "Ahmet"]
  for i in names:
    print(f'Hello', i)
 
#---------------------------------   
  num_list = []
  for i in range(1,6):
    num_list.append(i)
  print(num_list)
    
    
  
  
# times = int(input("How many times should I say 'I love you'"))

# for i in range(times):
#     print('I love you')
    
# n = int(input('enter a number between 1-10'))

# for i in range(11):
#     # print(f' {} x {} = {n, i}, {n*i}')
#     print(f"{i} X {n} = {n*i}")
    
# text = ['one','two','three','four','five']
# numbers = [1, 2, 3, 4]
# for x, y in zip(text, numbers, strict=False):
#     print(x, ':', y)
    
# who = ['I am ', 'You are ']
# mood = ['happy', 'confident']
# for i in who:
#     for ii in mood:
#         print(i + ii)


       
# saved_amount = int(input('Please enter your saved amount: '))
# if saved_amount <= ps4_price/2:
#     print('You must save more, keep saving!')
# elif saved_amount > ps4_price/2 and saved_amount < ps4_price:
#     print('You saved more than half, keep saving!')
# else:
#     print('Yippee! You can buy your PS4')
    
    
    
# math_mark = int(input('Please enter the mark: '))

# if math_mark >= 85:
#     print('A (Excellent)')
# elif math_mark < 85 and math_mark >= 70:
#     print('B (Good)')
# elif math_mark < 70 and math_mark >= 60:
#     print('C (Medium)')
# elif math_mark < 60 and math_mark >= 45:
#     print('D (Not Bad)')
# else:
#     print('F (Failed)')
    
number = int(input('Please enter a number: '))
count = 0
while count < number:
  print(count ** 2)
  count += 1
  
sample_list = [{"section":5, "topic":2}, 'clarusway', [1, 4], 2020, 3.14, 1+618j, False, (10, 20)]

for i in sample_list:
   print ("The type of", i, "is", type(i))
   
toplam = 0

for i in range(1,75):
  toplam += i
print(toplam)

n = int(input("Lütfen bir sayı giriniz. :"))

count = 0

for i in range(1, n+1):
  if n%i == 0: count += 1
  else: count += 0
if count < 3: print("{} is a prime number".format(n))
else: print("{} is not a prime number".format(n))


#-----------------------------

a = 3

for i in range(11):
  print(f'{a} x {i} = {a * i} ')
  
numaralar = [1,2,3,4,5,6,7,8,9,10] 
cif = []
tek = []

for i in numaralar:
  if i % 2 == 0:
    cif.append(i)
  else:
    tek.append(i)

# ------------------------------------    
for i in range(1,10):
  print(str(i)*i,)
    
# ------------------------------------ 

names_a = [name.lower() for name in names]