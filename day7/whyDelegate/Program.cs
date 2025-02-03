using WhyDelegates;

namespace WhyDelegates
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee>()
            {
            new Employee(){Empid = 1,Name="chanti",experienceinyears=2,salary=50000 },
             new Employee(){Empid = 2,Name="meena",experienceinyears=6,salary=80000 },
              new Employee(){Empid = 3,Name="leka",experienceinyears=5,salary=50000 },
               new Employee(){Empid = 4,Name="kanna",experienceinyears=7,salary=80000 },
                new Employee(){Empid = 5,Name="chitti",experienceinyears=3,salary=50000 },
                 new Employee(){Empid = 6,Name="Sai",experienceinyears=8,salary=9000 }
             };
            DelPromote delpromote = new DelPromote(IsPromote);

            Employee.PromoteEMployee(employees, delpromote);
        }

        static bool IsPromote(Employee emp)
        {
            if (emp.salary > 40000)
            {
                return true;
            }
            return false;
        }
    }
}