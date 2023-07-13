using SucursalesEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SucursalesDAL.Interface
{
    public interface IBasicoDAL
    {
        List<BasicoDto> ListarMonedas();
    }
}
