namespace oopsday4
{
    internal class Department: Employee // Inheritance
    {
        public string deptName { get; set; }
        public decimal salary { get; set; }
        public override void Display()
        {
            Console.WriteLine("Department salary: " + deptsalary);
            Console.WriteLine("Department Name: " + deptName);
        }
    }
}