# sayi = int(input("Bir sayı giriniz: "))
# döngü ile yapılan yöntem
# sum = 0
# for i in range(1, sayi + 1):
#   sum += i
# print(sum)

# liste ile yapılan yöntem
# liste = [eklenecek_degisken for eklenecek_degisken in range(1, range + 1)]
# for i in range(1, sayi + 1):
#   liste.append(i)
# print(sum(liste))

# not1 = input("Bir kelime girini :")
# set1 = set(not1)
# print(set1)

# sifre = input("bir şifre giriniz :")
# # keys = {"ş", "ğ", "İ", "Ğ", "ı", "ç", "Ç", "ü","Ü"}
# keys = {"?", "!", ",", ";", "*"}
# if (set(sifre) & keys):
#   #  print("şifre içinde Türkçe karakter kullandınız")
#   print("şifre geçerli")
# else:
#   #  print("Şifre geçerlidir.")
#   print("Lütfen şifre içerisinde özzel karakterler kullanınız")

# def yaz():
#   print("Hello World")
# yaz()
# urunler = {}
# def kalan_kar(alinan_miktar, satilan_miktar, alis_fiyat, satis_fiyati, urun, urunler  ):
#   fire = (alinan_miktar - satilan_miktar) * 100 / alinan_miktar
#   print("Fire miktarı : %{}".format(fire))
#   return (satis_fiyati * satilan_miktar) - (alis_fiyat * alinan_miktar)


# alinan_miktar = int(input("alınan miktarı giriniz :"))
# satilan_miktar = int(input("satılan ürünü giriniz :"))
# alis_fiyat = int(input("Alış fiyatı giriniz :"))
# satis_fiyati = int(input("satış fiyatı giriniz :"))
# print(kalan_kar(alinan_miktar, satilan_miktar, alis_fiyat, satis_fiyati))

# L1 = []
# L1.append([1, [2, 3], 4])
# L1.extend([7, 8, 9])
# print(L1)
# print(L1[0][1][1] + L1[2])

# fruits = ['Apples', 'Oranges', 'Bananas']
# quantities = [5, 3, 4]
# prices = [1.50, 2.25, 0.89]
# i = 0
# output = []
# for fruit in fruits:
#  temp_qty = quantities[i]
#  temp_price = prices[i]
#  output.append((fruit, temp_qty, temp_price))
#  i += 1
# print(output)

# fruits = ['Apples', 'Oranges', 'Bananas']
# quantities = [5, 3, 4]
# prices = [1.50, 2.25, 0.89]
# groceries = zip(fruits, quantities, prices)
# print(list(groceries))

# fruits = ['Apples', 'Oranges', 'Bananas']
# quantities = [5, 3, 4]
# prices = [1.50, 2.25, 0.89]
# output=[]
# fruit_tuple_0 = (fruits[0], quantities[0], prices[0])
# output.append(output)
# fruit_tuple_1 = (fruits[1], quantities[1], prices[1])
# output.append(output)
# fruit_tuple_2 = (fruits[2], quantities[2], prices[2])
# output.append(output)
# print(fruit_tuple_0, fruit_tuple_1, fruit_tuple_2)

# fruits = ['Apples', 'Oranges', 'Bananas']
# quantities = [5, 3, 4]
# prices = [1.50, 2.25, 0.89]
# i = 0
# output = []
# for fruit in fruits:
#  for qty in quantities:
#   for price in prices:
#     output.append((fruit, qty, price))
#  i += 1
# print(output)

## -----------------------

# x = 50
# def func(x):
#  print('x is', x)
#  x = 2
#  print('Changed local x to', x)
# func(x)
# print('x is now', x)

# def function1(var1=5, var2=7):
#  var2=9
#  var1=3
#  print (var1, " ", var2)
# function1(10,12)

# # -------------
# def san(x):
#  print(x+1)
# x=-2
# x=4
# san(12)

# num = 2013
# reversed_num = 0
# while num != 0:
#  digit = num % 10
#  reversed_num = reversed_num * 10 + digit
#  num //= 10
# print(reversed_num)

##  Burhan YİĞİTER  


# def repeat(word, n, sign):
#   print(*n*[word], sep=sign)

# def main():
#     string=input('insert a string:  ')
#     sign=input('insert the separator:  ')
#     n=int(input('insert number of repetition:  '))

#     repeat(string, n, sign)

# main()


def myprint(word, n, delim):
    ans = [word] * n 
    return delim.join(ans)
  
print(myprint('Burhan', 3, '!'))