using SucursalesDAL.Interface;
using SucursalesEntities.DBEntities;
using SucursalesEntities.DTO;
using SucursalesUtils;

namespace SucursalesDAL.Implementacion
{
    public class SucursalDAL : ISucursalDAL
    {
        private readonly TestDbContext _context;

        public SucursalDAL(TestDbContext context) {
            _context = context;
        }

        public List<SucursalDto> Listar() {
            List<SucursalDto> lstSucursales = new List<SucursalDto>();
            foreach (var item in _context.AcSucursales.ToList()) {
                lstSucursales.Add(Convertidor.ASucursalDto(item));
            }
            return lstSucursales;
        }
        public SucursalDto ObtenerInfo(int id) {
            return Convertidor.ASucursalDto(_context.AcSucursales.FirstOrDefault(x => x.Id == id));
        }
        public bool Crear(SucursalDto dto) {
            try
            {
                _context.AcSucursales.Add(Convertidor.ASucursal(dto));
                _context.SaveChanges();
                return true;
            }
            catch (Exception) {
                return false;
            }
        }
        public bool Actualizar(SucursalDto dto) {
            try
            {
                _context.AcSucursales.Update(Convertidor.ASucursal(dto));
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Borrar(int id) {
            var sucursal = _context.AcSucursales.FirstOrDefault(x => x.Id == id);
            try
            {
                _context.AcSucursales.Remove(sucursal);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}