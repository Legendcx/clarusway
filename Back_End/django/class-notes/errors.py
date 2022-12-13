#! Syntax ERror = yazım hatası, program hata verir çalışmaz
#! NameError = kelime yazma hatası
#! Type Error = yazım hatası
#! Value Error
# sytax error 'da ---> kod hiç çalışmaz,
# exception error'da ---> program çalışır ama hata verir.

print(int('ten'))
# Traceback (most recent call last):
#   File "d:\clarusway\Back_End\django\class-notes\errors.py", line 8, in <module>
#     print(int('ten'))
# ValueError: invalid literal for int() with base 10: 'ten'