// Typescript notları
// # Typescript
// Yaygın olarak web uygulamalarında kullanılan JavaScript, Node.js ile birlikte sunucu taraflı uygulamalarda, Electron.js ile birlikte masaüstü uygulamalarda, çeşitli kütüphaneler sayesinde de hibrit mobil uygulama geliştirmede sıkça kullanılmaya başlandı ve tahmin edilmeyen bir büyüme gösterdi. Tasarlanma amacı olarak bu tarz platformlar ve büyük çaplı uygulamalar düşünülmediğinden JavaScript'in bazı yapısal eksiklikleri vardı. Nesne tabanlı dillerin sağladığı tip kontrolü, sınıflar gibi yapılar bulunmuyordu, dinamik olmasından dolayı derleme aşaması yoktu ve hata kontrolü zor yapılıyordu. TypeScript bu eksikleri gidermek ve JavaScript'i büyük projelerde daha etkili şekilde kullanmak için tasarlanmış bir programlama dili olarak ortaya çıktı.
// "TypeScript, uygulama ölçeğinde geliştirme için JavaScript." olarak tanımlanmaktadır. TypeScript strongly-typed, nesne yönelimli ve derlenebilir açık kaynaklı bir programlama dilidir. Microsoft çalışanı ve C# dilinin tasarımcısı olan Anders Hejlsberg tarafından tasarlanmıştır.
// JavaScript'in tüm özelliklerini içinde barındıran ve ek özellikler eklenmiş bir üst kümesi olarak tanımlanabilir. Büyük ve kodlanma aşaması karmaşık olan projelerde verimliliği arttırır.
// #### Neden ihtiyaç duyuyoruz?

// Büyük ekipler ile çalışırken, Backend ve API üzerinden veriler ile çalışırken Dinamik Tip (Dynamic Typing) bir dil geliştirmeler sırasında esnekliğinden dolayı birçok hataya yol açabilir. Bu nedenle çok dikkatli kullanılması gerekir.

// Büyük projelerde herkesin bu dikkati gösterMemesi, projeye sonradan dahil olan, veya JS konularına hakim olmayan geliştiricilerin projede oluşturabilecekleri hataları minimize etmek için TypeScript gibi Type güvenliği sağlayan diller kullanılır.

// Örneğin basit bir toplama kodumuz olsun. Bu değerleri ekrandan, bir Rest API’sinden alıyor olabiliriz. Biz sum fonskiyonun da 2 sayıyı toplamak isteyen bir kod yazmak isterken JS Dynamic Type bir dil olmasından dolayı String + Number toplamamıza izin veriyor.

// Basitçe TypeScript kodun daha anlaşılır olması ve hataların engellenmesi için öncesinden değişkenlere verdiğimiz tip değerlerine göre kodun denetlenmesi ve kullanıcının uyarılmasını sağlayan mekanizmadır.

// Bildiğiniz gibi JavaScript, type-safe bazlı bir dil değildir. Bu özelliği elde etmek için, size yardımcı olması için TypeScript gibi araçlar kullanmanız önerilir.

// JavaScript, geliştiricilere büyük bir esneklik sağlar. Tamsayı olarak başlatılan bir değişkene, çalışma zamanında bir function değeri atanabilir. JavaScript’te değişken türleri tahmin edilemez. TypeScript, JavaScript dilinde yeni özellikler ve faydalı iyileştirmeler sunan bir JavaScript üst kümesidir. Kod tabanınızda TypeScript kullanarak, hataları erkenden kolayca tespit edebilir veya önleyebilir ve oldukça harika olan derleme zamanında hatalardan kurtulabilirsiniz. İlk bakışta TypeScript zor ve korkutucu görünebilir, ancak onunla biraz zaman geçirdikten sonra bence gerçekten seveceksiniz.

// Bir interface bildirimi kullanarak bu nesnenin şeklini açıkça tanımlayabilirsiniz:
// ```
// interface Todo {
//   todo: string;
//   id: number | string;
// }
// ```
// Ardından, bir değişken bildiriminden sonra TypeName gibi bir sözdizimi kullanarak bir JavaScript nesnesinin yeni arayüzünüzün şekline uygun olduğunu beyan edebilirsiniz:
// ```
// const todo: Todo = {
//   todo: "Hayes",
//   id: 0,
// };
// ```
// Sağladığınız arabirimle eşleşmeyen bir nesne sağlarsanız, TypeScript sizi şu şekilde uyarır:
// ```
// interface Todo {
//   todo: string;
//   id: number | string;
// }
 
// const todo: Todo = {
//   username: "Hayes",
// Type '{ username: string; id: number; }' is not assignable to type 'Todo'.
//   Object literal may only specify known properties, and 'username' does not exist in type 'Todo'.
//   id: 0,
// };
// ```

// # **Interfaces(Arayüzler)**

// TypeScript’teki bir Interface, aşağı yukarı bir object için önceden kurgulanmış plan gibi davranır. Object’lerde ki property(özellik) adları ve value(değerleri) hakkındaki bilgileri tanımlar. Bu, TypeScript derleyicisinin object’lerinizi doğrulamasına yardımcı olabilir, böylece object’leri yanlış biçimde tanımlamazsınız.

// Bir typescript dosyasında (.ts) **Interface** anahtar sözcüğünü ve ardından interface adı ve interface gövdesini kullanarak bir interface tanımlayabilirsiniz. Aşağıdaki örneğe bir göz atın:

// ```tsx
// interface Course {
//   title: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
//   price: number;
//   currency: string;
//   isActive: boolean;
// }
// ```

// Interfaces’da, ? kullanarak değerin kullanımını isteğe bağlı olduğunu belirtebilirsiniz veya undefined ekleyerek de bu özelliği kullanabilirsiniz.

// ```tsx
// interface Course {
//   title: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
//   price?: number; //Optional
//   currency: string | undefined; //Optional
//   isActive: boolean;
// }
// ```

// Bu örnekte artık fiyat ve para birimi olmadan bir object oluşturabileceğiniz anlamına gelir:

// ```tsx
// const webCourse: Course = {
//   title: 'Typescript Basics',
//   description: 'A course about Typescript',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   isActive: true
// };
// ```

// Bazen oldukça faydalı olabilecek diğer interface **genişleten(extends**
// ) interfaces de tanımlamak isteyebilirsiniz:

// ```tsx
// interface BaseCourse {
//   title: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
//   price?: number; //Optional
//   currency: string | undefined; //Optional
//   isActive: boolean;
// }
// interface FootballCourse extends BaseCourse {
//   coach: string;
// }
// ```

// Burada görebileceğiniz gibi, bir BaseCourse ve FootballCourse tanımladık. FootballCourse, BaseCourse interface’ini kullanmamıza izin verir. Böylelikle BaseCourse interface inide genişletmiş oluyoruz.

// Bir başka harika şey de, özellikleri **readonly** olarak tanımlayabilmenizdir, yani bir object oluşturursanız ve daha sonra özelliğin değerini değiştirmeye çalışırsanız, readonly sayesinde derleyici bir hata verecektir:

// ```tsx
// interface BaseCourse {
//   readonly title: string; //Read only
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
//   price?: number; //Optional
//   currency: string | undefined; //Optional
//   isActive: boolean;
// }
// interface FootballCourse extends BaseCourse {
//   coach: string;
// }
// ```

// Aşağıdaki kullanım hata verecektir:

// ```tsx
// const webCourse: FootballCourse = {
//   title: 'Typescript Basics',
//   description: 'A course about Typescript',
//   createdAt: new Date(),
//   updatedAt: new Date(),
//   isActive: true,
//   coach: 'Nicky Christensen'
// };
// webCourse.title = 'A new title'; //ERROR
// ```

// Interfaces, JavaScript nesnelerinin alabileceği çok çeşitli şekilleri tanımlayabilir. Interface, bir object’i özelliklerle tanımlamanın yanı sıra, function türlerini de tanımlama yeteneğine sahiptir.

// TypeScript’de **interface** kavramı,  Javascript’deki, genişletilebilirliği sağlayan en esnek yapı. Normalde Javascript’de interface kavramı bildiğiniz üzere yok. Dolayısıyla type-safe bir yapı oluşturmak, doğası gereği zor. TypeScript’de ki interface’ler temel olarak bu zorluğu ortadan kaldırmak için geliştirilmiş diyebiliriz.

// TypeScript’deki interface, temelinde bir tip tanımından başka birşey değildir. ***class*** ve ***function***‘lar nesnelerin davranışlarını tanımlarken, ***interface***‘ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz. Javascript’de interface kavramı olmadığı için TypeScript’de bir interface tanımladığınız ve compile ettiğiniz zaman, onun bir Javascript kodu üretmediğini görürsünüz. Bu noktada interface’lerin compile zamanında tipleri tanımladığını ve geliştirme aşamasında da kolaylık sağladığını belirtmek isterim.

// ##### Void
// Bir şeyi yapmasını istediğimiz methodlara void operasyon denir. Örneğin veritabanına veri ekle gibi. Emir kipi gibi düşünülebilir.Herhangi bir veri döndürmezler.


// ###### Type ları globalde tanımlama

// .d.ts uzantılı olarak tanımlama yaparsak bunu global olarak algılayıp herhangi bir export import yapmamıza gerek kalmıyor. Eğer diğer türlü yaparsak yani .d koymadan oluşturursak export import yapmamız gerekiyor



// https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

// Declaring type of props - see "Typing Component Props" for more examples
// type AppProps = {
//     message: string;
//   }; /* use `interface` if exporting so that consumers can extend */
  
//   // Easiest way to declare a Function Component; return type is inferred.
//   const App = ({ message }: AppProps) => <div>{message}</div>;
  
//   // you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
  
//   // you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;

// A list of TypeScript types you will likely use in a React+TypeScript app:
// type AppProps = {
//     message: string;
//     count: number;
//     disabled: boolean;
//     /** array of a type! */
//     names: string[];
//     /** string literals to specify exact string values, with a union type to join them together */
//     status: "waiting" | "success";
//     /** an object with known properties (but could have more at runtime) */
//     obj: {
//       id: string;
//       title: string;
//     };
//     /** array of objects! (common) */
//     objArr: {
//       id: string;
//       title: string;
//     }[];
//     /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
//     obj2: object;
//     /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
//     obj3: {};
//     /** a dict object with any number of properties of the same type */
//     dict1: {
//       [key: string]: MyTypeHere;
//     };
//     dict2: Record<string, MyTypeHere>; // equivalent to dict1
//     /** function that doesn't take or return anything (VERY COMMON) */
//     onClick: () => void;
//     /** function with named prop (VERY COMMON) */
//     onChange: (id: number) => void;
//     /** function type syntax that takes an event (VERY COMMON) */
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     /** alternative function type syntax that takes an event (VERY COMMON) */
//     onClick(event: React.MouseEvent<HTMLButtonElement>): void;
//     /** any function as long as you don't invoke it (not recommended) */
//     onSomething: Function;
//     /** an optional prop (VERY COMMON!) */
//     optional?: OptionalType;
//     /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
//     setState: React.Dispatch<React.SetStateAction<number>>;
// };
