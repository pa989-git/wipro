// See https://aka.ms/new-console-template for more information

using MultiCastDelegates;

MathOpDel mth = new MathOpDel(MathOpe.Add);

mth.Invoke(5, 10); //add 
mth(20, 30);//add

mth += MathOpe.Sub;
mth += MathOpe.Mul; //mth holds for add,sub,mul
mth += MathOpe.Div;
mth(30, 20);//perform add,sub,mul

mth -= MathOpe.Div;
mth(100, 50);
Func<int, int, int, int> fundel = delegate (int x, int y, int z)
{
    return x + y + z;
};

//call the anonymous delegate
Console.WriteLine(fundel(10, 20, 30));

//Anonymous delegate using Lambda Expression
Func<int, int> fundellam = x => x * x;

//call the anonymous delegate
Console.WriteLine(fundellam(10));


//Action delegate takes 16 input and deos not return a value
Action<int, int> actiondel = (x, y) => Console.WriteLine(x + y);

actiondel(10, 20);

Predicate<int> isEven = (num) => num % 2 == 0;

if (isEven(10)) //invoke iseven delegate
{
    Console.WriteLine("Num value is even");
}
else
{
    Console.WriteLine("Num values is odd");
}
