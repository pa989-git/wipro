using Microsoft.AspNetCore.Mvc;

public class FirstController : Controller
{
    public IActionResult Index1()
    {
        return Content("First Controller - Index1");
    }

    public IActionResult Index2()
    {
        return Content("First Controller - Index2");
    }

    public IActionResult Index3()
    {
        return Content("First Controller - Index3");
    }
}
