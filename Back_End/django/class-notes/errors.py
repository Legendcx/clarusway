#! Syntax ERror = yazım hatası, program hata verir çalışmaz
#! NameError = kelime yazma hatası
#! Type Error = yazım hatası
#! Value Error
# sytax error 'da ---> kod hiç çalışmaz,
# exception error'da ---> program çalışır ama hata verir.

# print(int('ten'))  VALUE ERROR veriyor
# Traceback (most recent call last):
#   File "d:\clarusway\Back_End\django\class-notes\errors.py", line 8, in <module>
#     print(int('ten'))
# ValueError: invalid literal for int() with base 10: 'ten'

# print(variable) NAME ERROR
# variable = "Don't ever seen"

# for i in range("x"):
#   print(i)   Buraa type error hatası alırız.

#ZeroDivisionError = burada bir sofor hatası olmuştur.
# try:
#   print(int("ten"))
# except ValueError as e:
#   print(f"Something is wrong...Try again {e}")

# x = 10
# b = 20
# try:
#   print(X)
# except:
#   print("Burada bir hata oldu dostum. try again")
  
# try:
  # Kod Blogunu çalıştır.
# except:
  # Hata çıkarsa burayı çalıştır.
# else:
  # Hata çıkmazsa burayı da çalıştır.
# finally:
  # burayı her koşulda çalıştır.

# num_1 = 20
# num_2 = 0

# try:
#   res = num_1 / num_2
# except Exception as e:
#   print(f"Something went wrong because of {e} ")
  

# num1 = 250
# num2 = [1,2,3,4,5,0,20]
# res_list = []

# for num in num2:
#   try:
#     res_list.append(num1/num)
#   except ZeroDivisionError:
#     print(num)

# print(res_list)

# num1 = 250
# num2 = [1,2,3,4,5,0,20]
# res_list = []

# for num in num2:
#   try:
#     res_num = num1/num
#   except Exception as e:  # hatanın tam olarak ne olduğunu bilemezsek bunu yazzdırabilriz
#     print(e)
#   else:
#     res_list.append(res_num)
#   finally:
#     print('This works every time')

# print(res_list)


# ==========================================================================
#! ======= REAADING FILE ====================
# ===========================================================================

# open() Function 
# open(file, mode='r', encoding=None)

#todo (pwd) ile file ın yolunu görebilriz.

#? my_file = open("first_file.txt", encoding="utf-8")



# sea = open('fishes.txt', 'r')
# sea.see(5)  # buradan başla demek
# print(sea.read(21))   # buraya kadar oku demek, hrhangi br şey demeksek oradan okumaya devam ediyor.
# sea.close()  açtığımız yani okuduğumuz file ı kapatmak zorundayız.

# sea = open('fishes.txt', 'r')
# print(sea.tell())
# sea.close()

# rumi = open("rumi.txt")
# print(rumi.read())
# rumi.close()

# sea = open("fishes.txt", 'r')
# print(sea.readline(13))  # tek satır okur 13 sıra ya kadar okur
# print(sea.readline())
# print(sea.readline())

# sea.close()


# sea = open("fishes.txt", 'r', encoding='UTF-8')
# print(sea.readlines())   # bütün satırları okur

# sea.close()

# sea = open("fishes.txt", 'r', encoding='UTF-8')

# for line in sea:  #  or for line in sea.readlines() diyebiliriz.
#   print(line)

# sea.close()



# with open('fishes.txt', 'r') as sea:
#   print(sea.read())
  
# with ile açtığımız için  kapatmaya gerek yoktur.


###!   ==== WRİTE METODU =====

# with open("dummy.txt", 'w') as file:
#   file.write("This is a first line")
  
# with open("dummy.txt") as file:
#   print(file.read())
  
# with open("dummy.txt", 'w') as file:  # tekrar yazarsak öncekini siler yeniden yazar
#   file.write("This is a first linhdhde")

# fruits = [ "Banana", "apple", "orange", "peach"]

# # with open('fruits.txt', 'w') as file:
# #   for fruit in fruits:
# #     file.write(fruit + '\n')
    
# with open("fruits.txt", "w") as file:
#   for fruit in fruits:
#     file.write(f"{fruit}\n")
    
# fruits = [ "Banana\n", "apple\n", "orange\n", "peach\n"]

# with open("fruits.txt", "a") as file:
 
#     file.write("Melon")  #  dosyaya üzerine değil yanına yazdırdık 'a ileappend demektir.
    
    
    
# from datetime import datetime

# num1 = 250
# num2 = [1,2,3,4,5,0,20]
# res_list = []

# for num in num2:
#   try:
#     res_num = num1/num
#   except Exception as e:  # hatanın tam olarak ne olduğunu bilemezsek bunu yazzdırabilriz
#       with open("error.log", 'a') as file:
#         file.write(f'You have error {e} --->{num} at {datetime.now()}\n')
#   else:
#     res_list.append(res_num)
#   finally:
#     print('This works every time')

# print(res_list)