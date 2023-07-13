using SucursalesDAL.Interface;
using SucursalesEntities.DBEntities;
using SucursalesEntities.DTO;

namespace SucursalesDAL.Implementacion
{
    public class BasicoDAL : IBasicoDAL
    {
        private readonly TestDbContext _context;

        public BasicoDAL(TestDbContext context) {
            _context = context;
        }
        public List<BasicoDto> ListarMonedas() {
            List<BasicoDto> lstMonedas = new List<BasicoDto>();
            foreach (var item in _context.AcMoneda.ToList()) {
                lstMonedas.Add(new BasicoDto
                {
                    Id = item.Id,
                    Descripcion = item.Abreviacion + " - " + item.Nombre                    
                });
            }
            return lstMonedas;
        }
    }
}
