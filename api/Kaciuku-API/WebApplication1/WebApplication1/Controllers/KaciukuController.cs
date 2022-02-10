using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("/")]
    public class KaciukuController : ControllerBase
    {
        [HttpGet]
        [Route("/")]
        public Kaciukas GautiKaciuka()
        {
            int RandomNr = new Random().Next(0, DB.Kaciukai.Count);
            return DB.Kaciukai[RandomNr];
        }
    }
}