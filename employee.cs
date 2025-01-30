name space oopsday4
{
    internal class Employee
{
    public int Empid { get; set };
    public string Empname { get; set; }
    public virtual void Display()
    {
        Console.WriteLine("Employee ID: " + Empid);
        Console.WriteLine("Employee Name: " + Empname);
    }
    {
    }
}

}
