using SucursalesBL.Interface;
using SucursalesDAL.Interface;
using SucursalesEntities.DTO;

namespace SucursalesBL.Implementacion
{
    public class SucursalBL: ISucursalBL
    {
        private readonly ISucursalDAL _sucursalDAL;

        public SucursalBL(ISucursalDAL sucursalDAL)
        {
            _sucursalDAL = sucursalDAL;
        }

        public List<SucursalDto> Listar() {
            return _sucursalDAL.Listar();
        }

        public SucursalDto ObtenerInfo(int id) {
            return _sucursalDAL.ObtenerInfo(id);
        }
        public bool Crear(SucursalDto dto) { 
            return _sucursalDAL.Crear(dto);
        }
        public bool Actualizar(SucursalDto dto) {
            return _sucursalDAL.Actualizar(dto);
        }
        public bool Borrar(int id) {
            return _sucursalDAL.Borrar(id);
        }
    }
}