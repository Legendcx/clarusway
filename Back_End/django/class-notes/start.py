print("Merhaba Burhan")

print(print.__doc__)



a = 2
b = 10
print(b // a)

DONT_CHANGE = 3,14
print(DONT_CHANGE)

bura = "upper"
print(* bura)  # u p p e r  diye yazıyor 


name = "BURHAN"

print(f'My name is {name.capitalize()}')

name2 = "My name is burhan"
print(name2.title())  # title bütün kelimeleri ilk harfini büyük yapar

nam = 'kalorifer'

print(nam.find("y"))  # belirtilen harf varsa ilk index numarasını verir

print(nam.replace("k", "h"))  # halofier yazdık 
print(nam.replace("k", "h", 1))  # halofier yazdık bir adet k harfini h yapar

print(any([False, False, False]))  # False = bir tane True varsa True olur

print(all([True, True, False]))   # False.... Hepsinin aynı olmasını ister

text = "www.clarusway.com"

print(text.endswith(".com"))  # variable ın sonunda belirtilen kelime veya harf varsa (True veya False ) döner
print(text.startswith(".", 3))  # variable ın sonunda belirtilen kelime veya harf varsa (True veya False ) döner

email = "clarusway@clarusway.com is my e-mail address"
print(email.startswith("@", 9))  # 9.index no @ demek yani True döner
print(email.endswith("-", 10, 32))  # 10 ile 32 . index arasında "_" bu işaret var demektir.

sentence = "I live and work in Virginia"

print(sentence.upper())  #  output = I LIVE AND WORK IN VIRGINIA 

print(sentence.lower())   #  output = i live and work in virginia

print(sentence.swapcase())   #  output = i LIVE AND WORK IN vIRGINIA

print(sentence)  # note that, source text is unchanged  I live and work in Virginia

title_sentence = sentence.title()    #  output =  I Live And Work In Virginia (her kelimenin ilk harfi büyük olur)
print(title_sentence)  

changed_sentence = sentence.replace("i", "+")   #  verilen harfi veya kelimeyi ikin verilene değiştirir.
print(changed_sentence)   #  output = I l+ve and work +n V+rg+n+a 
# string.upper().lower().title() # returns string type again. peş peşe string metodları uygulanabilir.

space_string = "     listen first      "
print(space_string.strip())  # removes all spaces from both sides = tüm boşlukları alır.

source_string = "interoperability"
print(source_string.strip("yi"))   #  output = teroperability 
# removes trailing "y" or "i" or "yi" or "iy" from both sides
# boşluk yoksa bir harf veya kelime verilirse onun tüm varyantlarını cümle veya kelimenin başında sonundan siler.