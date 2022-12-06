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
fruits = ['apple', 'banana', 'watermelon', 'orange', 'mango', 'avocado']

fruit_list = []
fruit_list.insert(0, fruits)
print(fruit_list[0][2][7])

# LIST COMPREHENSION
my_list = [1,2,3,4,5,6,9]
new_list = []

for x in my_list:
  if x % 2 != 0:
    new_list.append(x ** 2)
print(new_list)

# Aynı sonucu list comherension la şöyle yazarız.
# [expression for item in list]
# [expression for item in list execute body if condition]
print([x ** 2 for x in my_list if x % 2 != 0])

print(int(0xA))  # hexeminali  integer e çevirme
print(hex(10))  # ineteger i hexeminale çevirme
print(r"\nhello")

print("new" "line" "end", 3)

# mix_value = (10, False, 'fruit', 1.618)
# mix_value.append(['vegetable', 2+3j])

# print(len(mix_value))

#! REMOVE() listemizden hangi elemanı çıkarmak istiyorsak onu yazıyoruz.

#! SORT( metodu dunda elemenalar aynı olması gerekiyor.) yoksa TypeError verir
my_list = [1,2,4,3,6,5,8,7,9,10]
my_list.sort(reverse=True)
print(my_list)

#todo SLICE [start:stop:step]

#! COUNt() METODU = listedeki elemanların kaç defa geçtiğini söylüyor.
#! EXTEND() METODU = listeleri birleştiriyor.


#! RANGE FUNCTION
#? range(start,stop, step) mantığı vardır.

# bunu range() function'lada oluşturabiliriz.

my_list_range = list(range(1,11))
my_list_range.sort(reverse=True)
print(my_list_range)

grocer = ["banana", ["orange", ["apple", "eggplant", "melon", "spinach", "cheese", "leek" ], "water"], "mandarin"]

print(grocer[1][1][1::2])

flowers = [["jasmine", ["lavender", "rose"], "tulip"]]
colors = ["red", ("blue", ["yellow", "green"]), "pink"]
text = f"My two favorite flowers are {flowers[0][2]} and {flowers[0][1][1]}, two favorite colors are {colors[1][0]} and {colors[1][1][1]}."
print(text)

escapes = ["\n\t", ("\t", "\t\t"), ["\n", "\n\t\t"]]

sentence = "I am 40 years old. {}I have two children. {}Data Science is my IT domain.".format("\n\t", "\n\t\t")

print(sentence)


##! =================================================
#! DICTIONARY oluşturma {} and dict()
meyve = {'elma':2, 'portakal':3}
meyveler = dict(elma="google", armut="apple")

dict_by_dict = {'animal': 'dog',
                'planet': 'neptun',
                'number': 40,
                'pi': 3.14,
                'is_good': True}

#? dictionarye eleman ekleme
#! IMPORTANT = immutable olması gerekiyor.
dict_by_dict["Burhan"]="Ebru"
dict_by_dict.update({"Ebru": False})  #? burada elemanları {} içine almamız gerekiyor.
print(dict_by_dict["number"])
del dict_by_dict["pi"]  #todo silme yapıyoruz böyle

# IN operatoru dict içinde varsa true yoksa False dönüyor
print("animal" in dict_by_dict)

#! POP METODU = listeden elemean çıkarıyor çıkardığını return ediyor. yazdığmız key yoksa error veeriyor.
but = dict_by_dict.pop("is_good", "burda hata verme")  # default değer verebiliyoruz.

# POPITEM = dictionary nin  son değeri çıkarıyor.
              
print(dict_by_dict.items())  # key ve values leri tuple içinde bize verir
print(dict_by_dict.values(), "\n")  #  sadece keys leri bir liste içinde bize verir
print(dict_by_dict.keys())   # sadece values leri bir liste halinde variyor.

# Dictionary nin elemeanlarına slice larla değil key lerle ulaşıyoruz.




#! GET METODU DJANGO da kullanılıyor.
by = dict_by_dict.get("planet", "Burada key yoktur")
print(by)



##! =====================================
##! =========== TUPLE ===================
##! =====================================

# tuple lar ordered and immutable = ani değiştirileme ve listelere göre daha hızlıdır.
# verilerimizi korumak için önemlidir. 
# () veya tuple() yazarak tuple create edebiliriz
# tek bir item yazarsak sonuna (,) koymamız gerekiyor.
# item ların arasını (,) ile ayırmak yeterlidir.
# indexleme aynı [] yapılıyor.
# elemanları değiştirilemiyor.

mountain = tuple("Alps")
print(mountain)  # output: ('A', 'l', 'p', 's')

#! COUNT metodu item ın kaç kere geçtiğini gösteriyor. 
thistuple = ("apple", "banana", "peach")
print(thistuple.count("apple"))
# iki tuple ı (+ ) ile birleştirebiliriz.


##! =====================================
##! =========== SETS ===================
##! =====================================

#? unordered , elemanları tekrar etmez unique dir..
#? set() veya {} oluşturulur
#? BOŞ seti set() le oluşturmamız gerekiyor. {} olmaz dict olur o

#? .add()= item eklemek için
#? .pop() = item siler herhangi birini
#? .discard()= item silmek için, yoksa hata vermez
#? .remove()=item silmek için, yoksa hata veriri
#? .intersection() (a & b) a.intersection(b)= kesişim yerlerini alır
#? .union() (a | b) a.union(b) = birleşimleri alır
#? .difference() (a-b) (a.difference(b)) = a nın b den farklı elemanlarını gösteririr.
usa = "washinton"
new_zeland = "wellingthon"
set1 = set(usa)
set2 = set(new_zeland)

print(set1)
print(set2)

print(set1 - set2)  # print(set1.difirence(set2))
print(set1 & set2)  # print(set1.intersection(set2))
print(set1 | set2 )

#! FROZENSET () setlerin elemanları değiştirilemeyen tipidir.
