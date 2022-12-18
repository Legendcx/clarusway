import os
os.system('cls' if os.name == 'nt' else 'clear')
print("--------------------------------------")

#! Topics to be Covered:
#* Everything in Python is class
#* Defining class
#* Defining class attributes
#* Difference between class attributes and instance attributes
#* SELF keyword
#* Defining methods
#* Class Methods vs. Static Methods and Instance Methods
#* Special methods (init, str)
#* 4 pillars of OOP:
    #? Encapsulation
    #? Abstraction
    #? Inheritance
        #? Multiple inheritance
    #? Polymorphism
        #? Overriding methods
#* Inner class
#* Overloading an operator (optional)
#* Abstract base class 


#! What is OOP?
""" # Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.
# It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.
# significantly reduces code repetition by classifying similar structures (dont repeat yourself)
# Easier to debug, classes often contain all applicable information to them
# Secure, protects information through encapsulation """


#! Everything in Python is class
""" # Python >generally class based  vs.  javascript >generally function based
def print_types(data):
    for i in data:
        print(i, type(i))
        
test = [122, "victor", [1, 2, 3], (1,2,3), {1,2,3}, True, lambda x:x]

print_types(test) """

#! defining class:

# class Person:
#   name = "Burhan"
#   age = 43

# person1 = Person()
# person2 = Person()

# print(person1.name)
# print(person2.age)

# Person.job = "developer"
# print(person1.job)

#! class attribute and instance attribute

# class Person:
#! ortak özellikleri class'tan almalıdır. Burada yaptığımız eğişiklikler tüm instanceleri etkiler
#! instance lerde yapılan değişiklikler sadece o instance değişiri
  # name = "Hami"
  # age = 50
#   company = "Google"
  
# person1 = Person()
# person2 = Person()

# person1.location = "USA"
# person1.company = "Gittigidiyor"

# print(person1.company)
# print(person2.company)

#! SELF keyword and methods

# class Person:
#   company = "Jimjim"
  
#   def test(self):  # hangi instance üzerinde çalışırsa buradaki self onu temsil ediyor.
#     print("test")
    
#   def get_details(self):
#     print(f"{self.name} - {self.age}")
    
#   def set_details(self, name, age):
#     self.name = name
#     self.age = age
#   @staticmethod   #  Bu hiçbir instance için değişkeni değiştirmez. cevap sabiittir. Statik metod yapıyor. Statik metodlar parametre almazlar
#   def salute():
#     print("Hi there!")
  
# person1 = Person()
# person2 = Person()
# # Person.test(person1) self kelimesi aslında buradan geliyor.
# person1.test()

# person1.name = "Burki"
# person1.age = 43

# person1.get_details()

# # person2.name = "Erkoş"
# # person2.age = 30
# person2.set_details("buralar", 44)
# person2.get_details()

# person1.salute()
# person2.salute()

#! SPECİALS METODLAR (dunder methods)

# class Person:
#   company = "Microsoft"
#   person_count = 0
  
  #  init otomatik olarak atanan instanceye giderse hemen çalışır. Default değerde verebiliriz.
  # def __init__(self, name, age, gender="Male"):
  #   self.name = name
  #   self.age = age
  #   self.gender = gender
  #   Person.person_count = Person.person_count +1
    
  #   def __str__(self):
  #     return f"{self.name} - {self.age}"
  
  # def get_details(self):
  #    print(f"{self.name} - {self.age}")
    
  
  # def set_details(self, name, age):
  #   self.name = name
  #   self.age = age
    
# person1 =  Person("Burkiş", 43)
# person2 =  Person("Burki", 33)
# person1.get_details()
# print(Person.person_count)

# person2.get_details()  # dersek çalışma zargüman vermemiz gerekiyor.


#! __STR__ METODU 
#? çıktı olarak string verir özel metodlardır.

# print(person1)
# print(person2)

#! OOP AŞAMALARI NELERDİR? 
 #!===  1- Encapsulation  = === 
 #? kullanıcı tarafından sınıfların, verilerin ve metodların ne kadarının görüntüleneceğini ve ne kadarını değiştirebileceğimiz belirlediğimiz yapıdır.

# class Person:
#   company = "Microsoft"
  
  
#   def __init__(self, name, age, gender="Male"):
#     self.name = name
#     self.age = age
#     self.gender = gender
#     self._id = 5000
#     self.__number = 200
   
    
#     def __str__(self):
#       return f"{self.name} - {self.age}"
  
#   def get_details(self):
#      print(f"{self.name} - {self.age}")
     
# person1 = Person("Burkiş", 50)
# print(person1._id)  # TEK ALT ÇİZGİ yazarsak ulaşabiliriz. ama sıkıntı olur demektir.

# print(person1.__number)  # İKİ ALT ÇİZGİ İSE ulaşışamaz. hataverir encapsulation yapmayı sağlıyor.
# print(person1._Person__number)  # BÖYLE yazarsak ulaşabiliriz. veriyi korumak için böyle yazılmıştır.



#!  ===========   ABSTRACTION   2. ÖZELLİK ===========

# Abstraction, bir nesnenin önemli olan özelliklerini ve davranışlarını ortaya çıkarma işlemidir. Bu sayede nesnenin detayları gizlenir ve sadece temel özellikleri ve davranışları kullanıcılar tarafından görülebilir. Bu sayede nesneler daha basit ve kolay anlaşılır hale gelir. Abstraction, encapsulation ile birlikte kullanılarak kodun daha anlaşılır ve değiştirilebilir hale gelmesine yardımcı olur.

#? Kullanıcıyı gereksiz detaylardan kurtarmal ve ihtiyacı olmayan şeyleri göstermek. Soyutlama yani

# liste = [2,3,5,1,4]
# liste.sort(reverse=True)
# print(liste)


#!  ===========   INHERITANCE (MİRAS-KALITIM)  3. ÖZELLİK ===========

# parent-child ilişkisi vardır. Özelliğini aktaran parent -- alan ise child'dır.
class Person:
  company = "Burkiway"
  
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def __str__(self):
    return f"{self.name}"
  
  def get_details(self):
    print(self.name, self.age)
    

class Lang:
  def __init__(self, langs):
    self.langs = langs
    
  def display_langs(self):
    print(self.langs)
class Employe(Person, Lang):
  

  def __init__(self, name, age, path, langs):  # Buna yukarıdan alma buradan almaya POLymorfizmin OVERRİDDING ayağı deniyor
    # self.name = name  ### bunları tekrar yazmaya gerek yoktur.
    # self.age = age
    super().__init__(name, age)  # bu şu demek name ve age yi parent ten al diğerlerini buradan al. SUPER (parent i gösteriyor.)
    self.path = path
    Lang.__init__(self, langs)
    
  def get_details(self):
    super().get_details()
    print(self.path)
    
    
  def get_details(self, salary=None, duration=None):
    super().get_details()
    print(self.path)



emp1 = Employe("Eboş", 40, "FS", "Javascript")
emp1.get_details()
print(emp1.company)
emp1.display_langs()


#!  ===========   POLYMORPHIZM ()  4. ÖZELLİK ===========
#! miras aldığımız metodları yeniden tanımlamak demektir.
#! OVERRIDING ETMEK  =  yeniden tanımlamak
# Polymorphism, bir programlama dilinde bir nesnenin birden fazla şekilde davranabileceği anlamına gelir. Bu, aynı adı taşıyan farklı metotların veya fonksiyonların, farklı türlerde veriler için farklı şekillerde çalıştırılmasını sağlar.

# Polymorphism, Object Oriented Programming (OOP) yönteminde önemli bir kavramdır ve genellikle inheritance (kalıtım) ile birlikte kullanılır. Örneğin, bir "Kedi" sınıfı oluşturabilir ve bu sınıfın "Miyavla" metodunu tanımlayabiliriz. Daha sonra, "Tekir" sınıfını "Kedi" sınıfından kalıtım alarak oluşturabiliriz. Bu sınıfta, "Miyavla" metodunu yeniden tanımlayabilir ve bu metodun, "Tekir" sınıfı için uygun bir şekilde çalışmasını sağlayabiliriz.

# Polymorphism, bir programın çeşitlilik ve esneklik kazanmasına yardımcı olur ve genellikle kod tekrarını azaltır.
# Parent ten aldığımız metodu yeniden oluşturmak


#! OVERLOADING ikinci ayağıda budur. 
#! Aynı metoddan bir den çok faydalanmak demektirç
#! Python overloading modelini desteklemez. Bunu, ekstra moduller ile gerçekleştirebilirsiniz.





#! ========================================================
#!  ===========   MULTIPLE INHERITANCE ÖZELLİĞİ ===========
#!=========================================================

#? super() kullanınca self parametresine gerek kalmaz ve ilk parenti temsil ettiğimizi belirtir.

#! ========================================================
#!  ===========   OTHER TOPICS (YARDIMCI FONKSİYON)===========
#!=========================================================

# print(Employe.mro())   # class larımızın nereden alındığını gösterir.

# print(help(Employe))

# print(emp1.__dict__)

# print(isinstance(emp1, Employe))

# print(isinstance(Lang, Employe))



# getattr : returns attribute value of instance

print(getattr(emp1, "name"))
x = getattr(emp1, "name")
print(x)


# setattr : update attribute of instance

setattr(emp1, "name", "burhan")
print(getattr(emp1, "name"))


# hasattr : return boolean

print(hasattr(emp1, "burhan"))


# delattr : delete attribute of instance
print(delattr(emp1, "age"))


###! INNER CLASS ==================================

