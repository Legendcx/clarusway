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
urunler = {}
def kalan_kar(alinan_miktar, satilan_miktar, alis_fiyat, satis_fiyati, urun, urunler  ):
  fire = (alinan_miktar - satilan_miktar) * 100 / alinan_miktar
  print("Fire miktarı : %{}".format(fire))
  return (satis_fiyati * satilan_miktar) - (alis_fiyat * alinan_miktar)


alinan_miktar = int(input("alınan miktarı giriniz :"))
satilan_miktar = int(input("satılan ürünü giriniz :"))
alis_fiyat = int(input("Alış fiyatı giriniz :"))
satis_fiyati = int(input("satış fiyatı giriniz :"))
print(kalan_kar(alinan_miktar, satilan_miktar, alis_fiyat, satis_fiyati))

