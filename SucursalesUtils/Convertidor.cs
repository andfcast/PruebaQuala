using SucursalesEntities.DBEntities;
using SucursalesEntities.DTO;

namespace SucursalesUtils
{
    public static class Convertidor
    {
        public static AcSucursal ASucursal(SucursalDto dto) { 
            AcSucursal sucursal = new AcSucursal { 
                Id = dto.Id,
                Codigo = dto.Codigo,
                Descripcion = dto.Descripcion,
                Direccion = dto.Direccion,
                FechaCreacion = dto.FechaCreacion,
                Identificacion = dto.Identificacion,
                IdMoneda = dto.IdMoneda
            };
            return sucursal;
        }

        public static SucursalDto ASucursalDto(AcSucursal sucursal) {
            SucursalDto dto = new SucursalDto
            {
                Id = sucursal.Id,
                Codigo = sucursal.Codigo,
                Descripcion = sucursal.Descripcion,
                Direccion = sucursal.Direccion,
                FechaCreacion = sucursal.FechaCreacion,
                Identificacion = sucursal.Identificacion,
                IdMoneda = sucursal.IdMoneda
            };
            return dto;
        }
    }
}