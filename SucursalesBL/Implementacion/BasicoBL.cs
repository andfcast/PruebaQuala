using SucursalesBL.Interface;
using SucursalesDAL.Interface;
using SucursalesEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SucursalesBL.Implementacion
{
    public  class BasicoBL : IBasicoBL
    {
        private readonly IBasicoDAL _basicoDAL;

        public BasicoBL(IBasicoDAL basicoDAL)
        {
            _basicoDAL = basicoDAL;
        }

        public List<BasicoDto> ListarMonedas() { 
            return _basicoDAL.ListarMonedas();
        }
    }
}
