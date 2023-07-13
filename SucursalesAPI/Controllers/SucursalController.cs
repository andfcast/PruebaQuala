using Microsoft.AspNetCore.Mvc;
using SucursalesBL.Interface;
using SucursalesEntities.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SucursalesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SucursalController : ControllerBase
    {
        private readonly ISucursalBL _sucursalBL;
        public SucursalController(ISucursalBL sucursalBL)
        {
            _sucursalBL = sucursalBL;
        }

        // GET: api/<SucursalController>
        [HttpGet]
        public RespuestaDto Get()
        {
            return new RespuestaDto
            {
                Exitoso = true,
                Mensaje = "OK",
                Data = _sucursalBL.Listar()
            };
        }

        // GET api/<SucursalController>/5
        [HttpGet("{id}")]
        public RespuestaDto Get(int id)
        {
            return new RespuestaDto
            {
                Exitoso = true,
                Mensaje = "OK",
                Data = _sucursalBL.ObtenerInfo(id)
            };            
        }

        // POST api/<SucursalController>
        [HttpPost]
        public RespuestaDto Post([FromBody] SucursalDto dto)
        {
            bool esExitoso = _sucursalBL.Crear(dto);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = "OK"
            };
        }

        // PUT api/<SucursalController>/5
        [HttpPut("{id}")]
        public RespuestaDto Put(int id, [FromBody] SucursalDto dto)
        {
            bool esExitoso = _sucursalBL.Actualizar(dto);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = esExitoso ? "OK" : "Fallo"
            };
        }

        // DELETE api/<SucursalController>/5
        [HttpDelete("{id}")]
        public RespuestaDto Delete(int id)
        {            
            bool esExitoso = _sucursalBL.Borrar(id);
            return new RespuestaDto
            {
                Exitoso = esExitoso,
                Mensaje = esExitoso ? "OK" : "Fallo"
            };
        }
    }
}
