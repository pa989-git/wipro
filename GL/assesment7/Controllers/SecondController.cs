using Microsoft.AspNetCore.Mvc;

public class SecondController : Controller
{
    public IActionResult Index1()
    {
        return Content("Second Controller - Index1");
    }

    public IActionResult Index2()
    {
        return Content("Second Controller - Index2");
    }

    public IActionResult Index3()
    {
        return Content("Second Controller - Index3");
    }
}
