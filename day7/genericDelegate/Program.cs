using GenericDelegate;

class Program
{
    delegate TOutput CovariantContravariantDelegate<in TInput, out TOutput>(TInput input);

    static Vehicle ProcessVehicle(Vehicle v)
    {
        Console.WriteLine("Processing: " + v.GetType().Name);
        return new Car(); 
    }

    static void Main()
    {
        CovariantContravariantDelegate<Car, Vehicle> handler = ProcessVehicle;

        Car myCar = new Car();
        Vehicle result = handler(myCar); // Passing Car (contravariance), getting Vehicle (covariance)

        Console.WriteLine("Returned: " + result.GetType().Name);
    }
}