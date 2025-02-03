using Events;

internal class Program
{
        private static void Main(string[] args)
    {
        Publisher publish = new Publisher();
        publish.SampEvent += LogSubscriber.LogEventHandler;
        publish.SampEvent += EmailSubscriber.EmailEventHandler;

        publish.Initiate();
    }
}

