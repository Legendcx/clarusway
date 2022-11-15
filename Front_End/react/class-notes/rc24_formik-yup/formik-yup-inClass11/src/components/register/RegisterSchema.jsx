import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .max(10, "username 10 veya daha az karakter olmalıdır")
    .required("Lutfen username kismini bos birakmayiniz"),
  first_name: Yup.string()
    .max(20, "first name 20 veya daha az karakter olmalıdır")
    .required("Lutfen fullname kismini bos birakmayiniz"),
  last_name: Yup.string()
    .max(20, "last name 20 veya daha az karakter olmalıdır")
    .required("Lutfen last name kismini bos birakmayiniz"),

  email: Yup.string()
    .email("Lutfen gecerli email adresini giriniz.")
    .required("Lutfen email kismini bos birakmayiniz"),
  password: Yup.string()
    .min(8, "Sifre en az 8 karakter icermelidir")
    .max(16, "Sifre en fazla 16 karakter icermelidir.")
    .required("Lutfen password kismini bos birakmayiniz")
    .matches(/\d+/, "Sifre rakam icermelidir")
    .matches(/[a-z]+/, "Sifre kucuk harf icermelidir")
    .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Sifreniz ozel karakter icermelidir"),
});
