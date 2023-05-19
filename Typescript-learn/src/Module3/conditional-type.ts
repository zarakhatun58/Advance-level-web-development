// type dependent to another

type a1 =number;
type a3=undefined;
type a2 = a1 extends string ? string : null;
type a4 =number

type d=a1 extends null? null
:a3 extends number ? number
: a4 extends null ? null :never

type Sheikh={
    wife1:string;
    wife2:string
}
type A =keyof Sheikh; // 'wife1', | 'wife2' // 'wife3 extends 'wife1' |'wife2'
//type CheckProperty<T> =T extends {wife1:string} ? true: false
type CheckProperty<T, K> =K extends Sheikh ? true: false

type CheckWife2=CheckProperty<Sheikh, 'girlFriend'>;
// union type
type bondhu='monika' | 'jaana' | 'sama'

type RemoveBandhu<T,K>= T extends K? never :T
type CurrentBondhu=RemoveBandhu<bondhu, 'jaana'>

