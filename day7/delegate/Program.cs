

internal class Program
{
    public delegate void delsample(string msg); //declaring a delegate
    public delegate void delsample2();
    private static void Main(string[] args)
    {
        Program obj = new Program();

        //2.create instance for the delegate - set the target method
        delsample del = new delsample(obj.Display);
        //3.Invoke the delegate
        del("Have a perfect day");//calling display method


        delsample2 del2 = new delsample2(Display);
        del2();

        Display();


    }
    //Instance Method
    void Display(string msg)
    {
        Console.WriteLine("Welcome to world\n" + msg);
    }
    //Static method
    static void Display()
    {
        Console.WriteLine("Delegates");
    }

}