﻿using SucursalesEntities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SucursalesDAL.Interface
{
    public interface ISucursalDAL
    {
        List<SucursalDto> Listar();
        SucursalDto ObtenerInfo(int id);
        bool Crear(SucursalDto dto);
        bool Actualizar(SucursalDto dto);
        bool Borrar(int id);
    }
}
