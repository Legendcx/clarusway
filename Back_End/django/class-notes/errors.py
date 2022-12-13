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

