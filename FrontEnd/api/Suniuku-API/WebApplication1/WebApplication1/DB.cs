using WebApplication1.Models;

namespace WebApplication1
{
    public static class DB
    {
        public static List<Kaciukas> Kaciukai = new List<Kaciukas>()
        {
            new Kaciukas()
            {
                Name = "PUkis",
                Picture = "https://cdn2.thecatapi.com/images/MTkxODY3NA.gif"
            },
            new Kaciukas()
            {
                Name = "Rainius",
                Picture = "https://cdn2.thecatapi.com/images/DScuohlFS.jpg"
            },
            new Kaciukas()
            {
                Name = "Tomiukas",
                Picture = "https://cdn2.thecatapi.com/images/6vq.jpg"
            },
            new Kaciukas()
            {
                Name = "Murkis",
                Picture = "https://cdn2.thecatapi.com/images/tVcXpXU6a.jpg"
            }
        };
    }
}
