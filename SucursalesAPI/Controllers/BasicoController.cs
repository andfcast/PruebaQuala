using Microsoft.AspNetCore.Mvc;
using SucursalesBL.Interface;
using SucursalesEntities.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SucursalesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasicoController : ControllerBase
    {
        // GET: api/<BasicoController>
        private readonly IBasicoBL _basicoBL;

        public BasicoController(IBasicoBL basicoBL)
        {
            _basicoBL = basicoBL;
        }

        [HttpGet]
        [Route("ListarMonedas")]
        public RespuestaDto ListarMonedas()
        {
            return new RespuestaDto {
                Mensaje = "OK",
                Data = _basicoBL.ListarMonedas() 
            };
        }

        
    }
}
