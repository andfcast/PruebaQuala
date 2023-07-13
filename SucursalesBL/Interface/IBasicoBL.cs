using SucursalesEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SucursalesBL.Interface
{
    public interface IBasicoBL
    {
        List<BasicoDto> ListarMonedas();
    }
}
