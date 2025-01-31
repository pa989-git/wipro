internal class Program
{
    static class MathHelper
    {
        public static int count =0;
        public static double square(double num)
        {
            return num*num;
        }
        public static double square(int num)
        {
            return num*num ;
        }
        public static double Cube(double num)
        {
            return num * num * num;
        }
        public static void Dsiplay()
        {
            count++;
            Console.WriteLine(count);
        }
    }
    private static void Main(string[] args)
    {
        Console.WriteLine(MathHelper.square(100));
        MathHelper.Dsiplay();

    }
}